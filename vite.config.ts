import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import javascriptObfuscator from "vite-plugin-javascript-obfuscator";

export default defineConfig({
    base: "/langcraft-website",
    plugins: [
        react(),
        javascriptObfuscator({
            options: {
                compact: true,
                controlFlowFlattening: true,
                selfDefending: true,
                debugProtection: true,
            },
        }),
    ],
    optimizeDeps: {
        exclude: ["lucide-react"],
    },
    build: {
        sourcemap: false,
    },
});
