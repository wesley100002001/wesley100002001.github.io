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

## Design System

- Primary color: `#ce4b4d` (muted red)
- Font: Noto Sans TC (Google Fonts)
- Layout: Max-width 600px, card-based sections
