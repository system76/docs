---
layout: article
title: Bluetooth - Troubleshoot Bluetooth Issues
description: >
  Here is how to fix several common Bluetooth issues with your computer.
keywords:
  - bluetooth
  - mouse
  - audio
image: http://support.system76.com/images/system76.png
hidden: false
section: articles

---

Bluetooth issues can be troubleshooted in several ways.  The first thing to check is toggling airplane mode which will sometimes get Bluetooth functioning again.  Next, make sure Bluetooth is enabled in the top bar, or in the <u>Bluetooth</u> system settings.

Then, try reinstalling Bluetooth related software with this command:

```
sudo apt install --reinstall bluez gnome-bluetooth indicator-bluetooth pulseaudio-module-bluetooth
```

If `tlp` is installed, then there may be settings interfering with Bluetooth functionality.  Edit this file and disable Wifi and Bluetooth power saving features:

```
sudo gedit /etc/default/tlp
```

## Useful Programs

There is a program called <u>Bluetooth Manager</u> which is included with <u>XFCE</u>. It can sometimes pair and trust Bluetooth devices better than the default <u>Bluetooth</u> settings. Install it with:

```
sudo apt install blueman
```

Then, run <u>Bluetooth Manager</u>. Check for the device being trusted, and also try re-pairing in that program.

## Useful Commands

```
lsmod | grep bluetooth
dmesg | grep Bluetooth
```

These will show if the Bluetooth module (driver) is loaded, and what the system messages are.

```
sudo systemctl status bluetooth
```

This will check to see if the service that handles Bluetooth is running.

```
rfkill list
sudo rfkill unblock bluetooth
```

This will check to see Bluetooth is blocked, and if so, unblock it.

```
pactl load-module module-bluetooth-discover
```

This will load the PulseAudio module responsible for Bluetooth Audio.  Typically, it's loaded by default, but sometimes a manual loading can get Bluetooth headsets working again.

```
sudo btmon
```

This will show all Bluetooth related messages.  Try leaving this command running while pairing or using a device to see any error messages or failures.

## Additional Info

Here are a few addition tidbits about the Bluetooth system that may help with troubleshooting.

#### Linux Firmware

Occasionally the kernel and/or Linux firmware will have problems.  Sometimes, newer Linux firmware packages will have fixed bugs that aren't yet in the repositories.  They can be downloaded from here:

[http://mirrors.kernel.org/ubuntu/pool/main/l/linux-firmware/](http://mirrors.kernel.org/ubuntu/pool/main/l/linux-firmware/)

Then they can be installed with this command:

```
sudo dpkg -i linux-firmware_1.167.1_all.deb
```

#### File Transfer

Sometimes, additional programs need installed for mobile equipment file transfer.  Please install the transfer tool with this command:

```
sudo apt install obexfs obexftp
```

Then connect (pair) to the device and see if send files works.  To receive files over Bluetooth you will need to enable the option in <u>Personal File Sharing</u>.
