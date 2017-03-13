---
layout: article
title: Install and Optimize Minecraft!
description: 
  So you want some of that blocky goodness? Well, Get Java and some graphics card and lets go!
keywords:
  - Minecraft
  - Mojang
  - Games
hidden: false
section: articles

---


  Alright! Hitch on, choose your distro, and lets go on! This tutorial consists of debian and Ubuntu based instructions as well as arch linux, and fedora,
  
# Debian and Ubuntu
  
  First, you will need Java runtime. 
  
  ```bash
   sudo apt-get install openjdk-8-jre
   ```
   
So, you want oracle runtime instead? But.... fine....
Get the repository and install the apk.
```bash

sudo apt-add-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
```
You will then download the launcher. Go to the [minecraft.net page to download](https://minecraft.net/en-us/download/) or...

```bash
wget http://s3.amazonaws.com/Minecraft.Download/launcher/Minecraft.jar
```

Now run the file! Log in with your username and password and start playing!
# Arch Linux
The easiest way with all dependencies to install is from the AUR package ```minecraft```, then launch from the command ```minecraft```. Note thst it requires ```xorg-xrandr```. See more at the [ArchWiki Minecraft Page](https://wiki.archlinux.org/index.php/minecraft).
If you wish to manually install, do ```pacman -S jre8-openjdk``` and [download the launcher](https://minecraft.net/en-us/download/) or...

```bash
wget http://s3.amazonaws.com/Minecraft.Download/launcher/Minecraft.jar
```

# Fedora
Minecraft is not avaliable through rpm so we cannot really do it automatically. First, let's get java.
```bash
sudo dnf install java-1.8.0-openjdk
```
Now we can get the minecraft jar file and run it!
```bash
wget http://s3.amazonaws.com/Minecraft.Download/launcher/Minecraft.jar
```
But wait, aren't you that cool kid? Then we set up a desktop app! This step is 100% optional.
```bash
$ sudo mkdir -p /opt/minecraft/bin
$ sudo wget -O /opt/minecraft/bin/Minecraft.jar http://s3.amazonaws.com/Minecraft.Download/launcher/Minecraft.jar
$ sudo chown -R <your username>:<your username> /opt/minecraft
```
After that, the minecraft jar can be executed from the opt directory.We then set the file ```sudo gedit /usr/share/applications/minecraft.desktop```.
```
Desktop Entry]
Categories=Game;ActionGame;AdventureGame;
Exec=java -jar /opt/minecraft/bin/Minecraft.jar
Path=/opt/minecraft/bin/
Icon=minecraft.png
Terminal=false
Type=Application
Name=Minecraft
Comment=The world's most exciting block simulator, now on Fedora!
```
Now we are ready to rock and roll!
