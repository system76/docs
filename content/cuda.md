---
layout: article
title: CUDA and cuDNN (Install)
description: >
  Complete instructions on setting up the NVIDIA CUDA toolkit and cuDNN libraries
keywords:
  - NVIDIA
  - CUDA
image: http://support.system76.com/images/system76.png
hidden: false
section: software

---

# CUDA and cuDNN (Install)

## Install on Pop!_OS

### Install The latest NVIDIA CUDA Toolkit

To install the CUDA toolkit, please run this command:

```bash
sudo apt install system76-cuda-latest
```

To install the cuDNN library, please run this command:

```bash
sudo apt install system76-cudnn-10.2
```

### For older releases of The NVIDIA CUDA Toolkit

To install CUDA 10.0:

```bash
sudo apt install system76-cuda-10.0
```

For the respective cuDNN library:

```bash
sudo apt install system76-cudnn-10.0
```

To install CUDA 9.2:

```bash
sudo apt install system76-cuda-9.2
```

For the respective cuDNN library:

```bash
sudo apt install system76-cudnn-9.2
```

To install CUDA 9.1:

```bash
sudo apt install system76-cuda-9.1
```

For the respective cuDNN library:

```bash
sudo apt install system76-cudnn-9.1
```

To install CUDA 9.0:

```bash
sudo apt install system76-cuda-9.0
```

For the respective cuDNN library:

```bash
sudo apt install system76-cudnn-9.0
```

### Switch between different versions:

You can switch between each CUDA version with the following command:

```bash
sudo update-alternatives --config cuda
```

To verify installation, run this command to see the current version of the NVIDIA CUDA compiler:

```bash
nvcc -V
```

You can also check the version of the installer and patches installed with this command:

```bash
cat /usr/lib/cuda/version.txt
```

## Not running Pop!_OS?

The previous instructions will work with Pop!_OS out of the box but for Ubuntu and other Debian derivatives the following commands will need to be run first:

```bash
sudo echo "deb http://apt.pop-os.org/proprietary bionic main" | sudo tee -a /etc/apt/sources.list.d/pop-proprietary.list
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key 204DD8AEC33A7AFF
sudo apt update
```

*These packages have been tested with the System76 NVIDIA driver only.

The following [article](/articles/system76-driver) will go over installing the System76 NVIDIA driver.
