# Player-facing SEO pages: "More or Less trivia" + "group trivia game"

## Goal
Two new player-facing pages (not developer-facing), written in the site's established voice, matching existing markup/classes so they look native to the Campfire Night design.

## Keyword evidence
- "group trivia game": 50/mo US, difficulty 21/100 (low). Related: "trivia games" 22,200/mo, "online games to play with friends" 22,200/mo, "how to play trivia games with a large group" 50/mo.
- "More or Less trivia": no Semrush data (brand term, treated as unknown). Page targets brand + "more or less game" navigational intent.
- Existing SEO finding (agent_content:growth_opportunity) recommends a group-trivia landing page at /online-trivia-games-for-groups/.

## New routes

### 1. `/more-or-less/` — "More or Less trivia" page
- Title: "More or Less — A Trivia Game About Numbers | Snaptapp"
- Description: how the game works, modes, free to play, live on web.
- Sections (reusing existing classes: page-head, breadcrumb, section, grid grid--3, card, product__meta):
  - H1 "More or Less" + lede explaining the core decision (real answer more or less than the number on screen)
  - "How a round works" — 3-step card row (see a claim + a wrong number; call more or less before the clock; see the real figure and why)
  - "Five ways to play" — condensed mode cards (Standard, Cutthroat, Daily Challenge, Versus 1v1, Party Room)
  - "Topics and facts" — curated topics, verified fact bank, custom topics checked before showing
  - "Good to know" — free, web now, iOS/Android in development, 1–10 players
  - CTA: Play More or Less (primary), Support (ghost)
- VideoGame JSON-LD (name, genre, gamePlatform, applicationCategory, publisher Snaptapp, offers free) — factual only.

### 2. `/online-trivia-games-for-groups/` — group trivia page
- Title: "Trivia Games for Groups — Play Together in More or Less | Snaptapp"
- H1 uses the target keyword ("A trivia game built for groups" H1 with keyword in copy; per finding, keyword in meta title and H1 — H1: "Online trivia games for groups").
- Sections:
  - Lede: what makes group trivia work (same rounds, same clock, no app install — web link)
  - "Party Room" — up to 10 players, shared clock, everyone answers the same round
  - "How to run a game for your group" — 3 steps (open the game, start a Party Room, share the link/code) — only claims supported by existing product copy
  - Versus 1v1 and Daily Challenge as smaller-group alternatives
  - CTA row
- FAQ JSON-LD with 2–3 player questions (how many players, is it free, do players need an account/app) — answers strictly from existing verified product facts.

## Editorial constraints
- Player language first; no infrastructure/developer talk on these pages.
- No invented facts: only claims already on /products/ and /support/ (modes, 1–10 players, free, web live, mobile in development, verified fact bank).
- No banned marketing words; direct, confident, specific voice.
- Reuse existing CSS classes only — no new styling, no redesign.

## Wiring
- Add both URLs to public/sitemap.xml.
- Internal links: /products/ Party Room card links to the group page; More or Less section links to /more-or-less/; footer Products list gains both pages. (Links only — no copy rewrites elsewhere.)
- Each page gets full head(): unique title/description/og:url/og:image (existing og-default.png)/twitter:card/canonical, same pattern as products.tsx.
- Update roadmap.md; mark the SEO finding fixed after the group page ships.
