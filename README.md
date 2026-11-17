# Imam Hossain Rakib — Portfolio

A multipage developer portfolio built with Next.js, React, Tailwind CSS, daisyUI, and Motion.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run lint
npm run build
npm start
```

## Updating content

- `src/data/profile.js`: name, email, social links, and location.
- `src/data/projects.json`: project order, links, descriptions, screenshots, architecture, decisions, and reflections.
- `src/data/skills.js`: skill groups and links to supporting project work.
- `src/app/`: Home, About, Education, Skills, Projects, project details, and Connect pages.

Projects marked `featured: true` appear in the homepage showcase. The console uses the same project data for its count and latest build.

### Case studies

Book Nook, Bazar Dor, and FitLog use the shared `/projects/[slug]` template. Screenshot, architecture, decision, and reflection sections are optional, so earlier work can use the shorter overview template.

Each screenshot includes a public `src`, intrinsic `width` and `height`, `title`, descriptive `alt`, and a `caption`. Previews crop the image; the accessible dialog provides full-image scrolling, zoom, previous/next controls, arrow-key navigation, Escape dismissal, and native focus containment.

Optimized WebP screenshots live in `public/projects/`. Supplied Book Nook and Bazar Dor originals remain in their existing public directories. FitLog screenshots were prepared from the supplied local project's public assets. Case-study text and images are local: rendering the portfolio does not call the showcased applications' APIs.

## Motion and accessibility

`src/components/motion-provider.jsx` respects reduced-motion preferences. Reveals animate on intersection without hiding server-rendered content. Tabs, project filtering, galleries, and mobile navigation use short interaction transitions.

Keep keyboard focus visible and preserve the tab keyboard handlers when changing interactive components.

## Deployment and sharing

Vercel's production hostname supplies the metadata origin automatically. For a custom domain or another host, set `NEXT_PUBLIC_SITE_URL` to the real public origin, such as `https://your-domain.com`, before building. See `.env.example`.

Root and per-project `opengraph-image.js` routes generate branded social previews. Do not add placeholder live-site URLs or résumé links: add a résumé action only after the real PDF is available.
