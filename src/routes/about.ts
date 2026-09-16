import { createFileRoute } from "@tanstack/react-router";

import { redirectHandlers } from "@/lib/redirect-route";

export const Route = createFileRoute("/about")({
  server: { handlers: redirectHandlers("/company/", 301) },
});
