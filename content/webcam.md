---
title: Webcam
description: >
  Activate and troubleshoot your laptop webcam
keywords:
  - webcam
  - camera
  - support
  - System76

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: hardware-troubleshooting
tableOfContents: true
---

If you can’t see the image from your webcam or you receive a "No device found!" error when you try to use it, ensure that it's not toggled off.

- On most System76 laptops, press <kbd>Fn</kbd>+<kbd>F10</kbd> to toggle the camera on, then restart the application using the webcam (such as <u>Cheese</u>).
- On some Pangolin models (pang12 and pang13), there is a physical switch on the left side of the computer (while facing the screen). Ensure the switch is switched on, then restart the application using the webcam (such as <u>Cheese</u>).
  - The Pangolin models with a physical webcam switch do not have a webcam toggle key combination.

![Cheese](/images/webcam/cheese.png)

The key combination or switch controls the visibility of the webcam on the USB bus at the device level. Applications do not get notified of new devices, and will need to be restarted to discover the webcam after toggling it on.

If your webcam is still not working after toggling it off and on again and restarting the application, check the application's menu. In the application's device settings, determine if your webcam is listed and, if so, make sure it is selected as the device to use for that application. If nothing is showing in the application's device settings, then your webcam may be turned off, physically disconnected, or in need of hardware repair.
