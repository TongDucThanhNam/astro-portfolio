import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
    server: { port: parseInt(process.env.PORT) || 4321, host: true },
    integrations: [tailwind(), react()],
});
