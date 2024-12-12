import tailwindcss from "tailwindcss";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// Required for WebAssembly support
import wasm from "vite-plugin-wasm";
// Required for top-level await support, which is needed by the WASM modules
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    wasm(),          // Enables WebAssembly support
    topLevelAwait()  // Enables top-level await support
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    target: "esnext"  // Required for modern JavaScript features used by WASM
  },
  assetsInclude: [
    "**/*.xml",
    "**/*.wasm"  // Tells Vite to include .wasm files as assets
  ],
  optimizeDeps: {
    // Prevents Vite from trying to pre-bundle the web-viewer
    // which would break the WASM functionality
    exclude: ['@rerun-io/web-viewer-react']
  }
});