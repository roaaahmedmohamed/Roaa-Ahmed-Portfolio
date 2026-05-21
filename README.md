# Roaa Ahmed Portfolio

A modern frontend developer portfolio built with React, TypeScript, and Vite.  
The site presents Roaa's profile, training path, experience, tech stack, featured projects, and contact links in a polished responsive interface.

## Overview

This portfolio is designed as a single-page web experience with smooth section reveals, responsive layouts, project highlights, and a visual tech-stack section. The content is managed from one data file, making it easy to update links, projects, experience, education, and contact details without editing component markup.

## Features

- Responsive portfolio layout for desktop and mobile screens
- Hero section with profile image and quick actions
- About, training, experience, skills, projects, and contact sections
- Reusable React components with separated component-specific CSS
- Centralized portfolio data in `src/data/portfolio.ts`
- Smooth scroll reveal animations
- Scroll-to-top button
- Production-ready Vite build setup

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- ESLint

## Project Structure

```txt
src/
  components/
    ComponentName/
      tsx/
        ComponentName.tsx
      css/
        ComponentName.css
  data/
    portfolio.ts
  hooks/
    useScrollReveal.ts
  types/
    portfolio.ts
  App.tsx
  App.css
  main.tsx
  index.css
```

Each component has its own folder with:

- `tsx/` for the React component file
- `css/` for the component's styles

Global styles and shared animation rules live in `src/App.css` and `src/index.css`.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Editing Portfolio Content

Most portfolio content is stored in:

```txt
src/data/portfolio.ts
```

Update this file to change:

- Navigation links
- Contact information
- Experience items
- Projects
- Education and courses
- Languages
- Tech stack icons

## Contact

- GitHub: [roaaahmedmohamed](https://github.com/roaaahmedmohamed)
- LinkedIn: [roaaahmed6](https://www.linkedin.com/in/roaaahmed6)
- Email: [roaaelhabiby6@gmail.com](mailto:roaaelhabiby6@gmail.com)
