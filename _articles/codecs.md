---
layout: article
title: Instal Multimedia Playback Support
description: >
    How to install proprietary Multimedia format support (MP3, DVD, etc)
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
---

Ubuntu does not ship with playback support for some proprietary multimedia formats, like MP3 and DVD-videos. To enable playback of these media, please follow the instructions below.


## Step 1: Open a terminal

Press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd> on your keyboard.

A purple Terminal window should open up.


## Step 2: Install packages

Type the following lines into the terminal window, each followed by <kbd>Enter</kbd>:

```
sudo apt install -y\
 libavcodec-extra gstreamer1.0-plugins-ugly gstreamer1.0-plugins-bad\
 gstreamer1.0-libav gstreamer1.0-fluendo-mp3 chromium-codecs-ffmpeg-extra\
 oxideqt-codecs-extra libdvd-pkg
```

You can also copy and paste the command. To paste into the terminal, use the "Edit" Menu, or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>

You may be prompted for your "[sudo] password". If so, type in your regular login/user password, then press <kbd>Enter</kbd> again. You should several lines of output in the terminal. The command may take a few minutes to complete


## Step 3: Set up DVD playback <small>_(optional)_</small>

Once you see the command above has finished, enter in the following command to enable DVD playback:

```
sudo dpkg-reconfigure libdvd-pkg
```


## Step 4: Restart your computer

After enabling codec support, it's recommended to restart your computer. Click on the Device Menu (Gear Icon in the upper-right corner of your screen), then click on "Shut Down...". Then, click on the restart item in the shutdown overlay.
