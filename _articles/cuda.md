---
layout: article
title: CUDA - Install CUDA
description: >
  Complete instructions on setting up the NVIDIA CUDA toolkit
keywords:
  - NVIDIA
  - CUDA
image: http://support.system76.com/images/system76.png
hidden: false
section: articles

---

### Install The NVIDIA CUDA Toolkit

[Click here to download the NVIDIA CUDA Toolkit](https://developer.nvidia.com/cuda-downloads)

When you select your target platform, choose the 'deb (network)' installer for either 16.04 or 17.04.

![Select Target Platform](/images/cuda/download.png)

Click the Download button and open the downloaded .deb

![Download with](/images/cuda/open-with.png)

Click the **Install** button to install <u>cuda-repo-ubuntu1704</u>

Then open a terminal and run these commands:

```
sudo apt update
sudo apt upgrade
sudo apt install cuda
```
 
Now reboot your system so that the new NVIDIA driver takes effect.

### Compile The CUDA Samples

You'll need to copy the CUDA samples source code to a writable location and then compile it, which you can do like this:

```
mkdir ~/cuda-samples
cp -r /usr/local/cuda-8.0/samples/* ~/cuda-samples/
cd ~/cuda-samples/
make
```

And then you can run, for example, the <u>smokeParticles</u> sample like this:

```
./bin/x86_64/linux/release/smokeParticles
```

![smokeParticles](/images/cuda/smokeParticles.png)

Occasionally, there are CUDA samples that don't compile and break the process for the entire set.  If one is broken, it can be removed to complete the rest of the building:

```
rm -rf 3_Imaging/cudaDecodeGL/ 3_Imaging/histogram/
```

Or individual examples can be compiled by changing to their directory and running `make`.  Compiled binaries are found in the `~/cuda-samples/bin/x86_64/linux/release` folder.
