---
layout: article
title: Setup CUDA On Ubuntu
description: >
  Complete instructions on setting up the NVIDIA CUDA toolkit, including compiling CUDA samples.
keywords:
  - NVIDIA
  - CUDA
  - Ubuntu
hidden: false
section: articles

---

### Install The NVIDIA CUDA Toolkit

[Click here to download the NVIDIA CUDA Toolkit](https://developer.nvidia.com/cuda-downloads)

When you select your target platform, choose the 'deb (network)' installer for either 14.04 or 16.04. Please note that other versions of Ubuntu are not supported at this time.

![Select Target Platform](/images/cuda/1_download-1604.png)

Click the Download button and open the downloaded .deb file with Ubuntu <u>Software
Center</u>:

![Download with](/images/cuda/2_open_with-1604.png)

Click the **Install** button in the Ubuntu Software Center to install
<u>cuda-repo-ubuntu1604</u>:

![Click Install](/images/cuda/3_install-1604.png)

Then open a terminal and run these commands:

```
sudo apt update
sudo apt upgrade
sudo apt install cuda
```

Now reboot your system so that the new NVIDIA driver takes effect.

### Compile The CUDA Samples

You'll need to copy the CUDA samples source code to a writable location and
then compile it, which you can do like this:

```
mkdir ~/cuda-samples
cp -r /usr/local/cuda-8.0/samples/ ~/cuda-samples
cd ~/cuda-samples/
make
```

And then you can run, for example, the <u>smokeParticles</u> sample like this:

```
./bin/x86_64/linux/release/smokeParticles
```

![smokeParticles](/images/cuda/4_smokeParticles.png)
