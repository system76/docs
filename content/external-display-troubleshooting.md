---
title: External Displays (Troubleshooting)
description: >
    Troubleshoot connectivity and video issues with external displays.
keywords:
  - Support
  - Monitors
  - Displays
  - Troubleshooting
  - Video
  - Video Out
  - TV
  - System76

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

## Connecting External Displays

### Laptops

System76 Laptops vary in their support for external displays, and how they are configured. Systems with dedicated graphics cards (dGPUs) almost always require the system to be in a [graphics mode](articles/graphics-switch-pop) where the dGPU is enabled (Hybrid or NVIDIA mode) in order for external display ports to be active.

For more information on specific models and their video-out capabilities refer to the [System76 Tech Docs](https://tech-docs.system76.com/README.html).

### Desktops

System76 Desktops with dGPUs are specific in the way that video-out ports work. On systems with integrated graphics

## Troubleshooting

There are a variety of reasons why external displays might not work.

## Hardware

Ensure that hardware is working correctly and connected properly.

### Cabling

Different display cables have different properties. For example, VGA cables do not transmit audio, where as DVI, HDMI and Displayport do.

The generation of each standard matters as well. Older generations of HDMI or Displayport will be able to transmit different amounts of bandwidth or data.

For example, HDMI can drive 4K video, but often only at 30Hz (which translates into about 30 FPS), whereas Displayport can drive 4K video at 60 frames.

The most reliable way of connecting external displays is to connect "like to like." Connect HDMI to HDMI, Displayport to Displayport etc.

Adapters exist for a lot of different cable configurations. Often adapters are used to connect newer cables to older displays' ports. For example, connecting an HDMI port to a DVI port.

If you cannot connect directly (HDMI to HDMI), the next best thing is to choose a cable with different plugs on either end (HDMI to DVI) where the cable has been designed to be the adapter.

Cable adapters that attach to the end of other cables can also work, but are the most likely to cause issue or interference. Similarly, hubs and docking stations can cause problems. The more individual devices between your PC and the display, the more points of failure there will be.

### Ports

### Multiple Displays

## Software

### Configuration Files

Check for xorg file.
Test in a 2nd user.

### Drivers

### Firmware

### OS Level Issues