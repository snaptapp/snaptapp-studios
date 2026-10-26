import { describe, expect, test } from "vitest";
import { correctChoice, judgeRound, judgeSampleRound, secondsRemaining, ROUND_SECONDS, SAMPLE_DECK, SAMPLE_FACT } from "./sample-round";

describe("sample round", () => {
  test("40 mph target is below the approximate 70 mph answer", () => {
    expect(SAMPLE_FACT.target).toBe(40);
    expect(SAMPLE_FACT.answer).toBe(70);
    expect(judgeSampleRound("more", 5)).toBe("correct");
    expect(judgeSampleRound("less", 5)).toBe("wrong");
  });
  test("an expired round cannot accept a correct answer", () => {
    expect(judgeSampleRound("more", 0)).toBe("wrong");
    expect(judgeSampleRound(null, 0)).toBe("wrong");
  });
  test("the 12 second clock is bounded and uses elapsed time", () => {
    expect(ROUND_SECONDS).toBe(12);
    expect(secondsRemaining(12000, 0)).toBe(12);
    expect(secondsRemaining(12000, 5500)).toBe(6.5);
    expect(secondsRemaining(12000, 15000)).toBe(0);
  });
});
describe("sample deck", () => {
  test("has three pre-baked rounds with mixed answers", () => {
    expect(SAMPLE_DECK).toHaveLength(3);
    expect(SAMPLE_DECK.map(correctChoice)).toEqual(["more", "less", "less"]);
    expect(judgeRound(SAMPLE_DECK[1]!, "less", 3)).toBe("correct");
    expect(SAMPLE_DECK[2]!.target).toBe(5);
    expect(judgeRound(SAMPLE_DECK[2]!, "less", 3)).toBe("correct");
    expect(judgeRound(SAMPLE_DECK[2]!, "more", 3)).toBe("wrong");
  });
});
