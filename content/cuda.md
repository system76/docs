---
title: CUDA and cuDNN (Install)
description: >
  Complete instructions on setting up the NVIDIA CUDA toolkit and cuDNN libraries
keywords:
  - NVIDIA
  - CUDA

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

## Pop!\_OS 22.04 LTS

If you are looking to install other versions of the CUDA libraries other than the version included with the Nvidia driver, we suggest using the `nvidia-container-toolkit` to allow alternate versions of the CUDA libraries to be installed. This should give you native speed that was tested to work by Nvidia as they package the libraries in a docker image. You can see the different iamages that are published here: <https://hub.docker.com/r/nvidia/cuda/>

This example installs a development enviroment with CUDA version 12.1.

## Install Software

```bash
sudo apt update
sudo apt upgrade
sudo apt install nvidia-container-toolkit
```

The user account working with the Container Toolkit must be added to the `docker` group if that hasn't been done already:

```bash
sudo docker.io
sudo usermod -aG docker $USER
```

The last step is to add a kernel parameter:

```bash
sudo kernelstub --add-options "systemd.unified_cgroup_hierarchy=0"
```

## Configure the Docker daemon for the NVIDIA Containter Runtime

```bash
sudo nvidia-ctk runtime configure --runtime=docker
sudo systemctl restart docker
```

...and reboot. Then you're ready for liftoff!

## Test Configuration

```bash
docker run --rm --runtime=nvidia --gpus all nvidia/cuda:12.1.0-devel-ubuntu22.04 nvidia-smi
```

We should see this output:

```
Thu Mar 23 14:43:51 2023       
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 525.89.02    Driver Version: 525.89.02    CUDA Version: 12.1     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                               |                      |               MIG M. |
|===============================+======================+======================|
|   0  NVIDIA GeForce ...  Off  | 00000000:01:00.0  On |                  N/A |
| 30%   37C    P5    N/A /  75W |    789MiB /  4096MiB |     16%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+
                                                                               
+-----------------------------------------------------------------------------+
| Processes:                                                                  |
|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
|        ID   ID                                                   Usage      |
|=============================================================================|
+-----------------------------------------------------------------------------+
```

## Run the Container

```bash
docker run -it --rm --runtime=nvidia --gpus all nvidia/cuda:12.1.0-devel-ubuntu22.04 bash
```

This allows us to run more then one command:

```bash
nvcc --version
```

```
nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2023 NVIDIA Corporation
Built on Tue_Feb__7_19:32:13_PST_2023
Cuda compilation tools, release 12.1, V12.1.66
Build cuda_12.1.r12.1/compiler.32415258_0
```

This will also have the Container running and we can check this by running this command in another terminal or tab:

```bash
sudo docker ps
```

```
CONTAINER ID   IMAGE                                 COMMAND   CREATED         STATUS         PORTS     NAMES
5397e7ea7f57   nvidia/cuda:12.1.0-devel-ubuntu22.04   "/opt/nvidia/nvidia_…"   2 minutes ago   Up 2 minutes             boring_tesla
```

From this Container ID we can copy files into the Container to run:

```bash
git clone https://github.com/NVIDIA/cuda-samples.git
docker cp Projects/cuda-samples/5397e7ea7f57:/home
```

Now in the other terminal window or tab go into the Container and build an example:

```bash
cd home/cuda-samples/Samples/0_Introductions/c++11_cuda
make
```

You should see the binary built:

```
root@5397e7ea7f57:/home/cuda-samples/Samples/0_Introduction/c++11_cuda# ls
Makefile           README.md   c++11_cuda.cu  c++11_cuda_vs2017.sln      c++11_cuda_vs2019.sln      c++11_cuda_vs2022.sln      range.hpp
NsightEclipse.xml  c++11_cuda  c++11_cuda.o   c++11_cuda_vs2017.vcxproj  c++11_cuda_vs2019.vcxproj  c++11_cuda_vs2022.vcxproj  warandpeace.txt
```


## Pop!\_OS 20.04 LTS

### Install the Latest NVIDIA CUDA Toolkit

To install the CUDA toolkit, please run this command:

```bash
sudo apt install system76-cuda-latest
```

To install the cuDNN library, please run this command:

```bash
sudo apt install system76-cudnn-11.2
```

To verify installation, run this command after a reboot:

```bash
nvcc -V
```

#### Versions in Pop!\_OS 20.04 LTS

To install CUDA 10.0:

```bash
sudo apt install system76-cuda-10.0
```

For the respective cuDNN library:

```bash
sudo apt install system76-cudnn-10.0
```

To install CUDA 10.1:

```bash
sudo apt install system76-cuda-10.1
```

For the respective cuDNN library:

```bash
sudo apt install system76-cudnn-10.1
```

To install CUDA 10.2:

```bash
sudo apt install system76-cuda-10.2
```

For the respective cuDNN library:

```bash
sudo apt install system76-cudnn-10.2
```

### Switch Between CUDA Versions

You can switch between each CUDA version with the following command:

```bash
sudo update-alternatives --config cuda
```

To verify installation, run this command to see the current version of the NVIDIA CUDA compiler:

```bash
nvcc -V
```

You can check the version of cuDNN with this command:

```bash
cat /usr/lib/cuda/include/cudnn_version.h | grep CUDNN_MAJOR -A 2       
```

## Not Running Pop!_OS?

The previous instructions will work with Pop!_OS out of the box, Ubuntu and other Debian derivatives require additional commands.

> ℹ️ These packages have only been tested with the System76 NVIDIA driver.

### Ubuntu 20.04 LTS

```bash
echo "deb http://apt.pop-os.org/proprietary focal main" | sudo tee -a /etc/apt/sources.list.d/pop-proprietary.list
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key 204DD8AEC33A7AFF
sudo apt update
```

The following [article](/articles/system76-driver) will go over installing the System76 NVIDIA driver.
