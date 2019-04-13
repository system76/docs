---
layout: article
title: Install Numba  on Python3
description: >
  Complete instructions on setting up the Numba library in Python for fast, parralell computing using the NVIDIA CUDA toolkit.
keywords:
  - PYTHON
  - NUMBA
  - NVIDIA
  - CUDA
image: http://support.system76.com/images/system76.png
hidden: false
section: software-applications

---

## Install on Pop!_OS

### Prerequisits

These instructions assume that the CUDA toolkit is already set up and working on your installation of Pop_OS.
The Environmental Variable setup assumes the default Bash shell is used in your environment. Should you be using a different one, please set up the environmental variables using that (eg. for zsh, ~/.zshrc).

### Install The latest Numba library

To install Numba, please run this command:

```
sudo apt install python3-numba
```

### Environmental Variable setup

In ~/.bashrc, please add:

```
# path to CUDA driver shared library file.
export NUMBAPRO_CUDA_DRIVER=/usr/lib/x86_64-linux-gnu/libcuda.so
# path to CUDA libNVVM shared library file
export NUMBAPRO_NVVM=/usr/lib/cuda/nvvm/lib64/libnvvm.so
# path to CUDA libNVVM libdevice directory which contains .bc files.
export NUMBAPRO_LIBDEVICE=/usr/lib/cuda/nvvm/libdevice
```
Finally, restart your computer to complete setup. 

### Test installation

To test your new Numba installation, from the commandline type:

```
numba -s
```
Details of the installation should be returned.

### Further information

For further details on Numba, please see:
http://numba.pydata.org/
