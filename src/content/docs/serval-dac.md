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
section: about-your-computer
tableOfContents: true
---

On some versions of the Serval WS (including the `serw10` and `serw11`), you may notice a "clicking" sound when the machine powers on and when you begin playing audio. This sound is the DAC (Digital-to-Analog Converter) powering on, and is not an indication that anything is wrong with the hardware.

You can't stop the DAC from clicking when the machine powers on, but you _can_ stop it from clicking every time you begin playing audio. To do this, you'll need to configure the DAC not to power itself off when it's idle. (This way, the DAC will already be powered on when you begin playing audio, and will not need to click.)

## PipeWire with WirePlumber

To adjust the configuration on systems running PipeWire with WirePlumber (including Pop!_OS 22.04 and above), run the following commands to disable the suspend feature (by setting the timeout to 0) and restart PipeWire so it goes into effect immediately:

```bash
sudo sed -i 's/--\["session.suspend-timeout-seconds"\] = 5/\["session.suspend-timeout-seconds"\] = 0/' /usr/share/wireplumber/main.lua.d/50-alsa-config.lua
systemctl restart --user pipewire.service
```

To change the configuration back to the default, run the following commands:

```bash
sudo sed -i 's/\["session.suspend-timeout-seconds"\] = 0/--\["session.suspend-timeout-seconds"\] = 5/' /usr/share/wireplumber/main.lua.d/50-alsa-config.lua
systemctl restart --user pipewire.service
```

## PulseAudio

For older versions of Pop!_OS or distributions still using PulseAudio without PipeWire, the behavior can be adjusted through PulseAudio configuration. These two commands will make the necessary configuration change and restart PulseAudio so it goes into effect immediately:

```bash
sudo sed -i 's/load-module module-suspend-on-idle/#load-module module-suspend-on-idle/' /etc/pulse/default.pa
pulseaudio -k
```

To change the configuration back to the default, run the following commands:

```bash
sudo sed -i 's/#load-module module-suspend-on-idle/load-module module-suspend-on-idle/' /etc/pulse/default.pa
pulseaudio -k
```
