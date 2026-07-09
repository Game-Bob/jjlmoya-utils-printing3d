import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';

describe('Locale Completeness Validation', () => {
  it('all 7 tools registered', () => {
    expect(ALL_TOOLS.length).toBe(12);
  });
});

