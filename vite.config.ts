import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},

	build: {
		lib: {
			entry: path.relative(__dirname, "./src/components/index.ts"),
			name: "ju-ui",
			fileName: "ju-ui",
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
		sourcemap: true,
		emptyOutDir: true,
	},

	plugins: [react(), dts({ rollupTypes: true })],
	css: {
		postcss: "./postcss.config.js",
	},
});
