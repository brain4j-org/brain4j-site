// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://brain4j-org.github.io',
  base: '/brain4j-site',
  integrations: [
      tailwind({
        applyBaseStyles: false,
      }),
      starlight({
          title: 'Brain4j',
          logo: {
            src: './src/assets/brain4j-logo.png',
            alt: 'Brain4j Logo',
          },
          social: [
            { icon: 'github', label: 'GitHub', href: 'https://github.com/brain4j-org/brain4j' },
          ],
          customCss: [
            './src/styles/custom.css',
            './src/styles/global.css',
          ],
          sidebar: [
              {
                  label: 'Getting Started',
                  items: [
                      { label: 'Introduction', slug: 'guides/introduction' },
                      { label: 'Installation', slug: 'guides/installation' },
                      { label: 'Quick Start', slug: 'guides/quick-start' },
                  ],
              },
              {
                  label: 'Guides',
                  items: [
                      { label: 'Core Concepts', slug: 'guides/core-concepts' },
                      { label: 'Working with Neurons', slug: 'guides/neurons' },
                      { label: 'Neural Networks', slug: 'guides/neural-networks' },
                      { label: 'Training Models', slug: 'guides/training' },
                  ],
              },
              {
                  label: 'API Reference',
                  autogenerate: { directory: 'reference' },
              },
              {
                  label: 'Examples',
                  items: [
                      { label: 'Basic Classification', slug: 'examples/classification' },
                      { label: 'Image Recognition', slug: 'examples/image-recognition' },
                      { label: 'Natural Language Processing', slug: 'examples/nlp' },
                  ],
              },
          ],
      }),
  ],
});