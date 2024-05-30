import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: false
    },
    integrations: [tailwind()],
    server: {
        host: '0.0.0.0',
        port: 4321,
    }
});