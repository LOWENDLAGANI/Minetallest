# Husaini — Portfolio

A responsive single-page developer portfolio built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Local development

```bash
bun install
bun run dev
```

Production verification:

```bash
bun tsc -b --noEmit
bun run build
```

The Vite build writes static output to `dist/`, ready for Vercel.

## Before publishing

Update the profile content in `src/data.ts`, especially:

- verified email address
- GitHub and LinkedIn profile URLs
- official project URLs (currently linked through MineTree)
- certificate dates, IDs, and verification URLs

The resume button opens a print-optimized resume, allowing users to save it as a PDF.
