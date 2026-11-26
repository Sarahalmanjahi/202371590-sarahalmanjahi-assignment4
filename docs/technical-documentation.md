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

The About section uses the CV’s internship goal and examples from the portfolio; the local-time greeting still uses the existing script. The Education & Experience timeline uses a semantic list. Its dated entries use HTML `time` elements for the CV’s education range and career fair year. Tuwaiq Club and the other undated entries display their roles and organizations with no inferred dates.

Technical Skills uses the CV and existing portfolio as sources. Certifications & Programs lists the CV’s three entries with their issuers. Both sections share a CSS Grid layout that fits as many cards as space allows and collapses to one column at narrow widths. The timeline rail, markers, cards, and metadata use the existing light and dark theme variables. Header anchors reach each new section directly. All new content is rendered in HTML.

## GitHub API integration

`loadGitHubRepositories()` uses `fetch()` and `async`/`await` to request the public repositories for `Sarahalmanjahi` with `per_page=100&sort=updated`. GitHub's `Link` header supplies the next page URL. The request sends no credentials. Repository cards use `textContent` and the API's `html_url`, and a document fragment batches rendering after all pages are retrieved.

The live status starts with a loading message. An empty response produces an empty-state message, a non-success HTTP status produces a retry message, and a rejected fetch or unreadable response produces the connection feedback. A missing description uses the Assignment 3 description for the portfolio repository and a generic fallback for other repositories. Unauthenticated requests are subject to GitHub limits. [GitHub REST repository endpoints](https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user)

## Project filtering and sorting

Each card supplies a `data-category`, an ISO completion date in `data-date`, and a name in its heading. JavaFX Game is dated 2024-12-15 and Smart Queue Management System is dated 2025-11-30. Selecting a category updates the in-memory selection. Changing the sort leaves that selection intact.

`updateProjects()` sets the selected button's `aria-pressed` state, sorts the project records, hides nonmatching cards, counts visible cards, and updates the empty-state message. It runs once on load, then on filter and sort events. Chronological sorting compares ISO dates, placing undated cards last and using names to break equal-date ties. Name sorting uses `localeCompare()`. Cards already in the correct position stay in place.

## Theme state

The header theme button uses a stable **Dark mode** accessible label and reports its state through `aria-pressed`. The sun or moon icon and tooltip indicate the next action. JavaScript reads the `portfolio-theme` key at startup and applies `data-theme` to the document root. Missing or invalid preferences resolve to light. Clicks apply and save the new preference. Storage errors leave the current page interactive. CSS variables define neutral surfaces, rose accents, text, borders, focus indicators, and feedback colors for both palettes. The `color-scheme` property matches native controls to the selected theme.

## Contact validation

The form prevents default submission. Validation trims all fields, checks for missing values, checks email syntax, and requires at least two characters for the name and ten for the message. A failed submission shows the first applicable error. Editing revalidates active errors and clears stale confirmation when a new draft begins. A successful submission resets the form and displays a message that the demo sends nothing.

## Responsive design, performance, and accessibility

The project and repository grids use two columns above 700 px and one column at smaller widths. The header places the site name above the navigation and theme toggle at 700 px or below. Fluid gutters and typography scale with the viewport. Hero actions, filters, and technology badges can wrap. Georgia and system UI fonts use the device's installed fonts. Both original project images have explicit intrinsic dimensions, lazy loading, asynchronous decoding, and a fixed 200 px display box with `object-fit: contain`. The JavaFX JPEG is 1280 × 744 at 38,726 bytes. The queue PNG is 638 × 1204 at 295,710 bytes.

Semantic headings and landmarks, native controls, visible focus, image alternatives, and live status messages support accessibility. This stage uses no animated effects. The filter container has a group role and an accessible name. The theme icon is decorative because the button itself provides an accessible name. The accessible name of each repository link starts with its visible text and adds the repository name.

## Compatibility and deployment

The implementation targets modern browsers with Fetch, async functions, CSS Grid, and CSS custom properties. Theme switching works on the current page when storage is unavailable. Repository loading requires network access to GitHub. Serve the repository root over HTTP for local development or deploy it to a static host with the same folder structure. The Assignment 4 deployment URL is pending confirmation.

## Verification record

### Assignment 4

On 2026-11-26, Codex reviewed the source and ran a JavaScript syntax check and documentation checks. Assignment 4 browser walkthroughs, live API verification, Lighthouse, cross-browser testing, and assistive-technology checks are pending. Student verification is pending confirmation.

For the first-stage redesign on 2026-11-26, Codex ran headless Chrome against a local HTTP server with a mocked GitHub response. Checks passed for the hero links in the rendered markup, keyboard skip-link activation and focus transfer, no horizontal overflow and the expected grid at 320 px and 1280 px, theme switching and dark-theme persistence across navigation, the greeting, mocked repository rendering, all three sort modes, a category filter and count, and invalid and successful contact submissions. The syntax and diff checks also passed. Live GitHub, visual and cross-browser walkthroughs, assistive technology, and new Lighthouse results are pending.

Static checks for the profile and CV update verified the PDF signature, both CV link attributes, both GitHub link destinations in the markup, the footer accessible label, and local anchor and icon references. JavaScript syntax and `git diff --check` passed. Live GitHub access and browser checks for PDF opening, downloading, and appearance in both themes are pending.

For the About and profile sections update on 2026-11-26, Codex checked in headless Chrome that the header links resolved, the timeline and card counts matched the markup, and the skills grid used one column at 320 px. No horizontal overflow was detected at 320, 390, 701, or 1280 px. The keyboard skip link, theme persistence, greeting, three project sort modes, filtering and count, contact validation, and mocked repository rendering passed regression checks. Visual review in both themes and student testing are pending.

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
