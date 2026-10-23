import { createFileRoute } from "@tanstack/react-router";

import { redirectHandlers } from "@/lib/redirect-route";

export const Route = createFileRoute("/admin/insights")({
  server: { handlers: redirectHandlers("https://ops.snaptapp.us/admin/insights", 301) },
});
