# Repository Guidelines

This repository is an Obsidian vault of AWS certification notes. Treat Markdown notes, wikilinks, diagrams, and reference assets as one connected knowledge base.

## Project Structure & Module Organization

- `Amazon Web Service.md` is the root index note.
- `Infrastructure/`, `Compute/`, `Connectivity/`, `Database/`, `Network/`, `Local Balancing/`, `Security/`, and `Other Services/` contain topic notes, usually grouped by AWS service.
- `Attachments/` stores embedded screenshots and images. `AWS Certified Solutions Architect Slides v48.pdf` is reference material.
- `.obsidian/` contains vault settings and plugins; `.claudian/` contains local assistant settings.

Place new notes in the closest topic folder and link them from the relevant index note. Use `![[filename.png]]` for local image embeds.

## Build, Test, and Development Commands

This is a documentation-only vault with no package manager, build script, or test runner. Open the repository root as an Obsidian vault to edit and preview notes. Useful checks include:

- `rg --files -g '*.md'` — list Markdown notes.
- `rg -n '\[\[|!\[\[' --glob '*.md'` — review internal links and embeds after edits.
- Obsidian’s outgoing-links and backlinks views — confirm new notes are connected.

## Coding Style & Naming Conventions

Use concise Markdown with short headings, bullets, and direct AWS definitions. Match the existing descriptive title case and preserve spaces, parentheses, ampersands, and other filename characters when linking. Use `[[Note Name]]` for internal notes and `![[Attachment Name.png]]` for images. Store new images in `Attachments/` with stable, descriptive names.

## Testing Guidelines

There are no automated coverage requirements. Open edited notes in Obsidian and verify heading hierarchy, wikilinks, image embeds, and readable preview. Run the `rg` checks above to catch malformed references, and update inbound links whenever a note is renamed or moved.

## Commit & Pull Request Guidelines

This checkout has no Git metadata or commit history, so no local commit convention can be inferred. If version control is added, use concise imperative messages such as `Add RDS proxy notes`. Describe affected topics in pull requests, and include before/after screenshots for rendering or layout changes. Call out renamed or moved notes explicitly.

## Security & Configuration Tips

Never store AWS access keys, secrets, or personal tokens in notes, screenshots, or configuration. Review `.obsidian/` and `.claudian/` changes before sharing, and keep machine-specific settings out unless they are required.
