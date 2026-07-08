// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig, fontProviders } from "astro/config";
import { satteriRelativeMarkdownLinks } from "@system76/satteri-relative-markdown-links";
import { satteri } from "@astrojs/markdown-satteri";
import icon from "astro-icon";

const base = "support";

const site = import.meta.env.PROD
    ? `https://system76.com/${base}`
    : `http://localhost:4321/${base}`;

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "System76 Support Documentation",
            logo: {
                light: "./src/assets/img/system76_logo-light.svg",
                dark: "./src/assets/img/system76_logo-dark.svg",
                replacesTitle: true,
            },
            lastUpdated: true,
            routeMiddleware: "./src/routeMiddleware.ts",
            components: {
                Head: "./src/components/Head.astro",
                PageTitle: "./src/components/PageTitle.astro",
                ContentPanel: "./src/components/ContentPanel.astro",
                Search: "./src/components/Search.astro",
            },
            customCss: [
                "./src/assets/css/icons.css",
                "./src/assets/css/variables.css"
            ],
            favicon: "/favicon.png",
            social: [
                {
                    icon: "x.com",
                    label: "Twitter",
                    href: "https://x.com/system76",
                },
                {
                    icon: "linkedin",
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/company/system76",
                },
                {
                    icon: "reddit",
                    label: "reddit",
                    href: "https://www.reddit.com/r/System76/",
                },
                {
                    icon: "github",
                    label: "GitHub",
                    href: "https://github.com/system76",
                },
            ],
        }),
        icon(),
    ],
    base,
    site,
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Fira Sans",
            cssVariable: "--font-fira-sans",
            weights: [400, 700],
            styles: ["normal"],
            subsets: ["latin"],
        },
        {
            provider: fontProviders.fontsource(),
            name: "Roboto Slab",
            cssVariable: "--font-roboto-slab",
            weights: [400, 700],
            styles: ["normal"],
            subsets: ["latin"],
        },
        {
            provider: fontProviders.fontsource(),
            name: "Ubuntu Mono",
            cssVariable: "--font-ubuntu-mono",
            weights: [400],
            styles: ["normal"],
            subsets: ["latin"],
        },
    ],
    image: {
        // service: {
        //     entrypoint: "./src/avifImageService.mjs",
        // },
        layout: "constrained",
        responsiveStyles: true,
    },
    markdown: {
        processor: satteri({
            mdastPlugins: [
                satteriRelativeMarkdownLinks({
                    base,
                    collectionBase: false,
                }),
            ],
        }),
    },
});
