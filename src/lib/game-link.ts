// Outbound links to the More or Less game carry UTM tags so Google Analytics
// can attribute game sessions to the studio page and placement that sent them.
// The sites are on separate domains; cross-domain identity depends on the
// GA4 linker being configured on both sites, not a shared cookie.

export const GAME_ORIGIN = "https://moreorless.app";

export function gameUrl(content: string): string {
  const params = new URLSearchParams({
    utm_source: "snaptapp.us",
    utm_medium: "website",
    utm_campaign: "sample_round",
    utm_content: content,
  });
  return `${GAME_ORIGIN}/?${params.toString()}`;
}
