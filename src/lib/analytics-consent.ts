// Analytics consent helpers. Google Analytics / Tag Manager are only loaded
// after the visitor explicitly allows analytics cookies.

export type ConsentChoice = "granted" | "denied";

const STORAGE_KEY = "snaptapp:analytics-consent";

export const GA_MEASUREMENT_ID =
  import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY ?? "G-7QMJL9732Z";

const GTM_ID = "GTM-P6VT3TP3";

type Gtag = (...args: unknown[]) => void;

interface AnalyticsWindow extends Window {
  dataLayer?: unknown[];
  gtag?: Gtag;
  __snaptappAnalyticsLoaded?: boolean;
}

export function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

function writeConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Storage unavailable (private mode) — the choice applies to this session only.
  }
}

function ensureGtag(): Gtag {
  const w = window as AnalyticsWindow;
  w.dataLayer = w.dataLayer || [];
  if (!w.gtag) {
    w.gtag = function gtag(...args: unknown[]) {
      w.dataLayer!.push(args);
    };
  }
  return w.gtag;
}

/** Loads gtag.js and Google Tag Manager once. */
export function loadAnalytics() {
  if (typeof window === "undefined") return;
  const w = window as AnalyticsWindow;
  const gtag = ensureGtag();
  gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  if (w.__snaptappAnalyticsLoaded) return;
  w.__snaptappAnalyticsLoaded = true;

  const ga = document.createElement("script");
  ga.async = true;
  ga.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(ga);

  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);

  const gtm = document.createElement("script");
  gtm.async = true;
  gtm.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  w.dataLayer!.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  document.head.appendChild(gtm);
}

/** Records a denial and tells any loaded tag to stop storing analytics data. */
export function denyAnalytics() {
  if (typeof window === "undefined") return;
  ensureGtag()("consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export function setConsent(choice: ConsentChoice) {
  writeConsent(choice);
  if (choice === "granted") loadAnalytics();
  else denyAnalytics();
}

/** Applies a previously stored choice on load. */
export function applyStoredConsent() {
  if (readConsent() === "granted") loadAnalytics();
}

/**
 * Sends a custom event to Google Analytics. No-op unless the visitor has
 * allowed analytics and the tag is loaded — events are never queued for
 * visitors who declined or have not chosen yet.
 */
export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const w = window as AnalyticsWindow;
  if (!w.__snaptappAnalyticsLoaded || !w.gtag) return;
  w.gtag("event", name, params);
}
