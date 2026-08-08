import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { copyFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

// Every non-root route the app serves; each becomes dist/<route>/index.html
// so GitHub Pages returns 200 for deep links. Keep in sync with src/App.jsx.
const exportedRoutes = ["books", "books/zh", "games", "games/zh"];

const staticExport = () => ({
    name: "static-export",
    apply: "build",
    closeBundle() {
        const dist = resolve(import.meta.dirname, "dist");
        const index = resolve(dist, "index.html");
        for (const route of exportedRoutes) {
            const dir = resolve(dist, route);
            mkdirSync(dir, { recursive: true });
            copyFileSync(index, resolve(dir, "index.html"));
        }
        // GitHub Pages serves 404.html for unknown paths; the app's "*"
        // route then renders its 404 view with a real 404 status.
        copyFileSync(index, resolve(dist, "404.html"));
    },
});

export default defineConfig({
    plugins: [react(), tailwindcss(), staticExport()],
});
