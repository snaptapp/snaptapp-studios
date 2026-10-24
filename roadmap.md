# Snaptapp site migration roadmap

Goal: rebuild snaptapp.us as a Lovable app, preserving every URL and all content while applying the attached More Or Less design system across the public site.

## Tasks

- [ ] Prevent the original palette flashing before the studio palette on initial load
- [x] Rebuild all public pages and shared navigation/footer in the attached design system
- [x] Increase SNAPTAPP wordmark legibility while preserving the design language
- [x] Verify all public pages at desktop and mobile sizes without changing URLs or content
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
- [x] Verify MCP + OAuth end to end
- [x] Verify MCP tools return the real studio overview, products, and contact channels
- [x] Connect snaptapp.us and www.snaptapp.us with snaptapp.us as primary
- [x] Complete the targeted game-studio positioning copy pass
- [x] Complete the copy-only rewrite for Home, Products, and Company
- [x] Fix site-wide missing space before inline links (JSX whitespace) + Terms period gap
- [x] Apply "Campfire Night" warm studio palette (orange primary, soft-yellow secondary, lime removed)
- [ ] Evaluate palette in preview; then decide whether Anton/JetBrains Mono usage needs scaling back
- [ ] Publish the project, verify both live domains, then retire the legacy Cloudflare Worker
- [x] Build /player-faq/ from a live guest playthrough (guest entry, round format, shot
      clock, reveal, answer handling) and link it from Support, Products and the footer
- [ ] Find five small game-night hosts who could trial More or Less — blocked: the research
      run was cancelled, and the /hosts/ page that would collect their requests was never built
