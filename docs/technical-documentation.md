# Assignment 4 Technical Documentation

**Sarah Almanjahi · 202371590 · SWE 363 – Web Engineering**

Assignment 4 begins with the static portfolio developed in Assignments 2 and 3. This document describes the inherited implementation and will be updated as technical changes are completed.

## Architecture

The portfolio is a static page. HTML defines the landmark sections, controls, and project cards. One stylesheet controls presentation and a deferred JavaScript file wires up the document after parsing. GitHub is the only external data source. Form input stays in the browser. The site uses HTML, CSS, and vanilla JavaScript with no build pipeline or backend. The greeting uses the visitor's local hour on page load, changing from morning to afternoon at noon and from afternoon to evening at 18:00.

## GitHub API integration

`loadGitHubRepositories()` uses `fetch()` and `async`/`await` to request the public repositories for `Sarahalmanjahi` with `per_page=100&sort=updated`. GitHub's `Link` header supplies the next page URL. The request sends no credentials. Repository cards use `textContent` and the API's `html_url`, and a document fragment batches rendering after all pages are retrieved.

The live status starts with a loading message. An empty response produces an empty-state message, a non-success HTTP status produces a retry message, and a rejected fetch or unreadable response produces the connection feedback. A missing description uses the Assignment 3 description for the portfolio repository and a generic fallback for other repositories. Unauthenticated requests are subject to GitHub limits. [GitHub REST repository endpoints](https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user)

## Project filtering and sorting

Each card supplies a `data-category`, an ISO completion date in `data-date`, and a name in its heading. JavaFX Game is dated 2024-12-15 and Smart Queue Management System is dated 2025-11-30. Selecting a category updates the in-memory selection. Changing the sort leaves that selection intact.

`updateProjects()` sets the selected button's `aria-pressed` state, sorts the project records, hides nonmatching cards, counts visible cards, and updates the empty-state message. It runs once on load, then on filter and sort events. Chronological sorting compares ISO dates, placing undated cards last and using names to break equal-date ties. Name sorting uses `localeCompare()`. Cards already in the correct position stay in place.

## Theme state

The header theme button uses a stable **Dark mode** accessible label and reports its state through `aria-pressed`. The sun or moon icon and tooltip indicate the next action. JavaScript reads the `portfolio-theme` key at startup and applies `data-theme` to the document root. Missing or invalid preferences resolve to light. Clicks apply and save the new preference. Storage errors leave the current page interactive. CSS variables define both palettes and `color-scheme` matches native controls to the selected theme.

## Contact validation

The form prevents default submission. Validation trims all fields, checks for missing values, checks email syntax, and requires at least two characters for the name and ten for the message. A failed submission shows the first applicable error. Editing revalidates active errors and clears stale confirmation when a new draft begins. A successful submission resets the form and displays a message that the demo sends nothing.

## Responsive design, performance, and accessibility

The project and repository grids use two columns above 700 px and one column at smaller widths. The header navigation stacks on narrow screens and controls and technology badges can wrap. Both original project images have explicit intrinsic dimensions, lazy loading, asynchronous decoding, and a fixed 200 px display box with `object-fit: contain`. The JavaFX JPEG is 1280 × 744 at 38,726 bytes. The queue PNG is 638 × 1204 at 295,710 bytes.

Semantic headings and landmarks, native controls, visible focus, image alternatives, live status messages, and reduced-motion styling support accessibility. The filter container has a group role and an accessible name. The theme icon is decorative because the button itself provides an accessible name. The accessible name of each repository link starts with its visible text and adds the repository name.

## Compatibility and deployment

The implementation targets modern browsers with Fetch, async functions, CSS Grid, and CSS custom properties. Theme switching works on the current page when storage is unavailable. Repository loading requires network access to GitHub. Serve the repository root over HTTP for local development or deploy it to a static host with the same folder structure. The Assignment 4 deployment URL is pending confirmation.

## Verification record

### Assignment 4

On 2026-11-26, Codex reviewed the source and ran a JavaScript syntax check and documentation checks. Assignment 4 browser walkthroughs, live API verification, Lighthouse, cross-browser testing, and assistive-technology checks are pending. Student verification is pending confirmation.

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
