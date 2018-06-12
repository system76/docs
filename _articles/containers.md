---
layout: article
title: Software - Using Containers on Linux
description: >
   How to setup and use LXC/LXD
keywords:
  - Support
  - Pop
  - Ubuntu
  - LXC
  - LXD
image: http://support.system76.com/images/system76.png
hidden: false
section: articles

---

Sometimes an older version of a library or application is needed for one task in development. It makes more sense to use LXC/LXD to setup a Container of that release and work in that Container.

### Software 

First open a terminal like so:

Pop!_OS : <kbd><span class="fl-pop-key"></span></kbd> + <kbd>T</kbd>

Ubuntu : <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd>

Then install the software with this command in the terminal.

```
sudo apt install lxd lxd-client
```

### Setup

Then tell LXD what storage and network is needed with this command:

```
sudo lxd init
```

### Create a container

Now let's create our first container with this command:

```
lxc launch ubuntu:16.04 first
```

This will create a container based on Ubuntu 16.04 with the name 'first'.

Then let's list and confirm that the container was created with this command:

```
lxc list
```

Then the container can be stopped with this command:

```
lxc stop first
```

Or the container can be deleted:

```
lxc delete first
```

### Enter the container

Let's enter the container with this command:

```
lxc exec first -- /bin/bash
```

Or just one command can be issued without entering the container:

```
lxc exec first -- apt update
```

### Sharing files

For pushing a file to the container:

```
lxc file pull first/tmp/filename .
```

For pulling a file from the container:

```
lxc file push filename first/tmp/
```
