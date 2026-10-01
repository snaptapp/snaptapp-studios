import { z } from "zod";
import { ToolError } from "@lovable.dev/mcp-js";
import { defineAppTool } from "../context";

export const summarizeInsightsTool = defineAppTool({
  name: "summarize_click_insights",
  title: "Summarize click placements",
  description:
    "Admins only. Given a date range and click counts per placement, return an AI summary of trends, the weakest placements, and recommendations.",
  inputSchema: {
    start_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).describe("Range start, YYYY-MM-DD."),
    end_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).describe("Range end, YYYY-MM-DD."),
    rows: z
      .array(
        z.object({
          event: z.enum(["cta_click", "outbound_click"]).describe("Analytics event name."),
          location: z.string().trim().min(1).max(60).describe("Placement, e.g. 'hero' or 'footer'."),
          count: z.number().int().min(0).describe("Clicks in the range."),
        })
      )
      .min(1)
      .max(60)
      .describe("Click counts per event and placement."),
    notes: z.string().trim().max(500).optional().describe("Extra context for the summary."),
  },
  annotations: { readOnlyHint: true, idempotentHint: false, openWorldHint: true },
  enabled: ({ appContext }) => appContext.isAdmin,
  handler: async ({ start_date, end_date, rows, notes }, ctx) => {
    if (!ctx.appContext.isAdmin) throw new ToolError("Admin access is required for this tool.");
    const { summarizePlacements } = await import("../../insights.server");
    await ctx.progress({ progress: 1, total: 2, message: "Summarizing placements" });
    const summary = await summarizePlacements({
      startDate: start_date,
      endDate: end_date,
      rows: rows.map((row) => ({ event: row.event, location: row.location, count: row.count })),
      notes,
    });
    await ctx.progress({ progress: 2, total: 2, message: "Done" });
    return {
      content: [{ type: "text" as const, text: summary }],
      structuredContent: { startDate: start_date, endDate: end_date, summary },
    };
  },
});
