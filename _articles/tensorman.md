---
layout: article
title: Use Tensoran
description: >
  Instructions on using Tensoran
keywords:
  - NVIDIA
  - CUDA
  - TensorFlow
  - TensorMan
image: http://support.system76.com/images/system76.png
hidden: true
section: software-applications

---

# Using Tensorman

<u>Tensorman<u> is a new tool for managing TensorFlow toolchains in Pop!_OS 19.10 coming soon to Pop!_OS 18.04 LTS. 

# Updating and installing containers

The following commands can be used for installing either the latest version of a container or a certain version:

```
tensorman pull latest
tensorman pull 1.14.0
```

# Running commands in containers

Commands are executed within the container using the `run` command. 

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

Tensorman can also be used to change settings per-project. If the `tensorflow-toolchain` file is found in the working directory, the release tag and tag variants defined in that file will override the user-wide default version.

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

# Listing active container version

If the active containers from the current working directory need to be listed the `show` command can be used:

```
tensorman show
```

# Removing containers

Having quite a few containers installed at the same time can use a lot of disk space but so if some need to be removed the `remove` command can be used:

```
tensorman remove 1.14.0
tensorman remove latest
tensorman remove 481cb7ea88260404
```

# Listing installed containers

To assist on finding the installed containers the `list` command can be used:

```
tensorman list
```

You can see the source code for the application [here](https://github.com/pop-os/tensorman)


