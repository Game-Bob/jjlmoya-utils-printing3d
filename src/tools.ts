export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { PRINTING_COST_CALCULATOR_TOOL } from './tool/printingCostCalculator';
import { SHRINKAGE_CALCULATOR_TOOL } from './tool/shrinkageCalculator';
import { FLOW_CALCULATOR_TOOL } from './tool/flowCalculator';
import { RESIN_CURING_CALCULATOR_TOOL } from './tool/resinCuringCalculator';
import { POWER_SUPPLY_ESTIMATOR_TOOL } from './tool/powerSupplyEstimator';
import { COREXY_BELT_TENSION_ESTIMATOR_TOOL } from './tool/coreXYBeltTensionEstimator';
import { RAINBOW_FILAMENT_GRADIENT_CALCULATOR_TOOL } from './tool/rainbowFilamentGradientCalculator';
import { CHEMICAL_SMOOTHING_TIME_SIMULATOR_TOOL } from './tool/chemicalSmoothingTimeSimulator';
import { BED_THERMAL_INERTIA_STABILIZATION_CALCULATOR_TOOL } from './tool/bedThermalInertiaStabilizationCalculator';
import { TREE_SUPPORT_DENSITY_CALCULATOR_TOOL } from './tool/treeSupportDensityCalculator';
import { STEPPER_DRIVER_MICROSTEPPING_CALCULATOR_TOOL } from './tool/stepperDriverMicrosteppingCalculator';
import { PEI_SHEET_LIFESPAN_ESTIMATOR_TOOL } from './tool/peiSheetLifespanEstimator';
import { INFILL_WEIGHT_SIMULATOR_TOOL } from './tool/infillWeightSimulator';
import { NOZZLE_WEAR_ESTIMATOR_TOOL } from './tool/nozzleWearEstimator';
import { MECHANICAL_AXIS_STRENGTH_ESTIMATOR_TOOL } from './tool/mechanicalAxisStrengthEstimator';
import { PRINT_TIME_WORKFLOW_OPTIMIZER_TOOL } from './tool/printTimeWorkflowOptimizer';
import { PRINT_DURATION_ESTIMATOR_TOOL } from './tool/printDurationEstimator';
import { RESIN_REAL_COST_CALCULATOR_TOOL } from './tool/resinRealCostCalculator';
import { RETRACTION_STRINGING_CALIBRATOR_TOOL } from './tool/retractionStringingCalibrator';
import { OVERHANG_SAFE_ANGLE_SIMULATOR_TOOL } from './tool/overhangSafeAngleSimulator';
import { BED_MESH_ANALYZER_TOOL } from './tool/bedMeshAnalyzer';
import { BRIDGING_OPTIMIZER_TOOL } from './tool/bridgingOptimizer';
import { BULK_FILAMENT_ROI_ESTIMATOR_TOOL } from './tool/bulkFilamentRoiEstimator';
import { WALL_PERIMETER_OPTIMIZER_TOOL } from './tool/wallPerimeterOptimizer';
import { WARPING_RISK_SIMULATOR_TOOL } from './tool/warpingRiskSimulator';
import { KINEMATIC_RINGING_CALCULATOR_TOOL } from './tool/kinematicRingingCalculator';

export const ALL_TOOLS: ToolDefinition[] = [
  PRINTING_COST_CALCULATOR_TOOL,
  SHRINKAGE_CALCULATOR_TOOL,
  FLOW_CALCULATOR_TOOL,
  RESIN_CURING_CALCULATOR_TOOL,
  POWER_SUPPLY_ESTIMATOR_TOOL,
  COREXY_BELT_TENSION_ESTIMATOR_TOOL,
  RAINBOW_FILAMENT_GRADIENT_CALCULATOR_TOOL,
  CHEMICAL_SMOOTHING_TIME_SIMULATOR_TOOL,
  BED_THERMAL_INERTIA_STABILIZATION_CALCULATOR_TOOL,
  TREE_SUPPORT_DENSITY_CALCULATOR_TOOL,
  STEPPER_DRIVER_MICROSTEPPING_CALCULATOR_TOOL,
  PEI_SHEET_LIFESPAN_ESTIMATOR_TOOL,
  INFILL_WEIGHT_SIMULATOR_TOOL,
  NOZZLE_WEAR_ESTIMATOR_TOOL,
  MECHANICAL_AXIS_STRENGTH_ESTIMATOR_TOOL,
  PRINT_TIME_WORKFLOW_OPTIMIZER_TOOL,
  PRINT_DURATION_ESTIMATOR_TOOL,
  RESIN_REAL_COST_CALCULATOR_TOOL,
  RETRACTION_STRINGING_CALIBRATOR_TOOL,
  OVERHANG_SAFE_ANGLE_SIMULATOR_TOOL,
  BED_MESH_ANALYZER_TOOL,
  BRIDGING_OPTIMIZER_TOOL,
  BULK_FILAMENT_ROI_ESTIMATOR_TOOL,
  WALL_PERIMETER_OPTIMIZER_TOOL,
  WARPING_RISK_SIMULATOR_TOOL,
  KINEMATIC_RINGING_CALCULATOR_TOOL,
];
