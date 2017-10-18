---
layout: article
title: Ubuntu - Create a User If Initial User Setup Fails
description: >
  Sometimes, the first boot user creation fails and leaves only a Guest session. You can fix this by following the steps here.
keywords:
  - Support
  - Crash
  - Guest
  - Guest Session
  - OEM
  - First boot
image: http://support.system76.com/images/system76.png
hidden: false
section: articles

---

A lot of work goes in to making your System76 experience fantastic right out of the box. Getting running needs just a little bit of information like a username and password. Every now and then, something goes wrong with the new user creator. If there is only a Guest Session, follow these instructions to fix the issue.

### Overview

Here are the general steps for creating a user manually:

1.  Reboot into Recovery Mode
2.  Run a fsck to mount the drive as read-write
3.  Drop to a root shell
4.  Run oem-config-prepare
5.  Reboot the system
6.  Send logs to System76 to help us track this down

#### Recovery Mode

Power on (or reboot) your system and tap the <kbd>ESC</kbd> key to get to the GRUB boot menu.

If you end up at the GRUB CLI (it looks like `grub >`) type `normal`, press <kbd>Enter</kbd> and then immediately press <kbd>ESC</kbd>. If that fails, just reboot the computer with <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd>, pressing the reset button, or holding the power button until the computer shuts off.

![GRUB menu](/images/oem-firstboot/grub-menu.png)

Once you're in the GRUB boot menu, choose **Advanced options for Ubuntu** and then **(recovery mode)** on the first listed kernel. The system will boot into the recovery menu.

![Advanced options](/images/oem-firstboot/recovery-mode.png)

At any time, random messages or text may clutter up the recovery menu. If this happens, just press the up/down arrow keys to re-draw the menu items. The text does not affect operation of the recovery menu.

The system will boot into the recovery menu:

![fsck option at recovery mode](/images/oem-firstboot/fsck-option.png)

Choose **fsck**, and then press <kbd>Enter</kbd>. You will be notified that to continue, "your / filesystem will be mounted in read/write mode". Choose **Yes** to continue.

![fsck remount request](/images/oem-firstboot/fsck-remount.png)

<u>fsck</u> will run for about 3 seconds and ends with `[ OK ] Reached target Swap.` At this point, press <kbd>Enter</kbd> for the Recovery menu.

Choose **root** and press <kbd>Enter</kbd> to continue. Press <kbd>Enter</kbd> until the system shows a root prompt like the image below:

![Root shell](/images/oem-firstboot/recovery-menu.png)

#### Recover First-Boot Menu

Once you're at the root shell, identified with the prompt `root@ubuntu:~#`, enter the commands below:

```
oem-config-prepare
reboot
```

The system will reboot into the first-user System Configuration.

#### Help Us

Lastly, we need your help in tracking down this bug. When you get logged in, open a terminal and run this command, then send us the 'log.tgz' file it creates.

`sudo tar -cvz -f ~/log.tgz /var/log`

Please open a support ticket and attach the log file.
