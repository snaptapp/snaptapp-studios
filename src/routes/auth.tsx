import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";

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
    next: safeNext(s.next),
  }),
  component: AuthPage,
});

function safeNext(v: unknown): string | undefined {
  if (typeof v !== "string" || !v.startsWith("/") || v.startsWith("//")) return undefined;
  if (/[\\\u0000-\u001f\u007f]/.test(v)) return undefined;
  return v;
}

function AuthPage() {
  const { next } = Route.useSearch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) return setMsg(error.message);
    const target = next ? new URL(next, window.location.origin) : null;
    if (target && target.origin === window.location.origin) window.location.assign(target.pathname + target.search + target.hash);
    else window.location.assign("https://ops.snaptapp.us/admin");
  }

  return (
    <main id="main" className="section">
      <div className="shell admin-narrow">
        <h1>Admin sign-in</h1>
        <p>New admin accounts are added by the studio owner.</p>
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
            {busy ? "Please wait…" : "Sign in"}
          </button>
          {msg && <p role="status">{msg}</p>}
        </form>
      </div>
    </main>
  );
}
