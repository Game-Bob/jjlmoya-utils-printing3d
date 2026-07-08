import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { printing3dCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 5 tools registered', () => {
      expect(ALL_TOOLS.length).toBe(5);
    });

    it('printing3dCategory should be defined', () => {
      expect(printing3dCategory).toBeDefined();
      expect(printing3dCategory.i18n).toBeDefined();
    });
  });
});

