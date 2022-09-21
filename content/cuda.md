---
title: CUDA and cuDNN (Install)
description: >
  Complete instructions on setting up the NVIDIA CUDA toolkit and cuDNN libraries
keywords:
  - NVIDIA
  - CUDA

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

## For Pop!\_OS 22.04 LTS

It is recommended to use [Tensorman](/articles/tensorman) as newer versions of CUDA are no longer packaged on their own.

## Install on Pop!\_OS 20.04 LTS

### Install the Latest NVIDIA CUDA Toolkit

To install the CUDA toolkit, please run this command:

```bash
sudo apt install system76-cuda-latest
```

To install the cuDNN library, please run this command:

```bash
sudo apt install system76-cudnn-11.2
```

To verify installation, run this command after a reboot:

```bash
nvcc -V
```

#### Versions in Pop!\_OS 20.04 LTS

To install CUDA 10.0:

```bash
sudo apt install system76-cuda-10.0
```

For the respective cuDNN library:

```bash
sudo apt install system76-cudnn-10.0
```

To install CUDA 10.1:

```bash
sudo apt install system76-cuda-10.1
```

For the respective cuDNN library:

```bash
sudo apt install system76-cudnn-10.1
```

To install CUDA 10.2:

```bash
sudo apt install system76-cuda-10.2
```

For the respective cuDNN library:

```bash
sudo apt install system76-cudnn-10.2
```

### Switch Between CUDA Versions

You can switch between each CUDA version with the following command:

```bash
sudo update-alternatives --config cuda
```

To verify installation, run this command to see the current version of the NVIDIA CUDA compiler:

```bash
nvcc -V
```

You can check the version of cuDNN with this command:

```bash
cat /usr/lib/cuda/include/cudnn_version.h | grep CUDNN_MAJOR -A 2       
```

## Not Running Pop!_OS?

The previous instructions will work with Pop!_OS out of the box, Ubuntu and other Debian derivatives require additional commands.

> ℹ️ These packages have only been tested with the System76 NVIDIA driver.

### Ubuntu 20.04 LTS

```bash
echo "deb http://apt.pop-os.org/proprietary focal main" | sudo tee -a /etc/apt/sources.list.d/pop-proprietary.list
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key 204DD8AEC33A7AFF
sudo apt update
```

### Ubuntu 21.04

```bash
echo "deb http://apt.pop-os.org/proprietary hirsute main" | sudo tee -a /etc/apt/sources.list.d/pop-proprietary.list
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key 204DD8AEC33A7AFF
sudo apt update
```

The following [article](/articles/system76-driver) will go over installing the System76 NVIDIA driver.
