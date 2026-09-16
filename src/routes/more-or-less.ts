import { createFileRoute } from "@tanstack/react-router";

import { redirectHandlers } from "@/lib/redirect-route";

export const Route = createFileRoute("/more-or-less")({
  server: { handlers: redirectHandlers("https://moreorless.snaptapp.us", 302) },
});
