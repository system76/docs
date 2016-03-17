---
layout: article
title: Setting Up CUDA on Ubuntu 14.04
description: >
    Setting Up CUDA on Ubuntu 14.04
keywords:
    - NVIDIA
    - CUDA
    - Ubuntu
    - 14.04
    - LTS
---

## Install the NVIDIA CUDA Toolkit

[Click here to download the NVIDIA CUDA Toolkit.](https://developer.nvidia.com/cuda-downloads)

When you select your target platform, choose the **deb (network)** installer:

![Select Target Platform](images/cuda/1_download.png)

Click the Download button and open the downloaded deb file with Ubuntu Software
Center:

![Download with](images/cuda/2_open_with.png)

Click the **Install** button in the Ubuntu Software Center to install
`cuda-repo-ubuntu1404`:

![Click Install](images/cuda/3_install.png)

Then open a terminal and run these three commands:

    sudo apt-get update
    sudo apt-get dist-upgrade
    sudo apt-get install cuda

Now reboot your system so that the new NVIDIA driver takes effect.

## Compile the CUDA samples

You'll need to copy the CUDA samples source code to a writable location and
then compile it, which you can do like this:

    cp -r /usr/local/cuda-7.5/samples/ ./
    cd samples/
    make

And then you can run, for example, the `smokeParticles` sample like this:

    ./bin/x86_64/linux/release/smokeParticles

![smokeParticles](images/cuda/4_smokeParticles.png)

