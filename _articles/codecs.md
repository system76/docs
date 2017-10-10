---
layout: article
title: Watch Videos and Play Music (MP3, DVD, etc.)
description: >
  Ubuntu does not ship with playback support for some proprietary multimedia formats, such as MP3 files and DVD-videos. To enable playback of these media, please see this Multimedia Playback Support documentation.
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
section: articles

---

Ubuntu does not ship with playback support for some proprietary multimedia formats, such as MP3 files and DVD-videos. To enable playback of these media, please follow the instructions below.

### Open A Terminal

Press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd> on your keyboard.  A purple Terminal window should open up.

### Install Packages

Copy and paste the following long line, followed by <kbd>Enter</kbd>:

```
sudo apt install -y gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly libavcodec-extra gstreamer1.0-libav gstreamer1.0-fluendo-mp3 chromium-codecs-ffmpeg-extra oxideqt-codecs-extra libdvd-pkg
```

To paste into the terminal, use the "Edit" Menu, or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>

You may be prompted for your `[sudo] password`. If so, type in your regular login/user password, then press <kbd>Enter</kbd> again. You should several lines of output in the terminal. The command may take a few minutes to complete.

### Setup DVD Playback <small>_(optional)_</small>

Once you see the command above has finished, enter in the following command to enable DVD playback:

```
sudo dpkg-reconfigure libdvd-pkg
```

### Restart Your Computer

After enabling codec support, it's recommended to restart your computer. Click on the Device Menu (Gear Icon in the upper-right corner of your screen), then click on "Shut Down...". Then, click on the restart item in the shutdown overlay.

## Useful Programs

The program <u>VLC</u> is a excellent media player with support for DVDs, CDs, and most formats of media files.  It can be installed with the <u>Software Center</u> or with this command:

```
sudo apt install vlc
```
