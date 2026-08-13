import { z } from 'astro/zod'
import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
    docs: defineCollection({
        loader: docsLoader(),
        schema: docsSchema({
            extend: z.object({
                // Groups an article under a homepage section, e.g. "pop", "hardware".
                section: z.string().optional(),
                hidden: z.boolean().default(false),
            }),
        }),
    }),
};
