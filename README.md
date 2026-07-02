# AdsXtreme — Homepage

A [Next.js](https://nextjs.org) (App Router) implementation of the AdsXtreme
Amazon PPC & catalog growth agency homepage. Built from the Claude Design
handoff bundle in `project/` and `chats/` (kept for reference).

## Stack

- **Next.js 15** (App Router, TypeScript, statically prerendered)
- **next/font** for Space Grotesk (display) + Manrope (body)
- Plain CSS (`app/globals.css`) with CSS variables and real media queries —
  no runtime styling libraries

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm run start   # production build
```

## Structure

```
app/
  layout.tsx        # fonts + metadata
  page.tsx          # composes the sections in order
  globals.css       # design system + responsive rules
components/          # one file per homepage section
  Reveal.tsx        # scroll-in animation wrapper (client)
  Header.tsx        # sticky nav + mobile menu (client)
  Stats.tsx         # count-up stats band (client)
  Faq.tsx           # accordion (client)
  FinalCta.tsx      # email-capture form (client)
  ...               # Hero, Services, Process, CaseStudies, etc. (server)
lib/
  content.ts        # all page copy (leaks, stats, services, cases, FAQs…)
public/assets/      # logos, client row, sample charts
```

## Notes

- Interactive pieces (mobile menu, count-up, FAQ accordion, form) are client
  components; everything else renders on the server.
- All copy and stats live in `lib/content.ts` so they can be edited in one
  place. Swap the images in `public/assets/` for real screenshots when ready.
- Contact: `info@adsxtreme.com`.
