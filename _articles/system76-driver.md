---
layout: article
title: Software - Install the System76 Driver
description: >
    Our System76 Driver can generate system logs, we'll also go over how to reinstall the NVIDIA Driver.
keywords:
  - system76
  - driver
  - NVIDIA
  - support
image: http://support.system76.com/images/system76.png
hidden: false
section: faq

---

### System76 Driver

To install our Driver you need to run the following commands in the Terminal:

```
sudo apt-add-repository -y ppa:system76-dev/stable
sudo apt-get update
sudo apt-get install -y system76-driver
```

#### Generate Log Files

Simply clicking the button outlined in red will create a file called `system76-logs.tgz`, it will be placed in your Home directory (/home/username)

![CreateLogFiles](/images/system76-driver/CreateLogFiles.png)

### System76 NVIDIA Driver

Follow the above steps as well as this additional command:

```
sudo apt-get install system76-driver-nvidia
```
