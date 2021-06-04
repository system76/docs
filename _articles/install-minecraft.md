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

# Install Minecraft!

So you want some of that blocky goodness? Well, get Java and some graphics cards and let's go!

### Pop!_OS 20.04
First, open the Pop!_Shop.
![Open Pop_Shop](/images/minecraft/popshop.png)

Next, type "Minecraft" into the search bar, and click "Minecraft".
![Search Page](/images/minecraft/searchforminecraft.png)


Next, click install.
![Open Minecraft page](/images/minecraft/minecraftapppage.png)


Now you will have installed Minecraft! Open Minecraft and log in with your username and password to start playing!
![Minecraft Installed](/images/minecraft/minecraftinstalled.png)


### Debian and Ubuntu
  
First, you will need Java runtime.  
  
```bash
sudo apt-get install openjdk-8-jre
```

So, you want oracle runtime instead? But.... fine....  
Get the repository and install the package.  

```bash
sudo apt-add-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
```

You will then download the launcher. Go to the [minecraft.net](https://minecraft.net/en-us/download/) page to download or...

```bash
wget http://s3.amazonaws.com/Minecraft.Download/launcher/Minecraft.jar
```

Now run the file! Log in with your username and password and start playing!

---

This article was contributed by [kylerschin](https://github.com/kylerschin).

---

- Document Version: 1.5.0
- Date: (May 1, 2020)
- Author: Kyler Schin
- Contributing Editor(s): James Gross, Bobby Youstra, kolgza, Nathaniel Warburton.