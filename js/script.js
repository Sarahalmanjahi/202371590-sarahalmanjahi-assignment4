/* Theme Preference */
const themeToggle = document.getElementById("theme-toggle");
const themeStorageKey = "portfolio-theme";

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === "dark";

  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.title = isDark
    ? "Switch to light mode"
    : "Switch to dark mode";

  const themeIcon = document.getElementById("theme-icon");

  if (themeIcon) {
    themeIcon.innerHTML = isDark
      ? '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>'
      : '<path d="M20.985 12.486A9 9 0 0 1 11.514 3.015a9 9 0 1 0 9.47 9.47Z"/>';
  }
}

let savedTheme;
try {
  savedTheme = localStorage.getItem(themeStorageKey);
} catch {
  // The page can still switch themes when storage is unavailable.
}

applyTheme(savedTheme === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", () => {
  const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(theme);

  try {
    localStorage.setItem(themeStorageKey, theme);
  } catch {
    // Keep the selected theme for this page even if it cannot be saved.
  }
});

/* Dynamic Greeting */
const greeting = document.getElementById("greeting");
const currentHour = new Date().getHours();

if (currentHour < 12) {
  greeting.textContent = "Good morning! Welcome to my portfolio.";
} else if (currentHour < 18) {
  greeting.textContent = "Good afternoon! Welcome to my portfolio.";
} else {
  greeting.textContent = "Good evening! Welcome to my portfolio.";
}

/* Project Filtering and Sorting */
const filterButtons = document.querySelectorAll(".filter-btn");
const projectsList = document.getElementById("projects-list");
const projects = Array.from(projectsList.querySelectorAll("article"), (card) => ({
  card,
  name: card.querySelector("h3").textContent.trim(),
  category: card.dataset.category,
  date: card.dataset.date,
}));
const projectSort = document.getElementById("project-sort");
const emptyMessage = document.getElementById("projects-empty");
const projectCount = document.getElementById("project-count");
let selectedCategory = "all";

function compareProjects(first, second) {
  const order = projectSort.value;

  // ISO dates sort chronologically as strings. Undated projects go last.
  if (order !== "name" && first.date !== second.date) {
    if (!first.date) return 1;
    if (!second.date) return -1;

    const dateOrder = first.date.localeCompare(second.date);
    return order === "oldest" ? dateOrder : -dateOrder;
  }

  return first.name.localeCompare(second.name);
}

function updateProjects() {
  filterButtons.forEach((button) => {
    const pressed = String(button.dataset.filter === selectedCategory);
    if (button.getAttribute("aria-pressed") !== pressed) {
      button.setAttribute("aria-pressed", pressed);
    }
  });

  let visibleCount = 0;
  projects.sort(compareProjects);

  projects.forEach((project, index) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    project.card.hidden = !matchesCategory;

    const currentCard = projectsList.children[index];
    if (project.card !== currentCard) {
      projectsList.insertBefore(project.card, currentCard);
    }

    if (matchesCategory) {
      visibleCount++;
    }
  });

  const projectLabel = visibleCount === 1 ? "project" : "projects";
  const countMessage = `${visibleCount} ${projectLabel} displayed.`;
  if (projectCount.textContent !== countMessage) {
    projectCount.textContent = countMessage;
  }
  emptyMessage.hidden = visibleCount > 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.filter;
    updateProjects();
  });
});

projectSort.addEventListener("change", updateProjects);
updateProjects();

/* GitHub Dashboard and Repositories */
const githubStatus = document.getElementById("github-repositories-status");
const githubRetry = document.getElementById("github-retry");
const githubRequestTimeout = 10000;

function renderGitHubDashboard(repositories) {
  const owned = repositories.filter((repository) => !repository.fork);
  const languages = new Map();
  let stars = 0;
  let languageTotal = 0;

  for (const repository of owned) {
    stars += repository.stargazers_count;
    const language = repository.language;
    if (language) {
      languages.set(language, (languages.get(language) || 0) + 1);
      languageTotal++;
    }
  }

  document.getElementById("github-repository-count").textContent = owned.length;
  document.getElementById("github-star-count").textContent = stars;
  document.getElementById("github-language-count").textContent = languages.size;
  document.getElementById("github-language-empty").hidden = languages.size > 0;

  const languageList = document.getElementById("github-language-list");
  const rankedLanguages = [...languages].sort(([firstName, firstCount], [secondName, secondCount]) =>
    secondCount - firstCount || firstName.localeCompare(secondName)
  );

  for (const [language, count] of rankedLanguages) {
    // Use repositories with a reported primary language as the denominator.
    const percentage = (count / languageTotal) * 100;
    const item = document.createElement("li");
    const label = document.createElement("span");
    const bar = document.createElement("div");
    const fill = document.createElement("div");

    label.textContent = `${language} · ${count} ${count === 1 ? "repository" : "repositories"} · ${percentage.toFixed(1)}%`;
    bar.className = "github-language-bar";
    bar.setAttribute("aria-hidden", "true");
    fill.className = "github-language-fill";
    fill.style.width = `${percentage}%`;
    bar.append(fill);
    item.append(label, bar);
    languageList.append(item);
  }

  const recentList = document.getElementById("github-recent-list");
  for (const repository of repositories.slice(0, 4)) {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = repository.html_url;
    link.textContent = repository.name;
    item.append(link);
    recentList.append(item);
  }

  document.getElementById("github-dashboard").hidden = false;
}

async function isGitHubRateLimited(response) {
  if (response.status === 429) return true;
  if (response.status !== 403) return false;
  if (
    response.headers.get("X-RateLimit-Remaining") === "0" ||
    response.headers.has("Retry-After")
  ) {
    return true;
  }

  const error = await response.json().catch((reason) => {
    if (reason.name === "AbortError") throw reason;
    return null;
  });
  return /rate limit/i.test(error?.message || "");
}

async function fetchGitHubPage(url) {
  const controller = new AbortController();
  // Keep the timer active through the response body read.
  const timeout = setTimeout(() => controller.abort(), githubRequestTimeout);

  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) {
      const rateLimited = await isGitHubRateLimited(response);
      return { rateLimited };
    }

    const repositories = await response.json();
    if (!Array.isArray(repositories)) throw new Error("Unexpected GitHub response.");
    return { repositories, pagination: response.headers.get("Link") || "" };
  } finally {
    clearTimeout(timeout);
  }
}

async function loadGitHubRepositories() {
  const githubUsername = "Sarahalmanjahi";
  const list = document.getElementById("github-repositories-list");
  let nextPage =
    `https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated&direction=desc`;
  const cards = document.createDocumentFragment();
  const publicRepositories = [];

  githubRetry.hidden = true;
  githubStatus.textContent = "Loading GitHub repositories…";

  try {
    while (nextPage) {
      const { repositories, pagination, rateLimited } = await fetchGitHubPage(nextPage);

      if (!repositories) {
        githubStatus.textContent = rateLimited
          ? "GitHub’s API rate limit was reached. Please wait before reloading."
          : "GitHub couldn't load the repositories. Please try again later.";
        githubRetry.hidden = rateLimited;
        return;
      }

      publicRepositories.push(...repositories);

      for (const repository of repositories) {
        const card = document.createElement("article");
        const heading = document.createElement("h4");
        const description = document.createElement("p");
        const link = document.createElement("a");

        heading.textContent = repository.name;
        const isPortfolio = repository.name === "202371590-SarahAlmanjahi-assignment3";
        const fallbackDescription = isPortfolio
          ? "Personal Portfolio Website – SWE 363 Assignment 3"
          : "No description provided.";
        description.textContent = repository.description || fallbackDescription;
        link.href = repository.html_url;
        link.textContent = "View on GitHub";
        link.setAttribute("aria-label", `View on GitHub: ${repository.name}`);
        card.append(heading, description, link);
        cards.append(card);
      }

      // GitHub provides the next page URL in the Link response header.
      const nextLink = pagination.match(/<([^>]+)>;\s*rel="next"/);
      nextPage = nextLink ? nextLink[1] : null;
    }

    const count = cards.childElementCount;
    list.append(cards);
    if (count) renderGitHubDashboard(publicRepositories);
    githubStatus.textContent = count
      ? `Loaded ${count} GitHub ${count === 1 ? "repository" : "repositories"}.`
      : "No public GitHub repositories found.";
  } catch (error) {
    githubStatus.textContent = error.name === "AbortError"
      ? "GitHub took too long to respond. Select Retry GitHub to try again."
      : "Couldn't load GitHub repositories. Check your connection and try again.";
    githubRetry.hidden = false;
  }
}

githubRetry.addEventListener("click", () => {
  githubStatus.focus();
  loadGitHubRepositories();
});
loadGitHubRepositories();

/* Contact and Email Drafts */
const contactMailto = document.getElementById("send-email").getAttribute("href");
const copyEmail = document.getElementById("copy-email");
const copyEmailStatus = document.getElementById("copy-email-status");
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");
let copyFeedbackTimer;

copyEmail.addEventListener("click", async () => {
  clearTimeout(copyFeedbackTimer);
  copyEmailStatus.textContent = "";

  try {
    await navigator.clipboard.writeText(contactMailto.slice("mailto:".length));
    copyEmailStatus.textContent = "Email copied!";
    copyFeedbackTimer = setTimeout(() => {
      copyEmailStatus.textContent = "";
    }, 3000);
  } catch {
    copyEmailStatus.textContent = "Clipboard access is unavailable. Select the email address above to copy it manually.";
  }
});

copyEmail.hidden = false;

const contactFields = [
  {
    input: contactForm.elements.name,
    error: document.getElementById("name-error"),
    validate(value) {
      if (!value) return "Enter your name.";
      return value.length < 2 ? "Enter at least 2 characters for your name." : "";
    },
  },
  {
    input: contactForm.elements.email,
    error: document.getElementById("email-error"),
    validate(value) {
      if (!value) return "Enter your email address.";
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? ""
        : "Enter an email address in the format name@example.com.";
    },
  },
  {
    input: contactForm.elements.message,
    error: document.getElementById("message-error"),
    validate(value) {
      if (!value) return "Enter a message.";
      return value.length < 10 ? "Enter at least 10 characters in your message." : "";
    },
  },
];

function validateContactField({ input, error, validate }) {
  const message = validate(input.value.trim());
  error.textContent = message;
  error.hidden = !message;
  if (message) {
    input.setAttribute("aria-invalid", "true");
  } else {
    input.removeAttribute("aria-invalid");
  }
  return !message;
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const invalidFields = contactFields.filter((field) => !validateContactField(field));
  if (invalidFields.length) {
    formFeedback.textContent = "Check the highlighted fields.";
    formFeedback.className = "error";
    invalidFields[0].input.focus();
    return;
  }

  const { name, email, message } = contactForm.elements;
  const subject = encodeURIComponent("Portfolio inquiry");
  const body = encodeURIComponent(
    `Name: ${name.value.trim()}\r\nEmail: ${email.value.trim()}\r\n\r\n${message.value.trim().replace(/\r?\n/g, "\r\n")}`
  );
  formFeedback.textContent = "Your draft is ready. Review and send it in your email app.";
  formFeedback.className = "success";
  window.location.href = `${contactMailto}?subject=${subject}&body=${body}`;
});

contactForm.addEventListener("input", (event) => {
  const field = contactFields.find(({ input }) => input === event.target);
  if (field?.input.hasAttribute("aria-invalid")) validateContactField(field);

  if (!contactForm.querySelector('[aria-invalid="true"]')) {
    formFeedback.textContent = "";
    formFeedback.className = "";
  }
});

contactForm.querySelector('button[type="submit"]').disabled = false;

/* Scroll Navigation */
const siteHeader = document.querySelector(".site-header");
const sectionLinks = [...siteHeader.querySelectorAll('nav a[href^="#"]')].map((link) => ({
  link,
  section: document.getElementById(link.hash.slice(1)),
}));
let activeLink;
let scrollUpdatePending = false;

function updateScrollNavigation() {
  scrollUpdatePending = false;
  const viewportHeight = window.innerHeight;
  const headerBottom = Math.max(0, siteHeader.getBoundingClientRect().bottom);
  // Track the last section to cross a reading line below the visible header.
  const readingLine = headerBottom + (viewportHeight - headerBottom) * 0.2;
  let currentLink;

  for (const { link, section } of sectionLinks) {
    if (section.getBoundingClientRect().top > readingLine) break;
    currentLink = link;
  }

  if (activeLink !== currentLink) {
    activeLink?.removeAttribute("aria-current");
    currentLink?.setAttribute("aria-current", "location");
    activeLink = currentLink;
  }
}

function scheduleScrollNavigation() {
  if (!scrollUpdatePending) {
    scrollUpdatePending = true;
    requestAnimationFrame(updateScrollNavigation);
  }
}

window.addEventListener("scroll", scheduleScrollNavigation, { passive: true });
window.addEventListener("resize", scheduleScrollNavigation);
updateScrollNavigation();

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        if (matchMedia("(prefers-reduced-motion: no-preference)").matches) {
          entry.target.classList.add("section-reveal");
        }
        revealObserver.unobserve(entry.target);
      }
    }
  });

  for (const { section } of sectionLinks) revealObserver.observe(section);
}
