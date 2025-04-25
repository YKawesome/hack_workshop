# 🌐 Hack Workshop: Frontend Deployment Speedrun

A sleek, responsive website built using **React**, **Vite**, **TailwindCSS**, and **DaisyUI**, deployed to **GitHub Pages** with **GitHub Actions**. Designed to showcase projects and experiment with modern frontend deployment workflows.

## 🚀 Tech Stack

- ⚛️ [React](https://reactjs.org/) — Frontend framework
- ⚡ [Vite](https://vitejs.dev/) — Fast build tool and dev server
- 🎨 [TailwindCSS](https://tailwindcss.com/) — Utility-first CSS framework
- 🧁 [DaisyUI](https://daisyui.com/) — Tailwind component library with theming
- 🛠️ [GitHub Actions](https://github.com/features/actions) — CI/CD pipeline for automated deployment
- 🌍 [GitHub Pages](https://pages.github.com/) — Static site hosting

## 📂 Project Structure

```bash
.
├── public/                   # Static assets
├── src/
│   ├── components/           # Navbar, Footer, etc.
│   ├── pages/                # Route-based pages like Home, About, Projects
│   └── utils/                # Helper functions like image preloading
├── .github/workflows/       # GitHub Actions config
├── vite.config.js           # Vite config with base for GitHub Pages
└── README.md                # You're reading it :)
```

## 📦 Setup & Development

```bash
# Clone the repo
git clone https://github.com/YKawesome/hack_workshop.git
cd hack_workshop

# Install dependencies
npm install

# Start dev server
npm run dev
```

## 🛠 Build & Deploy (Automatically with GitHub Actions)

1. All pushes to `main` will:
   - Build the site with Vite
   - Deploy the `dist/` folder to GitHub Pages via the `gh-pages` branch

2. Build manually if needed:

```bash
npm run build
```

Make sure your `vite.config.js` includes:

```js
export default defineConfig({
  base: '/hack_workshop/', // Required for GitHub Pages
  plugins: [react()],
});
```

## 🔄 GitHub Actions Workflow

Your `.github/workflows/deploy.yml` handles:
- Checkout
- Node.js setup
- `npm install`
- `npm run build`
- Deployment with `gh-pages`

Make sure `gh-pages` is installed:
```bash
npm install gh-pages --save-dev
```

And your `package.json` includes:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

## 🧪 Workshop Goals

This project was part of a frontend deployment **speedrun workshop**, focused on:
- Rapidly building UI with TailwindCSS + DaisyUI
- Exploring deployment automation using GitHub Actions
- Live coding a working React + Vite portfolio from scratch

## 📸 Features Demo

- 🧊 Glassmorphism and gradients with Tailwind
- 🧩 Modular structure using React Router

## ✨ License

MIT — feel free to fork and remix it for your own portfolio!

---

Made with 💻 and 🎤 during a frontend deployment workshop.
