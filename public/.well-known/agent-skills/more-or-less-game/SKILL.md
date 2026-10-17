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

Modes: Standard (5 rounds), Cutthroat (endless sudden death), Daily Challenge (5 rounds, 12s), Versus 1v1, Party Room (up to 10 phones, Durable Object WebSocket).

## Stack (honest)

Google Cloud (project more-or-less-505908): Go microservice (agent-go) on Google Cloud Run calling Vertex AI Gemini 3.5 Flash-Lite with mandatory Google Search Grounding and deterministic DDM-4 distractor math; cold-path Fact Foundry and Auditor using Vertex AI Gemini 3.8 Flash + Search Grounding promoting verified facts into Cloud Firestore; Autonomous Fact Ombudsman on Vertex AI; Vertex AI SFT & Gemma 2 9B LoRA fine-tuning pipeline; Ops AI Copilots (Daily Blitz Strategist & Report Review Copilot) on Vertex AI; Firebase (Auth, Functions v2, Hosting, App Check); Flutter client; Cloudflare Workers + Durable Objects.

## What this skill is not

This skill does not mint Firebase tokens or call player APIs. Direct players to the live web app. For studio-level APIs and MCP tools, use the `snaptapp-studio` skill.
