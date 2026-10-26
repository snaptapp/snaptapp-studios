import { describe, expect, test } from "bun:test";
import { judgeSampleRound, secondsRemaining, ROUND_SECONDS, SAMPLE_FACT } from "./sample-round";

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