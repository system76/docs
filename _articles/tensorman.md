---
layout: article
title: Use Tensorman
description: >
  Using TensorMan to manage TensorFlow Containers
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

# Tensorman

Packaging Tensorflow for Linux distributions is notoriously difficult, if not impossible. Every release of Tensorflow is accommodated by a myriad of possible build configurations, which requires building many variants of Tensorflow for each Tensorflow release. To make matters worse, each new version of Tensorflow will depend on a wide number of shared dependencies which may not be supported on older versions of a Linux distribution that is still actively supported by the distribution maintainers.

To solve this problem, the Tensorflow project provides official Docker container builds, which allows Tensorflow to operate in an isolated environment that is contained from the rest of the system. This virtual environment can operate independent of the base system, allowing you to use any version of Tensorflow on any version of a Linux distribution that supports the Docker runtime.

However, configuring and managing Docker containers for Tensorflow using the `docker` command line is currently tedious, and managing multiple versions for different projects is even moreso. To solve this problem for our users, we have developed `tensorman` as a convenient tool to manage the installation and execution of Tensorflow Docker containers. It condenses the command-line soup into a set of simple commands that are easy to memorize.

# Comparison to Docker Command

Take the following Docker invocation as an example:

```
docker run -u $UID:$UID -v $PWD:/project -w /project \
    --runtime=nvidia --it --rm tensorflow/tensorflow:latest-gpu \
    python ./script.py
```

This designates for the latest version of Tensorflow with GPU support to be used, mounting the working directory to `/project`, launching the container with the current user account, and and executing `script.py` with the Python binary in the container. With `tensorman`, we can achieve the same with:

```
tensorman run --gpu python -- ./script.py
```

Which defaults to the latest version, and whose version and tag variants can be set as defaults per-run, per-project, or user-wide.

# Install TensorMan

```
sudo apt install tensorman
```
>>>>>>> b489346c3b6cad431f00e65f4f3af9ce2d81b043

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


