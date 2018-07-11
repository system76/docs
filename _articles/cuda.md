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

### Install The latest NVIDIA CUDA Toolkit

To install the CUDA toolkit, please run this command:

```
sudo apt install system76-cuda-9.2
```

To install the cuDNN library, please run this command:

```
sudo apt install system76-cudnn-9.2
```

### For older releases of The NVIDIA CUDA Toolkit

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

### Switching between different versions:

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
