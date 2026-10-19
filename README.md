# Maz (`maz@builder`) — Developer Portfolio

A modern **React + Vite + Tailwind CSS** developer portfolio featuring a sleek dark glassmorphic aesthetic, interactive multi-tab terminal code inspector, filterable project showcase (11 real workspace builds), and an interactive in-browser algorithm playground.

## Quick Start

```powershell
npm install
npm run dev
```

Then open **http://localhost:5173** in your browser.

## How to Customize Your Bio, Email & Social Links

You have **two easy ways** to customize your personal info:

1. **In-Browser Live Editor**: Click the **"Edit Profile"** button in the top navigation bar (or press `Ctrl + K` -> *Customize Portfolio Profile*). Your changes save immediately to `localStorage`, and you can click **Copy Config** to grab the JSON snippet.
2. **Code Config File**: Edit [`src/data/portfolioData.js`](./src/data/portfolioData.js) directly to permanently update your `profile`, `projects`, `skillCategories`, or `terminalTabs`.
