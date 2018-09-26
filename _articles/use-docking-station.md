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
 - Kudu

### Compatible NVIDIA systems (*)

 - Oryx Pro
 - Serval WS
 - Bonoobo WS

### Product and Model:

We have tested:
 - [Plugable UD-3900](http://plugable.com/products/ud-3900/) [works with NVIDIA and Intel systems] (*)

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
unzip DisplayLink\ USB\ Graphics\ Software\ for\ Ubuntu\ 4.2.zip
sudo ./displaylink-driver-4.2.29.run
```

For installing the NVIDIA Driver that we provide you can use this support article: [System76 NVIDIA Driver](http://support.system76.com/articles/system76-driver/).

(*) NVIDIA cards have some minor graphic issues with what is rendered under the mouse as well as scrollbars.
