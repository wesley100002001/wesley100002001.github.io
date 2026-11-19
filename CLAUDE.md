# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Wesley Lin's actor portfolio website, hosted on GitHub Pages. It's a static HTML/CSS site showcasing acting work across drama, commercials, theater, and other skills.

## Development

```bash
npm run dev          # Start local server at http://localhost:41789
```

Then visit http://localhost:41789/wesley.cwlin/ to preview the CV.

## Architecture

- `/index.html` - Root landing page (minimal, for GitHub Pages)
- `/wesley.cwlin/` - Main directory; the CV is the homepage
  - `index.html` - Main CV as 16:9 slides (desktop), stacked layout on mobile; prints to PDF
  - `config/credits.js` - Master list of all credits (source for every CV version)
  - `config/cv-deck.js` - Which credits/photos the main CV uses, plus profile, `stats` (body measurements) and contact info; `modalCards` / `modalCard` define the modal card layouts and which one is downloaded
  - `cv/images/` - CV photos and video
  - `cv/index.html` - Old CV URL, redirects to `/wesley.cwlin/`
  - `cv/credits.html` - Viewer for the master credits list (noindex)
  - `cv/modal-card.html` - Modal card (A4 landscape 1754×1240); `?v=1`…`?v=5` previews each layout, `?shot` hides the preview switcher for screenshots
  - `cv/og.html` - Template for the share image `cv/og-image.jpg` (re-screenshot at 1200×630 when changed)
- `/cv/index.html` - Short URL redirecting to `/wesley.cwlin/`

## Deployment

GitHub Pages deploys via `.github/workflows/pages.yml` on push to master. The workflow prints the CV page to `wesley.cwlin/cv/wesley-lin-cv.pdf` and screenshots the modal card to `wesley.cwlin/cv/wesley-lin-modal-card.jpg` with headless Chrome (neither is in git) and only publishes `index.html`, `sitemap.xml`, `cv/`, `wesley.cwlin/`.

`npm run cv:pdf` / `npm run cv:card` (with `npm run dev` running) write local copies of the PDF / modal card JPG to the Desktop.

Photos are cropped in the image files themselves (not with JS) so the CI-printed PDF matches the page; `pos` in `cv-deck.js` only sets the CSS crop position.

## Design System

- Primary color: `#ce4b4d` (muted red)
- Font: Noto Sans TC (Google Fonts)
- Layout: Max-width 600px, card-based sections
