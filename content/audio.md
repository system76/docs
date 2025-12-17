---
title: Audio Troubleshooting Guide
description: >
  Here is how to fix several common audio issues with your computer.
keywords:
    - audio
    - dummy output
    - alsa
    - pulseaudio
    - pulse audio
    - pipewire
    - pipe wire 
    - wireplumber
    - wire plumber

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software-troubleshooting
tableOfContents: true
---

If your system has no sound, distorted sound, or missing input/output devices, this guide will walk you through verifying hardware, reloading drivers, and resetting audio services for Pop!_OS 22.04 and Pop!_OS 24.04.

## Verify if the Correct Device is Selected

If the system is not playing any audio, you can confirm the selected device from the system's Settings app.

Access the Sound page of Settings by opening the Launcher (by default, press <kbd>Super</kbd>) and searching for Sound:

![COSMIC Launcher](images/audio/COSMIC-Launcher.jpg)

![COSMIC Launcher search for Sound](images/audio/COSMIC-Launcher-Sound.jpg)

On the Sound page of Settings, the selected Input and Output Device will be displayed:

![Sound Settings](images/audio/COSMIC-Sound-Settings.png)

## Verify Audio Devices Detected by the System

Below is a set of commands to display information about your audio device.

List all detected output audio devices:

```
aplay -l
```

List all detected input audio devices:

```
arecord -l
```

List the current sound cards:

```
cat /proc/asound/cards
```

List loaded drivers and available kernel modules for each PCI audio device:

```
sudo lspci -k | grep -A 3 -i audio
```

Your audio devices should appear in these lists. If not, there may be a driver issue.

## Restart the Audio Daemon

If the system is not playing audio, try restarting the audio daemon:

```
systemctl --user restart wireplumber pipewire pipewire-pulse
rm -r ~/.config/pulse
```

This set of commands restarts the <u>PipeWire audio server</u> and its associated services for the current user. This also removes the <u>PulseAudio</u> configuration and will create new default audio configuration files.

## Check the PulseAudio Controls

The program <u>PulseAudio Volume Control</u> is helpful to figure out which programs are producing audio, where that audio is being routed, what the default input/output devices are, and what the volume levels are set to. It can be installed using the Pop!_Shop or COSMIC Store:

![PulseAudio Volume Control shown in the COSMIC Store](images/audio/COSMIC-pavucontrol.png)

...or with this command:

```
sudo apt install pavucontrol
```

Once installed, open the PulseAudio Volume Control app in the Activities or Applications menu, or run `pavucontrol` in a terminal.

The "Playback" tab will show a list of applications that are currently playing audio. The volume for each application can be individually controlled.

![Playback tab in PulseAudio Volume Control](images/audio/COSMIC-pavucontrol-playback.png)

Similarly, the "Recording" tab will show a list of applications that are currently recording audio.

![Recording tab in PulseAudio Volume Control](images/audio/COSMIC-pavucontrol-recording.png)

The "Output Devices" tab shows a list of output devices, and an indicator of what's being played out of each device. The green checkmark being selected indicates a device is the default output device.

![Output devices tab in PulseAudio Volume Control](images/audio/COSMIC-pavucontrol-output.png)

The "Input Devices" tab shows a similar list for input devices.

![Input devices tab in PulseAudio Volume Control](images/audio/COSMIC-pavucontrol-input.png)

Under "Configuration," each sound card should be listed.

![Configuration tab in PulseAudio Volume Control](images/audio/COSMIC-pavucontrol-configuration.png)

## Troubleshooting ALSA

A device may be muted in the ALSA mixer, which will override any PulseAudio volume settings. You can open the ALSA mixer with this command:

```
alsamixer
```

You can navigate between the different volume meters using the left and right arrow keys. Each meter can be adjusted using the up and down arrow keys. An "MM" at the bottom of a meter indicates that meter is muted. If the PulseAudio Volume Control shows that sound is playing, but you don't hear any sound, try unmuting all of the volume meters in alsamixer by pressing the <kbd>M</kbd> key while each meter is selected.

![ALSAMixer](images/audio/COSMIC-ALSAmixer.png)

If your system has more than one sound card (for example, an Intel sound card and an NVIDIA sound card in switchable-graphics systems), you can switch between them by pressing F6.

![ALSAMixer select soundcard](images/audio/COSMIC-ALSAmixer-soundcard.png)

## Other Useful Commands

This command will reinstall ALSA and some of the other core audio packages:

```
sudo apt reinstall alsa-base alsa-utils linux-sound-base libasound2
```

This command will reinstall the PulseAudio packages:

```
sudo apt reinstall libpulse0 libpulsedsp pulseaudio pulseaudio-module-bluetooth pulseaudio-utils
```

This command will reinstall the PipeWire packages:

```
sudo apt reinstall libpipewire-0.3-0 libpipewire-0.3-common libpipewire-0.3-modules pipewire pipewire-audio-client-libraries pipewire-bin pipewire-pulse
```

This command will force reload the kernel sound driver modules:

```
sudo alsa force-reload
```

This command will start PulseAudio after it's been stopped (this is not usually needed, because PulseAudio will usually restart itself when it's stopped):

```
pulseaudio --start
```

This command will check the status of PipeWire and show any errors if automatic restarts raised any errors:

```
systemctl --user status pipewire
```

If you would like to monitor PipeWire, run:

```
pw-top
```

## Installing Sound Open Firmware Binaries

This firmware package is essential for proper audio functionality on systems using Intel audio hardware that relies on Sound Open Firmware. It's installed by default, but could be accidentally removed by other package operations.

To install, run the commands:

```
sudo apt update
sudo apt install firmware-sof-signed
```

## Installing ALSA Firmware Loaders

This package provides firmware files that may be necessary for certain sound cards to function correctly with the Advanced Linux Sound Architecture (ALSA).

To install, run the commands:

```
sudo apt update
sudo apt install alsa-firmware-loaders
```

## Gather Information for Support

The 'alsa-info' command will gather a number of outputs, including some of the above-listed outputs, and package them so they can be shared easily. In a terminal, run the command:

```
alsa-info
```

When the script is finished gathering information, type <kbd>y</kbd> and press <kbd>Enter</kbd> to upload your output to the ALSA website, then send the link to Support.

![ALSA-info](images/audio/COSMIC-ALSA-info.png)
