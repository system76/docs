---
layout: article
title: Use TensorMan
description: >
  Instructions on using TensorMan
keywords:
  - NVIDIA
  - CUDA
  - TensorFlow
  - TensorMan
image: http://support.system76.com/images/system76.png
hidden: false
section: software-applications

---

# Using TensorMan

TensorMan is a new tool for managing TensorFlow toolchains that is available for Pop!_OS 19.10 at launch and will arrive in Pop!_OS 18.04 LTS in time. 

# Updating and installing Containers

The following commands can be used for installing either the latest version of a Container or a certain version:

```
tensorman pull latest
tensorman pull 1.14.0
```

# Running commands in Containers

The 'run' command will allow to execute a command from within the Container like below:

```
# Default container version with Bash prompt
tensorman run bash

# Default container version with Python script
tensorman run python -- script.py

# Default container version with GPU support
tensorman run --gpu bash

# With GPU, Python3, and Juypyter support
tensorman run --gpu --python3 --jupyter bash
```

You can see the source code for the application [here](https://github.com/pop-os/tensorman)


