# Align Plus Ortho & Sports Injury Care

## What was changed

- Normalized page filenames to lowercase/kebab-case for reliable deployment on case-sensitive hosts.
- Fixed internal links across pages to match the new filenames.
- Removed dead blog post links on the home page (now points to `blog.html`).
- Extracted inline CSS and JS into per-page files under `assets/css` and `assets/js`.
- Added `assets/images/` folder for images (not populated yet).
- Moved all secondary pages into `pages/`; kept `index.html` at the project root.
- Updated all links and asset paths to work with the new `pages/` structure.

## Current structure

- `index.html` (home page at root)
- `pages/` (all other HTML pages)
- `assets/css/` (per-page stylesheets)
- `assets/js/` (per-page scripts)
- `assets/images/` (image assets — to be added)

## What is left to do

1) Add image files to `assets/images/`.
2) Update all `<img src>` and CSS `url(...)` references to point to `assets/images/...` (from root pages) or `../assets/images/...` (from `pages/`).
3) Decide on a real appointment form submission flow (email/CRM/WhatsApp/API) and replace the current alert-only handler in `assets/js/index.js`.



## Optional improvements

- Consolidate shared CSS/JS into global bundles to reduce duplication.
- Add meta description and social tags to pages that lack them.
- Add 404 page and sitemap if deploying to a static host.
