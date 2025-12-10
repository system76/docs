---
title: HDMI Audio Configuration
description: >
  Play audio over an HDMI or DisplayPort connection.
keywords:
  - hdmi
  - audio settings
  - support
  - System76

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

If you're using an HDMI display with its own built-in speakers, you can configure your system to output audio over the HDMI connection. (These steps should also work for DisplayPort connections.)

## Using the Sound Settings

To make all sound play over HDMI, open the menu in the top right of the screen, then click the <font-awesome-icon icon="cog"></font-awesome-icon> icon in the bottom left of the menu.

![Opening the Settings app](/images/hdmi-audio/top-right-menu.png)

Choose the Sound page using the left sidebar.

![Sound settings](/images/hdmi-audio/sound-settings.png)

Under the "Output" section, click the dropdown box to display a list of output devices, then select the HDMI device you wish to use for audio output.

![Output device](/images/hdmi-audio/output-device.png)

After selecting the appropriate device, sound should play through the HDMI connection. You can use the "Test" button to test the HDMI-connected speakers.

## Using PulseAudio Volume Control

The <u>PulseAudio Volume Control</u> utility also allows you to change the sound output. In addition to changing the default output device, you can also set the output device (and volume) on a per-application basis.

<u>PulseAudio Volume Control</u> can be installed using this command:

```bash
sudo apt install pavucontrol
```

Then, open the utility by running `pavucontrol` in a terminal, or by opening the <u>PulseAudio Volume Control</u> app using the Activities menu.

On the "Output Devices" tab, the output device with the green checkmark selected is the default (or "fallback") audio device.

![pavucontrol Output Devices](/images/hdmi-audio/pavucontrol-output-devices.png)

You can set a device as default by clicking the green checkmark next to it.

![Set default output device in pavucontrol](/images/hdmi-audio/pavucontrol-set-default.png)

On the "Playback" tab, each application that's playing audio will be listed. You can change which output device a specific application is using by selecting it under the drop-down box next to that application.

![Set per-app output device in pavucontrol](/images/hdmi-audio/pavucontrol-per-application.png)
