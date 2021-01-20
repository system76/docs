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

<u>Tensorman</u> is a tool for managing TensorFlow toolchains in Pop!_OS. It can be installed with this command:

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

If Docker was just installed then a reboot will be needed before Tensorman can be used.

# Tensorman

Packaging Tensorflow for Linux distributions is notoriously difficult, if not impossible. Every release of Tensorflow is accommodated by a myriad of possible build configurations, which requires building many variants of Tensorflow for each Tensorflow release. To make matters worse, each new version of Tensorflow will depend on a wide number of shared dependencies. Dependencies which may not be supported on older versions of a Linux distribution, even if that distribution is actively supported by the distribution maintainers.

To solve this problem, the Tensorflow project provides official Docker container builds, which allow Tensorflow to operate in a contained environment that is isolated from the rest of the system. This virtual environment can operate independently of the base system, allowing you to use any version of Tensorflow on any version of a Linux distribution that supports the Docker runtime.

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

# Install TensorMan

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

Custom images may be specified with a `=` argument.

```
tensorman =custom-image run --gpu bash
```

# Setting per-project

There are two files that can be used for configuring Tensorman locally: `tensorflow-toolchain`, and `Tensorman.toml`. These files will be automatically detected if they can be found in a parent directory.

## tensorflow-toolchain

This file overrides the tensorflow image, defined either in `Tensorman.toml`, or the user-wide configuration file.

```
1.14.0 gpu python3
```

Or specifying a custom image:

```
=custom-image gpu
```

## Tensorman.toml

This file supports additional configuration parameters, with a user-wide configuration located at `~/.config/tensorman/config.toml`, and a project-wide location at `Tensorman.toml`. One of the reasons in which you may want to use this file is to declare some additional Docker flags, with the `docker_flags` key.

Using a default tensorflow image:

```toml
docker_flags = [ '-p', '8080:8080' ]
tag = '2.0.0'
variants = ['gpu', 'python3']
```

Defining a custom image:

```toml
docker_flags = [ '-p', '8080:8080' ]
image = 'custom-image'
variants = ['gpu']
```

# Setting per-user

The default version user-wide can be changed using the `default` subcommand. This version of <u>TensorFlow</u> will be launched whenever the `tensorman run` command is used:

```
tensorman default 1.14.0
tensorman default latest gpu python3
tensorman default nightly
tensorman default =custom-image gpu
```

<small>\*By default, <u>tensorman</u> will use the latest as the default per-user version tag.</small>

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
tensorman remove =custom-image
```

# Listing installed containers

To find installed containers the `list` command can be used:

```
tensorman list
```

# Creating a custom image

In most projects, you will need to pull in more dependencies than the base Tensorflow image has. To do this, you will need to create the image by running a tensorflow container as root, installing and setting up the environment how you need it, and then saving those changes as a new custom image.

To do so, you will need to build the container in one terminal, and save it from another.

## Build new image

First launch a terminal where you will begin configuring the docker image:

```
tensorman run --gpu --python3 --root --name CONTAINER_NAME bash
```

Once you've made the changes needed, open another terminal and save it as a new image:

```
tensorman save CONTAINER_NAME IMAGE_NAME
```

## Running the custom image

You should then be able to specify that container with <u>tensorman<u>, like so:

```
tensorman =IMAGE_NAME run --gpu bash
```

> The `--python3` and `--jupyter` flags do nothing for custom containers, but `--gpu` is required to enable runtime support for the GPU.

## Removing the custom image

Images saved through <u>tensorman<u> are manageable through <u>tensorman<u>. Listing and removing works the same:

```
tensorman remove IMAGE_NAME
```

# Pull requests welcome!

To see the source code and suggest features visit the project on [GitHub](https://github.com/pop-os/tensorman)
