/* Runs synchronously in <head> so the reveal start state is applied before the
 * first paint. Kept separate from site.js (and inline-script free) so the CSP
 * can stay at script-src 'self'. */
document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");
