# BUILD SPEC — George Nanos Personal Website

> **Mission:** Rebuild `https://georgiosnanos2023.wixsite.com/mysite` as a world-class, modern (2026) personal/professional website. Migrate off Wix entirely. Production-grade React, zero errors, beautiful UI/UX.
>
> **Build location:** `C:\Projects\nanos_website`
> **Remote:** `https://github.com/nanos007/nanos_website` (public, currently **empty** — this is the initial commit target)
> **Design language:** Follow `C:\Projects\nanos_website\DESIGN-claude_style.md` exactly — that file is the single source of truth for color, type, spacing, and motion. This spec governs *content and structure*; the design file governs *look and feel*. If they ever conflict, the design file wins on aesthetics.

---

## 0. Operating Rules (read first)

1. **Plan, then execute.** Produce a short written plan (sitemap, component tree, asset inventory) and confirm it before scaffolding.
2. **No errors, no half-measures.** Every page must build, typecheck, and lint clean. `npm run build` must succeed before any task is called done.
3. **Use the right specialist agents** for the right work: a scraper/asset agent, a design-system agent, a component agent, an accessibility/QA agent. Don't let one generalist pass do everything sloppily.
4. **Ground every piece of content in the scraped source.** Do not invent job titles, dates, or quotes. Pull real text and real assets from the live Wix site (see Section 2).
5. **Writing style:** state things directly and positively. Avoid "not X, but Y" antithesis constructions throughout all copy.
6. **Standard stack & workflow:** Next.js (App Router) + TypeScript + Tailwind + Framer Motion, deployed on Vercel. This matches the established `aithermaritime.com` / `deepdock.xyz` workflow.

---

## 1. Tech Stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 15 (App Router, RSC)** + TypeScript (strict) |
| Styling | **Tailwind CSS v4** + design tokens from `DESIGN-claude_style.md` |
| Animation | **Framer Motion** (scroll reveals, page transitions, magnetic hover) |
| Icons | **lucide-react** + custom SVGs scraped from source |
| Fonts | Per design file; self-hosted via `next/font` (no FOUT) |
| Content | Local typed content modules (`/content/*.ts`) — no CMS needed |
| Images | `next/image`, AVIF/WebP, blur placeholders |
| Deploy | **Vercel** |
| Quality | ESLint + Prettier + `tsc --noEmit` + Lighthouse ≥ 95 all categories |

---

## 2. Asset & Content Extraction (do this FIRST)

Crawl every page of the live site and capture **all** text, images, icons, favicons, logos, flags, and links. Source pages:

- `/mysite` (Home / Bio)
- `/mysite/leadership` → `/leadership-by-georgiosnanos` (Soft Skills), `/tools-georgios-nanos` (Tools), `/sales` (Sales)
- `/mysite/resume`
- `/mysite/certificates` → `/shipping`, `/digital-certificates`
- `/mysite/impressions`
- `/mysite/contact`
- Linked subpages referenced from Resume: `/consulting-projects-nanos`, `/ai-projects-nanos`, `/auditor-vs-consultant`, `/deepdocksecure`

**Asset rules:**
- Download every image from `static.wixstatic.com` at the **highest available resolution** (strip the Wix `/v1/fill/w_…,h_…/` transform to get originals where possible). Save to `/public/images/…` with descriptive names.
- Re-export company/institution logos (Thales, digitalsalt, DNV, ThyssenKrupp, TKMS, RWTH, FOM, INSEAD, NATO, Hellenic Navy, ACRYTAL, Jülich, HSY, DSA) and country flags as optimized SVG/PNG.
- Capture the existing **favicon** and the steel `#4682B4` brand accent SVG; regenerate a full favicon set (ico, apple-touch, maskable, 512/192 PNG, `site.webmanifest`).
- Preserve all outbound links exactly as on the source.
- Keep the hero portrait (George in front of the steel Tesla Cyber Truck) — high-res.

---

## 3. Sitemap & Routes

```
/                     Home — hero, bio glance, Naval AI / DEEPDOCK, Solon quote, current/previous roles
/leadership           Leadership hub
  /leadership/soft-skills
  /leadership/tools
  /leadership/sales
/resume               Interactive career timeline + education + skills
/certificates         Certificates hub
  /certificates/shipping
  /certificates/digital
/impressions          Gallery
/contact              Contact + LinkedIn + email
+ legal: /disclaimer  (full disclaimer text from source)
```

Global: sticky responsive nav with the same hierarchy as source (Leadership ▸ submenu, Resume, Certificates ▸ submenu, Impressions, Contact), dark/light aware per design file, footer with email `georgios.nanos (at) rwth-aachen.de`, LinkedIn, and `© 1998–2026 Dipl.-Ing. Georgios Nanos, MBA`.

---

## 4. Page Content Requirements

### 4.1 Home
- **Hero:** Name "George Nanos", tagline "Defense Expert", portrait, animated steel-blue accent. Subtle, premium entrance animation.
- **Bio Glance:** Full bio text from source (RWTH alumnus, MSc EE&IT + MBA CRM, 20+ yrs across Digital Solutions, Shipbuilding, Maritime, Defense, Industrial; creative engineer, data-for-decisions, leadership). Reproduce faithfully.
- **Naval AI & Autonomy / DEEPDOCK** section — research-driven, non-commercial framing; link to `deepdock.xyz`.
- **"Dad to Sopho"** personal line.
- **Current / Previous** employer logos: Current → Thales; Previous → digitalsalt, DNV, ThyssenKrupp.
- **Solon quote** block (Greek + English), elegantly typeset:
  «Γηράσκω δ' αιεί πολλά διδασκόμενος» — Σόλων, 600 π.Χ. / "As I grow older, I constantly learn more."
- CTA cards to Leadership, Resume, Certificates, Contact.

### 4.2 Resume (signature page)
Interactive vertical **career timeline**, newest first, each entry with logo, location, country flags, dates+duration, role, description, and source links. Entries (verbatim from source):
1. **Principal Project Manager — Thales**, Kiel, DE · 01/2025–today
2. **Principal — digitalsalt**, Lüneburg, DE/AU · 07/2022–12/2024
3. **Senior Consultant — digitalsalt** · 03/2020–06/2022
4. **Regional Sales Manager — DNV**, Athens (SEMEA) · 04/2014–02/2020
5. **Internal Auditor — ThyssenKrupp AG HQ**, Essen · 12/2011–03/2014
6. **Project & Systems Engineer — TKMS**, Kiel · 06/2007–11/2011
7. **Project Manager (Young Talents) — TKMS**, Hamburg · 03/2006–06/2007
8. **Research Project — DEEPDOCK**, Athens · 01/1999–today (non-profit, free-time)
9. **Chief Petty Officer (Radar, NATO status) — Hellenic Navy**, Kiel · 11/2004–11/2005
10. **Founder — ACRYTAL (Aegean Crypto Capital / DAO)** · 2000–2006
11. **Scientific Assistant — FZ Jülich**, Aachen · 2000–2002
12. **Student Research Assistant — RWTH (Materials Science)**, Aachen · 2001–2002
13. **Student Trainee — Hellenic Shipyards (HSY)**, Athens · 1999

**Education:** RWTH Dipl.-Ing. EE&IT (1999–2004, thesis grade 1,3); FOM MBA (2010–2012); INSEAD Digital Transformation cert (2019); Abitur DSA (1995–1998, 1,6); ongoing professional development (Data Science, ML, Cybersecurity, Blockchain, Maritime).

**Skills & Expertise** blocks: Languages (EN/DE/EL full; SV/NO elementary), Orientation & Problem Solving, Communication & Collaboration, Technical Acumen & Business Development, Strategic Digital Leadership, Intercultural Leadership, Maritime Technical & Project Expertise — all verbatim from source. Preserve every outbound link (thesis PDFs, certificates, project pages).

### 4.3 Leadership (+ Soft Skills, Tools, Sales)
Scrape and faithfully reproduce the content of each subpage; present in the new design system.

### 4.4 Certificates (+ Shipping, Digital)
Reproduce certificate listings with logos/badges and links.

### 4.5 Impressions
Responsive masonry/lightbox gallery from the source images.

### 4.6 Contact
Email (obfuscated `georgios.nanos (at) rwth-aachen.de`), LinkedIn button, clean form (optional, mailto or static). Map/location optional.

### 4.7 Disclaimer
Full disclaimer text from source, verbatim, on its own route, linked in the footer.

---

## 5. Design & UX (defer to `DESIGN-claude_style.md`)

- Pull all color, typography, spacing, radius, shadow, and motion tokens from the design file. Brand accent steel-blue `#4682B4` is the legacy anchor — reconcile with the design file's palette.
- Premium 2026 feel: generous whitespace, refined type scale, tasteful scroll-reveal and parallax, magnetic/hover micro-interactions, smooth page transitions, dark-mode support.
- **Accessibility:** WCAG 2.2 AA — focus states, keyboard nav for the multi-level menu ("use tab to navigate"), alt text on every image, prefers-reduced-motion fallbacks.
- **Performance:** Lighthouse ≥ 95 (Perf/A11y/Best-Practices/SEO). LCP < 2.0s. No layout shift.
- **SEO:** Port the source meta (title, description, OG/Twitter cards), add `sitemap.xml`, `robots.txt`, JSON-LD `Person` schema.

---

## 5b. Git, GitHub & CI/CD

The remote `https://github.com/nanos007/nanos_website` is public and **empty** — this build produces its first commit.

**Repo hygiene:**
- Initialize git in `C:\Projects\nanos_website`; set remote `origin` to the repo above.
- Add `.gitignore` (Next.js/Node defaults: `node_modules`, `.next`, `.env*`, `.vercel`, `out`, build artifacts). **Never commit secrets, env files, or local-only assets.**
- `main` is the production branch (auto-deploys to Vercel). Do feature work on short-lived branches and merge via PR; keep `main` always green.
- Conventional, descriptive commits (`feat:`, `fix:`, `chore:`, `docs:`). First commit: scaffold; then commit per phase.
- Add `README.md` (stack, local dev, build, deploy), `LICENSE` if desired, and keep this spec + `DESIGN-claude_style.md` in the repo root.

**CI (GitHub Actions) — `.github/workflows/ci.yml`:**
- On every push and PR: install, `tsc --noEmit`, ESLint, `next build`. PRs cannot merge unless CI is green.
- Optional: Lighthouse CI on preview deploys.

**Deploy (Vercel ↔ GitHub):**
- Connect the Vercel project to this repo. `main` → production; every PR → a Vercel preview URL.
- Configure the custom domain in Vercel after the first successful production deploy.
- Set any required env vars in the Vercel dashboard (not in git).

---



- **Phase 0 — Plan:** sitemap, component tree, full asset inventory, token mapping from design file. Output a short plan doc.
- **Phase 1 — Scaffold:** Next.js + TS + Tailwind + Framer Motion in `C:\Projects\nanos_website`; wire tokens, fonts, layout, nav, footer. `git init`, set remote to `nanos007/nanos_website`, add `.gitignore` + `README.md`, push the scaffold as the first commit.
- **Phase 2 — Extract:** scrape all pages; download/optimize every asset into `/public`; build typed `/content` modules.
- **Phase 3 — Build pages:** Home → Resume → Leadership → Certificates → Impressions → Contact → Disclaimer.
- **Phase 4 — Polish:** animations, dark mode, responsive QA (mobile/tablet/desktop), micro-interactions.
- **Phase 5 — QA & ship:** `tsc --noEmit`, ESLint, `npm run build` clean, Lighthouse audit, broken-link check. Add the GitHub Actions CI workflow, push `main`, connect Vercel to the repo, then deploy to production with the custom domain.

---

## 7. Definition of Done

- [ ] Every source page's content and assets reproduced faithfully and verifiably.
- [ ] All images self-hosted, optimized, high-res; full favicon/manifest set generated.
- [ ] `npm run build` passes with **zero** errors/warnings; strict TS clean; ESLint clean.
- [ ] Lighthouse ≥ 95 across all four categories; responsive on mobile/tablet/desktop.
- [ ] All outbound links work; nav and submenus keyboard-accessible.
- [ ] Disclaimer and legal/meta in place; SEO + JSON-LD complete.
- [ ] Copy follows the positive, direct style (no "not X but Y").
- [ ] Pushed to `github.com/nanos007/nanos_website` (`main` green); GitHub Actions CI passing; `.gitignore` clean (no secrets/env committed).
- [ ] Deployed to Vercel from the repo (`main` → production), custom domain live.
