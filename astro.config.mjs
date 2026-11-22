import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cocodev-lab.github.io',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // The retained Minimal Mistakes source predates the Sass module API.
          silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'slash-div', 'if-function'],
          quietDeps: true,
        },
      },
    },
  },
});
