---
layout: article
title: Display - Docking Station Support
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
section: articles
---

### Compatible Intel systems

 - Lemur
 - Galago Pro
 - Gazelle

### Compatible NVIDIA systems

 - Oryx Pro
 - Serval WS
 - Bonoobo WS

### Product and Model:

We have tested:
 - [Plugable UD-3900](http://plugable.com/products/ud-3900/) [works with NVIDIA and Intel systems]

### For Intel systems

You'll also need to install the 'dkms' package to install DisplayLink Driver. The NVIDIA Driver installs this package automatically.

```
sudo apt install dkms
```

### Installing DisplayLink Driver

The recommended ISO to install Pop!_OS is the NVIDIA ISO as that will include our NVIDIA Driver for the card. You'll also need the newest [DisplayLink driver](http://www.displaylink.com/downloads/ubuntu) as well.

To install the DisplayLink Driver open the Terminal and move to the Download directory like so: (the version for the driver may change so look at the file name and change it accordly.)

```
cd Downloads
unzip DisplayLink\ USB\ Graphics\ Software\ for\ Ubuntu\ 1.4.zip
sudo ./displaylink-driver-1.4.210.run
```

For machines that ship with Ubuntu and Pop!_OS from us include our NVIDIA Driver but in case a reinstall was needed
below is how you add our NVIDIA Driver.

```
sudo apt-add-repository -ys ppa:system76-dev/stable
sudo apt-get update
sudo apt-get install -y system76-driver-nvidia
```

Then use the above steps to install the DisplayLink Driver.
