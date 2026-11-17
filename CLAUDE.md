# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Wesley Lin's actor portfolio website, hosted on GitHub Pages. It's a static HTML/CSS site showcasing acting work across drama, commercials, theater, and other skills.

## Development

```bash
npm run dev          # Start local server at http://localhost:41789
```

Then visit http://localhost:41789/wesley.cwlin/ to preview the portfolio.

## Architecture

- `/index.html` - Root landing page (minimal, for GitHub Pages)
- `/wesley.cwlin/` - Main portfolio directory
  - `index.html` - Portfolio page with sections: 戲劇, 廣告, 舞台劇, 其它才藝
  - `style.css` - All styling (mobile-first, responsive)
  - `assets/images/` - Portfolio images
  - `config/credits.js` - Master list of all credits (source for every CV version)
  - `config/cv-deck.js` - Which credits/photos the main CV uses, plus profile and contact info
  - `cv/index.html` - Main CV as 16:9 slides (desktop), stacked layout on mobile; prints to PDF
  - `cv/credits.html` - Viewer for the master credits list (noindex)
  - `cv/og.html` - Template for the share image `cv/og-image.jpg` (re-screenshot at 1200×630 when changed)
- `/cv/index.html` - Short URL redirecting to `/wesley.cwlin/cv/`

## Deployment

GitHub Pages deploys via `.github/workflows/pages.yml` on push to master. The workflow prints the CV page to `wesley.cwlin/cv/wesley-lin-cv.pdf` with headless Chrome (the PDF is not in git) and only publishes `index.html`, `sitemap.xml`, `cv/`, `wesley.cwlin/`.

`npm run cv:pdf` (with `npm run dev` running) writes a local copy of the PDF to the Desktop.

## Design System

- Primary color: `#ce4b4d` (muted red)
- Font: Noto Sans TC (Google Fonts)
- Layout: Max-width 600px, card-based sections
