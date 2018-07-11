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

To install the CUDA toolkit, please run this command:

```
sudo apt install system76-cuda-9.2
```

To install the cuDNN library, please run this command:

```
sudo apt install system76-cudnn-9.2
```

To verify installation, run this command to see the current version of the NVIDIA CUDA compiler:

```
nvcc -V
```
