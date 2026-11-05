# Kingsley Onyem | Portfolio

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## Portfolio overview

A responsive portfolio built with React, Vite, Tailwind CSS, and Framer Motion. It presents selected projects, technical skills, internship experience, and direct contact links.

## Run locally

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run build
npm run preview
```

## Update portfolio content

Edit `src/data/database.js` to update the About copy, project links and screenshots, contact details, services, technologies, and experience entries. Store profile and project images in `public/` and reference them using the configured Vite base path.

The contact actions open the visitor's email application using `mailto:`. The site does not store or transmit form submissions.

## Deployment

The Vite base path is configured for `/portfolio/` outside Vercel and `/` on Vercel. `vercel.json` rewrites application routes to the app entry point so the About page can be opened directly.
