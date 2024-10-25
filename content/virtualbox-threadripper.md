---
title: VirtualBox Black Screen on Threadripper Platforms (Solution)
description: >
  How to enable video output in VirtualBox guests on hosts using Threadripper or Threadripper Pro CPUs.
keywords:
  - VirtualBox
  - Threadripper
  - Threadripper Pro
  - black screen
  - blank screen
  - no video
  - virtual machine
  - settings

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software-troubleshooting
tableOfContents: true
---

On some products using AMD Threadripper or Threadripper Pro processors, VirtualBox guests may display a blank screen as seen below:

![VirtualBox guest showing a blank screen](/images/virtualbox-threadripper/virtual-machine-black-screen.webp)

On systems affected with this issue, checking `VBox.log` while the virtual machine is running will show the following log line every second:

```
ERROR [COM]: aRC=VBOX_E_VM_ERROR (0x80bb0003) aIID={4680b2de-8690-11e9-b83d-5719e53cf1de} aComponent={DisplayWrap} aText={Could not take a screenshot (VERR_NOT_SUPPORTED)}, preserve=false aResultDetail=-37
```

Affected System76 models include:

- Thelio Major R5
- Thelio Mega R3

## Solution: Disable Nested Paging

In order to allow VirtualBox guests to properly show their displays, ensure the virtual machine is not running, then open the virtual machine's settings.

![Virtual machine settings button](/images/virtualbox-threadripper/vm-settings-button.png)

Navigate to the `System` page, then to the `Acceleration` tab.

![Virtual machine System/Acceleration settings section](/images/virtualbox-threadripper/vm-system-acceleration-settings.png)

Uncheck the checkbox labeled `Enable Nested Paging`.

![VirtualBox nested paging setting](/images/virtualbox-threadripper/vm-disable-nested-paging.png)

Select `OK` to save the settings, then start the virtual machine again. The display will output successfully.

![VirtualBox guest showing a working screen](/images/virtualbox-threadripper/virtual-machine-working-screen.webp)
