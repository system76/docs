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

 - Galago Pro (galp3-b, galp3-c)
 - Darter Pro (darp5)

### System76-tested docks:

We have tested the following docks:
 - [Plugable UD-CA1A](https://plugable.com/products/ud-ca1a/) [works with NVIDIA and Intel systems] (**)
 
### Community-tested docks:

Community members have reported that the following docks work with our products:
 - [Dell WD19TB Thunderbolt Dock](https://www.dell.com/en-us/work/shop/dell-thunderbolt-dock-wd19tb/apd/210-arik/pc-accessories) [community-tested on an Intel system] (**)

### For Intel systems

You'll need to install the 'dkms' package to install DisplayLink Driver. The NVIDIA Driver installs this package automatically.

```
sudo apt install dkms
```

### Installing DisplayLink Driver

To download the newest [DisplayLink driver](http://www.displaylink.com/downloads/ubuntu) with the link in orange.

To install the DisplayLink Driver open the Terminal and move to the Download directory like so: (the version for the driver may change so look at the file name and change it accordly.)

```
cd Downloads
unzip DisplayLink\ USB\ Graphics\ Software\ for\ Ubuntu\ 5.1.zip
cd DisplayLink\ USB\ Graphics\ Software\ for\ Ubuntu\ 5.1/
sudo chmod +x displaylink-driver-5.1.26.run
sudo ./displaylink-driver-5.1.26.run
```

For installing the NVIDIA Driver that we provide you can use this support article: [System76 NVIDIA Driver](http://support.system76.com/articles/system76-driver/).

(*) NVIDIA cards have some minor graphic issues with what is rendered under the mouse as well as scrollbars.
(**) Does not need the DisplayLink Driver installed to work.
