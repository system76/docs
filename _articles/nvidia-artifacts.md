---
layout: article
title: Problems With Graphical Artifacts After Suspend
description: >
  With NVIDIA driver 375.39 and 378.13 resuming from suspend in Unity causes graphical issues.
keywords:
  - NVIDIA
  - Graphics
  - Corruption
  - Suspend
  - Resume
  - Artifacts
hidden: false
section: solutions

---

A recent NVIDIA driver update has caused graphical issues after resuming from suspend. This update fixes multiple security vulnerabilities and introduced graphical glitching.  The versions affected are 375.39 and 378.13.

Here is more info about the security vulnerabilities fixed:

[nvidia.custhelp.com/app/answers/detail/a_id/4398](http://nvidia.custhelp.com/app/answers/detail/a_id/4398)

While it is possible to downgrade, it's not recommended due to the nature of the security issues. NVIDIA is planning an updated release to fix the issue, which will be released in May, '17.

Nouveau, the open source driver, is an alternative. To run that driver, open <u>Software & Updates</u>, and then click **Additional Drivers**, and select the nouveau driver.

The current solution is to restart the affected part of the session. Open a <u>Terminal</u> with <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd>, and then run this command to restart <u>Compiz</u>, which should preserve open windows:

```
killall compiz -HUP
```

And to fix the background, run these commands:

```
BACKGROUND=$(gsettings get org.gnome.desktop.background picture-uri)
gsettings set org.gnome.desktop.background picture-uri ''
gsettings set org.gnome.desktop.background picture-uri $BACKGROUND
```

If those steps are effective, a script can be made for the above commands like so:

```
sudo gedit /lib/systemd/system-sleep/resetcompiz
```

And insert the following:

> #!/bin/sh
>
> \# This file (or a link to it) must be in the folder /lib/systemd/system-sleep/
> \# Purpose: Kill Compiz after system wakes up from sleep.
> \# This will fix bad window borders caused by Nvidia driver 375.39.
>
> kill $(ps -C compiz -o pid=)
> BACKGROUND=$(gsettings get org.gnome.desktop.background picture-uri)
> gsettings set org.gnome.desktop.background picture-uri ''
> gsettings set org.gnome.desktop.background picture-uri $BACKGROUND

And make it executable with this command:

```
sudo chmod +x /lib/systemd/system-sleep/resetcompiz
```

If restarting <u>Compiz</u> doesn't solve the issue, the X windows session can be restarted.  Use this command to restart the session, which is faster than restarting your computer (this will close all open windows):

```
sudo systemctl restart lightdm
```

As another option, other desktop environments that we've tested, including <u>Cinnamon</u>, <u>MATE</u>, and <u>XFCE</u>, don't have this issue.  Take a look at the other environments, and try running a different one:

[support.system76.com/articles/desktop-environment](http://support.system76.com/articles/desktop-environment/)

There is a bug report filed here:

[Bug 1667158](https://bugs.launchpad.net/ubuntu/+source/nvidia-graphics-drivers-375/+bug/1667158)

Any additional people that mark <span style="color: #093;">Does this bug affect you?</span> on that bug report will help gain additional traction from developers to get this issue resolved.
