import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    server: {
      port: 5173,
      host: "0.0.0.0",
    },
    plugins: [
      react(),
      VitePWA({
        registerType: "autoUpdate",
        manifestFilename: "manifest.json",
        workbox: {
          globPatterns: [
            "**/*.{js,css,html,ico,png,svg,webp,woff,woff2,ttf,eot}",
          ],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "google-fonts-cache",
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // 365 days
                },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "gstatic-fonts-cache",
                expiration: {
                  maxEntries: 20,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // 365 days
                },
              },
            },
          ],
        },
        manifest: {
          name: "Soluease - Digital Solutions with Ease",
          short_name: "Soluease",
          description:
            "High-end web, mobile, and cloud solutions from a Batam software house focused on fast delivery, quality, and security.",
          theme_color: "#1a1a1a",
          background_color: "#ffffff",
          display: "standalone",
          orientation: "portrait-primary",
          scope: "/",
          start_url: "/",
          icons: [
            {
              src: "/icon-144x144.png",
              sizes: "144x144",
              type: "image/png",
              purpose: "any",
            },
            {
              src: "/icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "any",
            },
            {
              src: "/icon-256x256.png",
              sizes: "256x256",
              type: "image/png",
              purpose: "any",
            },
            {
              src: "/icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any",
            },
            {
              src: "/icon-144x144-maskable.png",
              sizes: "144x144",
              type: "image/png",
              purpose: "maskable",
            },
            {
              src: "/icon-192x192-maskable.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "maskable",
            },
            {
              src: "/icon-256x256-maskable.png",
              sizes: "256x256",
              type: "image/png",
              purpose: "maskable",
            },
            {
              src: "/icon-512x512-maskable.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable",
            },
          ],
          screenshots: [
            {
              src: "/screenshot-540x720.png",
              sizes: "540x720",
              type: "image/png",
              form_factor: "narrow",
            },
            {
              src: "/screenshot-1280x720.png",
              sizes: "1280x720",
              type: "image/png",
              form_factor: "wide",
            },
          ],
          categories: ["business", "productivity"],
          shortcuts: [
            {
              name: "Portfolio",
              short_name: "Portfolio",
              description: "View our portfolio of past projects",
              url: "/portfolio",
              icons: [
                {
                  src: "/icon-96x96.png",
                  sizes: "96x96",
                },
              ],
            },
            {
              name: "Privacy Policy",
              short_name: "Privacy",
              description: "Read our privacy policy",
              url: "/privacy",
              icons: [
                {
                  src: "/icon-96x96.png",
                  sizes: "96x96",
                },
              ],
            },
          ],
        },
      }),
    ],
    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
