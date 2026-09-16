/* Snaptapp site behaviour: sticky header state, mobile nav, scroll reveals,
 * footer year. Deferred, dependency-free, and entirely progressive — every
 * page is fully readable and navigable with this file blocked. */
(function () {
  "use strict";

  /* ---- Sticky header shadow/blur once the page scrolls ---- */
  var header = document.querySelector(".site-header");
  if (header) {
    var syncHeader = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
  }

  /* ---- Mobile nav ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    var setNav = function (open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      nav.classList.toggle("is-open", open);
    };

    toggle.addEventListener("click", function () {
      setNav(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setNav(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setNav(false);
        toggle.focus();
      }
    });

    // Reset state if the viewport grows past the mobile breakpoint.
    var wide = window.matchMedia("(min-width: 54.0625rem)");
    var onWide = function (event) {
      if (event.matches) setNav(false);
    };
    if (wide.addEventListener) wide.addEventListener("change", onWide);
    else if (wide.addListener) wide.addListener(onWide);
  }

  /* ---- Scroll reveal ---- */
  var revealables = document.querySelectorAll(".reveal");

  if (!revealables.length) {
    // nothing to do
  } else if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    for (var i = 0; i < revealables.length; i++) {
      revealables[i].classList.add("is-visible");
    }
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );

    revealables.forEach(function (el) {
      observer.observe(el);
    });

    // Safety net: content must never stay hidden because an observer callback
    // did not fire (headless renderers, odd zoom levels, tab restored in the
    // background). After 4s, reveal whatever is left regardless of position.
    window.setTimeout(function () {
      for (var k = 0; k < revealables.length; k++) {
        revealables[k].classList.add("is-visible");
      }
      observer.disconnect();
    }, 4000);
  }

  /* ---- Footer year ---- */
  var years = document.querySelectorAll("[data-year]");
  var now = String(new Date().getFullYear());
  for (var j = 0; j < years.length; j++) {
    years[j].textContent = now;
  }
})();
