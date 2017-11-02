---
layout: article
title: Display - Docking Station Support
description: >
  A Docking Station makes it easy to use multi monitors as well as having an ethernet port, multi USB ports and more while only using one USB 3.0 port on your laptop.
image: https://system76.com/images/foo.jpg
keywords:
  - docking 
  - station
  - popos
  - ubuntu
  - System76
  
---

### Compatible systems

 - Oryx Pro

### Product and Model:

We have tested:
 - [Plugable UD-3900](http://plugable.com/products/ud-3900/)

### Pop!_OS

The recommended ISO to install Pop!_OS is the NVIDIA ISO as that will include the needed Drivers to run the cards. You'll also need the [DisplayLink driver](http://www.displaylink.com/downloads/ubuntu) as well.

To install the DisplayLink Driver.
```
unzip DisplayLink\ USB\ Graphics\ Software\ for\ Ubuntu\ 1.4.zip
sudo ./displaylink-driver-1.4.210.run
```

### Ubuntu

For machines that ship with Ubuntu from us include our NVIDIA Driver but in case a reinstall is needed
below is how you add our NVIDIA Driver.

```
sudo apt-add-repository -ys ppa:system76-dev/stable
sudo apt-get update
sudo apt-get install -y system76-driver-nvidia
```

Then use the above steps to install the DisplayLink Driver.
