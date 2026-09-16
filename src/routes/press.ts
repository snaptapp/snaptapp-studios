import { createFileRoute } from "@tanstack/react-router";

import { redirectHandlers } from "@/lib/redirect-route";

export const Route = createFileRoute("/press")({
  server: { handlers: redirectHandlers("/contact/", 301) },
});
