---
title: NVIDIA Drivers on Pop!_OS
description: >
  Install, remove and troubleshoot NVIDIA drivers
keywords:
  - Support
  - Guides
  - System76
  - NVIDIA
  - dedicated graphics
  - linux

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: pop
tableOfContents: true
---

The NVIDIA driver is software that allows the operating system to communicate with the NVIDIA graphics card in order to control the GPU, manage performance, handle displays, and run graphics smoothly. This enables the computer to properly use the GPU for things like fast graphics, gaming, video editing, and hardware-accelerated apps.

### List NVIDIA Driver Information

To list the currently installed NVIDIA driver version, GPU model and CUDA version, open a terminal (<kbd>SUPER</kbd>+<kbd>t</kbd>) and run the following command.

```bash
nvidia-smi
```
The driver version, CUDA version and model information are highlighted in red in the output below.

![nvidia-smi ouput in the terminal with the NVIDIA driver, CUDA version and model info highlighted in red](/images/nvidia-pop/nvidia-smi.png)

### Install NVIDIA Driver Versions

Run `sudo apt update` before installing, removing, or upgrading NVIDIA drivers to prevent missing-package errors and outdated driver installs.

**System76 NVIDIA Driver**

Install the NVIDIA driver packaged and tested by System76 to provide graphics stability for Pop!_OS and System76 hardware.

```bash
sudo apt install system76-driver-nvidia
```

**NVIDIA Driver**

Install a specific NVIDIA driver version by  indicating the version number in the command. In the example below, the driver version is '580.'

```bash
sudo apt install nvidia-driver-580
```

**NVIDIA Driver Open**

The main NVIDIA Driver with some open modules. Install with the correct version number included in the command. In the example below, the driver version is '580.

```bash
sudo apt install nvidia-driver-580-open
```

**Server**

Headless/compute‑oriented driver that does not include the Xorg display driver and related graphics stack, keeping only the kernel module and CUDA libraries. Used where no graphical output is neded.

```bash
sudo apt install nvidia-driver-[version]-server
```

**Headless**

No display driver included, but contains the kernel module and user‑space libraries (CUDA, OpenGL/Vulkan). It’s meant for machines that run GPU workloads without ever attaching a monitor.

```bash
sudo apt install nvidia-headless-[version]
```

**Headless-no-dkms**

Same as `‑headless`, but the kernel module is **pre‑built** for the current kernel instead of being compiled via DKMS. This eliminates the need for a compiler and DKMS infrastructure, which is handy on minimal container images or very locked‑down systems.

```bash
sudo apt install nvidia-headless-no-dkms-[version]
```

## Remove and Reinstall Specific NVIDIA Driver Version
The following set of commands will purge the Nvidia drivers and reinstall the specified version. This process can help fix a broken NVIDIA driver installation, remove older drivers and install new ones.

First, update the system packages.

```bash
sudo apt update
```

Purge NVIDIA by removing any package that includes the word 'nvidia.'

```bash
sudo apt purge ~nnvidia
```
Clear and update the apt repository cache.

```bash
sudo apt clean
sudo apt update
```
Install the specific driver version.

```bash
sudo apt install nvidia-driver-[version]
```
Fix any interrupted or incomplete package installations.

```bash
sudo dpkg --configure -a
```

Reboot the system.

## Suspend and Resume Stability 

Enabling Systemd power management services can help improve suspend and resume stability.

The following command tells systemd to run NVIDIA’s GPU-specific suspend script whenever the system enters suspend (sleep) mode.

```bash
sudo systemctl enable nvidia-suspend.service
```
To restore NVIDIA GPU state after the system resumes from suspend or hibernate, enable nvidia-resume.service.

```bash
sudo systemctl enable nvidia-resume.service
```
Save the GPU state and power down GPU safely before hibernation to ensure GPU restores correctly on wake.

```bash
sudo systemctl enable nvidia-hibernate.service
```
Prepares GPU for initial suspend and hibernate if the system transitions.

```bash
sudo systemctl enable nvidia-suspend-then-hibernate.service
```
