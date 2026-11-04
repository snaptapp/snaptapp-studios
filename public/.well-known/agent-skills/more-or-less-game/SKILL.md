---
name: more-or-less
description: Use when an agent needs to explain or link More or Less, Snaptapp's live party trivia game. Covers how a round works, where to play, and which studio pages describe the product.
---

# More or Less

More or Less is Snaptapp's first live product: a party trivia game about numbers.

Play: https://moreorless.snaptapp.us
Product page: https://snaptapp.us/products/
Support: https://snaptapp.us/support/#more-or-less

## How a round works

1. The player gets a claim and a plausible-looking `presented_number`.
2. They guess MORE or LESS before the shot clock runs out.
3. The game reveals `true_number` and a short explanation.

## Current modes

**Solitaire Mode:** Client-authoritative solo speed-run, fully playable offline without a server matchmaker. Uses a 200-question offline qualified serving-snapshot deck generated via DDM-4. The match lasts 60 seconds (`matchMs: 60000`) on an absolute wall clock; backgrounding adds no time. Each question has a 1-second preview (`previewMs: 1000`) and 750 ms feedback (`feedbackMs: 750`), with self-paced progression. Unlimited permanent skips award 0 points and skipped questions never repeat. Local personal Top 10 history stays on device; self-reported runs sync to Firebase Functions when online.

**Arena Mode:** Server-authoritative multiplayer sprint managed by Cloudflare Workers Durable Objects (`ArenaMatchmaker`, `ArenaEvent` SQLite). On-demand public lobbies cap at 100 entrants and start 20 seconds after the first human joins, or immediately at 100. If fewer than 8 humans join, seeded bots fill to 8 (easy 60%, medium 75%, hard 90%). All players receive the identical frozen deck and advance independently over WebSockets. The server match clock lasts 60 seconds, with a 1-second preview, 750 ms private feedback, skips allowed, and 2,000 ms client lag tolerance. Standings sort by score descending, total answer time ascending, then entrant ID. Ranked match persistence is server-verified.

**Scoring (both modes):** Signed integer `launchScore`. Correct: up to 1,000 points, using `1000 - floor(max(0, responseMs - 1000) / 10)`. Wrong: -500. Skip or unanswered: 0.

The studio website's three-round, 12-second-per-round sample is a separate demonstration, not a full-game mode.

## Stack (honest)

Google Cloud: Go microservice (agent-go) on Google Cloud Run calling Gemini 3.5 Flash Lite on Gemini Enterprise Agent Platform with mandatory Google Search Grounding and deterministic DDM-4 distractor math to build custom topic decks on the fly; cold-path Fact Foundry and Auditor using Google Search Grounding on Gemini Enterprise Agent Platform promoting verified facts into Cloud Firestore; Autonomous Fact Ombudsman on Cloud Run driven by Gemini 3.8 Flash on Gemini Enterprise Agent Platform; Gemini Enterprise Agent Platform supervised fine-tuning & Gemma 2 9B LoRA fine-tuning pipeline; Ops AI Copilots (Daily Blitz Strategist & Report Review Copilot) on Gemini Enterprise Agent Platform; Firebase (Auth, Functions v2, Hosting, App Check); Flutter client; Cloudflare Workers + Durable Objects.

## What this skill is not

This skill does not mint Firebase tokens or call player APIs. Direct players to the live web app. For studio-level APIs and MCP tools, use the `snaptapp-studio` skill.
