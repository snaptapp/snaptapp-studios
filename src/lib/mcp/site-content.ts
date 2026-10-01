export const ORIGIN = "https://snaptapp.us";

export interface SitePage {
  path: string;
  title: string;
  summary: string;
  keywords: string[];
}

/** Every public route on the studio site, matching public/sitemap.xml. */
export const SITE_PAGES: SitePage[] = [
  {
    path: "/",
    title: "Snaptapp — independent game studio",
    summary:
      "Studio homepage: what Snaptapp is, the More or Less product card, how the studio builds and operates its games, and contact entry points.",
    keywords: ["studio", "home", "overview", "more or less", "games"],
  },
  {
    path: "/products/",
    title: "Products",
    summary:
      "Detail page for More or Less: game modes, player counts, platform status, curated fact bank, and generated topics checked before play.",
    keywords: ["products", "more or less", "modes", "platforms", "fact bank", "topics"],
  },
  {
    path: "/company/",
    title: "Company",
    summary: "Company information: founding, how the studio operates, build principles, and team.",
    keywords: ["company", "about", "team", "principles", "founded"],
  },
  {
    path: "/support/",
    title: "Support",
    summary:
      "Player support: common issues, account and billing questions, data deletion requests, and response times.",
    keywords: ["support", "help", "bug", "account", "billing", "deletion"],
  },
  {
    path: "/contact/",
    title: "Contact",
    summary: "Contact channels for general enquiries, press, licensing, privacy, security, and legal.",
    keywords: ["contact", "email", "press", "licensing", "security", "legal"],
  },
  {
    path: "/docs/api/",
    title: "API documentation",
    summary:
      "Technical documentation for the studio site's machine-readable surface: discovery documents, OpenAPI, MCP, OAuth, and agent identity tokens.",
    keywords: ["api", "docs", "openapi", "mcp", "oauth", "agents", "discovery"],
  },
  {
    path: "/questions-with-numerical-answers/",
    title: "Questions with numerical answers",
    summary:
      "Ten verified numerical trivia questions with their real values, explaining the More or Less game mechanic.",
    keywords: ["trivia", "numerical", "questions", "answers", "facts", "examples"],
  },
  {
    path: "/legal/privacy/",
    title: "Privacy policy",
    summary: "What data the studio site and More or Less collect, how it is used, and how to request access or deletion.",
    keywords: ["privacy", "data", "gdpr", "deletion", "legal"],
  },
  {
    path: "/legal/terms/",
    title: "Terms of service",
    summary: "Terms covering use of the studio site and Snaptapp games.",
    keywords: ["terms", "service", "legal", "conditions"],
  },
  {
    path: "/legal/cookies/",
    title: "Cookie policy",
    summary:
      "What the site stores in the browser: the analytics consent choice, and Google Analytics cookies only after opt-in.",
    keywords: ["cookies", "consent", "analytics", "tracking", "privacy"],
  },
];

export interface TriviaExample {
  question: string;
  trueNumber: number;
  unit: string;
  category: string;
}

/**
 * The verified example facts published on /questions-with-numerical-answers/.
 * Values are kept to the accuracy the game serves.
 */
export const TRIVIA_EXAMPLES: TriviaExample[] = [
  { question: "A cheetah's top sprint speed", trueNumber: 70, unit: "mph", category: "Animals & Nature" },
  { question: "Bones in an adult human skeleton", trueNumber: 206, unit: "bones", category: "Science" },
  { question: "Average distance from Earth to the Moon", trueNumber: 384400, unit: "km", category: "Science & Space" },
  { question: "Height of Mount Everest", trueNumber: 8849, unit: "m", category: "History & World" },
  { question: "Length of one year on Mars", trueNumber: 687, unit: "Earth days", category: "Science & Space" },
  { question: "Height of the Eiffel Tower including antennas", trueNumber: 330, unit: "m", category: "History & World" },
  { question: "Times a human heart beats in a day", trueNumber: 100000, unit: "beats", category: "Science" },
  { question: "Original height of the Great Pyramid of Giza", trueNumber: 146.6, unit: "m", category: "History & World" },
  { question: "Length of one rotation of Venus", trueNumber: 243, unit: "Earth days", category: "Science & Space" },
  { question: "Main span of the Golden Gate Bridge", trueNumber: 1280, unit: "m", category: "History & World" },
];
