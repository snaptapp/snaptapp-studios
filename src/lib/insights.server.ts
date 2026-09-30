import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { createLovableAiGatewayRunIdFetch } from "./run-id.server";

export type PlacementRow = { event: string; location: string; count: number };

export async function summarizePlacements(input: {
  startDate: string;
  endDate: string;
  rows: PlacementRow[];
  notes?: string | undefined;
}) {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("AI is not configured for this project.");
  const runIdFetch = createLovableAiGatewayRunIdFetch();
  const provider = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    fetch: runIdFetch.fetch,
  });

  const table = input.rows.map((r) => `${r.event} | ${r.location} | ${r.count}`).join("\n");
  const result = streamText({
    model: provider.responses("openai/gpt-6-astra"),
    system:
      "You analyse click analytics for Snaptapp, an independent game studio website whose main goal is sending visitors to play More or Less. Be concise and specific. Use only the numbers given; never invent data. Output plain markdown under 300 words with three sections: 'Trends', 'Weakest placements', 'Recommendations' (3-5 numbered, actionable items naming the placement).",
    prompt: `Date range: ${input.startDate} to ${input.endDate}\n\nevent | location | clicks\n${table}${
      input.notes ? `\n\nAdmin notes: ${input.notes}` : ""
    }`,
    providerOptions: {
      openai: {
        forceReasoning: true,
        reasoningEffort: "low",
        reasoningSummary: "auto",
        store: false,
        include: ["reasoning.encrypted_content"],
      },
    },
  });
  try {
    return await result.text;
  } catch (err) {
    const status = (err as { statusCode?: number }).statusCode;
    if (status === 402) throw new Error("Out of AI credits — add credits in Settings → Plans & credits.");
    if (status === 429) throw new Error("AI is busy right now — try again in a minute.");
    throw new Error(`AI request failed${status ? ` (${status})` : ""}.`);
  }
}
