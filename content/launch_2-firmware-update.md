---
title: Manual steps to update firmware on Launch and Launch Heavy keyboards
description: >
  Launch firmware before version 0.12.20 will need these manual steps to make sure they can reliably upgrade firmware with `fwupd`
keywords:
  - Firmware
  - Open Firmware
  - FWUPD
  - Launch_2
  - Launch_heavy_1

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software-troubleshooting
tableOfContents: true
---

## Steps to take to update firmware

### Install software

We have a package that will bring in the needed support software to do this firmware update. Run the following commands in a terminal:

```
sudo apt install test-launch-system76-keyboard-configurator
```
If you are not on Pop!\_OS you can also use the AppImage version of the `system76-keyboard` and luanch from the command line and add the option `--lanch-test`. You will also need to make sure to install `avrdude` and `dfu-programmer`.

Start System76 Keyboard Tester -- this will launch the `System76 Keyboard Configurator` in a test mode


![System76-Tester](/images/launch_2-firmware-update/Launch-system76-keyboard-tester.png)

### Enter Bootloader mode

Unplug the launch keyboard and hold <key>ESC</key> while plugging it back in.

*NOTE: This may fail. Try 5 times -- in-between retries, leave the keyboard unplugged and press no buttons for 15 seconds.
![System76-Tester](/images/launch_2-firmware-update/Tester-in-firmware-update-mode.png)

### Suscessful enter of firmware update mode

You will know you have succedded when a new button shows up in the header of the keyboard configurator. This button will list firmware available for your keyboard. Select the "launch_2" or "lauanch_heavy_1" based on the keyboard your have. Successful firmware update will freeze updates to the application as the firmware is flashed to the new firmware.
![System76-Tester-firmware-update](/images/launch_2-firmware-update/Tester-in-firmware-update-mode-menu.png)

### Verify firmware update

Use `fwupdmgr` to verify that the firmware has updated to at least `0.12.20`:

```
sudo fwupdmgr get-devices
```
![Firmware version](/images/launch_2-firmware-update/launch-version-number.png)

### Clean up and remove software

We can remove the un-needed software with:

```
sudo apt remove test-launch-system76-keyboard-configurator
sudo apt autoremove
```

Future update will now be done with `fwupd` and should not require these manual steps.

## Getting help

If this does not work, please open a support case on for your Keyboard. Factory updates to firmware done via ISP cable can be arranged.