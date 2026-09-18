# Snaptapp site migration roadmap

Goal: rebuild snaptapp.us (static site + Cloudflare Worker) as this Lovable app,
replicating the current design exactly (no redesign — user decision).

## Tasks

- [x] Port pages to TanStack routes, markup/CSS identical: /, /products/, /company/,
      /support/, /contact/, /legal/privacy/, /legal/terms/, /docs/api/, 404
- [x] Keep site.css + brand assets served from public/
- [x] Reimplement site.js behaviour (sticky header, mobile nav, scroll reveal, year)
      as React so it survives client-side navigation
- [x] Keep webmcp.js loaded
- [x] Port worker endpoints as server routes: /mcp, /api/health, /oauth/authorize,
      /oauth2/token, /oauth2/revoke, /agent/identity(+/claim), /.well-known/jwks.json
- [x] Keep discovery docs served: api-catalog, openapi.json, ai-catalog.json,
      agent-skills, oauth metadata, security.txt, auth.md, robots, sitemap
- [x] Port _redirects aliases (/play, /about, /privacy, /docs, ...)
- [x] Port _headers security headers / content types where hosting allows
- [x] Configure TOKEN_SIGNING_JWK as a secure runtime secret
- [ ] Verify MCP + OAuth end to end
- [ ] Connect snaptapp.us and www.snaptapp.us, then complete the Cloudflare DNS cutover
