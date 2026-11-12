# Kingsley Onyem | Portfolio

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

Edit `src/data/database.js` to update the About copy, project links and screenshots, contact details, services, technologies, and experience entries. Optimized WebP profile and project images are stored in `public/`.

The contact actions open the visitor's email application using `mailto:`. The site does not store or transmit form submissions.

## Deployment

The Vite base path is configured for `/portfolio/` outside Vercel and `/` on Vercel. `vercel.json` rewrites application routes to the app entry point so the About page can be opened directly.
