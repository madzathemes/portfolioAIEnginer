# Madars portfolio

A single-page React portfolio featuring the madAIprint product engineering case study. Built with Vite and TypeScript.

## Run locally

Requires Node.js 20.19+ or 22.12+ (Vite 8).

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Use `npm run build` to type-check and create the production site in `dist/`, and `npm run preview` to preview that build.

## Add screenshots

Put your JPEG screenshots in `public/images/madaiprint/` with these exact filenames. Missing files show a fallback until they are added; you can add them individually.

- `studio-home.jpg`, `studio-single-browser.jpg`, `studio-travel-set.jpg`, `studio-travel-closeup.jpg`, `studio-forest-wall.jpg`, `studio.jpg`
- `collection-library.jpg`, `collection.jpg`, `collection-views.jpg`
- `assets.jpg`, `studio-nursery.jpg`, `context-car.jpg`, `studio-single.jpg`, `studio-triptych.jpg`, `archive.jpg`

The screenshots are publicly accessible when deployed. Only add images you have permission to publish, and remove sensitive information first. Descriptions and filenames can be changed in `src/projects.ts`.

## Add projects

Add an entry to the `projects` array in `src/projects.ts`, following the existing `Project` type. Each entry is rendered as a case study on the landing page. Put its screenshots in `public/images/<project-id>/`. Adapt the project type and case-study layout if a future project needs a different structure.

## Deployment and indexing

Deploy the contents of `dist/` to a static host. The page does not include a `noindex` directive; configure indexing, access control, and security headers at your host according to the intended audience. The source case study had private/no-index headers, which a static frontend cannot enforce on its own. If deploying under a subdirectory, set Vite's `base` option in `vite.config.ts` to that path.