---
layout: article
title: Install Minecraft Server
description: 
  Install Minecraft Server and play with your friends!
keywords:
  - Minecraft
  - Mojang
  - Games
  - Server
  - Multiplayer
  - Notch
hidden: false
section: articles

---

With no fuss with specific desktop enviroments and stuff, Installing a Minecraft Server is an easy task on the command line. The hard part is what you will build.

Make sure you have a powerful server machine above 3.7Ghz and 8G of RAM.

## Install Java + Screen

For this Tutorial, We will be using openjdk and a command line window seperator called screen

##### Fedora / RHEL / CentOS
To install OpenJDK: Do ```sudo yum install java-1.8.0-openjdk screen```
##### Debian/Ubuntu
First, update your apt repo package list, then get openjdk8.
```bash
sudo apt-get update
sudo apt-get install openjdk-7-jre screen
```
##### Arch Linux
```bash
pacman -S jre8-openjdk screen
```
## Installation and Configuration

Now let's make a directory, because it's about to get messy.
```
mkdir minecraft && cd minecraft
```

Now let's get's get the latest version. You can update your server by stopping it, downloading the new server, and restarting it. You can download the latest version at [mcversions.net](https://mcversions.net) There are two types of servers, snapshot and stable.
```
wget -O THE_URL.RANSOM.jar
```
Now we make a bash startup script. If it crashes, it auto restarts.

```bash
while :
java -Xmx1024M -Xms1024M -jar minecraft_server.jar nogui
done
```

