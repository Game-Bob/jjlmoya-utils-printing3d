export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { PRINTING_COST_CALCULATOR_TOOL } from './tool/printingCostCalculator';
import { SHRINKAGE_CALCULATOR_TOOL } from './tool/shrinkageCalculator';
import { FLOW_CALCULATOR_TOOL } from './tool/flowCalculator';
import { RESIN_CURING_CALCULATOR_TOOL } from './tool/resinCuringCalculator';
import { POWER_SUPPLY_ESTIMATOR_TOOL } from './tool/powerSupplyEstimator';
import { COREXY_BELT_TENSION_ESTIMATOR_TOOL } from './tool/coreXYBeltTensionEstimator';

export const ALL_TOOLS: ToolDefinition[] = [
  PRINTING_COST_CALCULATOR_TOOL,
  SHRINKAGE_CALCULATOR_TOOL,
  FLOW_CALCULATOR_TOOL,
  RESIN_CURING_CALCULATOR_TOOL,
  POWER_SUPPLY_ESTIMATOR_TOOL,
  COREXY_BELT_TENSION_ESTIMATOR_TOOL,
];
