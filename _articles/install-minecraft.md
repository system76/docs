---
layout: article
title: Install and Optimize Minecraft! (Java Edition)
description: 
  So you want some of that sandbox blocky goodness? Well, get Java and some graphics cards and let's go!
keywords:
  - Minecraft
  - Mojang
  - Games
  - Java
hidden: false
section: community

---

Alright! Hitch on and let's go on!
  
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

For debian based systems ie. _Pop OS, Ubuntu, elementary OS_ : 
```bash
wget https://launcher.mojang.com/download/Minecraft.deb
```
Install the .deb using either ```dpkg -i Minecraft.deb``` or using a graphical installer such as Eddy.

Elesewhere
```bash
wget http://s3.amazonaws.com/Minecraft.Download/launcher/Minecraft.jar
```

Now run the file! Log in with your username and password and start playing! Take your revenge! What's your journey?

---

This article was contributed by [kylerschin](https://github.com/kylerschin).
