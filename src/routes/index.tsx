import { createFileRoute } from "@tanstack/react-router";

import { trackEvent } from "@/lib/analytics-consent";
import { useSiteBehaviour } from "@/lib/use-site-behaviour";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Snaptapp — AI-Native Game Studio on Google Cloud & Vertex AI",
      },
      {
        name: "description",
        content:
          "Snaptapp LLC is an independent US game studio building original real-time games powered by Google Cloud, Vertex AI (Gemini & Gemma), Google Search Grounding, and Cloud Run. Our first title, More or Less, is live on the web.",
      },
      {
        name: "theme-color",
        content: "#07080b",
      },
      {
        name: "color-scheme",
        content: "dark",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:site_name",
        content: "Snaptapp",
      },
      {
        property: "og:title",
        content: "Snaptapp — AI-Native Game Studio on Google Cloud & Vertex AI",
      },
      {
        property: "og:description",
        content:
          "Independent US game studio building original real-time games powered by Google Cloud, Vertex AI (Gemini 3.5 & 3.8 Flash, Gemma 2), Google Search Grounding, and Cloud Run.",
      },
      {
        property: "og:url",
        content: "https://snaptapp.us/",
      },
      {
        property: "og:image",
        content: "https://snaptapp.us/assets/img/og-default.png",
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:image:alt",
        content: "Snaptapp — Independent Game Studio",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://snaptapp.us/",
      },
      {
        rel: "api-catalog",
        href: "/.well-known/api-catalog",
      },
      {
        rel: "service-doc",
        href: "/docs/api/",
      },
      {
        rel: "describedby",
        href: "/.well-known/ai-catalog.json",
        type: "application/json",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://snaptapp.us/#organization",
              name: "Snaptapp",
              legalName: "Snaptapp LLC",
              alternateName: "SNAPTAPP LLC",
              url: "https://snaptapp.us/",
              logo: {
                "@type": "ImageObject",
                url: "https://snaptapp.us/assets/img/icon-512.png",
                width: 512,
                height: 512,
              },
              image: "https://snaptapp.us/assets/img/og-default.png",
              description:
                "Independent US game studio building original AI-native games on Google Cloud, Vertex AI (Gemini & Gemma), Google Search Grounding, Cloud Run, and Firebase. First title: More or Less.",
              foundingDate: "2026",
              email: "hello@snaptapp.us",
              address: {
                "@type": "PostalAddress",
                streetAddress: "522 W Riverside Ave Ste N",
                addressLocality: "Spokane",
                addressRegion: "WA",
                postalCode: "99201",
                addressCountry: "US",
              },
              knowsAbout: [
                "Google Cloud",
                "Vertex AI",
                "Gemini 3.5 Flash-Lite",
                "Gemini 3.8 Flash",
                "Google Search Grounding",
                "Gemma 2 9B Supervised Fine-Tuning",
                "Google Cloud Run",
                "Cloud Firestore",
                "Firebase",
                "Flutter",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  email: "support@snaptapp.us",
                  availableLanguage: "English",
                },
                {
                  "@type": "ContactPoint",
                  contactType: "press",
                  email: "press@snaptapp.us",
                  availableLanguage: "English",
                },
                {
                  "@type": "ContactPoint",
                  contactType: "technical support",
                  email: "security@snaptapp.us",
                  availableLanguage: "English",
                },
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://snaptapp.us/#website",
              url: "https://snaptapp.us/",
              name: "Snaptapp",
              publisher: { "@id": "https://snaptapp.us/#organization" },
              inLanguage: "en-US",
            },
            {
              "@type": "SoftwareApplication",
              "@id": "https://snaptapp.us/products/#more-or-less",
              name: "More or Less",
              url: "https://moreorless.snaptapp.us",
              applicationCategory: "GameApplication",
              applicationSubCategory: "Trivia",
              operatingSystem: "Web, iOS, Android",
              publisher: { "@id": "https://snaptapp.us/#organization" },
              description:
                "An AI-native party trivia game about numbers powered by Vertex AI (Gemini 3.5 Flash-Lite & Gemini 3.8 Flash), Google Search Grounding, Google Cloud Run, and Cloud Firestore.",
            },
          ],
        }),
      },
    ],
  }),
  component: PageIndex,
});

function PageIndex() {
  useSiteBehaviour();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="shell site-header__inner">
          <a className="brand" href="/">
            <img
              className="brand__mark"
              src="/assets/img/snaptapp-mark.svg"
              alt=""
              width="30"
              height="30"
            />
            <span>Snaptapp</span>
            <span className="brand__sub">LLC</span>
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded="false"
            aria-controls="primary-nav"
            aria-label="Toggle navigation"
          >
            <span></span>
          </button>
          <nav className="nav" id="primary-nav" aria-label="Primary">
            <a href="/products/">Products</a>
            <a href="/company/">Company</a>
            <a href="/support/">Support</a>
            <a href="/contact/">Contact</a>
            <a
              className="btn btn--primary btn--sm"
              href="https://moreorless.snaptapp.us"
              onClick={() =>
                trackEvent("outbound_click", {
                  destination: "moreorless.snaptapp.us",
                  location: "header",
                })
              }
            >
              Play More or Less
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* ---------------- Hero ---------------- */}
        <section className="hero">
          <div className="shell">
            <div className="hero__inner">
              <p className="eyebrow">
                Independent game studio · Built on Google Cloud &amp; Vertex AI
              </p>
              <h1>Original AI-native games for web and mobile.</h1>
              <p className="lede">
                Snaptapp LLC is an independent US game studio. We design, build, and
                operate our own multiplayer games across web and mobile on a deep{" "}
                <strong>Google Cloud</strong> and <strong>Vertex AI</strong> architecture
                (Gemini 3.5 Flash-Lite, Gemini 3.8 Flash, Google Search Grounding, Gemma 2
                9B SFT, Cloud Run, and Cloud Firestore). Our first title, More or Less, is
                live now.
              </p>
              <div className="row hero__actions">
                <a
                  className="btn btn--primary"
                  href="/products/"
                  onClick={() =>
                    trackEvent("cta_click", { cta: "explore_games", location: "hero" })
                  }
                >
                  Explore our games
                  <svg
                    className="btn__arrow"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  className="btn btn--secondary"
                  href="https://moreorless.snaptapp.us"
                  onClick={() =>
                    trackEvent("outbound_click", {
                      destination: "moreorless.snaptapp.us",
                      location: "hero",
                    })
                  }
                >
                  Play More or Less
                </a>
                <a
                  className="btn btn--ghost"
                  href="/assets/docs/Snaptapp_Google_Cloud_AI_Architecture_Brief.pdf"
                  onClick={() =>
                    trackEvent("cta_click", {
                      cta: "architecture_brief_pdf",
                      location: "hero",
                    })
                  }
                >
                  Architecture Brief (PDF)
                </a>
              </div>

              <ul className="trust-strip" aria-label="Core Google Cloud and AI stack">
                <li>Vertex AI Gemini 3.5 &amp; 3.8 Flash</li>
                <li>Google Search Grounding</li>
                <li>Google Cloud Run (Go Agent)</li>
                <li>Gemma 2 9B Fine-Tuning</li>
                <li>Cloud Firestore &amp; Firebase App Check</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ---------------- Products ---------------- */}
        <section className="section section--edge" id="products">
          <div className="shell">
            <div className="section-head reveal">
              <p className="eyebrow">Products</p>
              <h2>Our games</h2>
              <p className="lede">
                More or Less is live on the web, with iOS and Android versions in
                development. A second AI-native Snaptapp title is also in development on
                our shared Google Cloud and Vertex AI pipeline.
              </p>
            </div>

            <article className="product reveal">
              <div className="product__media">
                <div className="product__art">
                  <img
                    src="/assets/img/more-or-less-icon.png"
                    alt="More or Less app icon"
                    width="272"
                    height="272"
                    loading="lazy"
                  />
                </div>
                <img
                  className="product__screenshot"
                  src="/assets/img/more-or-less-home.png"
                  alt="More or Less game home screen showing play modes"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="product__title">
                  <h3>More or Less</h3>
                  <span className="badge badge--live">
                    <span className="dot"></span>Live
                  </span>
                </div>
                <p className="product__tagline">
                  One fake number. Is the real answer more or less?
                </p>
                <p>
                  More or Less is a fast party trivia game built around one simple
                  question: is the real answer higher or lower? Every round gives you a
                  claim and a believable but incorrect number. Make your call before time
                  runs out, then see the verified figure and source context.
                </p>
                <p>
                  Under the hood, custom topics are streamed in real time by our Go
                  microservice (<code>agent-go</code>) on <strong>Google Cloud Run</strong>{" "}
                  using <strong>Vertex AI Gemini 3.5 Flash-Lite</strong> with mandatory{" "}
                  <strong>Google Search Grounding</strong> and deterministic{" "}
                  <strong>Distractor Derivation Model (DDM-4)</strong> guardrails, while
                  curated topics serve from our <strong>Cloud Firestore</strong> fact bank
                  continuously audited by <strong>Vertex AI Gemini 3.8 Flash</strong>.
                </p>

                <dl className="product__meta">
                  <div>
                    <dt>Platforms</dt>
                    <dd>Web now · iOS &amp; Android in development</dd>
                  </div>
                  <div>
                    <dt>AI Engine</dt>
                    <dd>Vertex AI Gemini 3.5 &amp; 3.8 Flash + Search Grounding</dd>
                  </div>
                  <div>
                    <dt>Cloud Stack</dt>
                    <dd>Google Cloud Run · Cloud Firestore · Firebase</dd>
                  </div>
                  <div>
                    <dt>Multiplayer</dt>
                    <dd>Up to 10 players per room (sub-20ms sync)</dd>
                  </div>
                </dl>

                <p className="mt-md">
                  <a
                    className="link-arrow"
                    href="https://moreorless.snaptapp.us"
                    onClick={() =>
                      trackEvent("outbound_click", {
                        destination: "moreorless.snaptapp.us",
                        location: "product_card",
                      })
                    }
                  >
                    Play at moreorless.snaptapp.us
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </p>
                <p className="mt-xs">
                  <a
                    className="link-arrow"
                    href="/assets/docs/Snaptapp_Google_Cloud_AI_Architecture_Brief.pdf"
                  >
                    Read the Google Cloud &amp; Vertex AI Architecture Brief (PDF)
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </p>
                <p className="mt-xs">
                  <a className="link-arrow" href="/questions-with-numerical-answers/">
                    Try example questions with numerical answers
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </p>
              </div>
            </article>

            <div className="grid grid--2 reveal mt-gap">
              <div className="card card--empty">
                <span className="badge badge--soon">In development</span>
                <p className="muted small mt-xs">
                  A second Snaptapp title is in development on our Google Cloud &amp;
                  Vertex AI architecture. Details will be announced later.
                </p>
              </div>
              <div className="card card--hover">
                <h3>Press, partners, and licensing</h3>
                <p>
                  For review access, Google Cloud partner enquiries, interviews,
                  licensing, or media requests, contact the studio.
                </p>
                <p className="mt-sm">
                  <a
                    className="link-arrow"
                    href="/contact/"
                    onClick={() =>
                      trackEvent("cta_click", {
                        cta: "contact_studio",
                        location: "products_section",
                      })
                    }
                  >
                    Contact the studio
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- How we build ---------------- */}
        <section className="section section--edge" id="approach">
          <div className="shell">
            <div className="section-head reveal">
              <p className="eyebrow">How we build · Google Cloud &amp; Vertex AI</p>
              <h2>AI-native architecture from generation to verification</h2>
              <p className="lede">
                Every Snaptapp game is built around a multi-agent Google Cloud pipeline (
                <code>more-or-less-505908</code>) that pairs Vertex AI generative models
                and Google Search grounding with deterministic mathematical guardrails.
              </p>
            </div>

            <div className="grid grid--3 reveal">
              <div className="card card--hover">
                <div className="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 2.5 17 6v5c0 3.4-2.9 5.9-7 6.5-4.1-.6-7-3.1-7-6.5V6l7-3.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m7.2 10 2 2 3.6-3.8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="card__num">01</span>
                <h3>Live Gemini Pack Engine</h3>
                <p>
                  Our Go microservice (<code>agent-go</code>) on{" "}
                  <strong>Google Cloud Run</strong> calls{" "}
                  <strong>Vertex AI Gemini 3.5 Flash-Lite</strong> with mandatory{" "}
                  <strong>Google Search Grounding</strong>, streaming NDJSON rounds in
                  under two seconds while our deterministic <code>DDM-4</code> kernel
                  calibrates distractors.
                </p>
              </div>

              <div className="card card--hover">
                <div className="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <circle
                      cx="10"
                      cy="10"
                      r="7.2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M10 6.2v4.4l3 1.8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="card__num">02</span>
                <h3>Autonomous Fact Foundry &amp; Auditor</h3>
                <p>
                  A cold-path pipeline powered by{" "}
                  <strong>Vertex AI Gemini 3.8 Flash</strong> and Google Search grounding
                  crawls subjects, cross-verifies claims against primary web sources,
                  precomputes <code>DDM-4</code> sweeps across surprise factors{" "}
                  <code>0–3</code>, and gates promotion into{" "}
                  <strong>Cloud Firestore</strong>.
                </p>
              </div>

              <div className="card card--hover">
                <div className="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10h12M10 4v12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="card__num">03</span>
                <h3>Adversarial Fact Ombudsman</h3>
                <p>
                  When a player disputes a fact, an autonomous referee on{" "}
                  <strong>Cloud Run</strong> and <strong>Vertex AI</strong> runs
                  adversarial counter-evidence Google Search queries against authoritative
                  sources to issue real-time verification or eviction rulings.
                </p>
              </div>

              <div className="card card--hover">
                <div className="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path
                      d="M3.5 6.5 10 3l6.5 3.5v7L10 17l-6.5-3.5v-7Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="card__num">04</span>
                <h3>Vertex AI SFT &amp; Gemma 2 Pipeline</h3>
                <p>
                  Audited Firestore facts export via our hermetic Go pipeline (
                  <code>export-sft --format vertex</code>) into{" "}
                  <strong>Vertex AI Gemini supervised fine-tuning</strong> corpora and{" "}
                  <strong>Gemma 2 9B (google/gemma-2-9b-it)</strong> LoRA adapters,
                  enforced by a 7-metric zero-tolerance evaluation gate.
                </p>
              </div>

              <div className="card card--hover">
                <div className="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 2v4m0 8v4m-8-8h4m8 0h4M5.6 5.6l2.8 2.8m3.2 3.2 2.8 2.8m0-8.8-2.8 2.8m-3.2 3.2-2.8 2.8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="card__num">05</span>
                <h3>AI Ops Copilots &amp; Multiplayer Edge</h3>
                <p>
                  Our admin portal runs a <strong>Vertex AI Gemini 3.8 Flash</strong>{" "}
                  Daily Blitz Strategist and Report Review Copilot with tool calling,
                  while Party Room sessions sync up to 10 players in sub-20ms over
                  Durable Object WebSockets.
                </p>
              </div>

              <div className="card card--hover">
                <div className="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <rect
                      x="2.5"
                      y="2.5"
                      width="7"
                      height="15"
                      rx="1.6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="11.5"
                      y="6.5"
                      width="6"
                      height="11"
                      rx="1.4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <span className="card__num">06</span>
                <h3>Flutter Client &amp; Firebase App Check</h3>
                <p>
                  Built in <strong>Flutter</strong> for Web, iOS, and Android, backed by{" "}
                  <strong>Firebase Auth</strong>, <strong>Cloud Functions v2</strong> (
                  <code>@google/genai</code>), <strong>Firebase App Check</strong> (Play
                  Integrity, App Attest, reCAPTCHA Enterprise), and{" "}
                  <strong>OpenTelemetry</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Stack ---------------- */}
        <section className="section section--edge" id="stack">
          <div className="shell">
            <div className="section-head reveal">
              <p className="eyebrow">Infrastructure · GCP Project more-or-less-505908</p>
              <h2>What we run on</h2>
              <p className="lede">
                Our production stack combines Google Cloud and Vertex AI for grounded
                generative inference, fact auditing, fine-tuning, and persistence with
                low-latency WebSocket room coordination.
              </p>
            </div>

            <dl className="stats reveal">
              <div>
                <dt>Live AI Inference</dt>
                <dd>Vertex AI Gemini 3.5</dd>
              </div>
              <div>
                <dt>Foundry &amp; Copilots</dt>
                <dd>Vertex AI Gemini 3.8</dd>
              </div>
              <div>
                <dt>Grounding &amp; SFT</dt>
                <dd>Google Search &amp; Gemma 2</dd>
              </div>
              <div>
                <dt>AI Microservices</dt>
                <dd>Google Cloud Run (Go)</dd>
              </div>
              <div>
                <dt>Data &amp; App Platform</dt>
                <dd>Firestore &amp; Firebase</dd>
              </div>
              <div>
                <dt>Client &amp; Edge Sync</dt>
                <dd>Flutter &amp; Durable Objects</dd>
              </div>
            </dl>

            <div className="callout reveal mt-lg">
              <strong>Google Cloud &amp; Vertex AI Architecture Brief.</strong> Reviewing
              our stack for partnerships or the Google for Startups Cloud Program?{" "}
              <a href="/assets/docs/Snaptapp_Google_Cloud_AI_Architecture_Brief.pdf">
                Download our 1-page Technical Architecture &amp; AI Workload Brief (PDF)
              </a>{" "}
              covering our <code>more-or-less-505908</code> production services, Search
              grounding audit receipts, DDM-4 math guardrails, and Vertex AI SFT pipeline.
            </div>
          </div>
        </section>

        {/* ---------------- CTA ---------------- */}
        <section className="section">
          <div className="shell">
            <div className="cta reveal">
              <p className="eyebrow">Get in touch</p>
              <h2>Questions, press, or support?</h2>
              <p className="lede">
                Use the contact page to reach the right inbox. Support and general
                enquiries are typically answered within two business days.
              </p>
              <div className="row mt-lg">
                <a
                  className="btn btn--primary"
                  href="/contact/"
                  onClick={() =>
                    trackEvent("cta_click", {
                      cta: "contact_snaptapp",
                      location: "footer_cta",
                    })
                  }
                >
                  Contact Snaptapp
                </a>
                <a
                  className="btn btn--ghost"
                  href="mailto:hello@snaptapp.us"
                  onClick={() =>
                    trackEvent("cta_click", {
                      cta: "email_hello",
                      location: "footer_cta",
                    })
                  }
                >
                  hello@snaptapp.us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell">
          <div className="footer-grid">
            <div className="footer-about">
              <a className="brand" href="/">
                <img
                  className="brand__mark"
                  src="/assets/img/snaptapp-mark.svg"
                  alt=""
                  width="30"
                  height="30"
                />
                <span>Snaptapp</span>
              </a>
              <p>
                An independent US game studio (Snaptapp LLC) building AI-native titles on
                Google Cloud, Vertex AI, and Flutter.
              </p>
            </div>

            <div>
              <h2>Products</h2>
              <ul>
                <li>
                  <a href="/products/">All products</a>
                </li>
                <li>
                  <a
                    href="https://moreorless.snaptapp.us"
                    onClick={() =>
                      trackEvent("outbound_click", {
                        destination: "moreorless.snaptapp.us",
                        location: "footer",
                      })
                    }
                  >
                    More or Less
                  </a>
                </li>
                <li>
                  <a href="/assets/docs/Snaptapp_Google_Cloud_AI_Architecture_Brief.pdf">
                    Architecture Brief (PDF)
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2>Company</h2>
              <ul>
                <li>
                  <a href="/company/">About</a>
                </li>
                <li>
                  <a href="/contact/">Contact</a>
                </li>
                <li>
                  <a href="/support/">Support</a>
                </li>
              </ul>
            </div>

            <div>
              <h2>Legal</h2>
              <ul>
                <li>
                  <a href="/legal/privacy/">Privacy policy</a>
                </li>
                <li>
                  <a href="/legal/cookies/">Cookie policy</a>
                </li>
                <li>
                  <a href="/legal/terms/">Terms of service</a>
                </li>
                <li>
                  <a href="/.well-known/security.txt">Security contact</a>
                </li>
                <li>
                  <a href="/docs/api/">API for agents</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; <span data-year="">2026</span> Snaptapp LLC. All rights reserved.
            </p>
            <ul>
              <li>
                <a href="mailto:hello@snaptapp.us">hello@snaptapp.us</a>
              </li>
              <li>
                <a href="/legal/privacy/">Privacy</a>
              </li>
              <li>
                <a href="/legal/cookies/">Cookies</a>
              </li>
              <li>
                <a href="/legal/terms/">Terms</a>
              </li>
              <li>
                <a href="https://ops.snaptapp.us/admin">Admin</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
