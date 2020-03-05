---
layout: article
title: Problems Joining WiFi On First Boot
description: >
  If you try to join a WiFi access point after setting up a new user and then logging into the computer, the WiFi network will show "device not ready" instead of access points. Here is the solution to this problem.
keywords:
  - System76
  - first boot
  - oem-config
  - wifi
image: http://support.system76.com/images/system76.png
hidden: true
section: solutions

---

There is a bug in the program that manages networking, <u>network-manager</u>, which prevents wireless networks from being shown the first time the computer is used. This issue is present even if a WiFi access point was joined during the new user setup.

To join an access point, the computer can be restarted, or this command can be run:

```
sudo systemctl restart NetworkManager.service
```

There is a bug report filed here:

[Bug 1576024](https://bugs.launchpad.net/ubuntu/+source/network-manager/+bug/1576024)

Any additional people that mark <span style="color: #093;">Does this bug affect you?</span> on that bug report will help gain additional traction from developers to get this issue resolved.
