import { describe, expect, it } from 'vitest';
import {
  calculateInverseNozzleFlow,
  calculateNozzleFlow,
  convertFromMetric,
  convertToMetric,
  stadiumAreaMm2,
} from './logic';

describe('nozzle flow rate logic', () => {
  it('calculates stadium cross section', () => {
    expect(stadiumAreaMm2(0.48, 0.2)).toBeCloseTo(0.0874, 4);
  });

  it('calculates flow, safe speed and production speed', () => {
    const result = calculateNozzleFlow({
      nozzleDiameterMm: 0.4,
      lineWidthMm: 0.48,
      layerHeightMm: 0.2,
      speedMmPerSecond: 120,
      flowLimitMm3PerSecond: 15,
    });
    expect(result.requestedFlowMm3PerSecond).toBeCloseTo(10.49, 2);
    expect(result.safeSpeedMmPerSecond).toBeCloseTo(171.6, 1);
    expect(result.productionSpeedMmPerSecond).toBeCloseTo(145.9, 1);
    expect(result.state).toBe('ready');
  });

  it('flags high load and tall layers', () => {
    const result = calculateNozzleFlow({
      nozzleDiameterMm: 0.4,
      lineWidthMm: 0.8,
      layerHeightMm: 0.34,
      speedMmPerSecond: 180,
      flowLimitMm3PerSecond: 12,
    });
    expect(result.state).toBe('critical');
    expect(result.layerWarning).toBe(true);
  });

  it('keeps imperial conversion reversible', () => {
    const metric = convertToMetric(0.4, 'length', 'imperial');
    expect(metric).toBeCloseTo(10.16, 5);
    expect(convertFromMetric(metric, 'length', 'imperial')).toBeCloseTo(0.4, 5);
    expect(convertToMetric(1, 'flow', 'imperial')).toBeCloseTo(16387.064, 3);
  });

  it('suggests a maximum layer height for a target flow and speed', () => {
    const result = calculateInverseNozzleFlow({
      targetFlowMm3PerSecond: 15,
      desiredSpeedMmPerSecond: 120,
      lineWidthMm: 0.48,
      layerHeightMm: 0.2,
      solveFor: 'layer',
    });
    expect(result.possible).toBe(true);
    expect(result.suggestedMm).toBeCloseTo(0.301, 2);
  });

  it('suggests the line width needed for a target flow and speed', () => {
    const result = calculateInverseNozzleFlow({
      targetFlowMm3PerSecond: 15,
      desiredSpeedMmPerSecond: 120,
      lineWidthMm: 0.48,
      layerHeightMm: 0.2,
      solveFor: 'width',
    });
    expect(result.possible).toBe(true);
    expect(result.suggestedMm).toBeCloseTo(0.668, 2);
  });
});
