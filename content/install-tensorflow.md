---
title: TensorFlow (Install)
description: >
  Complete instructions on installing TensorFlow
keywords:
  - NVIDIA
  - CUDA
  - TensorFlow

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
---

If your system is running Pop!_OS 19.10, see the [Tensorman documentation](/articles/use-tensorman) for managing TensorFlow containers.

## Install on Pop!_OS 20.04 LTS and Pop!_OS 20.10

### Installing TensorFlow with CUDA

To install the latest Tensorflow with the CUDA Toolkit, please run the command:

```bash
sudo apt install tensorflow-cuda-latest
```

This will install the following packages:

```bash
system76-cuda-10.2 system76-cudnn-10.2
```

When the package with '-latest' is installed then when a new version if packaged and released an update will be available. When the system is updated these packages will be updated as well.

## Not running Pop!_OS?

The previous instructions will work with Pop!_OS out of the box but for Ubuntu and other Debian derivatives the following commands will need to be ran first:

Ubuntu 20.04 LTS based:

```bash
sudo echo "deb http://apt.pop-os.org/proprietary focal main" | sudo tee -a /etc/apt/sources.list.d/pop-proprietary.list
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key 204DD8AEC33A7AFF
sudo apt update
```

Ubuntu 20.10 based:

```bash
sudo echo "deb http://apt.pop-os.org/proprietary groovy main" | sudo tee -a /etc/apt/sources.list.d/pop-proprietary.list
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key 204DD8AEC33A7AFF
sudo apt update
```

*These packages have been tested with the System76 NVIDIA driver only.

The following [article](/articles/system76-driver) will go over installing the System76 NVIDIA driver.

## Using TensorFlow

The following [article](/articles/use-tensorflow) will go over using TensorFlow.
