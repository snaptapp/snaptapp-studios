import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ADMIN_EMAIL_DOMAIN, createAdminAccount } from "@/lib/admin-signup.functions";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Admin sign-in — Snaptapp" },
      { name: "description", content: "Sign in to the Snaptapp studio admin area." },
      { property: "og:title", content: "Admin sign-in — Snaptapp" },
      { property: "og:description", content: "Sign in to the Snaptapp studio admin area." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  validateSearch: (s: Record<string, unknown>): { next?: string | undefined } => ({
    next: typeof s.next === "string" && s.next.startsWith("/") && !s.next.startsWith("//") ? s.next : undefined,
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const { next } = Route.useSearch();
  const [mode, setMode] = useState<"in" | "up">("in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    if (mode === "in") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setBusy(false);
      if (error) return setMsg(error.message);
      if (next) window.location.assign(next);
      else navigate({ to: "/admin/insights/" });
    } else {
      if (email.trim().toLowerCase().split("@")[1] !== ADMIN_EMAIL_DOMAIN) {
        setBusy(false);
        return setMsg(`Accounts are limited to @${ADMIN_EMAIL_DOMAIN} email addresses.`);
      }
      const result = await createAdminAccount({ data: { email, password } });
      setBusy(false);
      setMsg(result.message);
      if (result.ok) setMode("in");
    }
  }

  return (
    <main id="main" className="section">
      <div className="shell admin-narrow">
        <h1>{mode === "in" ? "Admin sign-in" : "Create admin account"}</h1>
        {mode === "up" && <p>Only @{ADMIN_EMAIL_DOMAIN} email addresses can create an account.</p>}
        <form className="admin-form" onSubmit={submit}>
          <label>
            Email
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Password
            <input
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="btn btn--primary" type="submit" disabled={busy}>
            {busy ? "Please wait…" : mode === "in" ? "Sign in" : "Create account"}
          </button>
          {msg && <p role="status">{msg}</p>}
        </form>
        <p>
          <button className="btn btn--ghost btn--sm" type="button" onClick={() => setMode(mode === "in" ? "up" : "in")}>
            {mode === "in" ? "Need an account? Create one" : "Have an account? Sign in"}
          </button>
        </p>
      </div>
    </main>
  );
}
