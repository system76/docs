---
layout: article
title: Install Minecraft Server Java Edition
description: 
  Install Minecraft Server and play with your friends on Java Edition!
keywords:
  - Minecraft
  - Mojang
  - Games
  - Server
  - Multiplayer
  - Notch
  - Java
hidden: false
section: community

---

With no fuss with specific desktop environments and stuff, Installing a Minecraft Server is an easy task on the command line. The hard part is what you will build.

Make sure you have a powerful server machine above 3.7Ghz and 8G of RAM.

### Install Java + Screen

For this Tutorial, We will be using openjdk and a command line window separator called screen.

We use Java 8 as it is compatible and less crashy. Minecraft is quite an old game and a lot of it depends on multi-threading and other lame deprecated stuff that was removed in Java 9/10. We'll show you how to run the server in multithreading later.

#### Fedora / RHEL / CentOS

To install OpenJDK:  

```
sudo yum install java-1.8.0-openjdk screen
```

#### Debian/Ubuntu

First, update your apt repo package list, then get openjdk8.

```bash
sudo apt-get update
sudo apt-get install openjdk-8-jre screen
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
java -Xmx4G -Xms1G -jar THE_URL.RANSOM.jar -server nogui
done
```

We can start the server with `screen -S start.sh` and exit the window with <kbd>CTRL + A</kbd> then push <kbd>D</kbd> directly after. This causes it to run in the background. We can resume it using `screen -r` to view the available screens, then `screen -r PID` to get back in.  

The server will self-crash, aka aPOPtosis on the first run, so first change the eula.txt text from `eula=false` to `eula.true` and save.

Then, Re-start by stopping the server and restarting.  

#### Server Resources settings

If you are running this on a computer with enough memory, you'll want to feed it even more. Try allocating ~80%-90% of your memory size to the heap. Ex: I run my servers on a machine that has 32 GB, So I like to feed it about 25 GB. That's extreme, even for servers with hundreds of players, so try 16 GB. Modify your start.sh so it looks like this:
```bash
java -Xmx16G -Xms2G -jar THE_URL.RANSOM.jar -server nogui
```
The values -XMX(1st number)G and -Xms(2nd number)G are defining memory pool sizes. Your maximum allocation is going to be the first number, and while it doesn't really matter what the second number is, it is the initial amount of memory your server will start with, and thus the engine will need a healthy amount to start up. Use your best judgement.

#### MultiThreading
JDK Java version 8 REQUIRED:
The way that Mojang (The company that made minecraft) runs Java Servers is stupid, on a single thread. Considering how massive a world can be and with so many things, it may get overwelmed. In this case, you'll want to add special flags to your java startup script in start.sh to get things running smoothly and tell the CPU to use multiple cores. Try
```bash
java -server -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:+CMSIncrementalPacing -XX:ParallelGCThreads=7 -XX:+AggressiveOpts -Xms1G -Xmx8G -jar THE_URL.RANSOM.jar -server nogui```
```

The option ```ParallelGCThreads=(NUMBER)``` is asking the program how many threads to run the server on. Adjust this to how many cores you have on your machine or to your liking. Don't use too many, that will cause it to be inefficient.

We can also configure the world and other settings in `server.properties`  

#### External Resources

For more info, see the [Minecraft Wiki](https://minecraft.gamepedia.com/Tutorials/Setting_up_a_server) on this issue.

If you would like for information about installing special plugins to your server using a custom 3rd party engine, Spigot MC is a good place to start: https://www.spigotmc.org/

#### Optional Datapack Add-on installation

Datapacks are fun ways to beef up your server but are also very laggy on small systems. Beefy Jackel Servers from System76 are actually what I've been running my servers for a while. I switched to a rack of 6 Jackel Pro Us to run my Minecraft shennanigans (4000+ players). Again, don't go extreme, but make it sustainable. Soy alternative: Build your own test bench, slightly cheaper, not worth the headache.

Datapacks are per-world, so you'll need to drag the .zip or folder provided by the developer into the ```/world/datapacks/ ``` directory in the file directory. Some datapacks ask that you install a resource pack, so you may configure that everyone be forced a datapack on ```server.properties``` or that they download it themselves and shove it in their Minecraft directory.

---

This article was contributed by [kylerschin](https://github.com/kylerschin).
