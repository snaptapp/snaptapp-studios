/**
 * Minimal static server for the build-time asset sources in this folder.
 *
 * The OG image and app-icon PNGs are produced by loading og-source.html and
 * icon-source.html in a headless browser and screenshotting them. Browsers
 * refuse to load those pages over file://, so serve them over loopback HTTP:
 *
 *   node tools/serve.mjs            # http://127.0.0.1:8790/og-source.html
 *
 * Loopback only, GET only, and scoped to this directory — it is a build tool,
 * not something to deploy.
 */
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(fileURLToPath(new URL(".", import.meta.url)));
const PORT = Number(process.env.PORT || 8790);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
};

const server = createServer(async (req, res) => {
  if (req.method !== "GET") {
    res.writeHead(405, { allow: "GET" }).end("method not allowed");
    return;
  }

  const requested = decodeURIComponent(new URL(req.url, "http://127.0.0.1").pathname);
  // Resolve inside ROOT and reject anything that escapes it.
  const target = resolve(join(ROOT, normalize(requested)));
  if (target !== ROOT && !target.startsWith(ROOT + sep)) {
    res.writeHead(403).end("forbidden");
    return;
  }

  try {
    const body = await readFile(target);
    res.writeHead(200, {
      "content-type": TYPES[extname(target)] || "application/octet-stream",
      "cache-control": "no-store",
    });
    res.end(body);
  } catch {
    res.writeHead(404).end("not found");
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`asset sources on http://127.0.0.1:${PORT}/  (ctrl-c to stop)`);
});
