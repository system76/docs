---
layout: article
title: Watch Videos and Play Music (MP3, DVD, etc.)
description: >
  Proprietary multimedia formats, such as MP3 files and DVD decoders, aren't included by default. To enable playback of these media, please see this document.
keywords:
  - Support
  - multimedia
  - format
  - proprietary
  - restricted
  - extras
  - mp3
  - dvd
  - dvi
  - aac
  - wma
  - System76
image: http://support.system76.com/images/system76.png
hidden: false
section: software-applications

---

# Watch Videos and Play Music (MP3, DVD, etc.) 

Proprietary multimedia formats, such as MP3 files and DVD decoders, aren't included by default. To enable playback of these medias, please follow the instructions below.

### Open A Terminal

Press the Super Key <kbd><span class="fl-ubuntu"></span></kbd>, and type the word *terminal*, then press <kbd>Enter</kbd>.  A <u>Terminal</u> window should open up.

### Install Packages

Ubuntu and Pop!\_OS both have a package available which will install all available proprietary media codecs. Because of legal restrictions, this package cannot be installed automatically, but if you live in a territory where it is legal to do so, you can copy and paste the following line, followed by <kbd>Enter</kbd>:

```bash
sudo apt install -y ubuntu-restricted-extras
```

If it is not legal for you to do so, or if you only want the minimum required codecs, you may do so manually. Please note that packages listed with "bad" in the names below are not harmful to your system, they are listed as "bad" in the system software repositories due to the non-free (as in libre) nature of the code within the packages.

Copy and paste the following line for Ubuntu/Pop 18.04, followed by <kbd>Enter</kbd>:

```bash
sudo apt install -y gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly libavcodec-extra gstreamer1.0-libav gstreamer1.0-fluendo-mp3 chromium-codecs-ffmpeg-extra libdvd-pkg
```

Copy and paste the following line for Ubuntu/Pop 18.10 and up, followed by <kbd>Enter</kbd>:

```bash
sudo apt install -y gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-plugins-good libavcodec-extra gstreamer1.0-libav chromium-codecs-ffmpeg-extra libdvd-pkg
```

To paste into the terminal, use the "Edit" Menu, or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>

You may be prompted for your `[sudo] password`. If so, type in your regular login/user password, then press <kbd>Enter</kbd> again. You should see several lines of output in the terminal. The command may take a few minutes to complete.

### Setup DVD Playback <small>_(optional)_</small>

Once you see the command above has finished, enter in the following command to enable DVD playback:

```bash
sudo dpkg-reconfigure libdvd-pkg
```

### Restart Your Computer

After enabling codec support, it's recommended to restart your computer.

## Useful Programs

The program <u>VLC</u> is a excellent media player with support for DVDs, CDs, and most formats of media files.  It can be installed with the the <u>Pop!_Shop</u> in Pop!_OS, in the <u>Software Center</u> in Ubuntu, or with this command:

```bash
sudo apt install vlc
```
---

- Document Version: 1.5.0
- Date: (May 13, 2016)
- Author: Ian Santopietro
- Contributing Editor(s): Cassidy James Blaede, Emma Marshall, James Gross, Aaron Honeycutt, Liban Odowa, Nathan Dyer, Nathaniel Warburton.