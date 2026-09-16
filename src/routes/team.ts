import { createFileRoute } from "@tanstack/react-router";

import { redirectHandlers } from "@/lib/redirect-route";

export const Route = createFileRoute("/team")({
  server: { handlers: redirectHandlers("/company/", 301) },
});
