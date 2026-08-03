import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

// Hide the left navigation sidebar on every page, the same way `template: splash`
// does per-page (`hasSidebar: entry.data.template !== 'splash'` in Starlight's own
// route data), but applied site-wide instead of via frontmatter on every file.
export const onRequest = defineRouteMiddleware((context) => {
    context.locals.starlightRoute.hasSidebar = false;
});
