export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { PRINTING_COST_CALCULATOR_TOOL } from './tool/printingCostCalculator';
import { SHRINKAGE_CALCULATOR_TOOL } from './tool/shrinkageCalculator';
import { FLOW_CALCULATOR_TOOL } from './tool/flowCalculator';
import { RESIN_CURING_CALCULATOR_TOOL } from './tool/resinCuringCalculator';

export const ALL_TOOLS: ToolDefinition[] = [
  PRINTING_COST_CALCULATOR_TOOL,
  SHRINKAGE_CALCULATOR_TOOL,
  FLOW_CALCULATOR_TOOL,
  RESIN_CURING_CALCULATOR_TOOL,
];

