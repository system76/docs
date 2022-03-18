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

Sound settings or packages related to the sound system can become corrupt or broken. Many times, deleting the configuration files, reinstalling the sound-related packages, and reloading ALSA and/or PulseAudio can help. These commands can also help fix the <u>Sound</u> settings showing "Dummy Output" as the audio output.

## Reset PulseAudio

<details>
    <summary>Click to expand</summary>

If the system is not playing audio, first try restarting the PulseAudio daemon:

```bash
systemctl --user restart pulseaudio
```

After restarting the daemon, applications may need to be restarted to re-connect to PulseAudio. If the system still isn't playing sound, then try removing the user configuration files for PulseAudio:

```bash
rm -r ~/.config/pulse
```

Then, kill all instances of PulseAudio:

```bash
pulseaudio -k
```

When PulseAudio starts again (which it should do automatically), it will create new configuration files.

</details>

## Check the PulseAudio Controls

<details>
    <summary>Click to expand</summary>

The program <u>PulseAudio Volume Control</u> is helpful in figuring out which program is producing audio, where that audio is being routed, what the default input/output devices are, and what the volume levels are set to.  It can be installed using the Pop!\_Shop, or with this command:

```bash
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

</details>

## Troubleshooting ALSA

PulseAudio sits on top of ALSA. If PulseAudio is not seeing any input/output devices, try these troubleshooting steps.

### Check Devices / Alsamixer

<details>
    <summary>Click to expand</summary>

Check what playback devices ALSA is detecting:

```bash
aplay -l
```

Or, check what recording devices ALSA is detecting:

```bash
arecord -l
```

A device may be muted in the ALSA mixer, which will override any PulseAudio volume settings. You can open the ALSA mixer with this command:

```bash
alsamixer
```

You can navigate between the different volume meters using the left and right arrow keys. Each meter can be adjusted using the up and down arrow keys. An "MM" at the bottom of a meter indicates that meter is muted. If the PulseAudio Volume Control shows that sound is playing, but you don't hear any sound, try unmuting all of the volume meters in alsamixer by pressing the <kbd>M</kbd> key while each meter is selected.

![alsamixer](/images/audio/alsamixer-main.png)

If your system has more than one sound card (for example, an Intel sound card and an NVIDIA sound card in switchable-graphics systems), you can switch between them by pressing F6.

![alsamixer's sound card selection](/images/audio/alsamixer-soundcard.png)

</details>

### Check if Hardware is Detected

  <details>
      <summary>Click to expand</summary>

If ALSA doesn't list a sound card, it may not be physically detected by the system at all. If the Linux kernel sees a sound card, it will show up in your `lspci` output. This command will list every sound card your system detects, and show the driver being used for each one:

  ```bash
  lspci -v | grep -A6 Audio
  ```

  If the output from that command is blank, then your system isn't detecting any sound cards (which could indicate a hardware issue.)

  </details>

### Other Useful Commands

<details>
    <summary>Click to expand</summary>

This command will reinstall ALSA and some of the other core audio packages:

```bash
sudo apt install --reinstall alsa-base alsa-utils pulseaudio linux-sound-base libasound2
```

This command will reload the sound driver modules:

```bash
sudo alsa force-reload
```

This command will start PulseAudio after it's been stopped (this is not usually needed, because PulseAudio will usually restart itself when it's stopped):

```bash
pulseaudio --start
```

</details>

</details>

## Configuration Tweaks

<details>
    <summary>Click to expand</summary>

Some particular problems may be solved by tweaks to ALSA or PulseAudio configuration.

</details>

### Audio Crackling or Hardware Clicking

<details>
    <summary>Click to expand</summary>

If you hear audio crackling (especially when you start or stop playing audio), PulseAudio may be putting your audio card to sleep too often. This is known to happen on the [serw12](/articles/serval-dac/) and some [Thunderbolt docks](https://github.com/system76/docs/issues/491).

These two commands will disable this behavior and restart PulseAudio:

```bash
sudo sed -i 's/load-module module-suspend-on-idle/#load-module module-suspend-on-idle/' /etc/pulse/default.pa
pulseaudio -k
```

This change can be undone using these commands:

```bash
sudo sed -i 's/#load-module module-suspend-on-idle/load-module module-suspend-on-idle/' /etc/pulse/default.pa
pulseaudio -k
```

</details>

### PCI/Internal Sound Card Not Detected (Dummy Output)

<details>
    <summary>Click to expand</summary>

With hardware that uses the `snd_hda_intel` kernel module, rare [bugs](https://bugs.launchpad.net/ubuntu/+source/linux-oem-osp1/+bug/1864061) can cause the sound card to not be detected. If you're having this issue, try running these commands to force the usage of a specific audio driver:

```bash
echo "options snd-hda-intel dmic_detect=0" | sudo tee -a /etc/modprobe.d/alsa-base.conf
echo "blacklist snd_soc_skl" | sudo tee -a /etc/modprobe.d/blacklist.conf
```

Reboot after making the changes. If this doesn't solve the issue, undo the changes using these commands:

```bash
sudo sed -i 's/options snd-hda-intel dmic_detect=0//' /etc/modprobe.d/alsa-base.conf
sudo sed -i 's/blacklist snd_soc_skl//' /etc/modprobe.d/blacklist.conf
```

Then reboot again.

</details>

## Gather Information for Support

<details>
    <summary>Click to expand</summary>

The `alsa-info` command will gather a number of outputs, including some of the above-listed outputs, and package them so they can be shared easily. In a terminal, run the command:

```bash
alsa-info
```

When the script is finished gathering information, type <kbd>y</kbd> and press Enter to upload your output to the ALSA website, then send the link to Support.

![alsa-info](/images/audio/alsa-info.png)

</details>
