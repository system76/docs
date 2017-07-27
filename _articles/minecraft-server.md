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
section: community

---

With no fuss with specific desktop environments and stuff, Installing a Minecraft Server is an easy task on the command line. The hard part is what you will build.

Make sure you have a powerful server machine above 3.7Ghz and 8G of RAM.

### Install Java + Screen

For this Tutorial, We will be using openjdk and a command line window separator called screen.

#### Fedora / RHEL / CentOS

To install OpenJDK:  

```
sudo yum install java-1.8.0-openjdk screen
```

#### Debian/Ubuntu

First, update your apt repo package list, then get openjdk8.

```bash
sudo apt-get update
sudo apt-get install openjdk-7-jre screen
```

#### Arch Linux

```bash
pacman -S jre8-openjdk screen
```

### Installation and Configuration

Now let's make a directory, because it's about to get messy.

```
mkdir minecraft && cd minecraft
```

Now let's get the latest version. You can update your server by stopping it, downloading the new server, and restarting it. You can download the latest version at [mcversions.net](https://mcversions.net) There are two types of servers, snapshot and stable.

```
wget -O THE_URL.RANSOM.jar
```

Now we make a bash startup script. If it crashes, it auto restarts. Let's name it `start.sh`

```bash
while :
java -Xmx1024M -Xms1024M -jar THE_URL.RANSOM.jar nogui
done
```

We can start the server with `screen -S start.sh` and exit the window with <kbd>CTRL + A</kbd> then push <kbd>D</kbd> directly after. This causes it to run in the background. We can resume it using `screen -r` to view the available screens, then `screen -r PID` to get back in.  

The server will crash on the first run, so first change the eula.txt text from `eula=false` to `eula.true` and save.  

Then, Re-start by stopping the server and restarting.  
We can also configure the world and other settings in `server.properties`  

For more info, see the [Minecraft Wiki](https://minecraft.gamepedia.com/Tutorials/Setting_up_a_server) on this issue.

---

This article was contributed by [kylerschin](https://github.com/kylerschin).
