---
layout: article
title: Display - HiDPI Multi-Monitor Support
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

### What Is HiDPI?

With 4K monitors becoming more prominent in the marketplace, it's crucial to define the difference between a high resolution display and a true HiDPI display. Our UX designer Cassidy Blaede has put together a great series of [articles](https://medium.com/elementaryos/what-is-hidpi-and-why-does-it-matter-b024eabea20d) explaining the difference between high resolution and HiDPI.

In short, HiDPI refers to pixel doubling: drawing an image with twice as many physical pixels in each dimension than requested in virtual pixels. For example, an icon or image might be 64 virtual pixels tall, but on a HiDPI display, it’s drawn with 128 physical pixels. This makes the icon twice as crisp in any angles or curves, or allows for twice as much detail in the photo.

So, why pixel doubling and not just increasing the density on a 15" display from, say, 1080p to something like 2880×1620? To get you user interface at the same physical size as on the 1080p display, you would have to scale it by 1.5×. That means a dot that is requested to be drawn at 1 virtual pixel now has to be drawn at 1.5 physical pixels.

Half pixels don’t exist, so the software would have to compensate with aliasing. Aliasing = blurring. So with a higher resolution display, you get a blurry UI. Fonts do have mechanisms to deal with this, so it’s not an issue there, but UI elements like icons and strokes around buttons will end up looking worse on a 1.5× display than a 1× display.

For a fantastic explanation on HiDPI, please read Cassidy's full series of articles available [here](https://medium.com/elementaryos/tagged/hidpi).

### Handling HiDPI And LoDPI Simultaneously

While HiDPI displays work well, things can get a little funny when using both HiDPI and LoDPI displays together.  Generally, it's best to make all displays match the same scaling factor (all HiDPI or all LoDPI).  The System76 driver takes care of this automatically on HiDPI laptops.

When you connect a non-HiDPI display to your HiDPI laptop, the System76 driver will set the resolution of the internal display to half of its native resolution and adjust the scaling factor (from 2x to 1x) to match the external monitor.  This makes the picture a little fuzzier than normal but keeps most applications looking the right size on both displays.

This dialog appears whenever the driver detects a new mixed-DPI configuration:

![Dialog Screenshot](/images/hidpi-multi-monitor/dialog.png)

You can keep the changes or revert if you'd prefer to keep each display at its native resolution.  Most of the time you'll want to Keep Changes, but there are a few cases where the Revert option is useful....

### Big/Tiny Applications

Some applications won't recognize the change in scaling factor until they're restarted.  This includes LibreOffice, Chrome/Chromium, and applications using the QT toolkit.  With a few exceptions like GIMP and Inkscape, apps will pick up the right scaling if you close and restart them.  (Don't forget to save your work!)

If you don't want to restart these applications right now, you can choose the Revert button in the dialog, and the System76 driver will set the HiDPI monitors back to their native resolution and scaling.  They will still look big on the non-HiDPI monitors, but will look normal on the HiDPI displays.

### NVIDIA Issues

Using the Displays panel in the System Settings center to change resolution or layout can cause problems on NVIDIA systems because of the way scaling is handled.  Please use the NVIDIA X Server Settings application if you have an NVIDIA GPU.  

![X Server Display Configuration](/images/hidpi-multi-monitor/nvidia-display-settings.png)

#### Disable HiDPI Daemon:

Ubuntu 16.04

```
echo "{\"disable-hidpi\": \"True\"}" | sudo tee /etc/system76-daemon.json
```

Ubuntu 18.04

```
gsettings set com.system76.hidpi enable false
```

Pop!_OS 18.04

```
gsettings set com.system76.hidpi enable false
```

You can also open <u>Gnome Control Center</u> and go to the `Displays` panel. In the HiDPI Daemon section, set the `Enabled` switch to off.

---

The content for the "What is HiDPI" section of this article was borrowed from [Cassidy James Blaede](https://medium.com/@cassidyjames) under the [CC BY-SA 3.0 US](https://creativecommons.org/licenses/by-sa/3.0/us/) license. Links provided where appropriate.
