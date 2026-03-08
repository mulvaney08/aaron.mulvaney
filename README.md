# Aaron Mulvaney Portfolio

A premium, single-page personal resume and portfolio site built with Astro for static deployment on GitHub Pages.

## Why this stack

Astro is the right fit here because it produces static HTML by default, keeps client-side JavaScript minimal, and gives you a clean component model without turning a resume site into an application. It is fast, SEO-friendly, and easy to deploy to GitHub Pages.

## Tech summary

- Astro with static output
- Data-driven content in `src/data/site.ts`
- Reusable Astro components for each section
- GitHub Actions workflow for GitHub Pages deployment
- `.nojekyll` included for Pages compatibility

## Local setup

1. Install Node.js 20 or newer.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the local development server:

   ```bash
   npm run dev
   ```

4. Build the production site:

   ```bash
   npm run build
   ```

5. Preview the built site:

   ```bash
   npm run preview
   ```

## Editing content

Most site content lives in `src/data/site.ts`. Update that file to change:

- Hero copy and CTAs
- Social links
- Experience
- Skills
- Projects
- Education and certifications
- Contact details
- Resume download link

Replace placeholder URLs, email addresses, and the resume asset before publishing.

## GitHub Pages deployment

The workflow file is `.github/workflows/deploy.yml`. It builds on pushes to `main` and deploys the generated `dist` directory to GitHub Pages.

### Required repository settings

1. In GitHub, open `Settings` > `Pages`.
2. Set `Source` to `GitHub Actions`.
3. Optional but recommended: add a repository variable named `SITE_URL` with your final public URL, such as `https://your-domain.com` or `https://yourusername.github.io`.
4. If you use a custom domain, configure it in GitHub Pages settings and update DNS accordingly.

## GitHub Pages path handling

The Astro config in `astro.config.mjs` automatically uses the repository name as the base path during GitHub Actions builds. That means asset paths work correctly for project Pages sites without extra edits.

If this repository becomes a user site or uses a custom domain at the root, set `SITE_URL` appropriately. The current config will still build static assets correctly.

## Key files

- `src/pages/index.astro`: page assembly
- `src/layouts/MainLayout.astro`: metadata, theme setup, reveal script
- `src/styles/global.css`: design system and responsive styling
- `public/assets/resume.html`: placeholder downloadable resume file
- `public/assets/og-image.svg`: Open Graph preview image

## Notes

- This environment did not have `node` or `npm` installed, so the site was scaffolded but not built or previewed locally here.
- Before going live, replace the placeholder contact details and project links with real information.
