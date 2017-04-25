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

