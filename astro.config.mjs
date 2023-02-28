import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://workout4wildlife.com',
  integrations: [react()],
});
