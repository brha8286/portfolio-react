# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with React 16 and Create React App. Showcases engineering projects with image carousels and detailed descriptions.

## Commands

```bash
yarn start     # Dev server at localhost:3000
yarn build     # Production build
yarn deploy    # Build and deploy to GitHub Pages (brandonharris.tech)
yarn test      # Run tests (CRA default)
```

## Architecture

**Routing:** React Router DOM v5
- `/` - Homepage with all projects
- `/project/:id` - Individual project detail page
- `?project=<id>` query param triggers ProjectDialog modal

**Styling:** CSS Modules (*.module.scss) + Bootstrap 4 + global SCSS
- Design tokens in `src/styles/settings/_variables.scss`
- Primary color: `$brandon-red: rgb(175, 0, 0)`
- Media query mixins: `@screen-sm`, `@screen-md`, `@screen-lg` in `_breakpoints.scss`

**Custom Hooks:**
- `useQuery()` - Parse URL query parameters
- `useScrollWatch()` - Track element scroll position for header reveal

**Data:** Static project data in `src/resources/projects.js` (no backend API)

**Component Pattern:** Each component in own folder with index.jsx and *.module.scss

## Key Configuration

- `.env` sets `SASS_PATH=src/` and `NODE_PATH=src/` for absolute imports
- `package.json` homepage set to custom domain for gh-pages deployment
