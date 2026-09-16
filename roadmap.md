# Snaptapp site migration roadmap

Goal: rebuild snaptapp.us (static site + Cloudflare Worker) as this Lovable app,
replicating the current design exactly (no redesign — user decision).

## Tasks

- [ ] Port pages to TanStack routes, markup/CSS identical: /, /products/, /company/,
      /support/, /contact/, /legal/privacy/, /legal/terms/, /docs/api/, 404
- [ ] Keep site.css + brand assets served from public/
- [ ] Reimplement site.js behaviour (sticky header, mobile nav, scroll reveal, year)
      as React so it survives client-side navigation
- [ ] Keep webmcp.js loaded
- [ ] Port worker endpoints as server routes: /mcp, /api/health, /oauth/authorize,
      /oauth2/token, /oauth2/revoke, /agent/identity(+/claim), /.well-known/jwks.json
- [ ] Keep discovery docs served: api-catalog, openapi.json, ai-catalog.json,
      agent-skills, oauth metadata, security.txt, auth.md, robots, sitemap
- [ ] Port _redirects aliases (/play, /about, /privacy, /docs, ...)
- [ ] Port _headers security headers / content types where hosting allows
- [ ] TOKEN_SIGNING_JWK secret needed for signing (blocked on user-provided key)
- [ ] Verify pages + MCP + OAuth, then domain cutover (owner action in Cloudflare)
