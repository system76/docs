---
title: Numba (Install - Python3)
description: >
  Complete instructions on setting up the Numba library in Python for fast, parallel computing using the NVIDIA CUDA toolkit.
keywords:
  - PYTHON
  - NUMBA
  - NVIDIA
  - CUDA

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: community
---

## Install on Pop!_OS

### Prerequisits

These instructions assume that the CUDA toolkit is already set up and working on your installation of Pop_OS.

### Install The latest Numba library

To install Numba, please run this command:

```bash
sudo apt install python3-numba
```

### Environmental Variable setup
To make changes on the system level, add the below in  /etc/environment .
To make changes on user level (assuming you have the default bash shell), add in ~/.bashrc.
Note the system level approach is not dependendent on your choice of shell.

```bash
# path to CUDA driver shared library file.
export NUMBAPRO_CUDA_DRIVER=/usr/lib/x86_64-linux-gnu/libcuda.so
# path to CUDA libNVVM shared library file
export NUMBAPRO_NVVM=/usr/lib/cuda/nvvm/lib64/libnvvm.so
# path to CUDA libNVVM libdevice directory which contains .bc files.
export NUMBAPRO_LIBDEVICE=/usr/lib/cuda/nvvm/libdevice
# path to CUDA libraries
export NUMBAPRO_CUDALIB=/usr/lib/cuda/lib64
```

Finally, restart your computer to complete setup.

### Test installation

To test your new Numba installation, from the commandline type:

```bash
numba -s
```

Details of the installation should be returned.

### Further information

For further details on Numba, please see:
[http://numba.pydata.org/](http://numba.pydata.org/)
