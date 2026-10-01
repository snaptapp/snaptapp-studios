import { auth, defineMcp } from "@lovable.dev/mcp-js";
import {
  contactChannelsTool,
  discoveryDocumentsTool,
  listProductsTool,
  studioOverviewTool,
} from "./tools/studio";

const projectRef = import.meta.env["VITE_SUPABASE_PROJECT_ID"] ?? "project-ref-unset";

export default defineMcp({
  name: "snaptapp-studio-reimagined",
  title: "Snaptapp Studio Reimagined",
  version: "1.1.0",
  instructions:
    "Snaptapp studio tools. Use get_studio_overview, list_products, get_contact_channels, and get_discovery_documents.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [studioOverviewTool, listProductsTool, contactChannelsTool, discoveryDocumentsTool],
});
