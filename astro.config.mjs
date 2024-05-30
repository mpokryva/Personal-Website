import { defineConfig } from 'astro/config'
import compress from "astro-compress";

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: false
    },
    integrations: [tailwind(), compress()],
    server: {
        host: '0.0.0.0',
        port: 4321,
    }
});