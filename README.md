# Snaptapp Studio Reimagined

Migration brief: Snaptapp studio site (snaptapp.us) → Lovable

Paste this whole document as your first message in the new Lovable project. It gives that project everything needed to rebuild the site without access to this conversation.

Task

Rebuild the Snaptapp studio site — currently a static site + Cloudflare Worker deployed at https://snaptapp.us — as a Lovable app.

Source code: private GitHub repo snaptapp/more-or-less, folder snaptapp-site/. Connect the GitHub connector in this project (or have the user start with Import from GitHub) and read the folder directly. Do not run any scripts from the repo during inspection.

Key decisions (already made with the owner):

Keep all content, page URLs, and the sitemap exactly as they are today — links and SEO must carry over.

Refresh the visual design: same text and structure, modern new look. Offer the owner 2–3 design directions before building.

Port EVERYTHING, including the machine-facing features: MCP server, agent OAuth, and all .well-known discovery files.

What exists today

The site is static HTML in snaptapp-site/public/ served by a Cloudflare Worker (no framework, no build step). A small Worker script (snaptapp-site/src/index.ts, with signing.ts and catalog-contract.ts) handles the dynamic routes.

Pages to recreate (same URLs)

URLSource file/public/index.html/companypublic/company/index.html/productspublic/products/index.html/docs/apipublic/docs/api/index.html/contactpublic/contact/index.html/supportpublic/support/index.html/legal/privacypublic/legal/privacy/index.html/legal/termspublic/legal/terms/index.html404public/404.html

Plus assets to copy into the project: assets/css/site.css, assets/js/{site.js,boot.js,webmcp.js} (webmcp.js registers in-page agent tools — port it), assets/img/* (icons, og-default.png, snaptapp-mark.svg, more-or-less-icon.png), favicon.svg, site.webmanifest, robots.txt, sitemap.xml, public/_headers semantics (security headers) — recreate headers at the hosting layer where supported.

Discovery documents to copy as-is (static files)

public/.well-known/api-catalog, ai-catalog.json, openid-configuration, oauth-authorization-server, oauth-protected-resource, security.txt, jwks.json (dynamic — see below), mcp/server-card.json

public/.well-known/agent-skills/ — index.json plus SKILL.md for contact-snaptapp, more-or-less-game, snaptapp-studio

public/openapi.json, public/auth.md

Dynamic endpoints to recreate as server routes (raw HTTP, exact same paths)

POST /mcp and /mcp/* — MCP server, protocol 2025-03-26, name snaptapp-site, version 1.0.0, 4 tools: get_studio_overview, list_products, get_contact_channels, get_discovery_documents. Full tool schemas and payloads are in src/index.ts (MCP_TOOLS, STUDIO).

GET /api/health (and /api/health/)

/oauth/authorize, /oauth2/*, /agent/* — agent OAuth flow with ES256 JWT signing (src/signing.ts; port it to Web Crypto, which is edge-compatible)

GET /.well-known/jwks.json — served from the signing key, not a static file

CORS

Allow-list: https://snaptapp.us, https://www.snaptapp.us, https://moreorless.snaptapp.us, https://more-or-less.snaptapp.us (plus localhost in dev). Overridable via a CORS_ALLOWED_ORIGINS comma-separated env var. Reproduce the same header set (Allow-Methods GET/HEAD/POST/OPTIONS, Allow-Headers Content-Type/Authorization/MCP-Protocol-Version/MCP-Session-Id, Expose MCP-Session-Id and WWW-Authenticate, Vary: Origin).

Secret required

TOKEN_SIGNING_JWK — ES256 signing JWK (JSON). Read it only inside server handlers. The owner can reuse or rotate the value from Cloudflare (dashboard → Workers → snaptapp-site → Settings → Variables and Secrets). The repo's .dev.vars.example value must be rejected in production, as the current Worker does. Ask the owner for it via Lovable's secure secret form when the endpoints are ready to verify — never in chat.

Optional: ENVIRONMENT=production, CORS_ALLOWED_ORIGINS.

Verification checklist before cutover

All 8 pages load at their exact current URLs; every page has unique title/description/og tags; sitemap.xml matches today's.

POST /mcp lists the 4 tools and answers a tool call; GET /api/health returns OK; /.well-known/jwks.json serves the public key.

The agent OAuth flow issues and verifies an ES256 token end to end.

All .well-known documents are reachable at their current paths.

Domain cutover (LAST — current site stays live until this step)

Owner connects snaptapp.us and www.snaptapp.us as custom domains in this Lovable project (paid plan). DNS is proxied on Cloudflare, so use the Cloudflare-proxy-compatible (CNAME) setup mode in Lovable's Connect Domain flow.

Owner removes the two Worker custom domains in Cloudflare (Workers → snaptapp-site → Settings → Domains & Routes) and adds the Lovable-provided records. MX, SPF, DKIM, DMARC, verification TXT records, and the More or Less subdomains (moreorless.snaptapp.us, more-or-less.snaptapp.us on Firebase Hosting) must NOT be touched.

Verify pages, MCP, and OAuth on the live domain, then the Worker can be retired.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1a71c52d-4b7b-4361-9504-a0b9b9dad1bd).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
