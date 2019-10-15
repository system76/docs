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

<u>TensorMan<u> is a new tool for managing TensorFlow toolchains that is available for Pop!_OS 19.10 at launch and will arrive in Pop!_OS 18.04 LTS in time. 

# Updating and installing Containers

The following commands can be used for installing either the latest version of a Container or a certain version:

```
tensorman pull latest
tensorman pull 1.14.0
```

# Running commands in Containers

The `run` command will allow to execute a command from within the Container like below:

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

# Setting per-run

If a certain version is specified with the `+` argument, <u>tensorman</u> will use that version instead.

```
tensorman +1.14.0 run --python3 --gpu bash
```

# Setting per-project

TensorMan can also be used to change settings per-project. If the `tensorflow-toolchain` file is found in the working directory, the release tag and tag variants defined in that file will override the user-wide default version.

```
# cat tensor-toolchain
1.14.0 gpu python3
```

# Setting per-user

The default version user-wide can be changed using the `default` subcommand. This version of <u>TensorFlow</u> will be launched whenever the `tensorman run` command is used:

```
tensorman default 1.14.0
tensorman default latest gpu python3
tensorman default nightly
```

<small>\*By default, <u>tensorman</u> will use the latest as the default per-user version tag.</small>

# Listing active Container version

If the active Containers from the current working directory need to be listed the `show` command can be used:

```
tensorman show
```

# Removing Containers

Having quite a few Containers installed at the same time can use a lot of disk space but so if some need to be removed the `remove` command can be used:

```
tensorman remove 1.14.0
tensorman remove latest
tensorman remove 481cb7ea88260404
```

# Listing installed Containers

To assist on finding the installed Containers the `list` command can be used:

```
tensorman list
```

You can see the source code for the application [here](https://github.com/pop-os/tensorman)


