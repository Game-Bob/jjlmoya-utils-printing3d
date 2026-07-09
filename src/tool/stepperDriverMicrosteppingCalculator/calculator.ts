export interface StepperCalculationInput {
  stepAngle: number;
  microsteps: number;
  transmissionMode: 'belt' | 'leadscrew';
  beltPitch: number;
  pulleyTeeth: number;
  leadScrewPitch: number;
  unitSystem: 'metric' | 'imperial';
}

export interface StepperCalculationResult {
  stepsPerUnit: number;
  mechanicalResolution: number;
}

export class StepperCalculator {
  public static calculate(input: StepperCalculationInput): StepperCalculationResult {
    const stepsPerRev = 360 / input.stepAngle;
    const microstepsPerRev = stepsPerRev * input.microsteps;
    let distPerRevMm = 0;
    if (input.transmissionMode === 'belt') {
      distPerRevMm = input.beltPitch * input.pulleyTeeth;
    } else {
      distPerRevMm = input.leadScrewPitch;
    }

    if (distPerRevMm <= 0) {
      return { stepsPerUnit: 0, mechanicalResolution: 0 };
    }

    if (input.unitSystem === 'imperial') {
      const distPerRevIn = distPerRevMm / 25.4;
      const stepsPerInch = microstepsPerRev / distPerRevIn;
      const resolutionThou = (distPerRevIn / microstepsPerRev) * 1000;
      return {
        stepsPerUnit: stepsPerInch,
        mechanicalResolution: resolutionThou,
      };
    }

    const stepsPerMm = microstepsPerRev / distPerRevMm;
    const resolutionMicrons = (distPerRevMm / microstepsPerRev) * 1000;
    return {
      stepsPerUnit: stepsPerMm,
      mechanicalResolution: resolutionMicrons,
    };
  }
}
