import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { TRIVIA_EXAMPLES } from "../site-content";

const readHints = { readOnlyHint: true, idempotentHint: true, openWorldHint: false };

interface Product {
  name: string;
  status: string;
  url: string;
  tagline: string;
  description: string;
  category: string;
  platforms: { web: string; ios: string; android: string };
  players: string;
  price: string;
  modes: string[];
  technology: string[];
}

const toGameJson = (product: Product) => ({
  name: product.name,
  status: product.status,
  url: product.url,
  tagline: product.tagline,
  description: product.description,
  category: product.category,
  platforms: {
    web: product.platforms.web,
    ios: product.platforms.ios,
    android: product.platforms.android,
  },
  players: product.players,
  price: product.price,
  modes: product.modes.map((mode) => mode),
  technology: product.technology.map((tech) => tech),
});

export const gameDetailsTool = defineTool({
  name: "get_game_details",
  title: "Game details",
  description:
    "Return full detail for a Snaptapp game: how it plays, modes, player counts, platform status, pricing, and the technology behind it.",
  inputSchema: {
    game: z.string().trim().max(60).optional().describe("Game name, e.g. 'More or Less'. Defaults to the live title."),
  },
  annotations: readHints,
  handler: async ({ game }) => {
    const { callTool } = await import("../../site-api.server");
    const value = callTool("list_products") as { products: Product[] } | null;
    const products = value?.products ?? [];
    const wanted = game?.toLowerCase().replace(/\s+/g, " ").trim();
    const match = wanted ? products.find((p) => p.name.toLowerCase() === wanted) : products[0];
    if (!match) {
      throw new ToolError(
        `No Snaptapp game named "${game}". Known games: ${products.map((p) => p.name).join(", ") || "none"}.`
      );
    }
    const detail = toGameJson(match);
    return {
      content: [{ type: "text" as const, text: JSON.stringify(detail, null, 2) }],
      structuredContent: { game: detail },
    };
  },
});

export const triviaExamplesTool = defineTool({
  name: "get_trivia_examples",
  title: "Example numerical trivia",
  description:
    "Return verified example numerical trivia questions with their real values and units, as published on snaptapp.us. Useful for explaining or demonstrating how More or Less rounds work.",
  inputSchema: {
    category: z.string().trim().max(40).optional().describe("Filter by category, e.g. 'Science & Space'."),
    limit: z.number().int().min(1).max(10).optional().describe("Maximum number of examples (default all)."),
  },
  annotations: readHints,
  handler: ({ category, limit }) => {
    const wanted = category?.toLowerCase();
    const filtered = TRIVIA_EXAMPLES.filter(
      (fact) => !wanted || fact.category.toLowerCase().includes(wanted)
    ).slice(0, limit ?? TRIVIA_EXAMPLES.length);
    const examples = filtered.map((fact) => ({
      question: fact.question,
      trueNumber: fact.trueNumber,
      unit: fact.unit,
      category: fact.category,
    }));
    const result = {
      source: "https://snaptapp.us/questions-with-numerical-answers/",
      note: "Values are kept to the accuracy the game serves; a few change with better measurement.",
      examples,
    };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      structuredContent: result,
    };
  },
});
