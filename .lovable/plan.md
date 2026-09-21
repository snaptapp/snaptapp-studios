# Snaptapp design-system rebuild

## Outcome
Rebuild every public Snaptapp page in the attached More Or Less design system while preserving all existing copy, links, SEO metadata, discovery files, machine endpoints, and exact URLs. The SNAPTAPP wordmark will become larger and higher-contrast without changing the brand mark.

## What will change
- Replace the current site-wide visual layer with the design system’s surfaces, borders, lime/red/purple/amber accents, Anton display type, Inter body type, and JetBrains Mono labels.
- Create one shared header and footer so navigation, mobile behavior, active states, and the improved wordmark remain consistent on every page and the 404 screen.
- Restyle the homepage, products, company, contact, support, API documentation, privacy, and terms pages using the design system’s components and tokens.
- Keep the real Snaptapp and More or Less artwork already in the project.
- Improve long-form readability with stronger contrast, a comfortable reading width, clearer heading rhythm, scannable tables, contents blocks, and callouts.
- Preserve the current restrained motion and reduced-motion behavior.

## Page treatment
- **Home:** Strong game-studio introduction, prominent product artwork, clear primary actions, and structured product/engineering sections.
- **Products:** Featured More or Less product treatment plus clear game-mode and pipeline sections.
- **Company and contact:** Scannable principles, studio facts, team details, and direct contact channels.
- **Support and API docs:** Documentation-oriented layouts with readable questions, code, links, and notices.
- **Privacy and terms:** Print-safe long-form layouts with stable anchors, tables, metadata, and contents navigation.
- **404/error states:** Match the same shared frame and action styling.

## Technical details
- Use only the attached design system’s components, assets, and token values; do not edit vendor-owned design-system files.
- Move shared presentation into app-owned reusable components, then remove duplicated header/footer markup from route files.
- Keep every route head definition and current canonical/social metadata intact.
- Leave MCP, OAuth, health, discovery documents, redirects, and signing logic untouched.
- Verify all eight public pages plus 404 at desktop and mobile widths, check navigation and long-content overflow, then confirm the latest build is clean.

## Not included
Publishing and retiring the Cloudflare Worker remain separate final steps after the redesigned site is approved.
