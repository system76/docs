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

## Install on Pop!_OS

### Install The latest NVIDIA CUDA Toolkit

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

### For older releases of The NVIDIA CUDA Toolkit

#### These versions are only in Pop 21.04

To install CUDA 11.1

```bash
sudo apt install system76-cuda-11.1
```

For the respective cuDNN library:

```bash
sudo apt install system76-cudnn-11.1
```

#### These versions are only in Pop 20.04 LTS

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

### Switch between different versions

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

## Not running Pop!_OS?

The previous instructions will work with Pop!_OS out of the box but for Ubuntu and other Debian derivatives the following commands will need to be run first:

Ubuntu 20.04 LTS

```bash
echo "deb http://apt.pop-os.org/proprietary focal main" | sudo tee -a /etc/apt/sources.list.d/pop-proprietary.list
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key 204DD8AEC33A7AFF
sudo apt update
```

Ubuntu 21.04

```bash
echo "deb http://apt.pop-os.org/proprietary hirsute main" | sudo tee -a /etc/apt/sources.list.d/pop-proprietary.list
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key 204DD8AEC33A7AFF
sudo apt update
```

*These packages have been tested with the System76 NVIDIA driver only.

The following [article](/articles/system76-driver) will go over installing the System76 NVIDIA driver.
