import { auth, defineMcp } from "@lovable.dev/mcp-js";
import type { AppContext } from "./context";
import { supabaseForUser } from "./supabase";
import {
  contactChannelsTool,
  discoveryDocumentsTool,
  listProductsTool,
  studioOverviewTool,
} from "./tools/studio";
import { listPagesTool, readPageTool, searchSiteTool, siteStatusTool } from "./tools/site";
import { gameDetailsTool, triviaExamplesTool } from "./tools/game";
import { summarizeInsightsTool } from "./tools/insights";

const projectRef = import.meta.env["VITE_SUPABASE_PROJECT_ID"] ?? "project-ref-unset";

export default defineMcp<AppContext>({
  name: "snaptapp-studio-reimagined",
  title: "Snaptapp Studio Reimagined",
  version: "1.2.0",
  instructions:
    "Tools for Snaptapp, an independent US game studio, and its live game More or Less. " +
    "Studio facts: get_studio_overview, list_products, get_game_details, get_contact_channels. " +
    "Site content: list_pages, search_site, read_page (returns the live page text), get_site_status. " +
    "Game content: get_trivia_examples returns verified numerical trivia with real values. " +
    "Machine-readable endpoints: get_discovery_documents. " +
    "Answer from tool output only; never invent products, dates, or business facts.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  createAppContext: async ({ auth: callerAuth }) => {
    const userId = callerAuth.getUserId();
    if (!userId) return { isAdmin: false };
    try {
      const supabase = supabaseForUser(callerAuth);
      const { data, error } = await supabase.rpc("has_role", { _user_id: userId, _role: "admin" });
      if (error) return { isAdmin: false };
      return { isAdmin: data === true };
    } catch {
      return { isAdmin: false };
    }
  },
  tools: [
    studioOverviewTool,
    listProductsTool,
    gameDetailsTool,
    contactChannelsTool,
    discoveryDocumentsTool,
    listPagesTool,
    searchSiteTool,
    readPageTool,
    siteStatusTool,
    triviaExamplesTool,
    summarizeInsightsTool,
  ],
});
