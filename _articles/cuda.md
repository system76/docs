---
layout: article
title: Set up CUDA on Ubuntu
description: >
  Complete instructions on setting up the NVIDIA CUDA toolkit, including compiling CUDA samples.
keywords:
  - NVIDIA
  - CUDA
  - Ubuntu
hidden: false
faq: false # If it shows in the "Frequently Answered Questions" section
known: false # If it shows in the "Known issues" section
---

## Install the NVIDIA CUDA Toolkit

[Click here to download the NVIDIA CUDA Toolkit.](https://developer.nvidia.com/cuda-downloads)

When you select your target platform, choose the **deb (network)** installer for either 14.04 or 16.04. Please note that other versions of Ubuntu are not supported at this time.

![Select Target Platform]({{site.baseurl}}/images/cuda/1_download-1604.png)

Click the Download button and open the downloaded deb file with Ubuntu Software
Center:

![Download with]({{site.baseurl}}/images/cuda/2_open_with-1604.png)

Click the **Install** button in the Ubuntu Software Center to install
`cuda-repo-ubuntu1604`:

![Click Install]({{site.baseurl}}/images/cuda/3_install-1604.png)

Then open a terminal and run these three commands:

    sudo apt-get update
    sudo apt-get upgrade
    sudo apt-get install cuda

Now reboot your system so that the new NVIDIA driver takes effect.

## Compile the CUDA samples

You'll need to copy the CUDA samples source code to a writable location and
then compile it, which you can do like this:

    cp -r /usr/local/cuda-8.0/samples/ ./
    cd samples/
    make

And then you can run, for example, the `smokeParticles` sample like this:

    ./bin/x86_64/linux/release/smokeParticles

![smokeParticles]({{site.baseurl}}/images/cuda/4_smokeParticles.png)
