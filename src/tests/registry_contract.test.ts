import { describe, expect, it } from 'vitest';
import { existsSync, readdirSync } from 'fs';
import { join } from 'path';
import { pathToFileURL } from 'url';
import { ALL_ENTRIES } from '../entries';
import { ALL_TOOLS } from '../tools';
import type { ToolDefinition } from '../types';

function isToolDefinition(value: unknown): value is ToolDefinition {
  if (!value || typeof value !== 'object') return false;

  const candidate = value as Record<string, unknown>;
  return Boolean(
    candidate.entry &&
      typeof candidate.entry === 'object' &&
      typeof candidate.Component === 'function' &&
      typeof candidate.SEOComponent === 'function' &&
      typeof candidate.BibliographyComponent === 'function',
  );
}

const toolRoot = join(process.cwd(), 'src', 'tool');
const toolDirectories = readdirSync(toolRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && existsSync(join(toolRoot, entry.name, 'index.ts')))
  .map((entry) => entry.name)
  .sort();

describe('Library registry contract', () => {
  it('keeps ALL_ENTRIES and ALL_TOOLS synchronized by id', () => {
    const entryIds = ALL_ENTRIES.map((entry) => entry.id);
    const toolIds = ALL_TOOLS.map((tool) => tool.entry.id);

    expect(new Set(entryIds).size).toBe(entryIds.length);
    expect(new Set(toolIds).size).toBe(toolIds.length);
    expect([...toolIds].sort()).toEqual([...entryIds].sort());
  });

  it('registers every tool runtime index in both public registries', async () => {
    const failures: string[] = [];

    for (const directory of toolDirectories) {
      const runtimeModule = await import(
        pathToFileURL(join(toolRoot, directory, 'index.ts')).href,
      );
      const definitions = [...new Set(Object.values(runtimeModule).filter(isToolDefinition))];

      if (definitions.length !== 1) {
        failures.push(`${directory}: expected exactly one ToolDefinition export, found ${definitions.length}`);
        continue;
      }

      const [definition] = definitions;
      if (!ALL_TOOLS.some((tool) => tool.entry.id === definition.entry.id)) {
        failures.push(`${directory}: runtime definition is missing from ALL_TOOLS`);
      }
      if (!ALL_ENTRIES.some((entry) => entry.id === definition.entry.id)) {
        failures.push(`${directory}: runtime entry is missing from ALL_ENTRIES`);
      }
    }

    expect(failures).toEqual([]);
  });
});
