---
layout: article
title: Docking Station Support
description: >
  A Docking Station makes it easy to use multi monitors. It also adds an ethernet port, multi USB ports and more while only using one USB 3.0 port on your laptop.
keywords:
  - docking
  - station
  - popos
  - ubuntu
  - System76
image: https://system76.com/images/system76.png
hidden: false
section: accessories
---

### Compatible Intel systems

<table>
<tbody>
<tr style="height: 23px;">
<td style="height: 23px;">System </td>
<td style="height: 23px;">Supports USB-C Charging?</td>
<td style="height: 23px;">Supports Thunderbolt?</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px;">darp7</td>
<td style="height: 23px;">Yes</td>
<td style="height: 23px;">Yes</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px;">darp6</td>
<td style="height: 23px;">Yes</td>
<td style="height: 23px;">Yes</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px;">darp5</td>
<td style="height: 23px;">No</td>
<td style="height: 23px;">Yes</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px;">galp5</td>
<td style="height: 23px;">Yes</td>
<td style="height: 23px;">Yes</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px;">galp4</td>
<td style="height: 23px;">Yes</td>
<td style="height: 23px;">Yes</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px;">galp3-c</td>
<td style="height: 23px;">Yes</td>
<td style="height: 23px;">Yes</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px;">galp3-b</td>
<td style="height: 23px;">No</td>
<td style="height: 23px;">Yes</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px;">lemp10</td>
<td style="height: 23px;">Yes</td>
<td style="height: 23px;">Yes</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px;">lemp9</td>
<td style="height: 23px;">Yes</td>
<td style="height: 23px;">No (DisplayPort over USB-C)</td>
</tr>
</tbody>
</table>

### System76-tested docks:

We have tested the following docks:
 - [Plugable UD-CA1A](https://plugable.com/products/ud-ca1a/) [works with NVIDIA and Intel systems] <sup>1,2,3</sup>
   - All features work.
 
### Community-tested docks:

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

### For Intel systems

You'll need to install the 'dkms' package to install DisplayLink Driver. The NVIDIA Driver installs this package automatically.

```
sudo apt install dkms
```

### Installing DisplayLink Driver

To download the newest [DisplayLink driver](http://www.displaylink.com/downloads/ubuntu) with the link in orange.

To install the DisplayLink Driver, open the Terminal and move to the Downloads directory (the version for the driver may change, so look at the file name and change it accordingly):

```
cd Downloads
unzip DisplayLink\ USB\ Graphics\ Software\ for\ Ubuntu\ 5.2.zip
sudo chmod +x displaylink-driver-5.2.14.run
sudo ./displaylink-driver-5.2.14.run
```

To uninstall the DisplayLink driver this command will be used:

```
sudo displaylink-installer uninstall
```

For installing the NVIDIA Driver that we provide you can use this support article: [System76 NVIDIA Driver](http://support.system76.com/articles/system76-driver/).

<sup>1</sup> Does not need the DisplayLink Driver installed to work.  
<sup>2</sup> On the Gazelle 15 (gaze15), requires GTX 1660 Ti graphics for video output via DisplayPort over USB-C.  
<sup>3</sup> NVIDIA cards have some minor graphic issues with what is rendered under the mouse as well as scrollbars.
