import { defineConfig } from "vite";
import path from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        copyPublicDir: false,
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "kylib",
            // the proper extensions will be added
            fileName: "ky-lib",
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
    plugins: [dts({entryRoot: 'src/index.ts'})],
});
