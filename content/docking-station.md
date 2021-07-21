---
title: Docking Station Support
description: >
  A Docking Station makes it easy to use multi monitors. It also adds an ethernet port, multi USB ports and more while only using one USB 3.0 port on your laptop.
keywords:
  - docking
  - station
  - popos
  - ubuntu
  - System76

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: general-hardware-info
---

## Disclaimer

This article is provided for information purposes only. System76 cannot guarantee that all vendors will follow USB-C or Thunderbolt specs, nor that a manufacturer won't have made hardware or firmware changes since this article was created.
Not all docks will work on all hardware. Be sure you purchase docking stations from a reputable vendor, with a flexible return policy.

### Compatible Intel systems

| System  | Supports USB-C Charging? | Supports Thunderbolt?       |
|:-------:|:------------------------:|:---------------------------:|
| addw2   | No                       | No (DisplayPort over USB-C) |
| bonw14  | No                       | No (DisplayPort over USB-C) |
| darp5   | No                       | Yes                         |
| darp6   | Yes                      | Yes                         |
| darp7   | Yes                      | Yes                         |
| galp3-b | No                       | Yes                         |
| galp3-c | Yes                      | Yes                         |
| galp4   | Yes                      | Yes                         |
| galp5   | Yes                      | Yes                         |
| lemp9   | Yes                      | No (DisplayPort over USB-C) |
| lemp10  | Yes                      | Yes                         |
| serw12  | No                       | No (DisplayPort over USB-C) |

## A Note About Multi-Monitor Support

Many docking stations offer multiple video-out ports on the dock device itself. However, our systems typically only have one video stream per port; so, even if a docking station supports multiple video ports, only one at a time will be active. For example, connecting a docking station with two DisplayPort ports to the Thunderbolt port on a System76 laptop will only activate one DisplayPort monitor. To chain two monitors together from the same docking station requires the monitor hardware to support daisy-chaining, and both monitors will need to be connected to each other, rather than to the docking station.

Laptop -> Docking Station -> Monitor 1 -> DisplayPort Cable or Thunderbolt Cable -> Monitor 2

### System76-tested docks

We have tested the following docks:

- [Plugable UD-CA1A](https://plugable.com/products/ud-ca1a/) [works with NVIDIA and Intel systems] <sup>1,2,3</sup>
  - All features work.

### Community-tested docks

Community members have reported that the following docks work with our products:

- [CalDigit TS3 Plus](https://www.caldigit.com/ts3-plus/) [[community-tested](https://github.com/system76/docs/pull/417) on an Intel system] <sup>1</sup>
  - Downstream (passthrough) Thunderbolt 3 port not tested.
- [Dell DS1000](https://www.dell.com/support/manuals/us/en/04/dell-dockstand-ds1000/ds1000_docking_stand_ug_publication/technical-specifications?guid=guid-1ad58fe1-dd33-4ebc-bac1-8e6a9083eb35&lang=en-us) [[community-tested](https://github.com/system76/docs/pull/431) on an Intel system]
  - Ethernet port not tested.
- [Dell WD19 Dock](https://www.dell.com/en-us/work/shop/dell-dock-wd19-90w-power-delivery-130w-ac/apd/210-ARIO/pc-accessories) [[community-tested](https://github.com/system76/docs/pull/518) on an NVIDIA system] <sup>1</sup>
  - Displays sometimes don't wake up from sleep until dock is re-plugged.
- [Dell WD19TB Thunderbolt Dock](https://www.dell.com/en-us/work/shop/dell-thunderbolt-dock-wd19tb/apd/210-arik/pc-accessories) [[community-tested](https://github.com/system76/docs/pull/206) on an Intel system] <sup>1</sup>
- [HP Thunderbolt Dock 120W G2](https://www.amazon.com/gp/product/B07DPKVYXR/ref=ppx_yo_dt_b_asin_title_o00_s01?ie=UTF8&psc=1) [[community-tested](https://github.com/system76/docs/pull/231) on an Intel system]
  - Requires extra configuration for suspend/resume to work.
- [Lenovo ThinkPad Thunderbolt 3 Workstation Dock Gen 2](https://www.lenovo.com/us/en/accessories-and-monitors/docking/universal-cable-docks-thunderbolt/TBT-WS-Dock-Gen-2/p/40ANY230US) [[community-tested](https://github.com/system76/docs/pull/517) on an Intel sytem] <sup>1</sup>
- [Lenovo ThinkPad USB 3.0 Pro Dock](https://support.lenovo.com/us/en/solutions/acc100184-thinkpad-usb-30-pro-dock-overview-and-service-parts) [[community-tested](https://github.com/system76/docs/pull/523) on an Intel system]
  - Ethernet and DVI ports not tested.
- [Plugable UD-ULTCDL Dock](https://plugable.com/products/ud-ultcdl/) [[community-tested](https://github.com/system76/docs/pull/518) on an NVIDIA system]

<sup>1</sup> Does not need the DisplayLink Driver installed to work.  
<sup>2</sup> On the Gazelle 15 (gaze15), requires GTX 1660 Ti graphics for video output via DisplayPort over USB-C.  
<sup>3</sup> NVIDIA cards have some minor graphic issues with what is rendered under the mouse as well as scrollbars.

## Installing the DisplayLink Driver

**Note:** The DisplayLink driver should only be installed if you are using a docking station that requires it. The DisplayLink driver may cause graphical issues with non-DisplayLink devices.

On Intel or AMD graphics systems, you'll need to install the 'dkms' package to install DisplayLink driver. On NVIDIA graphics systems, the NVIDIA driver installs this package automatically.

```bash
sudo apt install dkms
```

Download the newest [DisplayLink driver](http://www.displaylink.com/downloads/ubuntu) from the linked webpage.

To install the DisplayLink driver, open the Terminal and move to the Downloads directory (the version for the driver may change, so look at the file name and change it accordingly):

```bash
cd Downloads
unzip DisplayLink\ USB\ Graphics\ Software\ for\ Ubuntu5.4-EXE.zip
sudo chmod +x displaylink-driver-5.4.0-55.153.run
sudo ./displaylink-driver-5.4.0-55.153.run
```

To uninstall the DisplayLink driver, use this command:

```bash
sudo displaylink-installer uninstall
```

To install the NVIDIA driver that we provide, see the [System76 NVIDIA Driver](/articles/system76-driver) support article.
