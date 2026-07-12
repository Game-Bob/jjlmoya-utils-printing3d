export type KinematicType = 'cartesian' | 'corexy' | 'delta';
export type RigidityLevel = 'low' | 'medium' | 'high';
export type FirmwareFlavor = 'klipper' | 'marlin';

export interface KinematicRingingParams {
  toolheadMassG: number;
  bedMassG: number;
  targetSpeedMmS: number;
  kinematicType: KinematicType;
  rigidityLevel: RigidityLevel;
  firmware: FirmwareFlavor;
  safetyCoefficientOverride?: number;
  includeMaxAccelToDecel?: boolean;
  noteTemplate?: string;
}

export interface KinematicRingingResult {
  recommendedAccelerationMmS2: number;
  theoreticalAccelerationMmS2: number;
  transitionLimitMmS: number;
  movingMassG: number;
  limitingAxis: 'xy-gantry' | 'x-toolhead-y-bed' | 'delta-effector';
  safetyCoefficient: number;
  ringingRisk: 'low' | 'moderate' | 'high';
  note: string;
  firmwareText: string;
  configText: string;
}

const MOTOR_FORCE_N = 2.2;
const CARTESIAN_BED_LOAD_FACTOR = 0.55;
const COREXY_SHARED_BELT_FACTOR = 1.18;
const DELTA_EFFECTOR_FACTOR = 0.82;

const rigiditySafety: Record<RigidityLevel, number> = {
  low: 0.68,
  medium: 0.74,
  high: 0.8,
};

const transitionFactor: Record<RigidityLevel, number> = {
  low: 0.0032,
  medium: 0.0041,
  high: 0.005,
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const movingMass = (params: KinematicRingingParams) => {
  const toolhead = Math.max(params.toolheadMassG, 1);
  const bed = Math.max(params.bedMassG, 1);

  if (params.kinematicType === 'cartesian') {
    return {
      massG: Math.max(toolhead, bed * CARTESIAN_BED_LOAD_FACTOR),
      axis: 'x-toolhead-y-bed' as const,
    };
  }

  if (params.kinematicType === 'corexy') {
    return {
      massG: toolhead * COREXY_SHARED_BELT_FACTOR,
      axis: 'xy-gantry' as const,
    };
  }

  return {
    massG: toolhead * DELTA_EFFECTOR_FACTOR,
    axis: 'delta-effector' as const,
  };
};

const riskFromAcceleration = (acceleration: number, massG: number): KinematicRingingResult['ringingRisk'] => {
  const impulse = acceleration * (massG / 1000);
  if (impulse > 7.2) return 'high';
  if (impulse > 4.6) return 'moderate';
  return 'low';
};

const makeConfigText = (params: KinematicRingingParams, acceleration: number, transitionLimit: number) => {
  const roundedAcceleration = Math.round(acceleration);
  const maxAccelToDecel = Math.round(acceleration * 0.5);

  if (params.firmware === 'klipper') {
    const decelLine = params.includeMaxAccelToDecel ? `\nmax_accel_to_decel: ${maxAccelToDecel}` : '';
    return `[printer]\nmax_accel: ${roundedAcceleration}${decelLine}\nsquare_corner_velocity: ${transitionLimit.toFixed(1)}`;
  }

  return `DEFAULT_MAX_ACCELERATION ${roundedAcceleration}\nDEFAULT_XJERK ${transitionLimit.toFixed(1)}\nDEFAULT_YJERK ${transitionLimit.toFixed(1)}`;
};

const safetyCoefficient = (params: KinematicRingingParams) => (
  params.safetyCoefficientOverride
    ? clamp(params.safetyCoefficientOverride, 0.5, 0.95)
    : rigiditySafety[params.rigidityLevel]
);

const recommendationNote = (template: string | undefined, massG: number, acceleration: number, limitName: string) => {
  const fallback = 'With {mass} g of effective moving mass, this setup should stay near {acceleration} mm/s2 before raising {limitName}. Higher values can amplify ringing unless input shaping and frame stiffness are verified.';
  return (template || fallback)
    .replace('{mass}', `${Math.round(massG)}`)
    .replace('{acceleration}', `${Math.round(acceleration)}`)
    .replace('{limitName}', limitName);
};

export const calculateKinematicRinging = (params: KinematicRingingParams): KinematicRingingResult => {
  const targetSpeedMmS = clamp(params.targetSpeedMmS || 1, 1, 600);
  const mass = movingMass(params);
  const massKg = mass.massG / 1000;
  const theoreticalAccelerationMmS2 = (MOTOR_FORCE_N / massKg) * 1000;
  const coefficient = safetyCoefficient(params);
  const speedPenalty = clamp(1 - Math.max(targetSpeedMmS - 120, 0) / 900, 0.78, 1);
  const recommendedAccelerationMmS2 = clamp(theoreticalAccelerationMmS2 * coefficient * speedPenalty, 500, 20000);
  const transitionLimitMmS = clamp(Math.sqrt(recommendedAccelerationMmS2) * transitionFactor[params.rigidityLevel], 3, 24);
  const ringingRisk = riskFromAcceleration(recommendedAccelerationMmS2, mass.massG);
  const limitName = params.firmware === 'klipper' ? 'square_corner_velocity' : 'jerk';
  const firmwareText = params.firmware === 'klipper' ? 'Square Corner Velocity' : 'Jerk';

  return {
    recommendedAccelerationMmS2,
    theoreticalAccelerationMmS2,
    transitionLimitMmS,
    movingMassG: mass.massG,
    limitingAxis: mass.axis,
    safetyCoefficient: coefficient,
    ringingRisk,
    note: recommendationNote(params.noteTemplate, mass.massG, recommendedAccelerationMmS2, limitName),
    firmwareText,
    configText: makeConfigText(params, recommendedAccelerationMmS2, transitionLimitMmS),
  };
};
