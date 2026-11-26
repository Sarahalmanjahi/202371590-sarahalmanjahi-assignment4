# Assignment 4 AI Usage Report

**Course:** SWE 363 - Web Engineering<br>
**Student:** Sarah Almanjahi<br>
**Student ID:** 202371590

## Tools Used & Use Cases

OpenAI Codex (GPT-6) reviewed the portfolio developed in Assignments 2 and 3 and drafted the Assignment 4 documentation and implemented the first-stage visual redesign. This log begins with the Assignment 4 review on 2026-11-26. The previous AI report is preserved in Git at the Assignment 4 baseline commit `28ea7d4`.

## AI Usage Log

Add an entry immediately after each AI-assisted task or modification. Use C01, C02, and so on for conversations. Use A01, A02, and so on for AI-generated artifacts and reference the related conversation in each artifact entry. Record the exact tool and model, date, purpose, files affected, AI-generated output, student modifications, and verification. Record pending items until the student confirms them.

| ID | Tool (model) | Date | Purpose | Files affected | Student modifications and verification |
|---|---|---|---|---|---|
| C01 | OpenAI Codex (GPT-6) | 2026-11-26 | Review the inherited portfolio and prepare Assignment 4 documentation | `README.md`, `docs/technical-documentation.md`, `docs/ai-usage-report.md` | **AI output:** Reviewed the inherited source, drafted the Assignment 4 README and this report, and updated the technical reference with the inherited implementation and historical checks. **AI verification:** JavaScript syntax, local documentation links, and documentation-only diff checked. **Student modifications:** Pending confirmation. **Student verification:** Pending confirmation. |
| C02 | OpenAI Codex (GPT-6) | 2026-11-26 | Audit the inherited portfolio and plan an internship-focused Assignment 4 redesign | `docs/ai-usage-report.md` | **AI output:** Reviewed HTML, CSS, JavaScript, and assets for design, functionality, accessibility, responsiveness, performance, and code reuse. Proposed phased improvements and file changes in the conversation. **AI verification:** Source inspection and JavaScript syntax check. Browser and live API testing remain pending. **Student modifications:** Pending confirmation. **Student verification:** Pending confirmation. |
| C03 | OpenAI Codex (GPT-6) | 2026-11-26 | Correct AI log IDs and implement the approved hero, navigation, and visual refresh | `index.html`, `css/styles.css`, `README.md`, `docs/technical-documentation.md`, `docs/ai-usage-report.md` | **AI output:** Renumbered prior conversations as C01 and C02, implemented A01, ran A02, and updated the three documents with actual changes and verification. **AI verification:** Headless Chrome with mocked GitHub data, JavaScript syntax, and diff checks passed. **Student modifications:** Pending confirmation. **Student verification:** Pending confirmation. |
| A01 | OpenAI Codex (GPT-6) | 2026-11-26 | Hero, navigation, and styling changes generated in C03 | `index.html`, `css/styles.css` | **AI output:** Added the hero, profile action, responsive navigation, and keyboard skip link, and restyled the site for both themes while retaining the existing JavaScript hooks. **Student modifications:** Pending confirmation. **Student verification:** Pending confirmation. |
| A02 | OpenAI Codex (GPT-6) | 2026-11-26 | Local browser verification script generated in C03 | `%TEMP%/portfolio-stage-test.cjs` (outside the repository) | **AI output:** Temporary headless Chrome script checking responsive layout, navigation, theme persistence, and inherited interactions with mocked GitHub data. **AI verification:** Final run passed. **Student modifications:** Pending confirmation. **Student verification:** Pending confirmation. |
| C04 | OpenAI Codex (GPT-6) | 2026-11-26 | Integrate GitHub profile and CV actions | `index.html`, `css/styles.css`, `README.md`, `docs/technical-documentation.md`, `docs/ai-usage-report.md` | **AI output:** Implemented A03 and documented the integration. LinkedIn is pending the profile URL. **AI verification:** PDF signature, link attributes and references, JavaScript syntax, and diff checks passed. Live GitHub and browser behavior remain pending. **Student modifications:** Pending confirmation. **Student verification:** Pending confirmation. |
| A03 | OpenAI Codex (GPT-6) | 2026-11-26 | Profile and CV markup and styles generated in C04 | `index.html`, `css/styles.css` | **AI output:** Added accessible GitHub icon links and native PDF view and download actions using the existing CV file. **Student modifications:** Pending confirmation. **Student verification:** Pending confirmation. |

## Benefits & Challenges

Codex used the source to reconcile the user guide and technical description and identify which verification results belong to Assignment 3. Headless Chrome verified key flows using mocked GitHub data. Live API behavior and deployment still need verification. Student assessment of benefits and challenges is pending.

## Learning Outcomes

Topics for the student's reflection include tracing features from HTML controls through JavaScript to visible feedback, identifying which features depend on browser storage or the network, and distinguishing source review from runtime verification. Personal learning outcomes are pending student confirmation.

## Responsible Use & Modifications

The log identifies AI-generated changes separately from the student's own edits and checks. Student modifications and personal testing for Assignment 4 are pending confirmation. Update the log when the student reports what she changed, why she changed it, and how she verified it.

Save complete, unedited AI conversations and original AI-generated artifacts **before making personal modifications**. Keep evidence private and reconcile it with the log before submission. The existing ignore rules cover the root `conversations/` and `artifacts/` folders and the Assignment 3 archive. Store any Assignment 4 evidence ZIP outside the repository and confirm its submission format with the assignment instructions.

For AI-assisted commits, use a descriptive subject and credit the actual tool and model. Suggested subject for this update is `Prepare Assignment 4 portfolio documentation`, with the trailer `Assisted-by: OpenAI Codex (GPT-6)`.

## AI Usage Declaration (Draft)

I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

**Full Name:** Sarah Almanjahi<br>
**Student ID:** 202371590<br>
**Date:** Pending student completion<br>
**Signature:** Pending student completion
