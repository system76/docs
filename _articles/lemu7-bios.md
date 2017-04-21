---
layout: article
title: Lemur (lemu7) BIOS
description: >
    New Lemur (lemu7) BIOS Released!
keywords:
    - Support
    - Lemur
    - lemu7
    - BIOS
    - Update
    - Virtualization
    - VT-x
    - System76
image: http://support.system76.com/images/system76.png
hidden: true
section: articles

---

---

This BIOS update enables VT-x for virtualization on your Lemur.  These instructions only apply to the Lemur 7. They do not apply to any other model of computer we sell.

This will update your BIOS to version 1.05.14RSA4/EC 1.05.02SA3.

---

### Prerequisites

1. If you have a BIOS password set, clear this prior to updating. This can be done by holding down <kbd>F2</kbd> when you computer starts, and going to the <u>Security</u> tab.  Press <kbd>Enter</kbd> on the Supervisor/Boot passwords, and press <kbd>Enter</kbd> when prompted for a new password.  This password is not the same as the user account password in Ubuntu.  This is the hardware level, BIOS password, that needs cleared.

2. Remove all external USB drives and devices.

3. Ensure your computer is set to boot with UEFI mode enabled in the Boot menu.  If the computer has not been changed to Legacy boot mode in the BIOS, then UEFI boot is the default setting.  UEFI boot mode does not show a System76 logo when the computer first starts, while BIOS mode does.

### Updating BIOS

1. Download the [lemu7.zip](/files/firmware/lemu7-bios.zip) file, unzip it, and put all of the files on the root of a MBR FAT32 formatted USB flash drive.

2. Connect AC power to the laptop. AC power is required to update.

3. Restart your Lemur and hold <kbd>F7</kbd> during boot.  Choose the USB drive from the boot menu.

4. At the prompt, type in `fs1:` and press <kbd>Enter</kbd> (this switches to the USB drive to run the updates).

5. Type in `meset` and press <kbd>Enter</kbd>.  This unlocks the ME for flashing.  The computer will turn off and reboot.  The fans will be at 100% for the next steps.  If they are not, please plug in AC power and try again.

6. Hold <kbd>F7</kbd> to boot from USB again.  Type in `fs1:` and press <kbd>Enter</kbd>.

7. Type in `flashme` and press <kbd>Enter</kbd>.  This will flash the ME, and then the BIOS.  The computer will then turn off.

8. Hold <kbd>F7</kbd> to boot from USB again.  Type in `fs1:` and press <kbd>Enter</kbd>.

9. Type in `ecflash` and press <kbd>Enter</kbd>.  This will flash the EC.  The computer will turn off.

10. Hold <kbd>F7</kbd> to boot from USB again.  Type in `fs1:` and press <kbd>Enter</kbd>.

11. Type in `eol` and press <kbd>Enter</kbd>.  This will lock the ME again.  The computer will turn off.

Enjoy using your Lemur with the fancy new BIOS!

### Get Help

Having trouble with your BIOS update? We're here to help! Here are two ways to get assistance:

#### Contact A Technician

Get in touch using our support system. View the orders in your [Account](https://system76.com/my-account/orders), then choose **Open Support Case** under your Lemur (lemu7).

#### Phone Support

Our representatives are available to help and take questions by phone between 8 AM and 5 PM Mountain Time, Mon–Fri. You can reach us at (720) 226-9269.
