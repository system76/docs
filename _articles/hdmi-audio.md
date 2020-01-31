---
layout: article
title: Configure HDMI Audio
description: >
  Here is how to play audio over an HDMI or DisplayPort connection.
keywords:
  - hdmi
  - audio settings
  - support
  - System76
image: http://support.system76.com/images/system76.png
hidden: false
section: graphics-audio-video

---

If you're using an HDMI display with its own built-in speakers, you can configure your system to output audio over the HDMI connection. (These steps should also work for DisplayPort connections.)

## Using the Sound Settings

To make all sound play over HDMI, open the menu in the top right of the screen, then click the <i class='fa fa-gear'></i> icon in the bottom left of the menu.

![Opening the Settings app](/images/hdmi-audio/top-right-menu.png)

Choose the Sound page using the left sidebar.

![Sound settings](/images/hdmi-audio/sound-settings.png)

Under the "Output" section, click the dropdown box to display a list of output devices, then select the HDMI device you wish to use for audio output.

![Output device](/images/hdmi-audio/output-device.png)

After selecting the appropriate device, sound should play through the HDMI connection. You can use the "Test" button to test the HDMI-connected speakers.

## Useful Programs

The program <u>PulseAudio Volume Control</u> is super helpful in figuring out which program is producing audio, where that audio is being routed, defaults for audio outputs, and volume levels for every source, input and output.  It can be installed using the software center, or with this command:  

```
sudo apt install pavucontrol
```
