import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

import { describe, expect, it } from "vitest";

const script = readFileSync(
  path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public", "assets", "js", "webmcp.js"),
  "utf8"
);

type Tool = {
  name: string;
  execute: (args?: { page?: string }) => { structuredContent: Record<string, unknown> };
};

function loadWebMcp() {
  const assigned: string[] = [];
  const sandbox: {
    tools?: Tool[];
    navigator: { modelContext: { provideContext: (ctx: { tools: Tool[] }) => void } };
    window: {
      location: { assign: (path: string) => void };
      setInterval: () => number;
      clearInterval: () => void;
    };
  } = {
    navigator: {
      modelContext: {
        provideContext(ctx) {
          sandbox.tools = ctx.tools;
        },
      },
    },
    window: {
      location: {
        assign(next) {
          assigned.push(next);
        },
      },
      setInterval: () => 1,
      clearInterval: () => undefined,
    },
  };
  vm.runInNewContext(script, sandbox);
  return { tools: sandbox.tools ?? [], assigned };
}

describe("webmcp.js", () => {
  it("registers studio tools and rejects unknown navigate_site pages", () => {
    const { tools, assigned } = loadWebMcp();
    const names = tools.map((tool) => tool.name);
    expect(names).toEqual(["get_studio_overview", "list_products", "get_contact_channels", "navigate_site"]);

    const navigate = tools.find((tool) => tool.name === "navigate_site");
    expect(navigate).toBeTruthy();
    const unknown = navigate?.execute({ page: "not-a-page" });
    expect(unknown?.structuredContent.error).toBe("unknown_page");
    expect(assigned).toEqual([]);

    const ok = navigate?.execute({ page: "products" });
    expect(ok?.structuredContent.navigated).toBe("/products/");
    expect(assigned).toEqual(["/products/"]);
  });
});
