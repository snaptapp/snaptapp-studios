import { describe, expect, it } from "vitest";
import { GAME_MODES, GAME_MODE_DETAILS as rules } from "./game-modes";

describe("published full-game rules", () => {
  it("lists only the two current modes", () => {
    expect(GAME_MODES).toEqual(["Solitaire Mode", "Arena Mode"]);
  });
  it("sets both match clocks to 60 seconds", () => {
    expect([rules.solitaire.matchMs, rules.arena.matchMs]).toEqual([60000, 60000]);
  });
  it("sets both preview and feedback windows", () => {
    expect([rules.solitaire.previewMs, rules.arena.previewMs]).toEqual([1000, 1000]);
    expect([rules.solitaire.feedbackMs, rules.arena.feedbackMs]).toEqual([750, 750]);
  });
  it("publishes the offline deck size", () => { expect(rules.solitaire.deckSize).toBe(200); });
  it("keeps a local Top 10", () => { expect(rules.solitaire.localHistorySize).toBe(10); });
  it("publishes Arena entrant limits", () => {
    expect([rules.arena.minimumEntrants, rules.arena.maxEntrants]).toEqual([8, 100]);
  });
  it("publishes the public lobby wait", () => { expect(rules.arena.lobbyWaitMs).toBe(20000); });
  it("publishes seeded bot accuracy", () => { expect(rules.arena.bots).toEqual({ easy: 0.6, medium: 0.75, hard: 0.9 }); });
  it("publishes the client lag allowance", () => { expect(rules.arena.lagAllowanceMs).toBe(2000); });
  it("publishes signed scoring without clamping", () => {
    expect(rules.scoring).toEqual({ name: "launchScore", type: "Signed integer", correctMax: 1000, correctFormula: "1000 - floor(max(0, responseMs - 1000) / 10)", wrong: -500, skip: 0, unanswered: 0 });
  });
  it("publishes standings tiebreakers in order", () => {
    expect(rules.arena.standings).toEqual(["Score descending", "Total answer time ascending", "Entrant ID tiebreaker"]);
  });
});