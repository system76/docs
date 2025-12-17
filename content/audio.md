---
title: Audio Troubleshooting
description: >
  Here is how to fix several common audio issues with your computer.
keywords:
  - audio
  - dummy output
  - alsa
  - pulseaudio
  - pulse audio

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software-troubleshooting
tableOfContents: true
---

Sound settings or packages related to the sound system can become corrupt or broken. Many times, deleting the configuration files, reinstalling the sound-related packages, and restarting the audio software can help. These commands can also help fix the <u>Sound</u> settings showing "Dummy Output" as the audio output.

## Reset Audio Software (server)

If the system is not playing audio, first try restarting the audio daemon:

| PulseAudio | PipeWire |
| :--------- | :-------|
| Ubuntu pre-22.10 and Pop!\_OS pre-22.04 | Ubuntu 22.10+ and Pop!\_OS 22.04+ |
| `systemctl --user restart pulseaudio` | `systemctl --user restart wireplumber pipewire pipewire-pulse` |
| `rm -r ~/.config/pulse` |  `rm -r ~/.config/pulse` |
| `pulseaudio -k` | |

This set of commands first restarts the sound daemon and removes the user's configuration for PulseAudio. On systems still using PulseAudio as a server, it restarts the PulseAudio server, which will create new default audio configuration files.

## Check the PulseAudio Controls

The program <u>PulseAudio Volume Control</u> is helpful in figuring out which program is producing audio, where that audio is being routed, what the default input/output devices are, and what the volume levels are set to.  It can be installed using the Pop!\_Shop, or with this command:

```
sudo apt install pavucontrol
```

Once installed, open the <u>PulseAudio Volume Control</u> app in the Activities or Applications menu, or run `pavucontrol` in a terminal.

The "Playback" tab will show a list of applications that are currently playing audio. In other words, you must be actively outputing audio for the devices to show up.  The volume for each application can be individually controlled.

![Playback tab](/images/audio/pavucontrol-playback.png)

Similarly, the "Recording" tab will show a list of applications that are currently recording audio. In other words, you must be actively recording audio for the devices to show up.

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
sudo apt install --reinstall alsa-base alsa-utils linux-sound-base libasound2
```

This command will reinstall the PulseAudio packages:

```
sudo apt install --reinstall libpulse0 libpulsedsp pulseaudio pulseaudio-module-bluetooth pulseaudio-utils
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

## Configuration Tweaks

Some particular problems may be solved by tweaks to ALSA or PulseAudio configuration. Clearing the current settings for Pipewire or PulseAudio may allow the defaults to be used again. To revert to defaults and clear any current saved settings run the following commands:

```
rm -r ~/.config/pulse/*
rm -r ~/.local/state/wireplumber/*
```

**NOTE:** When running those commands you may see messages similar to this: `rm: cannot remove '/home/ckw/.config/pulse/*': No such file or directory` those are safe to ignore as the file simply does not exist.

### Audio crackling or hardware clicking

If you hear audio crackling (especially when you start or stop playing audio), your audio card may be going to sleep too often. This is known to happen on some versions of the [Serval WS](/articles/serval-dac/) and some [Thunderbolt docks](https://github.com/system76/docs/issues/491).

#### Prevent Crackling with PipeWire/WirePlumber

For Pop!_OS 22.04 and newer (and other distributions using PipeWire with WirePlumber), these two commands will disable this behavior and restart PipeWire:

```bash
sudo sed -i 's/--\["session.suspend-timeout-seconds"\] = 5/\["session.suspend-timeout-seconds"\] = 0/' /usr/share/wireplumber/main.lua.d/50-alsa-config.lua
systemctl restart --user pipewire.service
```

This change can be undone using these commands:

```bash
sudo sed -i 's/\["session.suspend-timeout-seconds"\] = 0/--\["session.suspend-timeout-seconds"\] = 5/' /usr/share/wireplumber/main.lua.d/50-alsa-config.lua
systemctl restart --user pipewire.service
```

#### Prevent Crackling with PulseAudio

For older versions of Pop!_OS or distributions using PulseAudio without PipeWire, these two commands will disable this behavior and restart PulseAudio:

```bash
sudo sed -i 's/load-module module-suspend-on-idle/#load-module module-suspend-on-idle/' /etc/pulse/default.pa
pulseaudio -k
```

This change can be undone using these commands:

```bash
sudo sed -i 's/#load-module module-suspend-on-idle/load-module module-suspend-on-idle/' /etc/pulse/default.pa
pulseaudio -k
```

### PCI/internal sound card not detected (dummy output)

With hardware that uses the `snd_hda_intel` kernel module, rare [bugs](https://bugs.launchpad.net/ubuntu/+source/linux-oem-osp1/+bug/1864061) can cause the sound card to not be detected. If you're having this issue, try running these commands to force the usage of a specific audio driver:

```
echo "options snd-hda-intel dmic_detect=0" | sudo tee -a /etc/modprobe.d/alsa-base.conf
echo "blacklist snd_soc_skl" | sudo tee -a /etc/modprobe.d/blacklist.conf
```

Reboot after making the changes. If this doesn't solve the issue, undo the changes using these commands:

```
sudo sed -i 's/options snd-hda-intel dmic_detect=0//' /etc/modprobe.d/alsa-base.conf
sudo sed -i 's/blacklist snd_soc_skl//' /etc/modprobe.d/blacklist.conf
```

Then reboot again.

## Gather Information for Support

The `alsa-info` command will gather a number of outputs, including some of the above-listed outputs, and package them so they can be shared easily. In a terminal, run the command:

```
alsa-info
```

When the script is finished gathering information, type <kbd>y</kbd> and press Enter to upload your output to the ALSA website, then send the link to Support.

![alsa-info](/images/audio/alsa-info.png)
