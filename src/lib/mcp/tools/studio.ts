import { defineTool, ToolError } from "@lovable.dev/mcp-js";

type ToolName = "get_studio_overview" | "list_products" | "get_contact_channels" | "get_discovery_documents";

async function run(name: ToolName) {
  const { callTool } = await import("../../site-api.server");
  const value = callTool(name);
  if (!value) throw new ToolError(`Unknown tool: ${name}`);
  return { content: [{ type: "text" as const, text: JSON.stringify(value, null, 2) }] };
}

const hints = { readOnlyHint: true, idempotentHint: true, openWorldHint: false };

export const studioOverviewTool = defineTool({
  name: "get_studio_overview",
  title: "Studio overview",
  description: "Return a short overview of Snaptapp: what the studio is, when it was founded, and how to reach it.",
  inputSchema: {},
  annotations: hints,
  handler: () => run("get_studio_overview"),
});

export const listProductsTool = defineTool({
  name: "list_products",
  title: "List products",
  description: "List Snaptapp products with status, platforms, and canonical URLs.",
  inputSchema: {},
  annotations: hints,
  handler: () => run("list_products"),
});

export const contactChannelsTool = defineTool({
  name: "get_contact_channels",
  title: "Contact channels",
  description: "Return Snaptapp email channels for press, licensing, support, privacy, security, and legal.",
  inputSchema: {},
  annotations: hints,
  handler: () => run("get_contact_channels"),
});

export const discoveryDocumentsTool = defineTool({
  name: "get_discovery_documents",
  title: "Discovery documents",
  description: "List machine-readable discovery URLs on snaptapp.us (API catalog, OpenAPI, MCP, OAuth, skills).",
  inputSchema: {},
  annotations: hints,
  handler: () => run("get_discovery_documents"),
});
