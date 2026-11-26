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

// Dynamic Greeting
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

/* GitHub Repositories */
async function loadGitHubRepositories() {
  const githubUsername = "Sarahalmanjahi";
  const status = document.getElementById("github-repositories-status");
  const list = document.getElementById("github-repositories-list");
  let nextPage =
    `https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated`;
  const cards = document.createDocumentFragment();

  status.textContent = "Loading GitHub repositories…";

  try {
    while (nextPage) {
      const response = await fetch(nextPage);

      if (!response.ok) {
        status.textContent =
          "GitHub couldn't load the repositories. Please try again later.";
        return;
      }

      const repositories = await response.json();

      for (const repository of repositories) {
        const card = document.createElement("article");
        const heading = document.createElement("h3");
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
      const links = response.headers.get("Link") || "";
      const nextLink = links.match(/<([^>]+)>;\s*rel="next"/);
      nextPage = nextLink ? nextLink[1] : null;
    }

    const count = cards.childElementCount;
    list.append(cards);
    status.textContent = count
      ? `Loaded ${count} GitHub ${count === 1 ? "repository" : "repositories"}.`
      : "No public GitHub repositories found.";
  } catch {
    status.textContent =
      "Couldn't load GitHub repositories. Check your connection and try again.";
  }
}

loadGitHubRepositories();

/* Contact Form Validation */
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

function getContactError() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) return "Please enter your name.";
  if (!email) return "Please enter your email address.";
  if (!message) return "Please enter a message.";
  if (!emailPattern.test(email)) return "Please enter a valid email address.";
  if (name.length < 2) return "Please enter a name with at least 2 characters.";
  if (message.length < 10) return "Please enter a message with at least 10 characters.";

  return "";
}

if (contactForm && formFeedback) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const error = getContactError();
    if (error) {
      formFeedback.textContent = error;
      formFeedback.className = "error";
      return;
    }

    formFeedback.textContent =
      "Form validated successfully! This demo does not send messages.";
    formFeedback.className = "success";
    contactForm.reset();
  });

  contactForm.addEventListener("input", () => {
    const error = formFeedback.className === "error" ? getContactError() : "";
    if (formFeedback.textContent !== error) {
      formFeedback.textContent = error;
      formFeedback.className = error ? "error" : "";
    }
  });
}
