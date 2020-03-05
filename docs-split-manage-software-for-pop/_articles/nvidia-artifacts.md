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
image: http://support.system76.com/images/system76.png
hidden: true 
section: solutions

---

A recent NVIDIA driver update has caused graphical issues after resuming from suspend. This update fixes multiple security vulnerabilities and introduced graphical glitching.  The versions affected are 375.39 and 378.13.

Here is more info about the security vulnerabilities fixed:

[nvidia.custhelp.com/app/answers/detail/a_id/4398](http://nvidia.custhelp.com/app/answers/detail/a_id/4398)

While it is possible to downgrade, it's not recommended due to the nature of the security issues. NVIDIA is planning an updated release to fix the issue, which will be released in May, '17.

## For 17.04/16.10 users:

We've developed a solution that has been released in our driver.  Please run updates to get the current system76 driver for this fix.

```
sudo apt update
sudo apt upgrade
```

## For 16.04 users:

You can pull in an updated Nvidia driver using this method:

```
wget http://developer.download.nvidia.com/compute/cuda/repos/ubuntu1604/x86_64/cuda-repo-ubuntu1604_8.0.61-1_amd64.deb
sudo dpkg -i cuda-repo-ubuntu1604_8.0.61-1_amd64.deb
sudo apt update
sudo apt upgrade
```

As another option, other desktop environments that we've tested, including <u>Cinnamon</u>, <u>MATE</u>, and <u>XFCE</u>, don't have this issue.  Take a look at the other environments, and try running a different one:

[Desktop Environment](/articles/desktop-environment/)

There is a bug report filed here:

[Bug 1667158](https://bugs.launchpad.net/ubuntu/+source/nvidia-graphics-drivers-375/+bug/1667158)

Any additional people that mark <span style="color: #093;">Does this bug affect you?</span> on that bug report will help gain additional traction from developers to get this issue resolved.
