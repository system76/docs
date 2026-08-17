import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

// The docs home, `base` applied and trailing-slashed (`/support/`) — the value
// Starlight gives `siteTitleHref` by default, kept here for the places that still
// want it now that the header logo points off-site.
const base = import.meta.env.BASE_URL;
export const docsHomeHref = base.endsWith('/') ? base : `${base}/`;

export const onRequest = defineRouteMiddleware((context) => {
    // Hide the left navigation sidebar on every page, the same way `template: splash`
    // does per-page (`hasSidebar: entry.data.template !== 'splash'` in Starlight's own
    // route data), but applied site-wide instead of via frontmatter on every file.
    context.locals.starlightRoute.hasSidebar = false;

    // Send the header logo to the top of whichever site this build targets, rather
    // than to the docs home. `site` in astro.config.ts already resolves per
    // BUILD_ENV and includes `base`, so re-resolving `/` against it drops the base
    // and leaves the right origin for local, staging and production alike.
    if (context.site) {
        context.locals.starlightRoute.siteTitleHref = new URL('/', context.site).href;
    }
});
