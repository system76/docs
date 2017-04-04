---
layout: article
title: Problems With Graphical Corruption After Suspend
description: >
  With NVIDIA driver 375.39 and 378.13 resuming from suspend in Unity causes graphical issues.
keywords:
  - NVIDIA
  - Graphics
  - Corruption
  - Suspend
  - Resume
hidden: false
section: solutions

---

A recent NVIDIA driver update has caused graphical issues after resuming from suspend. This update fixes multiple security vulnerabilities, but it introduced graphics glitching.  The versions affected are 375.39 and 378.13.

See here for more info about the security vulnerabilities fixed:

[nvidia.custhelp.com/app/answers/detail/a_id/4398](http://nvidia.custhelp.com/app/answers/detail/a_id/4398)

It is possible to downgrade, but is not recommended due to the nature of the security issue. NVIDIA is planning an updated release to fix the issue, which will be released in May, '17.

We put large amounts of engineering efforts into making sure that everything works, but sometimes the bugs move faster than we do. And NVIDIA is famous for being NVIDIA in Linux, no matter who the manufacturer is. We work with them regularly to get bugs on our systems fixed, but because they make the hardware, and they write a closed-sourced driver, we are at their mercy just as much as everyone else.

Nouveau, the open source driver, works pretty well, but still has its own issues. You can always run that driver in the meantime, instead of the NVIDIA driver.  If you go to <u>Software & Updates</u>, and then to **Additional Drivers**, the nouveau driver can be selected.

The best solution right now is to restart the broken part of the session, rather than the whole computer. You can always open a <u>Terminal</u> with <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd> and then run this command to restart <u>Compiz</u>, which should preserve your open windows:

```
killall compiz -HUP
```

If that is effective, a quick script can be made for the above command like so:

```
sudo gedit /lib/systemd/system-sleep/resetcompiz
```

And insert the following:

> #!/bin/sh  
>  
> \# This file (or a link to it) must be in the folder /lib/systemd/system-sleep/  
> \# Purpose: Kill compiz after system wakes up from sleep.  
> \# This will fix bad window borders caused by Nvidia driver 375.39.  
>  
> kill $(ps -C compiz -o pid=)  

And make it executible with this command: 

```
sudo chmod +x /lib/systemd/system-sleep/resetcompiz
```

We suspect that <u>Compiz</u> is largely responsible for this issue.  As another option, other desktop environments that we've tested, including <u>Cinnamon</u>, <u>MATE</u>, and <u>XFCE</u>, don't have these problems.  Take a look at the other environments, and try running a different one:

[support.system76.com/articles/desktop-environment](http://support.system76.com/articles/desktop-environment/)

There is a bug report filed here:

[Bug 1667158](https://bugs.launchpad.net/ubuntu/+source/nvidia-graphics-drivers-375/+bug/1667158)

Any additional people that mark <span style="color: #093;">Does this bug affect you?</span> on that bug report will help gain additional traction from developers to get this issue resolved.
