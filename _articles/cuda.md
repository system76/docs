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

The NVIDIA CUDA toolkit is currently available in the standard Ubuntu software repositories.  To install the CUDA toolkit, please run this command:

```
sudo apt install nvidia-cuda-toolkit
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
