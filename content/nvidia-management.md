---
title: NVIDIA Management
description: >
   Set expectations for NVIDIA systems and manage NVIDIA drivers
keywords:
  - System76
  - NVIDIA
  - nvidia
  - drivers
  - install
  - video
  - graphics
  - Pop!\_OS

facebookImage: /_social/article
twitterImage: /_social/article

hidden: true
section: software
tableOfContents: true
---

A large number of System76 Machines ship with NVIDIA graphics cards. Because of this fact, it may be useful to understand typical behavior of your NVIDIA system, as well as how to install or uninstall the NVIDIA Drivers.

The following table outlines which systems have, or are likely to have, NVIDIA cards.

| Always        | Maybe          | Never       |
|:------------- |:-------------- |:----------- |
| Oryx Pro      | Wild Dog Pro   | Lemur (Pro) |
| Adder WS      | Ratel          | Kudu        |
| Serval WS     | Galago Pro 5   | Meerkat     |
| Bonobo WS     | Gazelle        | Galago Pro (4 or older)  |
| Leopard WS    | Thelio         | Darter Pro  |
| Silverback WS | Thelio Mira    | Pangolin    |
| Thelio Mega   | Thelio Major   |             |
|               | Thelio Massive |             |

## Expectations

### Battery Life

NVIDIA Graphics cards are powerful, and power-hungry. System76 laptops with dedicated NVIDIA Graphics Processing Units (GPUs) require higher wattage AC Adapters and (usually) cannot be charged via USB-C on models that would otherwise support it. This means that if your system's GPU is on, the battery life will likely be cut in half, or more. Systems with switchable graphics may see, for example, 3-4 hours of battery life in Integrated or Hybrid mode, and 1-2 hours of battery life (or less) in NVIDIA or Compute mode.

To read more about Graphics switching, refer to this [aricle for pop](/articles/graphics-switch-pop) or this [article for ubuntu](/articles/graphics-switch-ubuntu).

### Heat

Systems with NVIDIA cards tend to operate at temperatures an order of magnitude higher than other laptops and ultrabooks without GPUs.

Also, System76 machines specifically are designed to run hotter than other systems to avoid thermal throttling. Under load, CPU temperatures in the 70s, 80s or even 90s (Celsius) may be considered normal, and GPU Temperatures of 50-80C are also expected.

The combined ambient temperature of the CPU and GPU can make NVIDIA systems uncomfortably warm to the touch as most of the heat escapes through the chassis (even more so if the chassis is metal).

To avoid discomfort, make sure the system is well ventilated and/or on a flat surface. It's also advisable not to rest the machine directly on your lap or exposed skin under these heavy workloads.

## NVIDIA Driver Management

### Install NVIDIA Driver (from Repo)

Open a Terminal with <kbd>Super</kbd> + <kbd>T</kbd> or by searching for "Terminal" in the **Applications** menu. With the Terminal open, run the following command:

```bash
sudo apt update
sudo apt full-upgrade
sudo apt install system76-driver-nvidia
```

<!--
### Install NVIDIA (from NVIDIA's Site)

> **NOTE:** This method should be used only for experimentation and troubleshooting. The preferred method is to install NVIDIA drivers from the System76 Repo.

If you would need/like to install an NVIDIA driver directly (perhaps to try a beta version) you can do so with these steps. -->

### Reinstall NVIDIA Driver

If your system is equipped with NVIDIA graphics, a recent update might be causing the graphical or performance issues. it's still worth reinstalling if you are unable to log in after the above steps.) Refer to the table above to determine if your system contains NVIDIA graphics:

To remove the NVIDIA driver, run the following:

```bash
sudo apt purge ~nnvidia
sudo apt autoremove
sudo apt clean
```

![Removing NVIDIA](/images/login-loop/purge-nvidia.png)

After the NVIDIA driver has been removed, add it back using the following commands:

```bash
sudo apt update
sudo apt full-upgrade
sudo apt install system76-driver-nvidia
```

After the installation has completed, type `sudo systemctl reboot` and try logging in again.
