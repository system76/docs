---
title: System76 Driver (Install - Fedora)
description: >
  Learn how to add the System76 Driver to your System76 computer after installing Fedora
keywords:
  - system76
  - driver
  - NVIDIA
  - support
  - Fedora

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

> Parent article: [System76 Driver (Install)](/articles/system76-driver)

Run these commands in a <u>Terminal</u> to enable the [community Fedora COPR](https://copr.fedorainfracloud.org/coprs/szydell/system76/) and install the <u>System76 Driver</u> :

```bash
sudo dnf copr enable szydell/system76
sudo dnf install --refresh system76-driver
```
