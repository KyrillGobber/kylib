import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "kylib",
            // the proper extensions will be added
            fileName: "kylib",
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ["react"],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    react: "react",
                },
            },
        },
    },
});
