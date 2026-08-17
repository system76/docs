import sharpService from "astro/assets/services/sharp";
import sharp from "sharp";

sharp.concurrency(1);

export default {
    ...sharpService,

    // Let SVGs skip validation entirely — sharp can't process them
    validateOptions(options, config) {
        if (!["svg", "gif"].includes(options.src?.format)) {
            options.format = "avif";
        }
        return sharpService.validateOptions(options, config);
    },
};