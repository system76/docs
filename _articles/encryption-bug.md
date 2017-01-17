---
layout: article
title: Problems Entering Password with Full Disk Encryption
description: >
  If you have a system with full disk encryption and an NVIDIA graphics card, there is a bug in Plymouth that prevents the password from showing or being accepted. Here are some solutions to this problem.
keywords:
  - System76
  - encryption
  - full disk encryption
  - password
  - NVIDIA
  - Plymouth
hidden: false
section: solutions

---

There is a bug in the Plymouth splash screen which can cause issues inputting your password. This only affects systems with NVIDIA hardware.

The current work-around is to disable the splash screen while booting. To disable the splash screen on the first boot, tap <kbd>ESC</kbd> while booting to enter the GRUB menu. Press <kbd>E</kbd> to edit the default option, then delete the word 'splash' from the second to last line, and press <kbd>F10</kbd> to continue booting. Once booted, disable the Plymouth splash screen permanently by editing the GRUB configuration file with this command:

`sudo gedit /etc/default/grub`

And change this line:

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"  
```

to this:

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet"  
```

Save the file, and run this command to make it permanent:

`sudo update-grub`


There is a bug report filed here:

[Bug 1386005](https://bugs.launchpad.net/ubuntu/+source/plymouth/+bug/1386005)

Any additional people that mark <span style="color: #093;">Does this bug affect you?</span> on that bug report will help gain additional traction from developers to get this issue resolved.
