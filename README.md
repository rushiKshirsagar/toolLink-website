# ToolLink — Website

Single-page marketing site for industrial equipment monitoring and predictive maintenance. Built with **React 19** and **Vite 7**.

## Stack

- **React 19** — UI
- **Vite 7** — build and dev server
- **CSS** — plain CSS (no Tailwind/CSS-in-JS)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
```

Output is in `dist/`. Preview with `npm run preview`.

## Structure

- `src/App.jsx` — layout, scroll-spy, sidebar state
- `src/components/` — Sidebar, Hero, Value, Product, Sensors, Contact
- `src/hooks/useScrollSpy.js` — which section is in view (for nav highlight)
- Left drawer: sticky sidebar on desktop; collapsible menu on mobile. Sections highlight in the nav as you scroll.
