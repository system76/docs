---
layout: article
title: Display - Use 8 displays with NVIDIA NVS GPU
description: >
  Use 8 displays with a NVIDIA NVS GPU
keywords:
  - Support
  - Guides
  - System76
  - NVIDIA
image: http://support.system76.com/images/system76.png
hidden: false
section: articles

---

### Install the NVIDIA driver

To install the NVIDIA driver that System76 provides use this command:

```
sudo apt install system76-driver-nvidia
```

### Enable SLI Mosaic

Open NVIDIA X Settings, go to 'X Server Display Configuration', then select 'Advanced...' now click "Enable SLI Mosaic".

![NVIDIA-Settings](/images/multi-displays/enable-sli-mosaic.png)

### Change Configuration

Select each of the orange colored displays and change their 'Configuration' to 'X screen 0'.

#### Before

![NVIDIA-Settings](/images/multi-displays/orange-disabled.png)

#### After

![NVIDIA-Settings](/images/multi-displays/orange-enabled.png)

### Save Configuration

Select 'Save to X Configuration File' and now click 'Save'. Once the computer is rebooted the new settings will take effect.

![NVIDIA-Settings](/images/multi-displays/save-x-window.png)
