import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * React port of the original site.js: sticky header state, mobile nav,
 * scroll reveals and the footer year. Re-runs on every navigation so the
 * behaviour survives client-side routing.
 */
export function useSiteBehaviour() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    document.documentElement.classList.remove("no-js");
    document.documentElement.classList.add("js");

    const cleanups: Array<() => void> = [];

    /* Sticky header shadow/blur once the page scrolls */
    const header = document.querySelector(".site-header");
    if (header) {
      const syncHeader = () => {
        header.classList.toggle("is-stuck", window.scrollY > 8);
      };
      syncHeader();
      window.addEventListener("scroll", syncHeader, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", syncHeader));
    }

    /* Mobile nav */
    const toggle = document.querySelector<HTMLButtonElement>(".nav-toggle");
    const nav = document.getElementById("primary-nav");
    if (toggle && nav) {
      const setNav = (open: boolean) => {
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        nav.classList.toggle("is-open", open);
      };
      const onToggle = () => setNav(toggle.getAttribute("aria-expanded") !== "true");
      const onNavClick = (event: Event) => {
        if ((event.target as HTMLElement).closest("a")) setNav(false);
      };
      const onKeydown = (event: KeyboardEvent) => {
        if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
          setNav(false);
          toggle.focus();
        }
      };
      const wide = window.matchMedia("(min-width: 54.0625rem)");
      const onWide = (event: MediaQueryListEvent) => {
        if (event.matches) setNav(false);
      };

      toggle.addEventListener("click", onToggle);
      nav.addEventListener("click", onNavClick);
      document.addEventListener("keydown", onKeydown);
      wide.addEventListener("change", onWide);

      cleanups.push(() => {
        toggle.removeEventListener("click", onToggle);
        nav.removeEventListener("click", onNavClick);
        document.removeEventListener("keydown", onKeydown);
        wide.removeEventListener("change", onWide);
      });
    }

    /* Scroll reveal */
    const revealables = Array.from(document.querySelectorAll(".reveal"));
    if (revealables.length) {
      if (
        !("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        revealables.forEach((el) => el.classList.add("is-visible"));
      } else {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            });
          },
          { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
        );
        revealables.forEach((el) => observer.observe(el));

        // Safety net: never leave content hidden if the observer never fires.
        const timer = window.setTimeout(() => {
          revealables.forEach((el) => el.classList.add("is-visible"));
          observer.disconnect();
        }, 4000);

        cleanups.push(() => {
          window.clearTimeout(timer);
          observer.disconnect();
        });
      }
    }

    /* Footer year */
    const year = String(new Date().getFullYear());
    document.querySelectorAll("[data-year]").forEach((el) => {
      el.textContent = year;
    });

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);
}
