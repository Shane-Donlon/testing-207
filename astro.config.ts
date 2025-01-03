import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';


 import qwikdev from '@qwikdev/astro';



// https://astro.build/config
export default defineConfig({
  integrations: [qwikdev()],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),

});
