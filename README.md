# Sarah Almanjahi's Portfolio | Assignment 4

**SWE 363 - Web Engineering**

This internship portfolio presents Sarah Almanjahi’s software engineering education at King Fahd University of Petroleum and Minerals (KFUPM), technical skills, and academic work. Assignment 4 extends the static portfolio developed in Assignments 2 and 3 with a CV, interactive project case studies, a live GitHub dashboard, and an accessible contact section.

## Objectives

- Give internship reviewers a clear path to Sarah’s CV, project work, and contact information.
- Explain the problem, contributions, and engineering approach behind each featured project.
- Present live public repository activity through an accessible, responsive dashboard.
- Keep the site usable across screen sizes and both color themes with a lightweight static architecture.

## Features and user guide

| Feature | How to use it |
|---|---|
| Hero and navigation | Read Sarah’s personalized introduction and Summer 2027 internship availability. Use **View Projects** to jump to the project cards or the header links to move between sections. Keyboard users can tab to **Skip to content**. |
| CV and profile links | The hero actions appear in this order: **View Projects**, **GitHub**, **LinkedIn**, and **View CV**. LinkedIn and the PDF open in a new tab. The GitHub icon in the footer opens the same profile as the hero link. |
| About Me | Read Sarah’s introduction and local-time greeting alongside a Quick Facts card with her education, location, expected graduation, and interests. The card stacks below the introduction on narrow screens. |
| Education & Experience | Follow the timeline for KFUPM education, Tuwaiq Club event management and campus tours in 2026, and KFUPM Winter Event volunteering in 2025. |
| Technical Skills | Browse eight icon-led skill cards with individual tags, including separate Frontend Development and Backend Development categories. |
| Certifications & Programs | Find the programs and credentials listed in the CV, along with their issuers. |
| Projects | Browse Color-Match Star Game and Smart Queue Management System. Select **View Project Details** to read the case study and access the full-size screenshot. Use **All**, **Development**, or **Design**, then choose **Newest First**, **Oldest First**, or **Name A–Z**. The project count updates as you change either control. |
| GitHub Dashboard | Check **Public Projects**, **GitHub Stars**, and **Primary Languages** for public non-fork repositories. **Language Breakdown** shows repository shares among non-forks with a reported primary language. **Recent Projects** lists up to four recently updated public repositories, including forks. Open any recent link or use **View on GitHub** in the full list. Select **Retry GitHub** if it appears after a failed request. |
| Light and dark mode | Select the sun or moon button in the header. The site defaults to light mode and saves your preference for the same site origin when browser storage is available. |
| Contact | Use **Send Email** to open a blank email draft or **Copy Email** to copy the displayed address. **Send via Email** validates a name of at least two characters, a valid email address, and a message of at least ten characters, then opens a prefilled draft. Review and send it in your email app. |
| Scroll navigation | The header highlights the current section. Use **Back to Top** in the footer to return to the top. Section reveals and hover transitions respect your system’s reduced-motion preference. |

## Technologies and folder structure

The site uses HTML, CSS, vanilla JavaScript, the GitHub REST API, and browser localStorage. It has no build step, package dependencies, or backend.

| Path | Purpose |
|---|---|
| `index.html` | Page structure, controls, project metadata, and contact form |
| `css/styles.css` | Themes, responsive layout, and interaction styles |
| `js/script.js` | Theme persistence, local greeting, project controls, GitHub dashboard, form validation, and scroll interactions |
| `assets/images/` | JavaFX game JPEG and optimized queue prototype WebP |
| `assets/cv/sarah-almanjahi-cv.pdf` | PDF used by both CV actions |
| `docs/` | Technical documentation and AI usage report |
| `.gitignore` | Keeps private evidence folders and assignment evidence ZIPs out of Git |

## Local setup

1. Clone the Assignment 4 repository or download and extract its ZIP.
2. Open the project root, the folder containing `index.html`, in VS Code or in a terminal.
3. If Python is installed, run `python -m http.server 8000` from that folder. Alternatively, open `index.html` with Live Server in VS Code.
4. Open `http://localhost:8000/` for the Python server, or the URL shown by Live Server. Keep the server running during testing.
5. Connect to the internet to load public GitHub data. No build, API credentials, or environment configuration are required.

## Testing

Sarah confirmed that she personally tested the website and her five modifications, and previously confirmed checking the internship indicator in both themes and at different screen sizes. Earlier Codex regression checks ran in headless Chrome and Edge with mocked GitHub data. Specific student test environments and feature-by-feature results were not supplied. Fresh Lighthouse and formal HTML validation remain unrecorded.

Submit the contact form empty, then try a malformed email and a short message. Correct the fields and verify that **Send via Email** prepares a draft with the right recipient, subject, name, email, and message. Check **Send Email** and **Copy Email**, including the temporary confirmation. Try keyboard focus, active section links, and **Back to Top**. Emulate reduced motion in DevTools and confirm the section reveals are suppressed.

Open **GitHub Dashboard** with internet access. Check that the counts and recent links populate and that language bars have readable text labels in both themes. Language percentages use only non-fork repositories with a reported primary language. To check recovery, block `https://api.github.com/*` in DevTools and reload, then remove the block and select **Retry GitHub**. A request that stalls for ten seconds also offers a retry.

In Projects, tab to each **View Project Details** control and press Enter or Space to toggle it. Check the screenshot links and try changing the filter and sort with a panel open. Repeat at a narrow width and in both themes.

For a browser walkthrough, start with Tab and activate **Skip to content**. Use the header links to reach the timeline, skills, and certifications. Compare the entries with the CV and check that the cards fit at narrow widths in both themes. Reload to check theme persistence, then check the greeting, CV actions, project filters and sorts, GitHub repository loading, and contact form feedback. Record the browser, viewport, date, and results. See the [verification record](docs/technical-documentation.md#verification-record) for completed checks and pending coverage.

## Deployment

The Assignment 4 portfolio is published on GitHub Pages. [Visit the live portfolio](https://sarahalmanjahi.github.io/202371590-sarahalmanjahi-assignment4/).

## AI usage

OpenAI Codex (GPT-6) assisted with planning, implementation, documentation, and automated verification. Sarah manually updated the hero, About Me, skills cards, and CV controls, and confirmed personally testing the website and her changes. The [AI Usage Report](docs/ai-usage-report.md#student-modifications) separates the student work from AI assistance.

## Author

**Sarah Almanjahi** · Student ID **202371590**<br>
Software Engineering, King Fahd University of Petroleum and Minerals
