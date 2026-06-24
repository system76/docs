// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

const base = "docs";

const site = import.meta.env.PROD
    ? `https://system76.com/${base}`
    : `http://localhost:4321/${base}`;

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "System76 Technical Documentation",
            logo: {
                light: "./src/assets/img/system76_logo-light.svg",
                dark: "./src/assets/img/system76_logo-dark.svg",
                replacesTitle: true,
            },
            lastUpdated: true,
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
    ],
    base,
    site,
});
