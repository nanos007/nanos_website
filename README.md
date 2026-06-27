# George Nanos — Personal Website

Personal/professional website of Georgios Nanos, migrated from Wix to a production-grade Next.js stack.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router, RSC) + TypeScript (strict) |
| Styling | Tailwind CSS v4 + design tokens from `DESIGN-claude_style.md` |
| Animation | Framer Motion (scroll reveals, page transitions) |
| Icons | lucide-react + custom SVGs |
| Fonts | Cormorant Garamond (display) + Inter (body) via `next/font/google` |
| Content | Typed content modules in `/content/*.ts` |
| Images | `next/image`, served from `/public/images/` |
| Deploy | Vercel — `main` → production |

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build     # production build
npm start         # serve production build locally
npx tsc --noEmit  # type check only
```

## Project Structure

```
app/              Next.js App Router pages
components/       React components (layout, ui, home, resume, leadership, etc.)
content/          Typed TypeScript content modules (no CMS)
public/images/    Self-hosted images, logos, flags, certificates
```

## Deploy

Connected to Vercel. Every push to `main` deploys to production automatically. PRs get preview URLs.

## Content

All content is in `/content/*.ts` typed modules:
- `career.ts` — 13 career entries
- `education.ts` — 4 education entries
- `skills.ts` — languages + expertise blocks
- `certificates.ts` — shipping + digital certs
- `projects.ts` — consulting + AI projects
- `leadership.ts` — soft skills, tools, Challenger Sale
- `meta.ts` — per-page SEO metadata
