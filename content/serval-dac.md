---
title: Serval DAC Clicking
description: >
  Certain models of the Serval WS will "click" when the DAC turns on and off, but the frequency can be decreased.
keywords:
  - Support
  - Serval
  - DAC
  - click
  - clicking
  - sound
  - audio

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: hardware-troubleshooting
---

# Serval DAC Clicking

On some versions of the Serval WS (including the `serw11`), you may notice a "clicking" sound when the machine powers on and when you begin playing audio. This sound is the DAC (Digital-to-Analog Converter) powering on, and is not an indication that anything is wrong with the hardware.

You can't stop the DAC from clicking when the machine powers on, but you _can_ stop it from clicking every time you begin playing audio. To do this, you'll need to configure the DAC not to power itself off when it's idle. (This way, the DAC will already be powered on when you begin playing audio, and will not need to click.)

These two commands will make the necessary configuration change and restart PulseAudio so it goes into effect immediately:

```bash
sudo sed -i 's/load-module module-suspend-on-idle/#load-module module-suspend-on-idle/' /etc/pulse/default.pa
pulseaudio -k
```
