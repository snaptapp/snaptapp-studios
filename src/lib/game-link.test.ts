import { describe, expect, test } from "vitest";
import { GAME_ORIGIN, gameUrl } from "./game-link";

describe("public game destination", () => {
  test("uses moreorless.app and preserves placement tracking", () => {
    expect(GAME_ORIGIN).toBe("https://moreorless.app");
    const url = new URL(gameUrl("homepage_sample_round"));
    expect(url.origin).toBe("https://moreorless.app");
    expect(url.searchParams.get("utm_content")).toBe("homepage_sample_round");
    expect(url.searchParams.get("utm_campaign")).toBe("sample_round");
  });
});