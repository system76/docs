---
title: Use AMD FidelityFX SuperResolution (FSR) on Pop!_OS
description: >
   Use AMD's FidelityFX SuperResolution to increase gaming performance.
keywords:
  - gaming
  - support
  - steam
  - proton

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: media
tableOfContents: true
---

## Pre-Requisites

### Setting your System up for Gaming

Following the steps in [Gaming for Linux](/articles/linux-gaming/) article will ensure your system is setup and ready to use AMD's Fidelity SuperResolution (FSR). The most important steps are:

1. [Enable Steam Play (Proton)](/articles/linux-gaming#enable-steam-play-proton)
2. Get the latest version of Proton-GE via [Protonup](/articles/linux-gaming#install-protonup-to-manage-custom-proton-versions)
3. Enable the latest version of Proton-GE by [changing the Proton version for each game](/articles/linux-gaming#changing-the-proton-version-for-a-specific-game)

## AMD FSR

### Resolution and Quality

AMD's FSR works by running the game in a lower resolution (thereby increasing performance), then using AI to upscale the image to your output resolution. AMD has recommended specific resolutions at which your game should run, depending on your screen resolution. Here is a handy image.

![Recommmended Resolutions](/images/use-amd-fsr/recommended-resolutions.png)

The Quality preset, on the furthest left column, is determined by which resolution you select in-game. The higher the quality, the better the image! Conversely, the lower the quality, the higher your performance gains. Which you choose depends on your own goals and system!

As an example, if your screen is 1920x1080, and you want the Quality preset, you would set your in-game resolution to 1280 x 720. Alternatively, for that same 1920 x 1080 screen, if you want the Ultra Quality preset, your in-game resolution should be 1477 x 831.

### Sharpening

You can optionally add an additional parameter, `WINE_FULLSCREEN_FSR_STRENGTH` to increase the sharpening effect of FSR. The range is 0-5, 0 having the most sharpening, and 5 having the least. If this parameter is not set, it defaults to 2.

More sharpening will increase the quality of the image, but at a slight cost to performance!

### Setup Steam Launch Options

Right-click on the selected game and select "Properties". Then, under the General Tab, input into the Launch Options:

```
WINE_FULLSCREEN_FSR=1 %command%
```

If you wish to modify FSR's sharpening strength, add it just before %command%. Example:

```
WINE_FULLSCREEN_FSR=1 WINE_FULLSCREEN_FSR_STRENGTH=1 %command%
```

### Setup your In-game Resolution

Once the game is launched, go to the game's Options menu and set the following, typically under "Video Options":

* Set the display to Fullscreen (not Bordered or Borderless Window!)
* Set the resolution to your quality preset resolution (ex. Ultra-Quality for a 1920 x 1080 monitor would be 1477 x 831)
* If necessary, restart your game!

Congratulations! You've successfully set up and are using AMD's FidelityFX SuperResolution! Enjoy the increased performance on your Linux-based gaming machine!

### Lutris

Lutris version 0.5.9 includes a toggle for AMD FSR in each game's preferences. This requires the FSHack version of Lutris-Wine.

* Right-click your installed game and select "Configure".
* Select the Runner Options tab at the top
* For Wine Version, ensure you have lutris-fshack-6.13 or newer. It will mention "fshack" in the name.
* Enable the "Enable AMD FidelityFX Super Resolution (FSR)" toggle in the options below.

Then follow the "Setup your In-game Resolution" steps above, and enjoy FSR via Lutris!

### Bottles

For more information about the Bottles app refer to [this article](/articles/bottles).

Bottles version 2021.10.14 and greater includes a toggle for AMD FSR in the preferences of each bottle.

* Go to the bottle preferences.
* Enable the "Enable FSR" toggle in the "Graphics" section and choose the quality level.

Then follow the "Setup your In-game Resolution" steps above, and enjoy FSR!
