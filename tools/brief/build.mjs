import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { PDFDocument } from "pdf-lib";

const here = import.meta.dirname;
const root = path.resolve(here, "../..");
const outDir = path.join(here, ".build");
const pdfOut = path.join(root, "public/assets/docs/Snaptapp_Google_Cloud_AI_Architecture_Brief.pdf");

const read64 = (p) => fs.readFileSync(p).toString("base64");

const template = fs.readFileSync(path.join(here, "brief.html"), "utf8");
const html = template
  .replaceAll("__INTER_FONT__", read64(path.join(root, "tools/brief-assets/inter-var.woff2")))
  .replaceAll("__MONO_FONT__", read64(path.join(root, "tools/brief-assets/jbmono-var.woff2")))
  .replaceAll("__SHOT__", read64(path.join(root, "public/assets/img/more-or-less-home.png")))
  .replaceAll("__QR__", fs.readFileSync(path.join(root, "tools/brief-assets/qr.svg"), "utf8"));

fs.mkdirSync(outDir, { recursive: true });
const htmlPath = path.join(outDir, "brief.html");
fs.writeFileSync(htmlPath, html);

const chromeCandidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
].filter(Boolean);
const chrome = chromeCandidates.find((p) => fs.existsSync(p));
if (!chrome) throw new Error("No Chrome or Edge binary found for PDF rendering. Set CHROME_PATH.");

const fileUrl = "file:///" + htmlPath.replaceAll("\\", "/");

execFileSync(
  chrome,
  [
    "--headless=new",
    "--disable-gpu",
    // Root in a container cannot use the Chrome sandbox; our own HTML is the only input.
    ...(typeof process.getuid === "function" && process.getuid() === 0 ? ["--no-sandbox"] : []),
    "--no-pdf-header-footer",
    "--run-all-compositor-stages-before-draw",
    "--virtual-time-budget=8000",
    "--print-to-pdf=" + pdfOut,
    fileUrl,
  ],
  { stdio: ["ignore", "pipe", "pipe"] },
);

const doc = await PDFDocument.load(fs.readFileSync(pdfOut));
doc.setTitle("Snaptapp LLC — Google Cloud & Gemini Enterprise Agent Platform Architecture Brief");
doc.setAuthor("Snaptapp LLC");
doc.setSubject(
  "Google Cloud & Gemini Enterprise Agent Platform architecture brief for More or Less",
);
doc.setKeywords([
  "Google Cloud",
  "Gemini Enterprise Agent Platform",
  "Gemini 3.5 Flash Lite",
  "Gemini 3.8 Flash",
  "More or Less",
  "architecture",
]);
doc.setCreator("Snaptapp LLC");
doc.setProducer("Snaptapp LLC");
doc.setLanguage("en");
doc.setCreationDate(new Date());
doc.setModificationDate(new Date());
fs.writeFileSync(pdfOut, await doc.save());

const size = fs.statSync(pdfOut).size;
console.log(`PDF  ${path.relative(root, pdfOut)}  ${(size / 1024).toFixed(0)} KB`);
console.log(`HTML ${path.relative(root, htmlPath)}`);
