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

[maybe put laptops and desktops in a table]

### Laptops

System76 Laptops vary in their support for external displays, and how they are configured. Systems with dedicated graphics cards (dGPUs) almost always require the system to be in a [graphics mode](articles/graphics-switch-pop) where the dGPU is enabled (Hybrid or NVIDIA mode) in order for external display ports to be active.

For more information on specific models and their video-out capabilities refer to the [System76 Tech Docs](https://tech-docs.system76.com/README.html).

### Desktops

System76 Desktops with dGPUs are specific in the way that video-out ports work. On systems with integrated graphics

## Troubleshooting

There are a variety of reasons why external displays might not work.

## Hardware

Ensure that hardware is working correctly and connected properly.

### Cabling / Ports

Different display cables have different properties. For example, VGA cables do not transmit audio, where as DVI, HDMI and Displayport do.

The generation of each standard matters as well. Older generations of HDMI or Displayport will be able to transmit different amounts of bandwidth or data.

For example, HDMI can drive 4K video, but often only at 30Hz (which translates into about 30 FPS), whereas Displayport can drive 4K video at 60 frames.

The most reliable way of connecting external displays is to connect "like to like." Connect HDMI to HDMI, Displayport to Displayport etc.

Adapters exist for a lot of different cable configurations. Often adapters are used to connect newer cables to older displays' ports. For example, connecting an HDMI port to a DVI port.

If you cannot connect directly (HDMI to HDMI), the next best thing is to choose a cable with different plugs on either end (HDMI to DVI) where the cable has been designed to be the adapter.

Cable adapters that attach to the end of other cables can also work, but are the most likely to cause issue or interference. Similarly, hubs and docking stations can cause problems. The more individual devices between your PC and the display, the more points of failure there will be.

-- Ports --

A particular port may be the cause of external display issues. A port may have failed, or, the cabling may be plugged into an incorrect port.

As mentioned above, video out ports are often dependent on GPU. On laptops with a dDPUs make sure the GPU is on. On Desktops, make sure the video cables are connected to the GPU video ports.

- If your laptop or GPU has multiple video ports of the same kind, try each one in turn.
- If you have ports of multiple types available, try each type.

If none of the ports are working the GPU itself (or the mainboard) may need replaced, or it may be something as simple as a bent pin in the port, or some debris.

Display ports can be cleaned out with canned air, and/or rubbing alcohol and a lint-free cloth.

### Multiple Displays

If using multiple monitors, test with only one at a time. Total resolution or power draw may be causing issues.

[pic of display settings window]

## Software

### Configuration Files

Check for xorg file.

Test in a 2nd user.

Move xorg.conf file out of the way

If display settings have been corrupted or modified incorrectly, it's good to remove the xorg.conf.

```bash
mv /etc/X11/xorg.conf /etc/X11/xorg.conf.old
```

By default, X11 config files are instead stored here:

```bash
/usr/share/X11/xorg.conf.d
```

xorg.conf files saved in /etc/X11 can cause displays issues on boot, and should be avoided wherever possible.

### Drivers

Reinstall NVIDIA Drivers.

### Firmware

Reinstall the Firmware.

### OS-Level Issues

Sometimes, the easiest way determine if an issue is being caused by hardware or software, specifically a deeper OS level problem, is to reinstall the OS.

Booting from a Live Disk or the Recovery Partition is a useful way to rule out OS level issues without reinstalling. But if external display issues are not present when booted from a live environment, then reinstalling the OS should restore external display functionality.

Refresh Install

Clean Install

--


Test with different cables.
Test with different display(s). A TV will work.
If using multiple monitors, test with only one at a time. Total resolution or power draw may be causing issues.
If possible, connect with cables directly, remove adapters, hubs, docking stations etc.
Check to see if the monitor(s) are shown in Settings -> Displays. Orientation may need to be adjusted, or a monitor may have been “disabled.”
Test in a 2nd admin user.
Test in Recovery.
