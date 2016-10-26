---
layout: article
title: Fix Audio Issues
description: >
  Here is how to fix several common audio issues with your computer.
keywords:
  - audio
  - dummy output
  - alsa
  - pulseaudio
  - pulse audio
hidden: false
faq: false # If it shows in the "Frequently Answered Questions" section
known: false # If it shows in the "Known issues" section
---

Sometimes the settings or packages related to the sound system can become corrupt or broken.  Many times, deleting the configuration files, reinstalling the sound related packages, and reloading alsa can help.  The commands can also help fix the _Sound_ settings showing "Dummy Output" as the audio output.  Try running the following commands to repair your system:

```
rm -r ~/.pulse ~/.asound* ~/.pulse-cookie ~/.config/pulse /tmp/pulse-*
sudo apt install --reinstall alsa-base alsa-utils pulseaudio linux-sound-base libasound2
pulseaudio -k
sudo alsa force-reload
pulseaudio --start
```

Don't worry about any missing files in the first command since it is a catch-all command.

##### Useful Commands

To see if the system is recognizing the audio hardware, use this command:

`lspci -v | grep -A6 Audio`

To see what the audio driver has configured for the hardware, use this commands:

`aplay -l`
