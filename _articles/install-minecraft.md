---
layout: article
title: Install Minecraft!
description: 
  So you want some of that blocky goodness? Well, get Java and some graphics cards and let's go!
keywords:
  - Minecraft
  - Mojang
  - Games
hidden: false
section: community

---

## Dependencies

You'll need Java 8 to run the game, no other versions of java work with Minecraft.

For Ubuntu, you can install Java 8 in the terminal like so:

```bash
sudo apt-add-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
```

## Download Minecraft

Download minecraft from this selection screen:

https://www.minecraft.net/en-us/download/alternative/

Click on Minecraft.deb if you're using Debian / Ubuntu

## Install Minecraft

Run the Minecraft.deb file to install it with Eddy, Pop! OS's default installer.

If that doesn't work, You can install it in the terminal via `sudo dpkg -i Minecraft.deb`, remember to replace Minecraft.deb with wherever the downloaded installer is.

## Run Minecraft

If you installed Minecraft.deb correctly, you should be able to open up Minecraft and launch it directly by finding the minecraft icon and clicking on it, or by searchign for the application via gnome-search.

## Optional Addons

### Installing Optifine Natively

Many Minecrafters use Optifine to install shaders, tune the game for more detail, or run the game at more low-end graphics settings. It's a must have when you need the most FPS when playing.

You can download Optifine by going to the Optifine download page at https://optifine.net/downloads and clicking on "Download" for either the latest stable or preview version. 

Then, you'll need to run the Java file. If you downloaded it into your Downloads folder, you can run it like 
```bash
java -jar Downloads/Oprifine_version_number.jar
```
If you downloaded a prevew version, the file name will start with `preview_`, so run `java -jar Downloads/preview_Optifine_version_number.jar` instead.

Remember to point the command to the correct folder and file.

After the Optifine installer launches, click Install.

If you do have Minecraft installed to a different directory or want optifine to be in a different directory, you can change the folder location before clicking Install. This won't be nessessary for most players.

After you have clicked install, the Optifine profile will be added to your game.

Relaunch the Minecraft Launcher and make sure you switch to the new Optifine Profile.

Click Play, and you should be playing on Optifine!

---

This article was contributed by [kylerchin](https://github.com/kylerchin).
