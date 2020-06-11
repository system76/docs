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
image: http://support.system76.com/images/system76.png
hidden: false
section: graphics-audio-video

---

Sound settings or packages related to the sound system can become corrupt or broken. Many times, deleting the configuration files, reinstalling the sound-related packages, and reloading ALSA and/or PulseAudio can help. These commands can also help fix the <u>Sound</u> settings showing "Dummy Output" as the audio output.

## Reset PulseAudio

If the system is not playing audio, you can remove the user configuration files for <u>PulseAudio</u>:

```
rm -r ~/.config/pulse
```

Then, kill all instances of PulseAudio:

```
pulseaudio -k
```

When PulseAudio starts again (which it should do automatically), it will create new configuration files.

## Check the PulseAudio Controls

The program <u>PulseAudio Volume Control</u> is helpful in figuring out which program is producing audio, where that audio is being routed, what the default input/output devices are, and what the volume levels are set to.  It can be installed using the Pop!\_Shop, or with this command:

```
sudo apt install pavucontrol
```

Once installed, open the <u>PulseAudio Volume Control</u> app in the Activities menu, or run `pavucontrol` in a terminal.

The "Playback" tab will show a list of applications that are currently playing audio. The volume for each application can be individually controlled.

![Playback tab](/images/audio/pavucontrol-playback.png)

Similarly, the "Recording" tab will show a list of applications that are currently recording audio.

![Recording tab](/images/audio/pavucontrol-recording.png)

The "Output Devices" tab shows a list of output devices, and an indicator of what's being played out of each device. The green checkmark being selected indicates a device is the default output device.

![Output tab](/images/audio/pavucontrol-output.png)

The "Input Devices" tab shows a similar list for input devices.

![Input tab](/images/audio/pavucontrol-input.png)

Under "Configuration," each sound card should be listed.

![Configuration tab](/images/audio/pavucontrol-configuration.png)

## Troubleshooting ALSA

PulseAudio sits on top of ALSA. If PulseAudio is not seeing any input/output devices, check what playback devices ALSA is detecting:

```
aplay -l
```

Or, check what recording devices ALSA is detecting:

```
arecord -l
```

A device may be muted in the ALSA mixer, which will override any PulseAudio volume settings. You can open the ALSA mixer with this command:

```
alsamixer
```

You can navigate between the different volume meters using the left and right arrow keys. Each meter can be adjusted using the up and down arrow keys. An "MM" at the bottom of a meter indicates that meter is muted. If the PulseAudio Volume Control shows that sound is playing, but you don't hear any sound, try unmuting all of the volume meters in alsamixer by pressing the <kbd>M</kbd> key while each meter is selected.

![alsamixer](/images/audio/alsamixer-main.png)

If your system has more than one sound card (for example, an Intel sound card and an NVIDIA sound card in switchable-graphics systems), you can switch between them by pressing F6.

![alsamixer's sound card selection](/images/audio/alsamixer-soundcard.png)

## Check if Hardware is Detected

If ALSA doesn't list a sound card, it may not be physically detected by the system at all. If the Linux kernel sees a sound card, it will show up in your `lspci` output. This command will list every sound card your system detects, and show the driver being used for each one:

```
lspci -v | grep -A6 Audio
```

If the output from that command is blank, then your system isn't detecting any sound cards (which could indicate a hardware issue.)

## Other Useful Commands

This command will reinstall ALSA and some of the other core audio packages:

```
sudo apt install --reinstall alsa-base alsa-utils pulseaudio linux-sound-base libasound2
```

This command will reload the sound driver modules:

```
sudo alsa force-reload
```

This command will start PulseAudio after it's been stopped (this is not usually needed, because PulseAudio will usually restart itself when it's stopped):

```
pulseaudio --start
```
## Fix PCI/internal sound card not detected (dummy output) with Ubuntu kernel 5.3.0-41 and newer in Ubuntu 19.10  
```
echo "options snd-hda-intel dmic_detect=0" | sudo tee -a /etc/modprobe.d/alsa-base.conf  
echo "blacklist snd_soc_skl" | sudo tee -a /etc/modprobe.d/blacklist.conf  
```
Reboot after making the changes.  

Credit of ![Linux-Uprising](https://www.linuxuprising.com/2018/06/fix-no-sound-dummy-output-issue-in.html)  
## Gather Information for Support

The `alsa-info` command will gather a number of outputs, including some of the above-listed outputs, and package them so they can be shared easily. In a terminal, run the command:

```
alsa-info
```

When the script is finished gathering information, type <kbd>y</kbd> and press Enter to upload your output to the ALSA website, then send the link to Support.

![alsa-info](/images/audio/alsa-info.png)
