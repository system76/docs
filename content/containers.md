---
title: Containers on Linux
description: >
   How to setup and use LXC/LXD
keywords:
  - Support
  - Pop
  - Ubuntu
  - LXC
  - LXD

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

Sometimes, an older version of a library or libraries for an application is needed for development. It is faster and easier to use LXC/LXD to set up a container of that release and work in that container.

## Software

First, open a terminal using the keyboard shortcut for your operating system:

Pop!_OS : <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>T</kbd>

Ubuntu : <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd>

Install the software with this command in the terminal:

```bash
sudo apt install snapd
snap install lxd
```

## Setup

Add your current user to the `lxd` group so that it has the correct permissions to use the application:

```bash
sudo usermod -aG lxd $USER
```

Tell LXD what storage and network is needed with this command:

```bash
lxd init
```

## Create a container

Now, create your first container with this command:

```bash
lxc launch ubuntu:16.04 ubuntu-container
```

This will create a container based on Ubuntu 16.04 with the name 'ubuntu-container'. You can change the version depending on the OS version that you need. For example, for Ubuntu 18.04:

```bash
lxc launch ubuntu:18.04 ubuntu-container
```

Or for Ubuntu 20.04:

```bash
lxc launch ubuntu:20.04 ubuntu-container
```

List and confirm that the container was created with this command:

```bash
lxc list
```

The container can be stopped with this command:

```bash
lxc stop ubuntu-container
```

Or the container can be deleted:

```bash
lxc delete ubuntu-container
```

## Enter the container

Enter the container with this command:

```bash
lxc exec ubuntu-container -- /bin/bash
```

Or just one command can be issued without entering the container:

```bash
lxc exec ubuntu-container -- apt update
```

## Sharing files

To push a file to the container:

```bash
lxc file push filename first/tmp/
```

To pull a file from the container:

```bash
lxc file pull first/tmp/filename .
```

For more information, refer to Ubuntu's [documenation](https://ubuntu.com/lxd).
