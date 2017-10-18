---
layout: article
title: Audio - Fix Audio Issues
description: >
  Here is how to fix several common audio issues with your computer.
keywords:
  - audio
  - dummy output
  - alsa
  - pulseaudio
  - pulse audio
image: http://support.system76.com/images/system76.png
hidden: false
section: articles

---

Sound settings or packages related to the sound system can become corrupt or broken. Many times, deleting the configuration files, reinstalling the sound related packages, and reloading alsa can help. The commands can also help fix the <u>Sound</u> settings showing "Dummy Output" as the audio output.

## Useful Programs

The program <u>PulseAudio Volume Control</u> is super helpful in figuring out which program is producing audio, where that audio is being routed, defaults for audio outputs, and volume levels for every source, input and output.  It can be installed using the software center, or with this command:  

```
sudo apt install pavucontrol
```

## Useful Commands

```
rm -r ~/.config/pulse
```

This will remove the user configuration files for <u>pulseaudio</u>. If you hear a faint rhythmic clicking noise and are not getting speaker output (you can run the sound test from the sound settings menu) this may be the issue. The fix is to run: 

```
killall pulseaudio; rm -r ~/.config/pulse/*
```

and then do a full shutdown / reboot of the computer. 

```
sudo apt install --reinstall alsa-base alsa-utils pulseaudio linux-sound-base libasound2
```

This will reinstall many of the core audio packages.

```
pulseaudio -k
```

This will kill all pulseaudio instances.

```
sudo alsa force-reload
```

This reloads all of the sound driver modules.

```
pulseaudio --start
```

This starts pulseaudio after it's been stopped.  Pulseaudio will typically restart itself if killed, but this will manually start it if not.

```
lspci -v | grep -A6 Audio
```

This checks to see if the system is recognizing the audio hardware.  This will be blank if the kernel hasn't seen or initialized the audio hardware.

```
aplay -l
```

This command will show what the audio driver has configured for the hardware.

```
alsamixer
```

This command shows the Alsa mixer, which is at the core of the sound software.  Pulseaudio sits on top of and interacts heavily with the Alsa system.
