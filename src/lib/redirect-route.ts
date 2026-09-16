/**
 * Port of the Worker's public/_redirects rules: short links and friendly
 * aliases keep working with the exact same status codes.
 */
export function redirectHandlers(location: string, status: 301 | 302) {
  const handle = () =>
    new Response(null, {
      status,
      headers: {
        Location: location,
        "Cache-Control": status === 301 ? "public, max-age=3600" : "no-store",
      },
    });

  return { GET: handle, HEAD: handle };
}
