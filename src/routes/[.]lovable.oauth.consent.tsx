import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type OAuthResult = { data: any; error: { message: string } | null };
const oauth = (supabase.auth as unknown as {
  oauth: {
    getAuthorizationDetails: (id: string) => Promise<OAuthResult>;
    approveAuthorization: (id: string) => Promise<OAuthResult>;
    denyAuthorization: (id: string) => Promise<OAuthResult>;
  };
}).oauth;

export const Route = createFileRoute("/.lovable/oauth/consent")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Connect an app — Snaptapp" },
      { name: "description", content: "Approve or deny an app's access to your Snaptapp account." },
      { property: "og:title", content: "Connect an app — Snaptapp" },
      { property: "og:description", content: "Approve or deny an app's access to your Snaptapp account." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  validateSearch: (s: Record<string, unknown>) => ({
    authorization_id: typeof s.authorization_id === "string" ? s.authorization_id : "",
  }),
  beforeLoad: async ({ search, location }) => {
    if (!search.authorization_id) throw new Error("Missing authorization_id");
    const { data } = await supabase.auth.getSession();
    if (!data.session) throw redirect({ to: "/auth/", search: { next: location.pathname + location.searchStr } });
  },
  loader: async ({ location }) => {
    const id = new URLSearchParams(location.search).get("authorization_id")!;
    const { data, error } = await oauth.getAuthorizationDetails(id);
    if (error) throw new Error(error.message);
    const immediate = data?.redirect_url ?? data?.redirect_to;
    if (immediate && !data?.client) throw redirect({ href: immediate });
    return data;
  },
  component: Consent,
  errorComponent: ({ error }) => (
    <main id="main" className="section">
      <div className="shell admin-narrow">
        <p role="alert">Could not load this authorization request: {String((error as Error)?.message ?? error)}</p>
      </div>
    </main>
  ),
});

function Consent() {
  const details = Route.useLoaderData();
  const { authorization_id } = Route.useSearch();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const client = details?.client?.name ?? "an app";

  async function decide(approve: boolean) {
    setBusy(true);
    const { data, error } = approve
      ? await oauth.approveAuthorization(authorization_id)
      : await oauth.denyAuthorization(authorization_id);
    const target = data?.redirect_url ?? data?.redirect_to;
    if (error || !target) {
      setBusy(false);
      setError(error?.message ?? "No redirect returned by the authorization server.");
      return;
    }
    window.location.href = target;
  }

  return (
    <main id="main" className="section">
      <div className="shell admin-narrow">
        <h1>Connect {client} to Snaptapp</h1>
        <p>{client} will be able to call this site's studio tools while you are signed in.</p>
        <p>This does not bypass this app's permissions or backend policies.</p>
        {error && <p role="alert">{error}</p>}
        <p>
          <button className="btn btn--primary" disabled={busy} onClick={() => decide(true)}>Approve</button>{" "}
          <button className="btn btn--ghost" disabled={busy} onClick={() => decide(false)}>Cancel connection</button>
        </p>
      </div>
    </main>
  );
}
