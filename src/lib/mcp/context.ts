import { defineTool } from "@lovable.dev/mcp-js";

export interface AppContext {
  /** True when the signed-in caller holds the admin role in the app database. */
  readonly isAdmin: boolean;
}

export const defineAppTool = defineTool.withAppContext<AppContext>();
