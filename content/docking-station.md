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
tableOfContents: true
---

## Disclaimer

This article is provided for information purposes only. System76 cannot guarantee that all vendors will follow USB-C or Thunderbolt specs, nor that a manufacturer won't have made hardware or firmware changes since this article was created.
Not all docks will work on all hardware. Be sure you purchase docking stations from a reputable vendor, with a flexible return policy.

### Compatible Intel systems

| System  | Supports USB-C Charging? | Supports Thunderbolt?       |
|:-------:|:------------------------:|:---------------------------:|
| addw1   | No                       | Yes                         |
| addw2   | No                       | Yes                         |
| bonw14  | No                       | Yes                         |
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

Many docking stations offer multiple video-out ports on the dock device itself. However, depending on the technology used by the dock, there may be only one video stream per port. Even if the docking station supports multiple video ports, only one at a time could be active. For example, connecting a docking station with two HDMI ports to a Thunderbolt port on a System76 laptop may only activate one HDMI monitor.

Multi-Stream Transport (MST) is a DisplayPort standard allowing multiple video streams to be sent through a single DisplayPort output on your computer or device. MST is a feature of the DisplayPort standard, so is available on Displayport, Mini-DisplayPort and DisplayPort over USB-C (USB Alt-Mode) connections. Most DisplaytPort outputs support MST, but not all docking stations use this technology to provide multiple display outputs. If you plan to use MST, make sure the hub or dock explicitly mentions MST support.

Alternatively, you can also use MST to daisy-chain two or more monitors together from the laptop or a docking station. This requires that the monitor hardware to support daisy-chaining. MST is often an advertised feature, so check the marketing material or store page for your monitor. If you already have, or have access to the monitor, you can also verify by checking for a DisplayPort output on the monitor, in addition to the normal DisplayPort inputs. A set up with daisy-chaining would look something like the diagram below:

Laptop -> Monitor 1 -> DisplayPort or USB-C Cable -> Monitor 2

### System76-tested docks

We have tested the following docks:

- [Plugable UD-CA1A](https://plugable.com/products/ud-ca1a/) [works with NVIDIA and Intel systems] <sup>1,2,3</sup>
  - All features work.

### Community-tested docks

Community members have reported that the following docks work with our products:

- [Anker A8392](https://us.anker.com/products/a8392) [[community-tested](https://github.com/system76/docs/pull/797) on an Intel system] <sup>1</sup>
- [CableMatters 107008-BLK](https://www.cablematters.com/pc-881-127-cable-matters-60-ghz-wireless-docking-station-hybrid-model-with-usb-c.aspx) [[community-tested](https://github.com/system76/docs/pull/860) on an Intel system] <sup>1</sup>
  - Simultaneous HDMI/DisplayPort, DisplayPort daisy-chaining, and 3.5mm audio not tested.
- [CalDigit TS3 Plus](https://www.caldigit.com/ts3-plus/) [community-tested on an [Intel system](https://github.com/system76/docs/pull/417) and an [NVIDIA system](https://github.com/system76/docs/pull/917)] <sup>1</sup>
  - Downstream (passthrough) Thunderbolt 3 port not tested.
  - May not be able to wake system using peripherals connected via dock.
  - Displays sometimes don't wake up from sleep until dock is re-plugged.
- [Dell D3100](https://www.dell.com/en-us/work/shop/dell-docking-station-usb-30-d3100/apd/452-bbpg/pc-accessories) [[community-tested](https://github.com/system76/docs/pull/742) on an Intel system]
  - DisplayPort port not tested.
- [Dell DS1000](https://www.dell.com/support/manuals/us/en/04/dell-dockstand-ds1000/ds1000_docking_stand_ug_publication/technical-specifications?guid=guid-1ad58fe1-dd33-4ebc-bac1-8e6a9083eb35&lang=en-us) [[community-tested](https://github.com/system76/docs/pull/431) on an Intel system]
  - Ethernet port not tested.
- [Dell WD19 Dock](https://www.dell.com/support/home/en-us/product-support/product/dell-wd19-130w-dock/overview) [[community-tested](https://github.com/system76/docs/pull/518) on an NVIDIA system] <sup>1</sup>
  - Displays sometimes don't wake up from sleep until dock is re-plugged.
- [Dell WD19S Dock](https://www.dell.com/en-us/work/shop/dell-dock-wd19s-130w/apd/210-azbg/pc-accessories) [[community-tested](https://github.com/system76/docs/pull/773) on an Intel system] <sup>1</sup>
  - Displays sometimes don't wake up from sleep until dock is re-plugged to its power source.
  - At most, two external displays can be used at a time.
  - Power button does nothing.
- [Dell WD19TB Thunderbolt Dock](https://www.dell.com/en-us/work/shop/dell-thunderbolt-dock-wd19tb/apd/210-arik/pc-accessories) [[community-tested](https://github.com/system76/docs/pull/206) on an Intel system] <sup>1</sup>
- [Dell WD19TBS Thunderbolt Dock](https://www.dell.com/en-us/work/shop/dell-thunderbolt-dock-wd19tbs/apd/210-azbi/pc-accessories) [[community-tested](https://github.com/system76/docs/pull/848) on an NVIDIA system] <sup>1</sup>
  - These issues can be potentially addressed by changing the Thunderbolt Security Mode to "None" in the BIOS, though this is not recommended.
    - Displays sometimes don't wake up from sleep until dock is re-plugged.
    - USB devices may not reconnect after sleep until dock is re-plugged.
    - May not be able to wake system using peripherals connected via dock.
- [HP Thunderbolt Dock 120W G2](https://www.amazon.com/gp/product/B07DPKVYXR/ref=ppx_yo_dt_b_asin_title_o00_s01?ie=UTF8&psc=1) [[community-tested](https://github.com/system76/docs/pull/231) on an Intel system]
  - Requires extra configuration for suspend/resume to work.
- [i-tec C31DUALDPDOCKPD](https://i-tec.pro/en/produkt/c31dualdpdockpd-2/) [[community-tested](https://github.com/system76/docs/pull/763) on an Intel system]<sup>1</sup>
  - Displays sometimes don't power on until dock is re-plugged.
- [i-tec U3DUALHDMIDOCK](https://i-tec.pro/en/produkt/u3dualhdmidock-2/) [[community-tested](https://github.com/system76/docs/pull/749) on an Intel system]
  - HDMI video and USB keyboard input lags when laptop display is closed/disabled.
  - Two HDMI outputs at the same time not tested.
- [Lenovo ThinkPad Thunderbolt 3 Workstation Dock Gen 2](https://www.lenovo.com/us/en/accessories-and-monitors/docking/universal-cable-docks-thunderbolt/TBT-WS-Dock-Gen-2/p/40ANY230US) [[community-tested](https://github.com/system76/docs/pull/517) on an Intel sytem] <sup>1</sup>
- [Lenovo ThinkPad USB 3.0 Pro Dock](https://support.lenovo.com/us/en/solutions/acc100184-thinkpad-usb-30-pro-dock-overview-and-service-parts) [[community-tested](https://github.com/system76/docs/pull/523) on an Intel system]
  - Ethernet and DVI ports not tested.
- [Plugable UD-ULTC4K USB-C Triple 4K Display Dock](https://plugable.com/products/ud-ultc4k) [[community-tested](https://github.com/system76/docs/pull/790) on an NVIDIA system] <sup>2,3</sup>
- [Plugable UD-ULTCDL USB-C Triple Display Dock](https://plugable.com/products/ud-ultcdl/) [[community-tested](https://github.com/system76/docs/pull/518) on an NVIDIA system]

<sup>1</sup> Does not need the DisplayLink Driver installed to work.  
<sup>2</sup> For video output via DisplayPort over USB-C, the Gazelle 15 (gaze15) requires GTX 1660 Ti graphics; the Gazelle 16 (gaze16) requires RTX 3060 graphics.  
<sup>3</sup> NVIDIA cards have some minor graphical issues with what is rendered under the mouse as well as scrollbars.  

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
