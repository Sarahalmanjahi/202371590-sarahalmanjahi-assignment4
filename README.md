# Sarah Almanjahi's Portfolio | Assignment 4

**SWE 363 - Web Engineering**

This static portfolio introduces Sarah Almanjahi, a Software Engineering student at King Fahd University of Petroleum and Minerals (KFUPM). Assignment 4 starts from the portfolio developed in Assignments 2 and 3. The first Assignment 4 stage adds a portfolio hero, responsive navigation, and coordinated light and dark styling.

## Features and user guide

| Feature | How to use it |
|---|---|
| Hero and navigation | Use **View Projects** to jump to the project cards, **GitHub** to open the profile, or the header links to move between sections. Keyboard users can tab to **Skip to content**. |
| About Me | Read about Sarah’s engineering interests and internship goals, alongside a greeting based on your local time. |
| Education & Experience | Follow the timeline for KFUPM education, Tuwaiq Club event management and campus tours in 2026, and KFUPM Winter Event volunteering in 2025. |
| Technical Skills | Browse seven skill categories sourced from the CV and portfolio projects. |
| Certifications & Programs | Find the programs and credentials listed in the CV, along with their issuers. |
| Projects | Browse Color-Match Star Game and Smart Queue Management System. Select **View Project Details** to read the case study and access the full-size screenshot. Use **All**, **Development**, or **Design**, then choose **Newest First**, **Oldest First**, or **Name A–Z**. The project count updates as you change either control. |
| GitHub Dashboard | See live non-fork repository, star, and primary-language counts, plus a language breakdown and up to four recently updated repositories. The full public repository list still includes forks and links to GitHub. |
| Light and dark mode | Select the sun or moon button in the header. The site defaults to light mode and saves your preference for the same site origin when browser storage is available. |
| Contact | Use **Email Sarah** to open your email app. **Check Message** runs a local demo with field-specific feedback for a name of at least two characters, a valid email address, and a message of at least ten characters. A valid check clears the demo fields without sending anything. |
| Scroll navigation | The header highlights the current section. **Back to Top** appears after scrolling down. Section reveals and hover transitions respect your system’s reduced-motion preference. |

Use **View CV** in the hero to open the PDF in a new tab or **Download CV** to save a copy. The GitHub icon in the footer opens the same profile as the hero link. LinkedIn is pending the profile URL.

## Technologies and folder structure

The site uses HTML, CSS, vanilla JavaScript, the GitHub REST API, and browser localStorage. It has no build step, package dependencies, or backend.

| Path | Purpose |
|---|---|
| `index.html` | Page structure, controls, project metadata, and contact form |
| `css/styles.css` | Themes, responsive layout, and interaction styles |
| `js/script.js` | Theme, greeting, project controls, repository fetching, and form validation |
| `assets/images/` | Project images |
| `assets/cv/sarah-almanjahi-cv.pdf` | PDF used by both CV actions |
| `docs/` | Technical documentation and AI usage report |
| `.gitignore` | Ignore rules for the root evidence folders and the legacy Assignment 3 ZIP |

## Local setup

1. Clone the Assignment 4 repository or download and extract its ZIP.
2. Serve the project folder over HTTP. For example, run `python -m http.server 8000` from the project root and open `http://localhost:8000/`. You can also open `index.html` with Live Server in VS Code.
3. Connect to the internet to load the public GitHub repositories. No API credentials are required.

## Testing

Submit the contact demo empty, then try a malformed email and a short message. Check each field’s feedback, correct the entries, and verify the validation-only status. Try **Email Sarah**, keyboard focus, active section links, and **Back to Top**. Emulate reduced motion in DevTools and confirm the section reveals are suppressed.

Open **GitHub Dashboard** with internet access. Check that the counts and recent links populate and that language bars have readable text labels in both themes. Language percentages use only non-fork repositories with a reported primary language. To check network feedback, use DevTools request blocking for `https://api.github.com/*` and reload, then remove the block and reload.

In Projects, tab to each **View Project Details** control and press Enter or Space to toggle it. Check the screenshot links and try changing the filter and sort with a panel open. Repeat at a narrow width and in both themes.

For a browser walkthrough, start with Tab and activate **Skip to content**. Use the header links to reach the timeline, skills, and certifications. Compare the entries with the CV and check that the cards fit at narrow widths in both themes. Reload to check theme persistence, then check the greeting, CV actions, project filters and sorts, GitHub repository loading, and contact form feedback. Record the browser, viewport, date, and results. See the [verification record](docs/technical-documentation.md#verification-record) for completed checks and pending coverage.

## Deployment

Assignment 4 live URL pending deployment confirmation. Add the verified URL here after deployment.

## AI usage

OpenAI Codex (GPT-6) reviewed the inherited project, drafted the Assignment 4 documentation, and implemented the first visual redesign. The [AI Usage Report](docs/ai-usage-report.md) logs Assignment 4 assistance and records student modifications and verification once confirmed.

## Author

**Sarah Almanjahi** · Student ID **202371590**<br>
Software Engineering, King Fahd University of Petroleum and Minerals
