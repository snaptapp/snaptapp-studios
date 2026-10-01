import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { ORIGIN, SITE_PAGES } from "../site-content";

const readHints = { readOnlyHint: true, idempotentHint: true, openWorldHint: false };

export const listPagesTool = defineTool({
  name: "list_pages",
  title: "List site pages",
  description:
    "List every public page on snaptapp.us with its path, title, and a summary of what the page covers. Use this to decide which page to read.",
  inputSchema: {},
  annotations: readHints,
  handler: () => {
    const pages = SITE_PAGES.map((page) => ({
      url: `${ORIGIN}${page.path}`,
      path: page.path,
      title: page.title,
      summary: page.summary,
    }));
    return {
      content: [{ type: "text" as const, text: JSON.stringify({ pages }, null, 2) }],
      structuredContent: { pages },
    };
  },
});

export const searchSiteTool = defineTool({
  name: "search_site",
  title: "Search site pages",
  description:
    "Search the studio site's pages by keyword and return the matching pages ranked by relevance, with title, summary, and URL.",
  inputSchema: {
    query: z.string().trim().min(2).max(120).describe("Words to search for, e.g. 'data deletion' or 'game modes'."),
    limit: z.number().int().min(1).max(10).optional().describe("Maximum number of pages to return (default 5)."),
  },
  annotations: readHints,
  handler: ({ query, limit }) => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    const scored = SITE_PAGES.map((page) => {
      const haystack = `${page.title} ${page.summary} ${page.keywords.join(" ")} ${page.path}`.toLowerCase();
      const score = terms.reduce((total, term) => total + (haystack.includes(term) ? 1 : 0), 0);
      return { page, score };
    })
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit ?? 5)
      .map(({ page, score }) => ({
        url: `${ORIGIN}${page.path}`,
        path: page.path,
        title: page.title,
        summary: page.summary,
        matchedTerms: score,
      }));

    const results = { query, matches: scored };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(results, null, 2) }],
      structuredContent: results,
    };
  },
});

function htmlToText(html: string): string {
  const body = html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ");
  const main = body.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? body;
  return main
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

export const readPageTool = defineTool({
  name: "read_page",
  title: "Read a site page",
  description:
    "Fetch a public page of snaptapp.us and return its readable text, so answers quote the live copy instead of guessing. Use list_pages or search_site to find the path.",
  inputSchema: {
    path: z
      .string()
      .trim()
      .regex(/^\/[A-Za-z0-9/_-]*$/, "Path must start with / and contain no query string.")
      .max(120)
      .describe("Site path, e.g. '/support/' or '/legal/privacy/'."),
    max_characters: z
      .number()
      .int()
      .min(500)
      .max(20000)
      .optional()
      .describe("Truncate the returned text at this length (default 8000)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: async ({ path, max_characters }, ctx) => {
    const known = SITE_PAGES.some((page) => page.path === path || page.path === `${path}/`);
    if (!known) {
      throw new ToolError(`Unknown page path: ${path}. Call list_pages for the available paths.`);
    }
    const response = await fetch(`${ORIGIN}${path}`, {
      headers: { Accept: "text/html" },
      signal: ctx.signal,
      redirect: "follow",
    });
    if (!response.ok) {
      throw new ToolError(`snaptapp.us returned HTTP ${response.status} for ${path}.`);
    }
    const html = await response.text();
    const limit = max_characters ?? 8000;
    const full = htmlToText(html);
    const result = {
      url: `${ORIGIN}${path}`,
      characters: full.length,
      truncated: full.length > limit,
      text: full.slice(0, limit),
    };
    return {
      content: [{ type: "text" as const, text: result.text }],
      structuredContent: result,
    };
  },
});

export const siteStatusTool = defineTool({
  name: "get_site_status",
  title: "Site status",
  description: "Check that snaptapp.us is responding by reading its health endpoint, and return the live status payload.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: false, openWorldHint: true },
  handler: async (_args, ctx) => {
    const response = await fetch(`${ORIGIN}/api/health`, { headers: { Accept: "application/json" }, signal: ctx.signal });
    const raw = await response.text();
    let payload: unknown = raw;
    try {
      payload = JSON.parse(raw) as unknown;
    } catch {
      // Keep the raw body when the endpoint returns non-JSON.
    }
    const result = { httpStatus: response.status, ok: response.ok, payload: JSON.stringify(payload) };
    return {
      content: [{ type: "text" as const, text: `HTTP ${response.status}\n${raw}` }],
      structuredContent: result,
    };
  },
});
