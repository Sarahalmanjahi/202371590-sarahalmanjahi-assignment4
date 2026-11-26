# AI Usage Report

**Course:** SWE 363 – Web Engineering<br>
**Assignment:** Assignment 3 – Advanced Functionality<br>
**Student:** Sarah Almanjahi<br>
**Student ID:** 202371590

## Tools Used & Use Cases

OpenAI Codex (GPT-6) reviewed the Assignment 2 baseline, implemented Assignment 3 features in stages, assisted with performance and verification, and updated the documentation. The [Assignment 2 AI report](ai-usage-report-assignment2.md) preserves the earlier record.

## Benefits & Challenges

Codex helped compare the baseline with the rubric, build on existing code, and check API failure paths with controlled responses. The live API depends on network access and rate limits. Simulated responses allow repeatable checks but cannot establish how a live request performs. Git history records the repository changes, and Sarah confirmed which edits she made manually and which features she tested herself.

## Learning Outcomes

The implementation provides material for Sarah to explain API pagination and failure handling, combined filtering and sorting, localStorage fallback behavior, and how deferred scripts and image loading affect the page. Personal learning outcomes and reflections: **To be confirmed by student**.

## Responsible Use & Modifications

The log distinguishes Codex output from Sarah’s manual changes and personal testing. Sarah confirmed that she rewrote and restyled About Me (`5dfc1d2`, `0b7840f`), replaced the theme button text with sun and moon icons and styled the control (`c092354`), and updated project descriptions and added technology badges with their own styling (`8bdd5ea`). She also adjusted the site’s overall appearance through these styling changes and supplied the project completion dates. The Git history separately records her repository-description fallback change (`100403c`).

Sarah personally reviewed the layout and appearance and tested switching between light and dark modes, project filtering and sorting, GitHub repository loading, and contact form validation. Codex’s automated checks are recorded separately.

## AI Usage Log

| ID | Tool (model) | Date | Purpose | Files affected | What you changed and how you verified it |
|---|---|---|---|---|---|
| C01 | OpenAI Codex (GPT-6) | 2026-11-21 | Baseline review and evidence setup | `docs/ai-usage-report.md`, `docs/ai-usage-report-assignment2.md`, `.gitignore` | **AI output:** Drafted the report, archived Assignment 2, and added ignore rules. **Student changes:** Sarah’s commit `404729a` includes a completed declaration date and signature where Codex left blanks. **Personal verification:** To be confirmed by student. |
| C02 | OpenAI Codex (GPT-6) | 2026-11-21 | GitHub REST API integration | `index.html`, `css/styles.css`, `js/script.js`, `docs/ai-usage-report.md` | **AI output:** Generated a responsive repository section, paginated unauthenticated fetch, and loading, error, and empty states. **Student changes:** Sarah’s commit `100403c` substituted a portfolio-specific missing-description fallback. C07 retained her wording for Assignment 3 and restored a generic fallback for other repositories. **Personal verification:** Sarah personally tested GitHub repository loading. |
| C03 | OpenAI Codex (GPT-6) | 2026-11-21 | Combined category filtering and sorting | `index.html`, `css/styles.css`, `js/script.js`, `docs/ai-usage-report.md` | **AI output:** Generated the sort control, shared update function, and completion-date metadata. **Student contribution:** Sarah supplied 2024-12-15 for JavaFX Game and 2025-11-30 for Smart Queue Management System. Codex entered the dates and enabled chronological sorting. Direct manual code modifications: To be confirmed by student. **Personal verification:** Sarah personally tested project filtering and sorting. |
| C04 | OpenAI Codex (GPT-6) | 2026-11-21 | Persistent light and dark themes | `index.html`, `css/styles.css`, `js/script.js`, `docs/ai-usage-report.md` | **AI output:** Generated a text toggle, CSS palettes, and localStorage logic. **Student changes:** Sarah’s commit `c092354` replaced the text with sun and moon icons, styled the icon button, and updated its tooltip and accessible label. C07 kept her icons and tooltip, with a stable accessible name and a separate pressed state. **Personal verification:** Sarah personally tested switching between light and dark modes. |
| C05 | OpenAI Codex (GPT-6) | 2026-11-21 | Contact validation and feedback | `js/script.js`, `docs/ai-usage-report.md` | **AI output:** Added trimmed minimum lengths, field-specific feedback, and feedback updates during correction. **Student modifications:** To be confirmed by student. **Personal verification:** Sarah personally tested contact form validation. |
| C06 | OpenAI Codex (GPT-6) | 2026-11-21 | Performance review and optimization | `index.html`, `css/styles.css`, `js/script.js`, `docs/ai-usage-report.md` | **AI output:** Deferred script execution, supplied measured image dimensions, retained lazy loading, added asynchronous decoding, consolidated CSS, and reduced unnecessary project DOM writes. **Student modifications:** To be confirmed by student. **Personal verification:** Sarah personally reviewed the overall layout and appearance. |
| C07 | OpenAI Codex (GPT-6) | 2026-11-21 | Final rubric review, corrections, verification, and documentation | `index.html`, `css/styles.css`, `js/script.js`, `README.md`, `docs/technical-documentation.md`, `docs/ai-usage-report.md` | **AI output:** Reviewed code and Git history, corrected the fallback and accessible toggle name, named the filter group, matched GitHub link names to their visible text, cleaned formatting, ran headless Chrome and Lighthouse, and updated the documentation. **Student changes reviewed:** Sarah manually revised the About Me and project descriptions, styled the About Me section and theme control, added the sun and moon icons, and created and styled the project badges. These edits predate the C07 review. **Personal verification:** Sarah personally tested theme switching, project filtering and sorting, GitHub repository loading, and contact form validation. She also reviewed the overall layout and appearance. |
| C08 | OpenAI Codex (GPT-6) | 2026-11-21 | Record confirmed manual contributions and testing | `docs/ai-usage-report.md` | **AI output:** Updated the report using Sarah’s confirmation and the Git history. **Student contribution:** Sarah identified her manual design and content edits and reported the website checks she performed. **Personal verification:** The reported checks are recorded in the relevant feature entries. |

Codex’s verification results are recorded in the [technical documentation](technical-documentation.md#verification-record). Reconcile this log with the exported evidence before submission and record any additional conversations or standalone AI-generated artifacts.

## AI Evidence and Commit Attribution

Submit `202371590-SarahAlmanjahi-assignment3-ai-evidence.zip` separately through Blackboard. Include complete, unedited AI conversations in `conversations/` and intermediate AI-generated artifacts in `artifacts/`. Keep both folders and the ZIP out of public Git history. Credit the actual tool and model on AI-assisted commits using `Assisted-by: OpenAI Codex (GPT-6)` for this work.

## AI Usage Declaration

I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

**Full Name:** Sarah Almanjahi<br>
**Student ID:** 202371590<br>
**Date:** 11/21/2026<br>
**Signature:** SarahS.
