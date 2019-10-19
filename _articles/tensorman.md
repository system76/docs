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
hidden: false
section: software-applications

---

# Using Tensorman

<u>Tensorman</u> is a new tool for managing TensorFlow tool-chains in Pop!\_OS 19.10 (and coming soon to Pop!\_OS 18.04 LTS). It can be installed with this command:

```
sudo apt install tensorman
```

For NVIDIA CUDA support the following package must be installed:

```
sudo apt install nvidia-container-runtime
```

The user account working with Tensorman must be added to the `docker` group if that hasn't been done already:

```
sudo usermod -aG docker $USER
```

If Docker was just installed, log out and back in before using Tensorman.

# Tensorman

Packaging Tensorflow for Linux distributions is notoriously difficult, if not impossible. Every release of Tensorflow is accommodated by a myriad of possible build configurations, which requires building many variants of Tensorflow for each Tensorflow release. To make matters worse, each new version of Tensorflow will depend on a wide number of shared dependencies. Dependencies which may not be supported on older versions of a Linux distribution, even if that distribution is actively supported by the distribution maintainers.

To solve this problem, the Tensorflow project provides official Docker container builds, which allow Tensorflow to operate in a contained environment that is isolated from the rest of the system. This virtual environment can operate independent of the base system, allowing you to use any version of Tensorflow on any version of a Linux distribution that supports the Docker run-time.

However, configuring and managing Docker containers for Tensorflow using the `docker` command line is currently tedious, and managing multiple versions for different projects is even more-so. To solve this problem for our users, we have developed `tensorman` as a convenient tool to manage the installation and execution of Tensorflow Docker containers. It condenses the command-line soup into a set of simple commands that are easy to memorize.

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

# Install Tensorman

```
sudo apt install tensorman
```

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

The default version user-wide can be changed using the `default` sub-command. This version of <u>TensorFlow</u> will be launched whenever the `tensorman run` command is used:

```
tensorman default 1.14.0
tensorman default latest gpu python3
tensorman default nightly
```

<small>\*By default, <u>tensorman</u> will use the latest version as the default per-user version tag.</small>

# Listing active container version

If the active containers from the current working directory need to be listed the `show` command can be used:

```
tensorman show
```

# Removing containers

Having quite a few containers installed at the same time can use a lot of disk space. If some need to be removed, the `remove` command can be used:

```
tensorman remove 1.14.0
tensorman remove latest
tensorman remove 481cb7ea88260404
```

# Listing installed containers

To find installed containers the `list` command can be used:

```
tensorman list
```
