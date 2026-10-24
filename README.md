# snaptapp.us — company site

The Snaptapp studio site. Static HTML served by a Cloudflare Worker using
[static assets](https://developers.cloudflare.com/workers/static-assets/) — no
build step, no framework, no extra npm dependencies. Pages come from the Asset
Worker. A small `main` script (`src/index.ts`) handles `/mcp`, `/api/health`,
and agent OAuth routes.

This is a **separate Worker** from the More or Less game worker at the repo root
(`../wrangler.jsonc`). Deploying one never touches the other.

```text
snaptapp-site/
├── wrangler.jsonc              # Worker name + assets + MCP/OAuth routes
├── src/index.ts                # /mcp, /api/health, /oauth/authorize, /oauth2/*, /agent/*
├── public/                     # static pages and well-known discovery docs
│   ├── index.html              # /
│   ├── docs/api/index.html     # /docs/api/
│   ├── auth.md                 # agent registration
│   ├── openapi.json
│   ├── .well-known/            # api-catalog, OAuth, MCP card, ARD, skills
│   └── assets/{css,js,img}/    # webmcp.js registers in-page agent tools
└── tools/                      # build-time image sources, never served
    ├── og-source.html          # → public/assets/img/og-default.png
    ├── icon-source.html        # → public/assets/img/icon-{512,192,180}.png
    └── serve.mjs               # loopback static server for the two above
```

## Commands

Run these from **this directory** (`snaptapp-site/`):

```bash
npx wrangler dev              # local preview on http://localhost:8787
npx wrangler deploy           # deploy to Cloudflare
npx wrangler deploy --dry-run # validate config without deploying
npx wrangler versions list    # deploy history
npx wrangler rollback         # revert to the previous version
```

Wrangler comes from the repo-root `devDependencies`, so no separate install.

Or from the repo root, without changing directory:

```bash
npm run dev:snaptapp     # local preview on http://localhost:8788
npm run test:site        # MCP / health / OAuth handler tests
npm run deploy:site      # deploy
```

## Live routing

| Hostname                   | Serves                                        |
| -------------------------- | --------------------------------------------- |
| `snaptapp.us`              | this Worker                                   |
| `www.snaptapp.us`          | this Worker                                   |
| `moreorless.snaptapp.us`   | More or Less (Firebase Hosting) — **untouched** |
| `more-or-less.snaptapp.us` | More or Less (Firebase Hosting) — **untouched** |

Custom domains are attached to the Worker rather than set as DNS records, so
Cloudflare manages the certificate and the proxied record itself. The product
subdomains are deliberately left alone.

### What the cutover changed, and how to undo it

Before this site existed, `snaptapp.us` pointed at Firebase Hosting and served
the More or Less web app — the same thing `moreorless.snaptapp.us` serves. The
Workers API refuses to attach a custom domain over an existing A/CNAME record,
so two records were deleted and replaced by Worker custom domains:

| Hostname          | Was                            | Now                              |
| ----------------- | ------------------------------ | -------------------------------- |
| `snaptapp.us`     | `A 199.36.158.100` (proxied)   | Worker custom domain (`AAAA 100::`) |
| `www.snaptapp.us` | `CNAME snaptapp.us` (proxied)  | Worker custom domain (`AAAA 100::`) |

Nothing else in the zone was touched — the MX, SPF, DKIM, DMARC,
`google-site-verification`, and `hosting-site` TXT records all remain, as do
both `moreorless.*` CNAMEs.

To put the apex back on Firebase Hosting: remove the `snaptapp.us` custom domain
from this Worker (Cloudflare dashboard → Workers → snaptapp-site → Settings →
Domains & Routes), then recreate `A snaptapp.us -> 199.36.158.100`, proxied. The
apex `hosting-site` TXT record was left in place specifically so Firebase
re-verifies without extra steps.

Every published address (`hello@`, `support@`, `privacy@`, `security@`, `press@`,
`legal@` `@snaptapp.us`) resolves through the zone's existing Cloudflare Email
Routing catch-all — no extra rules needed, and adding a new address on a page
requires no config change.

## Agent discovery

`snaptapp.us` publishes well-known documents so agents can find the studio
without scraping HTML. Human-readable notes live at `/docs/api/` and `/auth.md`.

| Path | What it is |
| ---- | ---------- |
| `/.well-known/api-catalog` | RFC 9727 linkset (`application/linkset+json`) |
| `/openapi.json` | OpenAPI 3.1 for health, MCP, and OAuth |
| `/.well-known/mcp/server-card.json` | MCP server card (SEP-1649) |
| `/mcp` | Streamable HTTP MCP endpoint |
| `/.well-known/ai-catalog.json` | ARD capability manifest |
| `/.well-known/agent-skills/index.json` | Agent skills discovery index |
| `/.well-known/openid-configuration` | OIDC discovery |
| `/.well-known/oauth-authorization-server` | RFC 8414 + `agent_auth` |
| `/.well-known/oauth-protected-resource` | RFC 9728 |
| `/.well-known/jwks.json` | ES256 public key (kid `snaptapp-2026`) |
| `/auth.md` | Agent registration instructions |
| `/api/health` | Liveness JSON |

Catalog access tokens, identity assertions, and claim tokens are ES256 JWTs.
`wrangler.jsonc` sets `ENVIRONMENT=production`. The Worker **never ships a
private key**: `TOKEN_SIGNING_JWK` is required in every environment, including
`development`. Setting `ENVIRONMENT` to a dev-like value on a deployed Worker
does not restore a fallback key. Production also rejects the documented local
example JWK (the public coordinates in `public/.well-known/jwks.json`). There
is no flag that re-enables a committed key.

Grant types, scopes, identity types, and `token_class` live in
`src/catalog-contract.ts`. Vitest compares that module to the static
well-known JSON and OpenAPI files so those surfaces cannot drift.

```bash
npx wrangler secret put TOKEN_SIGNING_JWK   # EC P-256 private JWK JSON (not the example key)
cp .dev.vars.example .dev.vars              # local wrangler dev
```

After rotating the live key, the Worker serves `GET /.well-known/jwks.json`
from that secret's public coordinates. Also update
`public/.well-known/jwks.json` if you still need the static copy to match.

Homepage responses also send RFC 8288 `Link` headers (via `_headers` and a
zone Transform Rule). DNS-AID TXT locators are published at
`_index._agents.snaptapp.us` and `_catalog._agents.snaptapp.us`. DNSSEC has
been enabled on the zone (status `pending` until the registrar DS is in
place). Player APIs for More or Less stay on `moreorless.snaptapp.us` and
still use Firebase ID tokens.

## Editing content

Each page is a complete, self-contained HTML file. The header, footer, and
`<head>` block are duplicated across pages on purpose: it keeps the site
buildless and means a page can never break because of a shared template. If you
change navigation or footer links, change them in every file under `public/`
(there are nine, `404.html` included).

Shared styling lives in `public/assets/css/site.css`. There are no inline
`style` attributes anywhere and no inline `<script>` except the JSON-LD block on
the home page, which is what lets `_headers` keep a strict
`script-src 'self'; style-src 'self'` CSP. **If you add an inline style or
script, the CSP will block it** — add a class to `site.css` instead.

### Placeholders to fill in

Three things are written as accurately as possible but need your real details:

1. **Legal entity.** `/legal/privacy/`, `/legal/terms/`, and `/company/` refer to
   "Snaptapp" as an unqualified trading name. Once the LLC or corporation is
   registered, replace it with the full legal name (e.g. "Snaptapp LLC, a
   Washington limited liability company"), set the governing state in Terms
   section 14, and add "Legal entity" / "Jurisdiction" rows to the company
   details table. Each spot is marked with an HTML comment.
2. **Founding partners.** `/company/` contains a complete, commented-out team
   section. Uncomment it and add real names, roles, and LinkedIn links. This is
   the single highest-value addition for looking legitimate to app-store
   reviewers and partners.
3. **Mailing address.** Not currently published anywhere. If you register an
   entity or need one for a payment processor or store listing, add it to the
   company details table and to the contact page.

Everything else on the site is factual as written: it was cross-checked against
the actual product code (Flutter client, Cloudflare Durable Objects, Gemini
Enterprise Agent Platform generation, Firebase, and the AdMob integration disclosed in the privacy policy).

### Regenerating images

`og-default.png` and the three app icons are rasterised from the HTML sources in
`tools/`. Browsers refuse to load those over `file://`, so serve them first:

```bash
node tools/serve.mjs      # http://127.0.0.1:8790/og-source.html
```

Then screenshot each at an exact viewport and save into
`public/assets/img/`:

| Source             | Viewport   | Output                     |
| ------------------ | ---------- | -------------------------- |
| `og-source.html`   | 1200 × 630 | `og-default.png`           |
| `icon-source.html` | 512 × 512  | `icon-512.png`             |
| —                  | downscale  | `icon-192.png`, `icon-180.png` |

The icon source is deliberately full-bleed with square corners: iOS, Android,
and the browser each apply their own mask, and baking rounded corners into the
raster leaves opaque wedges once a platform masks it again. `favicon.svg` is the
rounded variant, and it is hand-written rather than generated.

## Still outstanding for store submission

Not site work, but the site now assumes these and they should follow:

- **In-app account deletion.** `/support/#delete` documents an email-based
  process, which satisfies Google Play's requirement for a web deletion request
  URL. Play also wants an in-app path; the client has no `deleteAccount` flow
  yet.
- **Ads consent flow.** The client integrates AdMob but no consent management
  platform. Serving personalised ads to EEA/UK users requires one, and
  `/legal/privacy/#advertising` already describes consent as the legal basis.
- **A real status page** if uptime commitments are ever made. `/support/#status`
  currently says plainly that there isn't one.
