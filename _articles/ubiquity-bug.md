---
layout: article
title: Problems With WPA2-Enterprise During User Configuration
description: >
  If you try to join a WPA-Enterprise or WPA2-Enterprise while setting up your computer, the installer may crash.
keywords:
  - System76
  - first boot
  - Ubiquity
  - oem-config
  - wifi
  - WPA2-Enterprise
  - crash
image: http://support.system76.com/images/system76.png
hidden: true
section: solutions

---

There is a bug in the installer program, Ubiquity, which may crash the initial setup of your computer if a WPA-Enterprise or WPA2-Enterprise access point is joined. WPA Enterprise access points can be joined after the system is finished being setup.

The current solution is to not join a network access point while setting up the computer for the first time. Once the installation is finished and your desktop loads, WiFi access points can be joined as normal. If the new user setup program crashes and leaves only a Guest account, please see these instructions for creating a new user manually:

[Oem Firstboot](/articles/oem-firstboot/)

There is a bug report filed here:

[Bug 1249295](https://bugs.launchpad.net/ubuntu/+source/ubiquity/+bug/1249295)

Any additional people that mark <span style="color: #093;">Does this bug affect you?</span> on that bug report will help gain additional traction from developers to get this issue resolved.
