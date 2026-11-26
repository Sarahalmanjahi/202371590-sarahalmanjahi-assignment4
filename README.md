# Sarah Almanjahi’s Portfolio

**SWE 363 – Web Engineering | Assignment 3 – Advanced Functionality**

This portfolio introduces Sarah Almanjahi, a Software Engineering student at King Fahd University of Petroleum and Minerals (KFUPM). It extends the Assignment 2 portfolio with live GitHub repository data, combined project filtering and sorting, a persistent theme, and more specific contact form validation.

## Features and usage

| Feature | How to use it |
|---|---|
| About Me | Read the introduction and a greeting based on your local time. |
| Projects | Choose **All**, **Development**, or **Design**. Sort the same selection by **Newest First**, **Oldest First**, or **Name A–Z**. The visible count updates with either control. |
| GitHub Repositories | Browse public repositories for `Sarahalmanjahi`. Each card shows a name, description or fallback, and a link to GitHub. The section shows loading, empty, and error messages as appropriate. |
| Light and dark mode | Use the sun or moon button in the header. Light is the default, and the selected theme is saved in the browser for the same site origin. |
| Contact demo | Enter a name of at least two characters, a valid email address, and a message of at least ten characters. All fields are required. A valid submission clears the fields and confirms validation. The demo sends no messages. |

## Technologies and structure

The site uses HTML, CSS, vanilla JavaScript, the GitHub REST API, and browser localStorage. It has no build step, package dependencies, or backend.

| Path | Purpose |
|---|---|
| `index.html` | Page structure, controls, project metadata, and form |
| `css/styles.css` | Themes, typography, grids, and interaction styles |
| `js/script.js` | Theme, greeting, project controls, API requests, and form validation |
| `assets/images/` | Original project images |
| `docs/` | Technical documentation and current and historical AI reports |
| `.gitignore` | Rules for keeping private AI evidence out of Git |

## Local setup

1. Clone the Assignment 3 repository or download and extract its ZIP.
2. Open the project folder in VS Code and serve `index.html` with Live Server. Open the localhost URL printed by the server. An existing static server works as well. For example, if Python is installed, run `python -m http.server 8000` in the project folder and open `http://localhost:8000/`.
3. Use an internet connection to load the public GitHub repositories. No API credentials or configuration are required.

## API and state

The browser fetches `GET /users/Sarahalmanjahi/repos` from the GitHub REST API using `async`/`await`. It follows pagination links, displays API results as text, and gives visitors a distinct message for HTTP errors, request failures, and empty results. GitHub may rate-limit unauthenticated requests. The rest of the portfolio works independently of this request. [GitHub REST repository endpoints](https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user)

Project selection and sorting are in-memory state. The theme uses the `portfolio-theme` localStorage key. If browser storage is blocked, the toggle still works for the current page.

## Performance and accessibility

Both images declare their source dimensions and use lazy loading and asynchronous decoding. The stylesheet keeps their existing display height and aspect handling. The script downloads with `defer`, and the project controls avoid moving cards already in the correct order. The layout uses two columns on larger screens and one at 700 px or below.

Native buttons and a labeled select support keyboard input. Filter and theme buttons expose their pressed state. Status messages announce results and feedback, images have alternative text, focus is visible, and animations respect reduced-motion preferences.

## Testing

See the [technical documentation](docs/technical-documentation.md) for the verification record. For a manual check, load the page over HTTP and exercise both themes, all project filters and sorts, valid and invalid contact input, and GitHub loading. Repeat on narrow and wide screens, use keyboard navigation, and check Chrome DevTools for errors.

For Lighthouse, open the HTTP URL in Chrome Incognito and open **DevTools → Lighthouse**. Select **Navigation**, **Mobile**, **Performance**, and **Accessibility**, then choose **Analyze page load**. Repeat using **Desktop**. Save the reports and record the tested URL, date, scores, and findings. [Chrome DevTools Lighthouse guide](https://developer.chrome.com/docs/devtools/lighthouse/)

## AI assistance

OpenAI Codex (GPT-6) assisted with implementation, review, and documentation. The [Assignment 3 AI usage report](docs/ai-usage-report.md) records individual sessions, documented student modifications, and verification status. Submit the private AI evidence ZIP separately through Blackboard.

## Author

**Sarah Almanjahi** · Student ID **202371590**<br>
Software Engineering, King Fahd University of Petroleum and Minerals
