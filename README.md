# Gato Gordo 🐾

A personal site proudly featuring the world's best fat cat — and a learning project for **React**, **TypeScript**, and **Tailwind CSS**.

> This README doubles as a learning journal. Check off steps as you go, read the notes, and don't be afraid to look things up.

---

## What we started with

A single `index.html` file with inline `<style>` tags — clean, simple, zero dependencies. The goal is to rebuild it as a modern frontend app without losing what it already does.

---

## The Upgrade Plan

### Phase 0 — Prerequisites
Before touching code, make sure these are installed on your machine.

- [ ] **Node.js** (v20 or later) — [nodejs.org](https://nodejs.org)
  - Run `node -v` and `npm -v` in a terminal to confirm.
- [ ] **Git** — already set up since you have this repo.
- [ ] **VS Code** (or your preferred editor).
  - Recommended extensions: *ESLint*, *Prettier*, *Tailwind CSS IntelliSense*, *TypeScript Vue Plugin* (skip the last one, that's for Vue — just the first three).

---

### Phase 1 — Bootstrap the React + TypeScript + Tailwind project ✅

We'll use **Vite** as the build tool. It's fast, modern, and the go-to choice for new React projects (Create React App is retired).

- [x] **1.1** — In your terminal, from the `FatCat` folder, run:
  ```bash
  npm create vite@latest . -- --template react-ts
  ```
  The `.` means "use the current folder." It will ask you to confirm — say yes.

  > **What this does:** Vite generates a ready-to-run React + TypeScript project structure. You get `src/`, `public/`, `index.html`, `tsconfig.json`, `vite.config.ts`, and more.

- [x] **1.2** — Install the generated dependencies:
  ```bash
  npm install
  ```

- [x] **1.3** — Install Tailwind and its Vite plugin:
  ```bash
  npm install -D tailwindcss @tailwindcss/vite
  ```

- [x] **1.4** — Open `vite.config.ts` and add the Tailwind plugin:
  ```ts
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import tailwindcss from '@tailwindcss/vite'

  export default defineConfig({
    plugins: [
      react(),
      tailwindcss(),
    ],
  })
  ```

- [x] **1.5** — In `src/index.css`, replace everything with just:
  ```css
  @import "tailwindcss";
  ```
  That single line pulls in all of Tailwind's utilities. No config file needed with the v4 Vite plugin.

- [x] **1.6** — Start the dev server to confirm everything works:
  ```bash
  npm run dev
  ```
  You should see the Vite + React default page at `http://localhost:5173`.

---

### Phase 2 — Migrate to React components

Now we translate `index.html` into proper React components using TypeScript and Tailwind classes.

- [ ] **2.1** — Move `cat.webp` and `favicon.svg` into the `public/` folder.
  > Files in `public/` are served as-is. Reference them in code as `/cat.webp`.

- [ ] **2.2** — Replace `src/App.tsx` with the Gato Gordo card:
  ```tsx
  export default function App() {
    return (
      <main className="min-h-screen bg-[#fdf6ec] flex flex-col items-center justify-center p-8 font-serif">
        <div className="bg-white rounded-[2rem] shadow-lg p-12 max-w-sm w-full text-center">
          <span className="text-[1.6rem]">🐾</span>
          <h1 className="text-5xl text-[#c0392b] tracking-wide mt-1 mb-1">
            Gato Gordo
          </h1>
          <p className="text-lg text-[#7f5e3c] italic mb-8">
            Expondo meu gato gordo ao mundo
          </p>
          <div className="rounded-[1.5rem] overflow-hidden border-[5px] border-[#e67e22] shadow-md">
            <img
              src="/cat.webp"
              alt="Meu gato gordo"
              className="w-full h-auto block"
            />
          </div>
          <footer className="mt-10 text-sm text-[#bfa98a]">
            o melhor gato gordo do mundo 🧡
          </footer>
        </div>
      </main>
    )
  }
  ```

- [ ] **2.3** — Update `index.html` to use `favicon.svg`:
  ```html
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  ```

- [ ] **2.4** — Delete the default boilerplate Vite created: `src/App.css`, `src/assets/react.svg`.

- [ ] **2.5** — Verify the site looks correct at `http://localhost:5173`. It should match the original exactly.

---

### Phase 3 — Learn as you go (good next steps)

Once Phase 2 is done and the site is working, try these to deepen your understanding:

- [ ] **3.1** — Extract the cat photo into its own component `src/components/CatCard.tsx`.
  > This teaches you how to split UI into reusable pieces — the core React skill.

- [ ] **3.2** — Add TypeScript props to the component:
  ```ts
  type CatCardProps = {
    name: string
    description: string
    imageSrc: string
  }
  ```
  > TypeScript props make components self-documenting and catch mistakes at compile time.

- [ ] **3.3** — Add a second cat (or a fun hover animation with Tailwind's `hover:` prefix).

- [ ] **3.4** — Deploy to **Vercel** (free, zero config for Vite projects):
  - Push this repo to GitHub if not already there.
  - Go to [vercel.com](https://vercel.com), import the repo, deploy. Done.

---

## Key Concepts — Quick Reference

| Term | What it means |
|---|---|
| **Vite** | Build tool & dev server. Much faster than webpack. |
| **TSX** | TypeScript + JSX. Like HTML inside TypeScript functions. |
| **Component** | A function that returns JSX — the building block of React UIs. |
| **Props** | Data you pass *into* a component, like function arguments. |
| **Tailwind class** | A single CSS rule as a class name, e.g. `text-center` = `text-align: center`. |
| **`className`** | React uses `className` instead of HTML's `class`. |
| **`public/`** | Static files served as-is. Use for images, fonts, favicon. |
| **`src/`** | Your source code. Vite compiles and bundles this. |

---

## Progress Log

| Date | What happened |
|---|---|
| 2026-04-14 | Project started as a plain HTML page |
| 2026-04-14 | Phase 1 complete — Vite + React + TypeScript + Tailwind v4 scaffolded |

---

## Notes

- The original site is preserved in git history — you can always `git checkout a6be52a` to see where you started.
- Tailwind v4 (used here) is significantly different from v3 — most tutorials online still cover v3. The main difference: no `tailwind.config.js` needed, config goes in CSS instead.
- If a Tailwind class doesn't seem to work, check the [Tailwind v4 docs](https://tailwindcss.com/docs) rather than older StackOverflow answers.
