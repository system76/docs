---
layout: article
title: Windows - Find Windows Drivers
description: >
  If you are trying to install Windows on a System76 computer, here are some instructions for locating the drivers.
keywords:
  - Windows
  - Microsoft
  - drivers
image: http://support.system76.com/images/system76.png
hidden: false
section: articles

---

Most of the hardware in a System76 computer is Intel based, and Windows Update is rather effective at finding drivers. We also recommend using Intel's Driver Update utility, which will automatically detect and install drivers for Intel hardware.

[Intel Driver Update Utility](http://www.intel.com/content/www/us/en/support/detect.html)

For systems with NVIDIA graphics cards, drivers can be found on their website:

NVIDIA hardware table:

Always        | Maybe                | Never
:------------:|:--------------------:|:----:
Oryx Pro      | Wild Dog Pro         | Lemur
Serval WS     | Ratel                | Gazelle
Bonobo WS     | Galago Pro (w/ eGPU) | Kudu
Leopard WS    |                      | Meerkat
Silverback WS |                      |

[NVIDIA Drivers](http://www.nvidia.com/Download/index.aspx)

Ethernet hardware table:

Realtek RTL8111/8168/8411 | Intel I219-V        | Atheros/Killer Ethernet E2400 | Intel I210
:------------------------:|:-------------------:|:-----------------------------:|:---------:
Oryx Pro                  | Meerkat             | Serval WS                     | Silverback WS
Lemur                     | Wild Dog Pro        | Bonobo WS                     |
Gazelle                   | Leopard WS          |                               |
Kudu                      |                     |                               |

[Realtek Drivers](http://www.realtek.com.tw/downloads/)

[Intel I219-V Drivers](https://downloadcenter.intel.com/product/82186/Intel-Ethernet-Connection-I219-V)

[Intel I210 Drivers](https://downloadcenter.intel.com/product/64399/Intel-Ethernet-Controller-I210-Series)

[Killer Ethernet Drivers](http://www.killernetworking.com/driver-downloads/category/killer-suite)

Our laptops and desktops use Intel WiFi, which should be found by the Intel Driver Update utility.  

If there is a missing driver in the <u>Device Manager</u>, right click on the item with the missing driver, choose **Properties**, then **Details**, and then **Hardware Ids** from the drop-down.  The VEN (vendor) and DEV (device) numbers are unique to every piece of hardware.  Search for the device at the PCI Database:

[PCI Lookup](http://www.pcilookup.com/)

You can use that info to find the manufacturer, then search for drivers.
