# S. Suriya — Portfolio

Premium developer portfolio built with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui patterns, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI:** shadcn/ui-inspired components
- **Animation:** Framer Motion
- **Charts:** Recharts

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/           # Next.js App Router pages & layout
├── components/    # Reusable UI components
├── sections/      # Portfolio page sections
├── features/      # Feature modules (Navbar, charts, etc.)
├── hooks/         # Custom React hooks
├── lib/           # Utilities
├── types/         # TypeScript type definitions
├── constants/     # Theme, navigation constants
└── content/       # Portfolio content data
```

## Customization

Update personal information in `src/content/profile.ts` and related content files.

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint
