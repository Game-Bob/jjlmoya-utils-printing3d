export type TechnicalResinType = 'standard' | 'flexible' | 'tough' | 'castable' | 'burnout';
export type UvWavelength = '385' | '405';
export type CuringSafetyLevel = 'safe' | 'caution' | 'limit';

export interface TechnicalResinUvCuringParams {
  resinType: TechnicalResinType;
  wallThicknessMm: number;
  stationPowerW: number;
  wavelengthNm: UvWavelength;
}

export interface TechnicalResinUvCuringResult {
  recommendedMinutes: number;
  rawRecommendedMinutes: number;
  curingTemperatureC: number | null;
  optimalDistanceCm: number;
  maxSafeMinutes: number;
  safetyLevel: CuringSafetyLevel;
  degradationWarning: boolean;
  doseIndex: number;
  resinLabelKey: `${TechnicalResinType}Label`;
}

interface ResinProfile {
  baseMinutes: number;
  thicknessExponent: number;
  wavelength385Factor: number;
  wavelength405Factor: number;
  temperatureC: number | null;
  distanceCm: number;
  maxSafeMinutes: number;
  doseSensitivity: number;
}

const RESIN_PROFILES: Record<TechnicalResinType, ResinProfile> = {
  standard: {
    baseMinutes: 4.2,
    thicknessExponent: 0.82,
    wavelength385Factor: 0.92,
    wavelength405Factor: 1,
    temperatureC: null,
    distanceCm: 12,
    maxSafeMinutes: 14,
    doseSensitivity: 1,
  },
  flexible: {
    baseMinutes: 7.5,
    thicknessExponent: 0.9,
    wavelength385Factor: 0.96,
    wavelength405Factor: 1.08,
    temperatureC: 35,
    distanceCm: 14,
    maxSafeMinutes: 20,
    doseSensitivity: 0.82,
  },
  tough: {
    baseMinutes: 8.2,
    thicknessExponent: 0.95,
    wavelength385Factor: 0.9,
    wavelength405Factor: 1.02,
    temperatureC: 45,
    distanceCm: 13,
    maxSafeMinutes: 22,
    doseSensitivity: 1.08,
  },
  castable: {
    baseMinutes: 5.8,
    thicknessExponent: 0.76,
    wavelength385Factor: 0.88,
    wavelength405Factor: 1.12,
    temperatureC: null,
    distanceCm: 16,
    maxSafeMinutes: 12,
    doseSensitivity: 1.28,
  },
  burnout: {
    baseMinutes: 6.6,
    thicknessExponent: 0.8,
    wavelength385Factor: 0.9,
    wavelength405Factor: 1.1,
    temperatureC: 30,
    distanceCm: 16,
    maxSafeMinutes: 15,
    doseSensitivity: 1.2,
  },
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const round1 = (value: number) => Math.round(value * 10) / 10;

const getSafetyLevel = (limitRatio: number): CuringSafetyLevel => {
  if (limitRatio >= 1) return 'limit';
  if (limitRatio >= 0.82) return 'caution';
  return 'safe';
};

export const calculateTechnicalResinUvCuring = (
  params: TechnicalResinUvCuringParams,
): TechnicalResinUvCuringResult => {
  const resinType = params.resinType in RESIN_PROFILES ? params.resinType : 'standard';
  const profile = RESIN_PROFILES[resinType];
  const wallThicknessMm = clamp(params.wallThicknessMm, 0.4, 12);
  const stationPowerW = clamp(params.stationPowerW, 6, 120);
  const wavelengthFactor = params.wavelengthNm === '385' ? profile.wavelength385Factor : profile.wavelength405Factor;
  const thicknessFactor = Math.pow(wallThicknessMm / 2, profile.thicknessExponent);
  const powerFactor = Math.pow(40 / stationPowerW, 0.72);
  const rawRecommendedMinutes = round1(profile.baseMinutes * thicknessFactor * powerFactor * wavelengthFactor);
  const recommendedMinutes = round1(clamp(rawRecommendedMinutes, 1, profile.maxSafeMinutes));
  const limitRatio = rawRecommendedMinutes / profile.maxSafeMinutes;
  const safetyLevel = getSafetyLevel(limitRatio);
  const doseIndex = round1((recommendedMinutes / profile.maxSafeMinutes) * 100 * profile.doseSensitivity);

  return {
    recommendedMinutes,
    rawRecommendedMinutes,
    curingTemperatureC: profile.temperatureC,
    optimalDistanceCm: profile.distanceCm,
    maxSafeMinutes: profile.maxSafeMinutes,
    safetyLevel,
    degradationWarning: rawRecommendedMinutes > profile.maxSafeMinutes,
    doseIndex: clamp(doseIndex, 0, 140),
    resinLabelKey: `${resinType}Label`,
  };
};
