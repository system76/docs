---
title: Install ROCm
description: >
  Instructions for setting up ROCm for HIP & OpenCL workloads on AMD GPUs
keywords:
  - AMD
  - ROCm
  - ROCr
  - ROCt
  - ROCk
  - Radeon Open Compute
  - HIP
  - OpenCL

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

AMD GPUs use [HIP](https://rocm.docs.amd.com/projects/HIP/en/latest/) (Heterogeneous-Compute Interface for Portability) and [OpenCL](https://www.khronos.org/opencl/) (Open Computing Language) to run compute workloads, similar to CUDA on NVIDIA GPUs. In order to use HIP and OpenCL, [ROCm](https://www.amd.com/en/products/software/rocm.html) (the Radeon Open Compute modules) must be installed. The ROCm package interfaces with the AMDGPU driver built into the default Pop!\_OS kernel, and does not require installing any DKMS packages.

The below instructions correspond with the necessary steps from [AMD's installation documentation for Ubuntu](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/how-to/native-install/ubuntu.html).

## Installation on Pop!\_OS 22.04

First, add AMD's official ROCm repository to the system and set the appropriate apt pin priority using the below commands:

```
wget https://repo.radeon.com/rocm/rocm.gpg.key -O - | gpg --dearmor | sudo tee /etc/apt/keyrings/rocm.gpg > /dev/null
echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/rocm.gpg] https://repo.radeon.com/rocm/apt/6.1 jammy main" | sudo tee --append /etc/apt/sources.list.d/rocm.list
echo -e 'Package: *\nPin: release o=repo.radeon.com\nPin-Priority: 600' | sudo tee /etc/apt/preferences.d/rocm-pin-600
```

Next, update the package lists and install the `rocm` package:

```
sudo apt update
sudo apt install rocm
```

Finally, add the current user to the `render` group so the user has permission to run compute workloads:

```
sudo usermod -a -G render $USER
```

It will be necessary to restart any applications utilizing ROCm before they will detect the GPU(s). If in doubt, reboot the system to ensure the new group membership takes effect.

### Testing the Installation

To check if ROCm is installed, run the `rocminfo` command. The output should list the ROCm-compatible GPUs (which may also include CPU-integrated graphics) present in the system:

```
system76@pop-os:~$ rocminfo
ROCk module is loaded
...        
==========
HSA Agents               
==========               
*******                  
Agent 1                  
*******                  
  Name:                    AMD Ryzen 7 6800U with Radeon Graphics
  Uuid:                    CPU-XX                             
  Marketing Name:          AMD Ryzen 7 6800U with Radeon Graphics
  Vendor Name:             CPU                                
...
  Device Type:             CPU                                
...              
*******
Agent 2                  
*******                  
  Name:                    gfx1035                            
  Uuid:                    GPU-XX                             
  Marketing Name:          AMD Radeon Graphics                
  Vendor Name:             AMD                                
...
  Device Type:             GPU                                
...                        
*** Done ***             
system76@pop-os:~$ 
```

### Using Docker

Instructions from AMD for building and running a docker image with Pytorch and ROCm are [here](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/how-to/3rd-party/pytorch-install.html#using-docker-with-pytorch-pre-installed). Note that you will likely have to run the docker commands as sudo (ie. `sudo docker run -it ...`) for typical docker setups.

Also note that Docker Desktop runs in a virtual environment so it's recommended to use the Docker engine instead to avoid permissions issues. Instructions on installing the Docker engine are [on Docker's website](https://docs.docker.com/engine/install/ubuntu/). Another way to install the Docker engine is to install the `docker.io` package which is maintained by Ubuntu: 

```sh
sudo apt install docker.io
sudo usermod -aG docker $USER
```

### Blender Compatibility

The default Blender `.deb` package in Pop!\_OS 22.04, which is provided by Ubuntu, does not support HIP workloads. The Blender flatpak package may be unable to properly detect the GPU(s) due to sandboxing restrictions. Therefore, for GPU rendering with HIP in Blender, it's recommended to [download Blender directly from blender.org](https://www.blender.org/). (After extracting the `.tar.xz` file, simply double-click the `blender` executable to run the program.)
