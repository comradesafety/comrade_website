# Comrade — Marketing Website

A premium, frontend-only marketing site for **Comrade**, an emerging
personal safety technology brand. Built with React, Vite, React Router,
Tailwind CSS, Framer Motion, and Lucide React.

> "Comrades Born to Defy"

## Getting Started

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

Other scripts:

```bash
npm run build    # production build to /dist
npm run preview  # preview the production build locally
```

## Tech Stack

- **React 19** + **Vite** — component architecture and build tooling
- **React Router 7** — client-side routing between pages (no full reloads)
- **Tailwind CSS 3** — utility-first styling, themed via `tailwind.config.js`
- **Framer Motion** — scroll reveals, staggered entrances, hover micro-interactions
- **Lucide React** — line icons

This is a static, frontend-only project. There is no backend, database,
authentication, or payment integration.

## Pages

The site is a multi-page app (client-side routed, so navigation is still
instant — no full page reloads). Each nav item is its own route, grouping
related sections so no single page runs unreasonably long:

| Route       | Page              | Sections                          |
| ----------- | ----------------- | ---------------------------------- |
| `/`         | `HomePage`         | Hero                                |
| `/about`    | `AboutPage`        | About, Problem, Philosophy          |
| `/vision`   | `VisionPage`       | Vision, WhyComrade                  |
| `/products` | `ProductsPage`     | Products, Innovation                |
| `/contact`  | `ContactPage`      | ComingSoon, Contact                 |
| `*`         | `NotFoundPage`     | 404                                  |

Because this uses client-side routing, a static host needs to fall back to
`index.html` for unknown paths so direct links and refreshes work — this repo
already includes `public/_redirects` (Netlify) and `vercel.json` (Vercel).
Other static hosts need an equivalent SPA-fallback rule.

## Project Structure

```text
src/
├── pages/        One file per route, composing that page's sections
├── components/   Reusable UI building blocks (Navbar, cards, buttons, etc.)
├── sections/     One file per content section, composed inside pages
├── data/         Static content — navigation links, product copy, value lists
├── hooks/        useScrollPosition, usePageTitle
└── assets/       Local images/icons (the brand logo itself lives in /public)
```

`App.jsx` only wires up routing and the persistent Navbar/Footer — it holds
no section-specific markup or content.

## Brand & Design Tokens

Colors are sampled directly from the provided Comrade logo and defined in
`tailwind.config.js` under `theme.extend.colors`:

| Token         | Hex       | Use                                  |
| ------------- | --------- | ------------------------------------- |
| `cream-100`   | `#FBF3E6` | Primary background (warm ivory)       |
| `cream-200`   | `#F5E9D6` | Secondary background (soft beige)     |
| `ink-900`     | `#15120E` | Primary typography / dark sections    |
| `ink-500`     | `#6B6459` | Secondary/muted text                  |
| `wine-500`    | `#8F0C45` | Primary accent (deep burgundy)        |

Typography pairs **Space Grotesk** (display/headings) with **Inter** (body
copy), loaded via Google Fonts in `index.html`.

## The Comrade Logo

The source logo lives at `public/assets/logo/comrade-logo.png`. It has been
processed only to remove its flat background matting (made transparent) so it
composites cleanly on both the navbar and footer — the mark itself, its
colors, and its proportions are untouched. The logo is never redrawn,
recolored, or substituted with text anywhere on the site.

## Newsletter Form — Backend Integration

`src/components/NewsletterForm.jsx` is fully validated on the frontend and
ships with a mock `onSubscribe` handler that simulates a network call. To
connect a real provider, pass your own async handler:

```jsx
<NewsletterForm
  onSubscribe={async (email) => {
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    if (!res.ok) throw new Error('Subscription failed');
  }}
/>
```

Throwing inside `onSubscribe` surfaces the form's existing error state; a
resolved promise surfaces the existing success state — no other markup needs
to change.

## Accessibility

- Semantic landmarks (`header`, `main`, `section`, `footer`) with one `h1` per
  page and a consistent heading hierarchy
- Keyboard-accessible navigation, focus-visible states throughout, and a
  focus-managed mobile menu (Escape to close, focus returns to the trigger)
- Scroll position resets to the top on every route change (and scrolls to the
  right element for a hash link, e.g. `/contact#join`) via `ScrollManager.jsx`
- `prefers-reduced-motion` is respected globally — Framer Motion is
  configured with `reducedMotion="user"`, and decorative CSS animations are
  disabled at the media-query level in `src/index.css`
- Color combinations meet WCAG AA contrast for body and UI text

## Content Notes

Product and technology copy throughout the site is intentionally conceptual.
Comrade Pulse, Comrade Aura, and Comrade Essentials are early-stage concepts —
the site deliberately avoids naming a product category or form factor, and
does not state specifications, sensors, certifications, or capabilities that
haven't been confirmed. Contact details and social links in the Contact and
Footer sections are placeholders pending launch.
