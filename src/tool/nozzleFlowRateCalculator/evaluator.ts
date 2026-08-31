import type { NozzleFlowResult } from './logic';

export interface NozzleFlowEvaluation {
  stateClass: string;
  stateLabel: string;
  hint: string;
}

export function evaluateNozzleFlow(
  result: NozzleFlowResult,
  labels: { ready: string; watch: string; critical: string },
  hints: { ready: string; watch: string; critical: string },
): NozzleFlowEvaluation {
  const key = result.state;
  return {
    stateClass: `is-${key}`,
    stateLabel: labels[key],
    hint: hints[key],
  };
}
