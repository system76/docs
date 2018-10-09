---
layout: article
title: Software - Install TensorFlow
description: >
  Complete instructions on installing TensorFlow
keywords:
  - NVIDIA
  - CUDA
  - TensorFlow
image: http://support.system76.com/images/system76.png
hidden: false
section: machine-learning

---

## Install on Pop!_OS

### Installing TensorFlow with CUDA

To install the latest Tensorflow with the CUDA Toolkit, please run the command:

```
sudo apt install tensorflow-cuda-latest
```

This will install the following packages:

```
system76-cuda-9.2 system76-cudnn-9.2 tensorflow-1.9-cuda-9.2
```

When the package with '-latest' is installed then when a new version if packaged and released an update will be available. When the system is updated these packages will be updated as well.

## Not running Pop!_OS?

The previous instructions will work with Pop!_OS out of the box but for Ubuntu and other Debian derivatives the following commands will need to be ran first:

```
sudo echo "deb http://apt.pop-os.org/proprietary bionic/main" | sudo tee -a /etc/apt/source.list
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key 204DD8AEC33A7AFF
sudo apt update
```

*These packages have been tested with the System76 NVIDIA driver only.

The following [article](https://support.system76.com/articles/system76-driver/) will go over installing the System76 NVIDIA driver.

## Using TensorFlow

The following [article](https://support.system76.com/articles/use-tensorflow/) will go over using TensorFlow.
