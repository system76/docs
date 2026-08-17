import type { StarlightConfig } from "@astrojs/starlight/types";

type HeadConfig = NonNullable<StarlightConfig["head"]>[number];

function googleAnalytics(buildEnv: string): HeadConfig[] {
    if (buildEnv !== "production") {
        return [];
    }

    return [
        {
            tag: "script",
            attrs: {
                async: true,
                src: "https://www.googletagmanager.com/gtag/js?id=G-H37KSF3165",
            },
        },
        {
            tag: "script",
            content: `window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-H37KSF3165');`,
        },
    ];
}

export default googleAnalytics;