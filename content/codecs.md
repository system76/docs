---
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

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: media
tableOfContents: true
---

Proprietary multimedia formats, such as MP3 files and DVD decoders, aren't included by default. To enable playback of these medias, please follow the instructions below.

## Open A Terminal

Press the Super key <kbd><font-awesome-icon :icon="['fab', 'ubuntu']"></font-awesome-icon></kbd> and type the word *terminal*, then press <kbd>Enter</kbd>. A <u>Terminal</u> window should open up.

## Install Packages

The commands below can be used to install various sets of packages. To paste into the terminal, use the "Edit" Menu, or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>.

You may be prompted for your `[sudo] password`. If so, type in your regular login/user password, then press <kbd>Enter</kbd> again. You will not see characters appear while you're typing the password.

Please note that packages listed with "bad" or "ugly" in the names below are not harmful to your system.

- Plugins marked "ugly" may not be legal to install in all juristictions due to copyright and patent law.
- Plugins marked "bad" do not receive as many development resources from the GStreamer project, but are still supported in Pop!\_OS and Ubuntu.

### Install all available formats

Ubuntu and Pop!\_OS both have a package available which will install most available proprietary media codecs. Because of legal restrictions, this package cannot be installed automatically, but if you live in a territory where it is legal to do so, you can copy and paste the following line, followed by <kbd>Enter</kbd>:

```
sudo apt install -y ubuntu-restricted-extras gstreamer1.0-plugins-bad
```

If you receive a prompt titled `Configuring ttf-mscorefonts-installer`, press `Tab` to select the `<Ok>` item, then press `Enter`. Next, use `Tab` again to select the `<Yes>` option to agree to the EULA, then press `Enter` again.

### Install only some formats

If it is not legal for you to install all of the formats, or if you only want to install the formats you need, you can use the following manual commands. Remove any unwanted packages from the command before running it.

For Ubuntu/Pop!\_OS **20.04 and above,** copy and paste the following line, followed by <kbd>Enter</kbd>:

```
sudo apt install -y gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-plugins-good libavcodec-extra gstreamer1.0-libav chromium-codecs-ffmpeg-extra
```

For Ubuntu/Pop!\_OS **18.04 and below,** copy and paste the following line, followed by <kbd>Enter</kbd>:

```
sudo apt install -y gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly libavcodec-extra gstreamer1.0-libav gstreamer1.0-fluendo-mp3 chromium-codecs-ffmpeg-extra
```

## Set up DVD Playback (optional)

Once you see the command above has finished, enter the following command to additionally install and enable DVD playback:

```
sudo apt install -y libdvd-pkg
```

When you see the `Configuring libdvd-pkg` prompt, press `Enter` to select the `<Ok>` option, then press `Enter` again to select the `<Yes>` option. After the command has completed, you will also need to initialize the library with the following command:

```
sudo dpkg-reconfigure libdvd-pkg
```

At the prompt, press `Enter` to select `<Yes>`.

## Restart Your Computer

After enabling codec support, it's recommended to restart your computer so any running software can load in the new codecs. You can do this with the top-right menu, or with the following command after saving and closing any other work:

```
sudo systemctl reboot
```

## Useful Programs

The program <u>VLC</u> is an excellent media player with support for DVDs, CDs, and most formats of media files.  It can be installed with the the <u>Pop!\_Shop</u> in Pop!\_OS, with the <u>Software Center</u> in Ubuntu, or with this command:

```
sudo apt install -y vlc
```
