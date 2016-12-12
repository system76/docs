---
layout: article
title: Screen Stays Dark After Timeout
description: >
  If you have an Oryx 2 (oryp2), a Serval 10 (serw10), or a Bonobo 11 (bonw11), there is currently a bug in the NVIDIA driver which prevents the screen backlight from coming on after a screen timeout.  Here are some suggestions to work around the bug.
keywords:
  - System76
  - Backlight
  - NVIDIA
  - screen timeout
  - blank screen
hidden: false
section: solutions

---

This is new bug introduced by the current version of the NVIDIA driver.  It prevents the internal screen backlight from turning on after the screen is turned off when idle.

The current work-around is to press <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>F1</kbd>, followed by <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>F7</kbd> after resuming from the screen idle timeout.  Other options are disabling the screen idle timeout, only suspending (since it doesn't have this issue), or using a screensaver to blank the screen

We have been working with NVIDIA to develop a solution to this problem.  It will be released in the next version of the NVIDIA driver after 375.20.  Once they release it, we will point our system76-driver-nvidia package to that version, so your normal updates will resolve this issue.


There is a bug report here:

[Bug 1631191](https://bugs.launchpad.net/ubuntu/+source/nvidia-graphics-drivers-367/+bug/1631191)

Any additional people that mark <span style="color: #093;">Does this bug affect you?</span> on that bug report will help gain additional traction from developers to get this issue resolved.
