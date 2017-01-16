---
layout: article
title: First boot failed, only Guest Session available
description: >
  Sometimes, the first boot user creation fails. You can fix it by following the steps here.
keywords:
  - Support
  - Crash
  - Guest
  - Guest Session
  - OEM
  - First boot
hidden: false
section: articles

---

A lot of work goes in to making your System76 experience fantastic right out of the box. Getting running needs just a little bit of information like a username and password. Every now and then, something goes wrong with the new user creator. If you boot your computer and only find a Guest Session, follow these instructions to fix the issue.

# Overview

Here are the general steps for creating a user manually:

1. Reboot into Recovery Mode
2. Run a fsck to mount the drive as read-write
3. Drop to a root shell
4. Run oem-config-prepare
5. Reboot the system
6. Send logs to System76 to help us track this down

## Boot into Recovery Mode

Power on (or reboot) your system.  Hold the left <kbd>Shift</kbd> key, or start pressing <kbd>ESC</kbd> to get to the GRUB boot menu.

![GRUB menu](/images/oem-firstboot/grub-menu.png)


If you end up at the GRUB CLI (it looks like `grub >`) type _exit_, press <kbd>Enter</kbd> and then immediately press <kbd>ESC</kbd> twice. If that fails, just reboot the computer with Ctrl+Alt+Del, pressing the reset button, or holding the power button until the computer shuts off.

Once you're in the GRUB boot menu, choose **Advanced options for Ubuntu** and then **recovery mode.** The system will boot into the recovery menu. **At any time, random messages or text may clutter up the recovery menu.** If this happens, just press the up/down arrow keys to re-draw the menu items. The text does not affect operation of the recovery menu.

![Advanced options](/images/oem-firstboot/recovery-mode.png)

The system will boot into the recovery menu.

![fsck option at recovery mode](/images/oem-firstboot/fsck-option.png)

Choose `fsck`, and then press <kbd>Enter</kbd>. You will be notified that to continue, your / filesystem will be mounted in read/write mode. Choose `Yes` to continue.

![fsck remount request](/images/oem-firstboot/fsck-remount.png)

`fsck` will run for about 3 seconds and ends with `[ OK ] Reached target Swap.` At this point, press <kbd>Enter</kbd> for the Recovery menu.

![Root shell](/images/oem-firstboot/recovery-menu.png)

Choose `root` and press <kbd>Enter</kbd> to continue. Press <kbd>Enter</kbd> until the system shows a root prompt like the image below.

## Recovering the first-boot menu

Once you're at the root shell (identified with the prompt `root@ubuntu:~#`), enter the command below.

`oem-config-prepare` then press <kbd>Enter</kbd>

follwed by:

`reboot` and press <kbd>Enter</kbd> again.

The system will reboot into the first-user System Configuration.

## Help us track down the problem

Lastly, we need your help in tracking down this bug. When you get logged in, open a terminal and run this command, then send us the 'log.tgz' file it creates.

`sudo tar -cvz -f ~/log.tgz /var/log`

Please open a Support ticket and attach the log file.
