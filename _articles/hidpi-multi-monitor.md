---
layout: article
title: HiDPI Multi-Monitor Support
description: >
    Mixing HiDPI and LoDpi displays can be complicated.  Learn what to do and how System76 automates this for you!
keywords:
  - hidpi
  - system76 driver
  - display
  - monitor
  - external
  - X11
  - xorg
image: http://support.system76.com/images/system76.png
hidden: false
section: articles

---

While HiDPI displays work well on Ubuntu, things can get a little funny when using both HiDPI and LoDPI displays together.  Generally, it's best to make all displays match the same scaling factor (all HiDPI or all LoDPI).  The System76 driver takes care of this automatically on HiDPI laptops.

When you connect a non-HiDPI display to your HiDPI laptop, the System76 driver will set the resolution of the internal display to half of its native resolution and adjust the scaling factor (from 2x to 1x) to match the external monitor.  This makes the picture a little fuzzier than normal but keeps most applications looking the right size on both displays.

This dialog appears whenever the driver detects a new mixed-DPI configuration:

![DIALOG SCREENSHOT](/images/hidpi-multi-monitor/dialog.png)

You can keep the changes or revert if you'd prefer to keep each display at its native resolution.  Most of the time you'll want to Keep Changes, but there are a few cases where the Revert option is useful....

### Big/Tiny Applications
Some applications won't recognize the change in scaling factor until they're restarted.  This includes LibreOffice, Chrome/Chromium, and applications using the QT toolkit.  With a few exceptions like GIMP and Inkscape, apps will pick up the right scaling if you close and restart them.  (Don't forget to save your work!)

If you don't want to restart these applications right now, you can choose the Revert button in the dialog, and the System76 driver will set the HiDPI monitors back to their native resolution and scaling.  They will still look big on the non-HiDPI monitors, but will look normal on the HiDPI displays.

---

### NVIDIA Issues

Using the Displays panel in the System Settings center to change resolution or layout can cause problems on NVIDIA systems because of the way scaling is handled.  Please use the NVIDIA X Server Settings application if you have an NVIDIA GPU.  

![X SERVER DISPLAY CONFIGURATION SCREENSHOT](/images/hidpi-multi-monitor/nvidia-display-settings.png)

---
