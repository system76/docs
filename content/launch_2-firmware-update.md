---
title: Manual steps to update firmware on Launch and Launch Heavy keyboards
description: >
  Launch firmware before version 0.12.20 will need these manual steps to make sure they can reliably upgrade firmware with `fwupd`
keywords:
  - Firmware
  - Open Firmware
  - fwupd
  - Launch_2
  - Launch_heavy_1

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software-troubleshooting
tableOfContents: true
---

## Steps to take to update firmware

* NOTE: This should only be necessary for firmware versions starting with `0.7.103-`. Newer versions should be able to update via the Firmware Manager in Pop!\_OS and Ubuntu, or via `fwupdmgr`.

If you are receiving notifications that your `launch_2` or `launch_heavy_1` keyboard has an available firmware update, but the update won't install, this guide may help you manually flash the firmware update. We will be using the [System76 Keyboard Configurator](https://github.com/pop-os/keyboard-configurator/), but it will be in the testing mode that we use for factory firmware updates, as well as quality control.

Manually updating firmware in this way will reset your Launch back to its factory defaults, undoing any customizations that you've made to mapping and LEDs. Before you begin, you may want to use the System76 Keyboard Configurator to export your layout. After the firmware update, it can be imported to restore all of your customizations.

![Exporting Layout in Keyboard Configurator](/images/launch_2-firmware-update/heavy-export-layout.png)

### Install software

We have a package that will launch the System76 Keyboard Configurator in testing mode, which can be used to install this firmware update. Run the following command in a terminal:

```
sudo apt install test-launch-system76-keyboard-configurator
```

If you are not on Pop!\_OS or Ubuntu, you can also use the AppImage version of the System76 Keyboard Configurator and launch it with the `--launch-test` command line argument. You will also need to install `avrdude` and `dfu-programmer` if they are not installed already.

Start System76 Keyboard Tester -- this will launch the System76 Keyboard Configurator in a test mode.

![System76-Tester](/images/launch_2-firmware-update/Launch-system76-keyboard-tester.png)

### Enter Bootloader mode

Unplug the Launch Keyboard and hold <kbd>Esc</kbd> while plugging it back in. Continue to hold the <kbd>Esc</kbd> key for about 10 seconds, or until the firmware update button appears in the right side of the Configurator's header bar. The keyboard's LEDs will remain off while the keyboard is in bootloader mode.

![System76-Tester-in-update-mode](/images/launch_2-firmware-update/Tester-in-firmware-update-mode.png)

* NOTE: This occasionally takes a couple tries. If the LEDs come on and the keyboard powers on normally, try a few more times. In between retries, leave the keyboard unplugged for 15 to 20 seconds. We suggest that you use the braded cables that came with the Launch Keyboards.

### Update firmware

When the firmware update button appears, it means that your keyboard is in bootloader mode and is ready for a firmware update. Click the firmware update button and select your keyboard's model to initiate the firmware update.

* **WARNING:** Do not unplug the keyboard while firmware is updating! An incomplete firmware flash will render the keyboard inoperable and unflashable.

![System76-Tester-firmware-update](/images/launch_2-firmware-update/Tester-in-firmware-update-mode-menu.png)

Once the firmware update has completed, the keyboard will reset, the keyboard will be displayed in the Configurator window, and the LEDs will turn on to the default "spacetime" pattern.

The button below the keyboard in the Configurator should now say "Configure Keyboard" instead of "Keyboard firmware update required!"

![firmware-update-success](/images/launch_2-firmware-update/firmware-update-success.png)

### Clean up and remove software

We can remove the unneeded software with:

```
sudo apt remove test-launch-system76-keyboard-configurator
sudo apt autoremove
```

Future updates will now be done with the firmware manager in Pop!\_OS or Ubuntu, and these manual steps should not be necessary.

## Getting help

If this does not work, please open a [support case](https://support.system76.com/) for for your keyboard. Factory updates to firmware done via ISP cable can be arranged.
