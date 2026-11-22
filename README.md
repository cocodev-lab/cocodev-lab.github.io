# CoCoDev website

Astro + TypeScript adaptation of the existing academic website, configured for **https://cocodev-lab.github.io/**.

## Local preview

On this Mac, double-click `preview.command` in Finder, or run:

```sh
./preview.command
```

Open the Local URL printed by Astro. The initial preview uses **http://127.0.0.1:4322/** because port 4321 was already occupied. Astro chooses the next available port if necessary. Edits refresh the preview.

On another computer, install Node.js 22.23.4 or newer, then:

```sh
npm ci
npm run dev
```

This checkout includes an ignored local Node.js runtime in `.tools/` because the Mac's default Node.js was version 12. The launcher selects that runtime automatically. Nothing was installed system-wide. `.tools/` and `node_modules/` are not part of the Git repository.

For other commands on this Mac, first use the compatible runtime in the current terminal:

```sh
export PATH="$PWD/.tools/node-v22.23.5-darwin-arm64/bin:$PATH"
npm run check
npm run build
npm run preview
```

The installed Astro CLI manages its dev server in the background. From this checkout, `npm run dev -- status`, `npm run dev -- logs`, and `npm run dev -- stop` inspect or stop it.

## Editing

| Content | Location |
| --- | --- |
| Navigation and group details | `src/data/site.ts` |
| Homepage and introduction | `src/pages/index.astro` |
| Separate group and personal updates | `src/data/news.ts` |
| Research program | `src/data/research.ts` |
| People and membership categories | `src/data/people.ts` |
| PI biography, career, teaching and professional information | `src/data/profile.ts`, `src/pages/people/abdellah-fourtassi.astro` |
| Publications, abstracts, code links | `src/data/publications.ts` |
| Seminar archive | `src/data/seminars.ts` |
| Resources placeholder and joining the group | `src/pages/resources.astro`, `src/pages/join.astro` |
| Shared page shell | `src/layouts/BaseLayout.astro` |
| Navigation and citations | `src/components/` |
| Theme and group-specific additions | `src/styles/` |
| Images and downloadable files | `public/assets/` |

The main design is inherited from Minimal Mistakes 4.24.0, using the **Air** skin’s text and accent colors, a white background, and a single centered reading column. The original homepage and bibliography styles are retained. Retain the import order in `src/styles/main.scss`. See [design and source notes](docs/DESIGN-AND-SOURCES.md).

## Future scientific applications

Pages share one layout; structured TypeScript content is separate from rendering. New tools can live in `src/pages/tools/`, with their own components under `src/components/tools/`. Add a framework integration only when a tool needs one, then hydrate that component using Astro's `client:visible` or `client:load` directives. The academic pages can continue to render static HTML.

For a knowledge graph, keep the dataset separate from its renderer and load the interactive view on its own page. Large datasets can be fetched on demand. Applications requiring server-side computation will need a separate service or hosting adapter; GitHub Pages serves the static build.

## Git and publication

`origin` points to `https://github.com/cocodev-lab/cocodev-lab.github.io.git`.

Publication uses the **manual-only** GitHub Pages workflow in `.github/workflows/pages.yml`. Push the reviewed source, then run **Deploy CoCoDev to GitHub Pages** from the Actions tab. The repository’s Pages source must be **GitHub Actions**. Local edits and pushes do not publish automatically.

The Astro `site` is `https://cocodev-lab.github.io` with no project base path, since this is an organization website repository.

Reused Minimal Mistakes code is covered by [LICENSE-Minimal-Mistakes](LICENSE-Minimal-Mistakes).

The PI profile is available at `/people/abdellah-fourtassi/`. Its CV is served locally, and the original personal website has not been redirected. The Resources page is intentionally in progress.
