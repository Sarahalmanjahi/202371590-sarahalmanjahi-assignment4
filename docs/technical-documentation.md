# Assignment 4 Technical Documentation

**Sarah Almanjahi · 202371590 · SWE 363 – Web Engineering**

Assignment 4 begins with the static portfolio developed in Assignments 2 and 3. This document covers the current implementation, including the first-stage hero, navigation, and visual redesign.

## Architecture

The portfolio is a static page. HTML defines the landmark sections, controls, and project cards. One stylesheet controls presentation and a deferred JavaScript file wires up the document after parsing. GitHub is the only external data source. Form input stays in the browser. The site uses HTML, CSS, and vanilla JavaScript with no build pipeline or backend. The greeting uses the visitor's local hour on page load, changing from morning to afternoon at noon and from afternoon to evening at 18:00.

## Hero and navigation

The hero is the page's main heading and identifies Sarah and her KFUPM role. It links to the existing Projects section and to the GitHub account used by the repository loader. The action row wraps to accommodate the profile and CV links. The header uses a labeled navigation landmark and keeps all navigation links visible and able to wrap on small screens. The keyboard skip link moves focus to the main landmark. The theme control stays adjacent to the navigation and has a 44 px target at the default root font size.

## Profile and CV links

The hero and footer use the existing HTTPS GitHub profile URL. Both links render the same decorative SVG mark in the current text color. Visible hero text and the footer link's accessible label describe the destination. The footer icon uses the existing button hover and focus styles.

Both CV links point to `assets/cv/sarah-almanjahi-cv.pdf` using a relative path. **View CV** opens a new tab with `target="_blank"` and `rel="noopener"`, and its accessible name announces the new tab. **Download CV** uses the native `download` attribute. The hero actions and footer profile controls wrap at narrow widths. LinkedIn is pending a profile URL.

## About, education, experience, skills, and credentials

The About section uses the CV’s internship goal and examples from the portfolio. The local-time greeting uses the existing script. The Education & Experience timeline uses a semantic list and HTML `time` elements. The CV supplies the education range and career fair year. Sarah supplied the years for Tuwaiq Club and Campus Tours (2026) and the KFUPM Winter Event (2025).

Technical Skills uses the CV and existing portfolio as sources. Certifications & Programs lists the CV’s three entries with their issuers. Both sections share a CSS Grid layout that fits as many cards as space allows and collapses to one column at narrow widths. The timeline rail, markers, cards, and metadata use the existing light and dark theme variables. Header anchors reach each new section directly. All new content is rendered in HTML.

## GitHub API integration

`loadGitHubRepositories()` uses `fetch()` and `async`/`await` to request the public repositories for `Sarahalmanjahi` with `per_page=100&sort=updated&direction=desc`. GitHub's `Link` header supplies the next page URL. The dashboard and repository cards share this single pagination sequence. Requests send no credentials. Repository cards use `textContent` and the API's `html_url`, and a document fragment batches rendering after all pages are retrieved.

The dashboard counts non-fork repositories, sums their `stargazers_count` values, and counts distinct non-empty `language` values. Each language's repository count is divided by the number of non-fork repositories with a reported language. Text percentages are rounded to one decimal place, and decorative bars use the calculated proportion. The percentages describe each repository's primary language. The recent list takes the first four repositories in API update order, including forks. The full card list continues to show all returned public repositories.

A status region announces loading, a successful count, empty results, request failures, and rate limits. The dashboard is hidden until all pages load successfully and at least one repository is returned. When repositories have no reportable non-fork languages, the language card shows an explanatory message. HTTP 429 and rate-limited 403 responses receive a wait message with no automatic retry. A 403 is classified using the remaining-limit header, a retry header, or a rate-limit message in the response. Other HTTP failures and connection or response failures have separate feedback. The existing repository description fallbacks are preserved. [GitHub REST repository endpoints](https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user) [GitHub REST API rate limits](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api)

## Interactive project case studies

Each project card presents a course and category label, overview, technology badges, and the existing screenshot. A native `details` element with a project-specific `summary` label expands inline. The browser handles keyboard input and expansion state. The case studies cover objectives, contributions, features, and documented engineering approaches. Each panel links to the same local image used in the card for full-size viewing.

The disclosure styles reuse the theme surface, accent, and focus colors. Grid items align at the top so opening one panel leaves the other card at its natural height. The case studies require no additional JavaScript or dependencies.

## Project filtering and sorting

Each card supplies a `data-category`, an ISO completion date in `data-date`, and a name in its heading. Color-Match Star Game is dated 2024-12-15 and Smart Queue Management System is dated 2025-11-30. Selecting a category updates the in-memory selection. Changing the sort leaves that selection intact.

`updateProjects()` sets the selected button's `aria-pressed` state, sorts the project records, hides nonmatching cards, counts visible cards, and updates the empty-state message. It runs once on load, then on filter and sort events. Chronological sorting compares ISO dates, placing undated cards last and using names to break equal-date ties. Name sorting uses `localeCompare()`. Cards already in the correct position stay in place.

## Theme state

The header theme button uses a stable **Dark mode** accessible label and reports its state through `aria-pressed`. The sun or moon icon and tooltip indicate the next action. JavaScript reads the `portfolio-theme` key at startup and applies `data-theme` to the document root. Missing or invalid preferences resolve to light. Clicks apply and save the new preference. Storage errors leave the current page interactive. CSS variables define neutral surfaces, rose accents, text, borders, focus indicators, and feedback colors for both palettes. The `color-scheme` property matches native controls to the selected theme.

## Contact and validation

The contact layout pairs a direct `mailto:` link using the CV address with a local form demo. The two cards stack on narrower screens. LinkedIn is pending the profile URL.

The submit control starts disabled and is enabled after the JavaScript listeners are installed. The form prevents default submission and trims and validates each field independently. Each inline error is referenced by its input’s `aria-describedby`. Invalid inputs carry `aria-invalid`, and submitting moves focus to the first invalid input. Editing an invalid field rechecks just that field. A valid submission resets the demo and reports validation through a polite status region. Sending a message uses the separate email link.

## Scroll interactions

A passive scroll listener schedules one navigation update per animation frame. The latest linked section above a reading line in the viewport receives `aria-current="location"`. The header is sticky on sufficiently wide and tall viewports. Back to Top is a native fragment link that becomes available after scrolling three quarters of a viewport and remains visible while it has keyboard focus.

IntersectionObserver adds a one-time reveal class when a linked section enters the viewport. Content is visible by default, so it remains readable if scripts or the observer are unavailable. CSS applies the reveals and hover transitions only under `prefers-reduced-motion: no-preference`.

## Responsive design, performance, and accessibility

The project and repository grids use two columns above 700 px and one column at smaller widths. The header places the site name above the navigation and theme toggle at 700 px or below. Fluid gutters and typography scale with the viewport. Hero actions, filters, and technology badges can wrap. Georgia and system UI fonts use the device's installed fonts. Both original project images have explicit intrinsic dimensions, lazy loading, asynchronous decoding, and a fixed 200 px display box with `object-fit: contain`. The JavaFX JPEG is 1280 × 744 at 38,726 bytes. The queue PNG is 638 × 1204 at 295,710 bytes.

Semantic headings and landmarks, the existing skip link, native controls, visible focus, image alternatives, and live status messages support accessibility. The filter container has a group role and an accessible name. The theme icon is decorative because the button itself provides an accessible name. The accessible name of each repository link starts with its visible text and adds the repository name.

## Compatibility and deployment

The implementation targets modern browsers with Fetch, async functions, CSS Grid, and CSS custom properties. Theme switching works on the current page when storage is unavailable. Repository loading requires network access to GitHub. Serve the repository root over HTTP for local development or deploy it to a static host with the same folder structure. The Assignment 4 deployment URL is pending confirmation.

## Verification record

### Assignment 4

On 2026-11-26, Codex reviewed the source and ran a JavaScript syntax check and documentation checks. Assignment 4 browser walkthroughs, live API verification, Lighthouse, cross-browser testing, and assistive-technology checks are pending. Student verification is pending confirmation.

For the first-stage redesign on 2026-11-26, Codex ran headless Chrome against a local HTTP server with a mocked GitHub response. Checks passed for the hero links in the rendered markup, keyboard skip-link activation and focus transfer, no horizontal overflow and the expected grid at 320 px and 1280 px, theme switching and dark-theme persistence across navigation, the greeting, mocked repository rendering, all three sort modes, a category filter and count, and invalid and successful contact submissions. The syntax and diff checks also passed. Live GitHub, visual and cross-browser walkthroughs, assistive technology, and new Lighthouse results are pending.

Static checks for the profile and CV update verified the PDF signature, both CV link attributes, both GitHub link destinations in the markup, the footer accessible label, and local anchor and icon references. JavaScript syntax and `git diff --check` passed. Live GitHub access and browser checks for PDF opening, downloading, and appearance in both themes are pending.

For the About and profile sections update on 2026-11-26, Codex checked in headless Chrome that the header links resolved, the timeline and card counts matched the markup, and the skills grid used one column at 320 px. No horizontal overflow was detected at 320, 390, 701, or 1280 px. The keyboard skip link, theme persistence, greeting, three project sort modes, filtering and count, contact validation, and mocked repository rendering passed regression checks. Visual review in both themes and student testing are pending.

For the interactive case studies on 2026-11-26, Codex used headless Chrome to verify that both disclosures start closed, Enter opens a focused disclosure, and Space closes it. An expanded card fit at 320 and 1280 px. Checks also covered screenshot link targets in the markup, expansion state after filtering and sorting, the result count and a simulated empty category, all sort options, and theme persistence. GitHub was mocked during the regression checks. Student verification and a visual walkthrough remain pending.

For the GitHub dashboard on 2026-11-26, headless Chrome verified totals, language percentages, recent order, and the full card list using two mocked API pages and exactly two requests per load. Additional cases covered zero repositories, no reported languages, HTTP 429, primary and secondary rate-limit HTTP 403 responses, HTTP 500, and a network failure. Layout, theme persistence, project controls, and contact validation passed regression checks. Live GitHub access and student verification remain pending.

For the contact and accessibility update on 2026-11-26, headless Chrome verified the email link destination, per-field errors and correction, first-invalid focus, active section highlighting, Back to Top, reduced motion, and static visibility with the script blocked. Existing project, dashboard, keyboard skip-link, contact reset, and theme persistence checks passed. Calculated contrast for the reviewed text pairs was at least 5.73:1 in light mode and 7.48:1 in dark mode. The reviewed focus and control boundaries were at least 4.13:1 in light mode and 4.45:1 in dark mode. Manual assistive-technology and student checks remain pending.

### Assignment 4 technical review

On 2026-11-26, Codex inspected `index.html`, `css/styles.css`, and `js/script.js` and ran local headless Chrome and Edge tests. The automated checks covered layouts at 320, 390, 701, 768, 1024, and 1280 px; keyboard skip-link and disclosure behavior; theme persistence; project filtering, sorting, and a simulated empty category; field validation and first-invalid focus; active navigation, Back to Top, reduced motion, and static content visibility with JavaScript blocked. Both browsers passed the GitHub dashboard checks with mocked pagination, exact request counts, language and star calculations, recent ordering, empty and missing-language responses, rate limits, server errors, and connection failure. The local screenshot and PDF requests succeeded. Markup checks covered common ID references, heading count, and CV attributes. JavaScript syntax and the Git diff check passed.

| Finding | Severity | Evidence and proposed follow-up |
|---|---|---|
| Back to Top can overlap an input on narrow screens. | High | Headless Chrome measured about 97 by 38 px of overlap with the email field at 320 by 568 px in one scroll position. Move the control into a reserved area or suppress it while it would obscure form controls, then retest with touch and keyboard focus. |
| LinkedIn is unavailable and live GitHub access is unverified. | Medium | Source inspection found no LinkedIn URL. Both GitHub profile links target the configured account. Attempts to reach the live profile and API from the review environment were unsuccessful. Supply the LinkedIn URL and verify both profiles and the live dashboard. |
| A stalled GitHub request can leave loading visible. | Medium | Source inspection found no fetch deadline. Introduce a bounded request and verify timeout and retry behavior with a controlled delayed response. |
| Queue screenshot is the main image optimization opportunity. | Low | The queue PNG is 295,710 bytes and the game JPEG is 38,726 bytes. Both already declare dimensions, lazy loading, and async decoding. Compare a WebP preview for size and text legibility before replacing the PNG. The 514,386-byte CV is fetched on demand. |
| Minor code cleanup is available. | Low | Source inspection found mixed JavaScript section-comment styles and no clearly unreachable code or duplicated API calls. Standardize headers, document the scroll reading line and language denominator, and keep the shared page logic. |

The project has an always-visible wrapping navigation rather than a separate collapsible mobile menu. The official grading rubric was unavailable in the workspace. Live GitHub, CV new-tab viewing and download behavior, mail-client launch, Firefox, Safari, physical-device touch, screen readers, a formal HTML conformance check, and fresh Lighthouse audits remain unverified. Sampled text contrast minima were 5.73:1 in light mode and 7.48:1 in dark mode. Sampled focus and control boundary minima were 4.13:1 and 4.45:1, respectively. Student verification is pending. This review made documentation changes only.

### Inherited Assignment 3 results

The following checks were performed by Codex on 2026-11-21 during Assignment 3.

| Check | Result |
|---|---|
| JavaScript syntax, markup references, and local assets | Node syntax check passed. Local asset paths, navigation anchors, form label targets, JavaScript element IDs, and documentation links resolved. |
| Live GitHub endpoint | A separate unauthenticated HTTP request returned status 200 and three public repositories. |
| GitHub UI | Headless Chrome with mocked responses passed loading, two-page rendering, description fallbacks, empty results, HTTP failure, and network failure. |
| Project controls | Headless Chrome passed the initial count, newest and oldest sorting, and a category filter combined with sorting. Earlier Node checks covered all sort modes and the empty state. |
| Theme | Pressing Space on the focused toggle switched to dark mode. Headless Chrome restored it after reload. Earlier Node checks covered invalid preferences and unavailable storage. |
| Contact form | Headless Chrome showed required-field and minimum-message feedback, cleared stale feedback, and reset the form after validation. Earlier Node checks covered email format and both trimmed minimum lengths. |
| Layout and images | Headless Chrome checked the one-column project grid at 390 px, two-column grid at 1280 px, and that both images loaded. No uncaught JavaScript exceptions were observed in the tested flows. |
| Evidence protection | Git recognized both private evidence directories and the required ZIP filename as ignored. |

### Lighthouse results

Lighthouse 13.6.0 audited the local HTTP site on 2026-11-21 after the repository link labels were corrected. These are automated lab measurements from one run per device preset.

| Preset | Performance | Accessibility | Largest Contentful Paint | Cumulative Layout Shift |
|---|---:|---:|---:|---:|
| Mobile | 100/100 | 100/100 | 0.99 s | 0.036 |
| Desktop | 100/100 | 100/100 | 0.57 s | 0.021 |

The label-content-name check passed in both final runs. For an Assignment 4 walkthrough, see [Testing in the README](../README.md#testing).
