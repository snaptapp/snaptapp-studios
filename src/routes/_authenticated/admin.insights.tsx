import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { checkAdmin, summarizeInsights } from "@/lib/insights.functions";

export const Route = createFileRoute("/_authenticated/admin/insights")({
  head: () => ({
    meta: [
      { title: "Placement insights — Snaptapp admin" },
      { name: "description", content: "AI summary of click trends by placement for the Snaptapp site." },
      { property: "og:title", content: "Placement insights — Snaptapp admin" },
      { property: "og:description", content: "AI summary of click trends by placement." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: InsightsPage,
});

type Row = { event: "cta_click" | "outbound_click"; location: string; count: string };

const DEFAULT_ROWS: Row[] = [
  { event: "outbound_click", location: "header", count: "" },
  { event: "outbound_click", location: "hero", count: "" },
  { event: "outbound_click", location: "product_card", count: "" },
  { event: "outbound_click", location: "footer", count: "" },
  { event: "cta_click", location: "hero", count: "" },
  { event: "cta_click", location: "products_section", count: "" },
  { event: "cta_click", location: "footer_cta", count: "" },
];

function daysAgo(n: number) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().slice(0, 10);
}

function InsightsPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const check = useServerFn(checkAdmin);
  const summarize = useServerFn(summarizeInsights);
  const admin = useQuery({ queryKey: ["is-admin"], queryFn: () => check() });

  const [startDate, setStart] = useState(daysAgo(28));
  const [endDate, setEnd] = useState(daysAgo(0));
  const [rows, setRows] = useState<Row[]>(DEFAULT_ROWS);
  const [notes, setNotes] = useState("");
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  function update(i: number, patch: Partial<Row>) {
    setRows((r) => r.map((row, j) => (j === i ? { ...row, ...patch } : row)));
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    const filled = rows
      .filter((r) => r.location.trim() && r.count !== "")
      .map((r) => ({ event: r.event, location: r.location.trim(), count: Number(r.count) }));
    if (!filled.length) return setError("Enter at least one click count.");
    if (startDate > endDate) return setError("Start date must be before end date.");
    setBusy(true);
    setError(null);
    setSummary(null);
    try {
      const res = await summarize({ data: { startDate, endDate, rows: filled, notes: notes || undefined } });
      setSummary(res.summary);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  if (admin.isLoading) return <main className="section"><div className="shell">Checking access…</div></main>;
  if (!admin.data?.isAdmin)
    return (
      <main className="section">
        <div className="shell admin-narrow">
          <h1>Admins only</h1>
          <p>Your account doesn't have admin access yet. Ask the site owner to approve it.</p>
          <button className="btn btn--ghost" type="button" onClick={signOut}>Sign out</button>
        </div>
      </main>
    );

  return (
    <main id="main" className="section">
      <div className="shell">
        <div className="section-head">
          <h1>Placement insights</h1>
          <button className="btn btn--ghost btn--sm" type="button" onClick={signOut}>Sign out</button>
        </div>
        <p>Paste click counts from Google Analytics for a date range, and Lovable AI will summarize trends and suggest which placements to improve.</p>

        <form className="admin-form" onSubmit={submit}>
          <div className="admin-row">
            <label>Start date<input type="date" value={startDate} onChange={(e) => setStart(e.target.value)} required /></label>
            <label>End date<input type="date" value={endDate} onChange={(e) => setEnd(e.target.value)} required /></label>
          </div>

          <table className="admin-table">
            <thead><tr><th>Event</th><th>Placement</th><th>Clicks</th><th></th></tr></thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td>
                    <select value={r.event} onChange={(e) => update(i, { event: e.target.value as Row["event"] })}>
                      <option value="outbound_click">Game link</option>
                      <option value="cta_click">Button (CTA)</option>
                    </select>
                  </td>
                  <td><input value={r.location} onChange={(e) => update(i, { location: e.target.value })} /></td>
                  <td><input type="number" min={0} value={r.count} onChange={(e) => update(i, { count: e.target.value })} /></td>
                  <td>
                    <button className="btn btn--ghost btn--sm" type="button" onClick={() => setRows(rows.filter((_, j) => j !== i))}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            <button className="btn btn--ghost btn--sm" type="button" onClick={() => setRows([...rows, { event: "cta_click", location: "", count: "" }])}>
              Add row
            </button>
          </p>

          <label>Notes (optional)<textarea rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="e.g. homepage redesign shipped mid-range" /></label>

          <button className="btn btn--primary" type="submit" disabled={busy}>{busy ? "Analysing…" : "Summarize trends"}</button>
        </form>

        {error && <p role="alert">{error}</p>}
        {summary && (
          <article className="card admin-summary">
            <h2>Summary</h2>
            <div className="prose">{summary.split("\n").map((l, i) => <p key={i}>{l}</p>)}</div>
          </article>
        )}
      </div>
    </main>
  );
}
