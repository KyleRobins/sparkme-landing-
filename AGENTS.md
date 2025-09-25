# Repository Guidelines

## Project Structure & Module Organization
This Next.js 14 app uses the App Router. Core entry points live in `app/layout.tsx` and `app/page.tsx`, with global styles in `app/globals.css`. Section-level React components sit in `components/`, while reusable primitives generated via shadcn/ui reside in `components/ui/`. Shared hooks (`hooks/`), utilities (`lib/utils.ts`), and global styles (`styles/` for Tailwind tokens) round out the codebase. Static assets, favicons, and Open Graph images belong in `public/`. Respect the `@/*` path alias defined in `tsconfig.json` when importing across modules.

## Build, Test, and Development Commands
- `pnpm install` — sync dependencies; always run after pulling UI updates.
- `pnpm dev` — start the local Next.js server with fast refresh.
- `pnpm build` — produce the optimized production bundle (`.next/`).
- `pnpm start` — serve the last build locally; mirrors production.
- `pnpm lint` — run `next lint` with the repo ESLint config; treat warnings as actionable.

## Coding Style & Naming Conventions
Use TypeScript with strict mode; prefer named exports from component files. Stick to 2-space indentation and double quotes to match existing files. Compose UI with functional components and colocate Tailwind class strings—group them by layout → color → state for readability. Utilities should sit in `lib/utils.ts` unless feature-specific. When generating new primitives via shadcn, keep filenames kebab-case (e.g., `feature-card.tsx`) and mirror the folder structure already present.

## Testing Guidelines
Automated tests are not yet configured. When introducing them, default to component tests with React Testing Library and place specs as `*.test.tsx` alongside the source. Smoke-test the landing page hero and navigation states at minimum. Document new commands in `package.json` (e.g., `pnpm test`) and ensure they run in CI before merging. Until the test suite exists, rely on `pnpm lint` plus manual verification across mobile and desktop breakpoints.

## Commit & Pull Request Guidelines
No consistent Git history is available; follow Conventional Commits (`feat:`, `fix:`, `chore:`) to make intent obvious. Limit subject lines to ~72 characters and explain the rationale in the body if behavior changes. Pull requests should include: a concise summary, linked Linear/Jira issue if applicable, screenshots or recordings for UI tweaks, and a checklist of commands run (`pnpm lint`, local smoke test). Request review from at least one teammate familiar with the affected area.

## Environment & Configuration
Tailwind CSS 4 powers styling; adjust design tokens in `styles` or `app/globals.css`. The shadcn manifest (`components.json`) governs component scaffolding—update aliases there if paths change. Analytics is provided via `@vercel/analytics`; disable it locally by omitting the component. For deployment, ensure `NEXT_PUBLIC_` variables are defined in Vercel project settings rather than committed `.env` files.
