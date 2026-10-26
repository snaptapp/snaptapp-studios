// Outbound links to the More or Less game carry UTM tags so Google Analytics
// can attribute game sessions to the studio page and placement that sent them.
// Both sites share GA4 property G-885KHVT2FY, and as subdomains of snaptapp.us
// they share the _ga cookie, so a tagged click continues the same visitor's
// journey with the demo as its session source.

export const GAME_ORIGIN = "https://moreorless.snaptapp.us";

export function gameUrl(content: string): string {
  const params = new URLSearchParams({
    utm_source: "snaptapp.us",
    utm_medium: "website",
    utm_campaign: "sample_round",
    utm_content: content,
  });
  return `${GAME_ORIGIN}/?${params.toString()}`;
}
