---
layout: article
title: Software - Install CUDA and cuDNN
description: >
  Complete instructions on setting up the NVIDIA CUDA toolkit and cuDNN libraries
keywords:
  - NVIDIA
  - CUDA
image: http://support.system76.com/images/system76.png
hidden: false
section: machine-learning

---

## Install on Pop!_OS

### Install The latest NVIDIA CUDA Toolkit

To install the CUDA toolkit, please run this command:

```
sudo apt install system76-cuda-latest
```

To install the cuDNN library, please run this command:

```
sudo apt install system76-cudnn-10.0
```

### For older releases of The NVIDIA CUDA Toolkit

To install CUDA 9.2:

```
sudo apt install system76-cuda-9.2
```

For the respective cuDNN library:

```
sudo apt install system76-cudnn-9.2
```

To install CUDA 9.1:

```
sudo apt install system76-cuda-9.1
```

For the respective cuDNN library:

```
sudo apt install system76-cudnn-9.1
```

To install CUDA 9.0:

```
sudo apt install system76-cuda-9.0
```

For the respective cuDNN library:

```
sudo apt install system76-cudnn-9.0
```

### Switch between different versions:

You can switch between each CUDA version with the following command:

```
sudo update-alternatives --config cuda
```

To verify installation, run this command to see the current version of the NVIDIA CUDA compiler:

```
nvcc -V
```

You can also check the version of the installer and patches installed with this command:

```
cat /usr/lib/cuda/version.txt
```

## Not running Pop!_OS?

The previous instructions will work with Pop!_OS out of the box but for Ubuntu and other Debian derivatives the following commands will need to be ran first:

```
sudo echo "deb [arch=amd64] http://apt.pop-os.org/proprietary bionic main" | sudo tee -a /etc/apt/sources.list
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key 204DD8AEC33A7AFF
sudo apt update
```

*These packages have been tested with the System76 NVIDIA driver only.

The following [article](https://support.system76.com/articles/system76-driver/) will go over installing the System76 NVIDIA driver.
