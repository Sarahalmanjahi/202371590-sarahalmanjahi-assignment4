# Sarah Almanjahi's Portfolio | Assignment 4

**SWE 363 - Web Engineering**

This static portfolio introduces Sarah Almanjahi, a Software Engineering student at King Fahd University of Petroleum and Minerals (KFUPM). Assignment 4 starts from the portfolio developed in Assignments 2 and 3. The first Assignment 4 stage adds a portfolio hero, responsive navigation, and coordinated light and dark styling.

## Features and user guide

| Feature | How to use it |
|---|---|
| Hero and navigation | Use **View Projects** to jump to the project cards, **GitHub** to open the profile, or the header links to move between sections. Keyboard users can tab to **Skip to content**. |
| About Me | Read the introduction and a greeting based on your local time. |
| Projects | Browse JavaFX Game and Smart Queue Management System. Use **All**, **Development**, or **Design**, then choose **Newest First**, **Oldest First**, or **Name A–Z**. The project count updates as you change either control. |
| GitHub Repositories | Scroll to the repository section and use **View on GitHub** to open a public repository. The section displays loading, empty, and error feedback as applicable. |
| Light and dark mode | Select the sun or moon button in the header. The site defaults to light mode and saves your preference for the same site origin when browser storage is available. |
| Contact demo | Enter a name of at least two characters, an email address, and a message of at least ten characters. The form displays validation feedback and clears the fields after a successful check. It runs entirely in the browser and sends no messages. |

The hero action row is ready for LinkedIn and CV links in a later stage.

## Technologies and folder structure

The site uses HTML, CSS, vanilla JavaScript, the GitHub REST API, and browser localStorage. It has no build step, package dependencies, or backend.

| Path | Purpose |
|---|---|
| `index.html` | Page structure, controls, project metadata, and contact form |
| `css/styles.css` | Themes, responsive layout, and interaction styles |
| `js/script.js` | Theme, greeting, project controls, repository fetching, and form validation |
| `assets/images/` | Project images |
| `docs/` | Technical documentation and AI usage report |
| `.gitignore` | Ignore rules for the root evidence folders and the legacy Assignment 3 ZIP |

## Local setup

1. Clone the Assignment 4 repository or download and extract its ZIP.
2. Serve the project folder over HTTP. For example, run `python -m http.server 8000` from the project root and open `http://localhost:8000/`. You can also open `index.html` with Live Server in VS Code.
3. Connect to the internet to load the public GitHub repositories. No API credentials are required.

## Testing

For a browser walkthrough, start with Tab and activate **Skip to content**. Check the hero and header links, wrapping on narrow screens, and both themes. Reload to check theme persistence, then check the greeting, project filters and sorts, GitHub repository loading, and contact form feedback. Record the browser, viewport, date, and results. See the [verification record](docs/technical-documentation.md#verification-record) for completed checks and pending coverage.

## Deployment

Assignment 4 live URL pending deployment confirmation. Add the verified URL here after deployment.

## AI usage

OpenAI Codex (GPT-6) reviewed the inherited project, drafted the Assignment 4 documentation, and implemented the first visual redesign. The [AI Usage Report](docs/ai-usage-report.md) logs Assignment 4 assistance and records student modifications and verification once confirmed.

## Author

**Sarah Almanjahi** · Student ID **202371590**<br>
Software Engineering, King Fahd University of Petroleum and Minerals
