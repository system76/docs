---
layout: article
title: Find Windows Drivers
description: >
  If you are trying to install Windows on a System76 computer, here are some instructions for locating the drivers.
keywords:
  - Windows
  - Microsoft
  - drivers
hidden: false
section: articles

---

Most of the hardware in a System76 computer is Intel based, and the Windows Update Program is rather effective at finding drivers. We also recommend using Intel's Driver Update Program, which does an awesome job of finding drivers for Intel hardware:

[Intel Driver Update Utility](http://www.intel.com/content/www/us/en/support/detect.html)

For systems with NVIDIA graphics cards, NVIDIA drivers can be found on their website:

[NVIDIA Drivers](http://www.nvidia.com/Download/index.aspx)

Trackpad drivers for our laptops can be found on Synaptic's website:

[Synaptic Drivers](http://www.synaptics.com/resources)

Ethernet drivers can be found on Realtek's website:

[Realtek Drivers](http://www.realtek.com.tw/downloads/)

If there is a missing driver in the <u>Device Manager</u>, right click on the item with the missing driver, choose **Properties**, then **Details**, and then **Hardware Ids** from the drop-down.  The VEN (vendor) and DEV (device) numbers are unique to every piece of hardware.  Search for the device at the PCI Database:

[PCI Database](http://pcidatabase.com/)

And use that info to find the driver.
