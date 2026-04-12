import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { printing3dCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 4 tools registered', () => {
      expect(ALL_TOOLS.length).toBe(4);
    });

    it('printing3dCategory should be defined', () => {
      expect(printing3dCategory).toBeDefined();
      expect(printing3dCategory.i18n).toBeDefined();
    });
  });
});

