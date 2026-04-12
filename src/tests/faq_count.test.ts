import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import type { ToolLocaleContent } from '../types';

describe('FAQ Content Validation', () => {
  ALL_TOOLS.forEach((tool) => {
    describe(`Tool: ${tool.entry.id}`, () => {
      Object.keys(tool.entry.i18n).forEach((locale) => {
        it(`should have at least 3 FAQ items for ${locale}`, async () => {
          const loader = tool.entry.i18n[locale as keyof typeof tool.entry.i18n];
          const content = (await loader?.()) as ToolLocaleContent;
          expect(content.faq.length).toBeGreaterThanOrEqual(3);
        });
      });
    });
  });

  it('should have 4 tools registered', () => {
    expect(ALL_TOOLS.length).toBe(4);
  });
});
