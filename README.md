# Umar Iqbal – Portfolio (React + Vite)

## Before you push: copy 2 things into `public/`
Your old repo had these, they are not in this project yet:

- `certificates/` folder (the PDFs / JPEGs)  ->  `public/certificates/`
- `umar.png` (used for the link preview image)  ->  `public/umar.png`

## Deploy (Vercel auto-deploys from GitHub)
1. Delete the old files in your repo (`index.html`, `projects.html`, `sitemap.xml`, `robots.txt`, `umar-hero.png`) and put this project's files in the repo root.
2. `git add . && git commit -m "Rebuild portfolio in React" && git push`
3. In Vercel -> your project -> Settings -> Build & Development: Framework Preset = **Vite**
   (it is also set in `vercel.json`). Build command `npm run build`, output `dist`.

## Run locally
```
npm install
npm run dev
```

## Structure
- `src/pages/` – Home and Projects pages (`/` and `/projects`)
- `src/sections/` – Hero, About, Skills, Experience, Certifications, Work, Contact
- `src/hooks/useStack.js` – the stacked-section scroll effect (the part that was lagging)
- `src/data/` – your content (skills, experience, certificates, projects)
- `vercel.json` – SPA routing, redirects from the old `.html` URLs, security headers + CSP
