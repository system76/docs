---
layout: article
title: Install Minecraft Server
description: 
  So you want some of that blocky goodness? Well, get Java and some graphics cards and let's go!
keywords:
  - Minecraft
  - Mojang
  - Games
hidden: false
section: software
---

# Hosting A Minecraft Server

Minecraft 1.17 dropped on June 8, 2021. In this article, we will be going over how to set up a Minecraft server on your Pop!_OS or Ubuntu install. A Minecraft System76 recommends having a minimum of 8Gb of RAM but for a good experience, 16Gb of RAM is recommended. Any hard drive over 128GB for a basic server but if you want to backups 1TB to 2TB is recommended. This article will live mostly in the terminal, if you want a refresher on the terminal you can see our article [here](https://support.system76.com/articles/terminal-basics).

## Updating and Installing Software Needed

To install the Minecraft server we will need to install Java (listed as default-jdk), wget, screen, and nmap.  Java is what Minecraft runs in and is required for the server to run - we are also marking it as hold so no future updates are applied (some java updates can break the server). wget will allow us to download the Minecrafter Server from a URL hosted by Mojang, this way we can put the file in the directory directly instead of using a web browser.  screen will allow us to run commands and the server in an environment we do not need to have open or be connected to - think of it as a virtual terminal instance you can connect and disconnect from.  nmap is a network scanner that we will use for testing and network configuration.

To open a terminal window go to the activities button in the upper left corner of the screen and click it then use the search function to search for Terminal.  Click to open it and then run the following commands to update your system:

```bash
sudo apt clean  
sudo apt update -m  
sudo dpkg --configure -a  
sudo apt install -f  
sudo apt full-upgrade -y
sudo apt install wget screen default-jdk nmap -y
sudo apt-mark hold default-jdk
```

*Please note not all of these commands will output something.*

## Make The Mincraft Group & User & Minecraft Direcory
The Minecraft server will make a lot of files for the world, settings, plugins, and other resources.  The following commands are to make the directory for the servers to exist in.  We will want to make a group and a user for the server to operate in and use.  We will need to then make a directory file to live in and make sure that the new server user has ownership of the directory.

```bash
sudo addgroup mchost
sudo useradd -M -s /usr/bin/false
sudo mkdir /mchost/v-1-17/
sudo mkdir /mchost/v-1-17/live
sudo mkdir /mchost/v-1-17/backups
sudo chown -Rv mchost /mchost/~
```
## Installing Minecaft Server

```bash
sudo wget -O /mchost/v-1-17/live/minecraft_server.jar https://launcher.mojang.com/v1/objects/0a269b5f2c5b93b1712d0f5dc43b6182b9ab254e/server.jar
sudo bash -c "echo eula=true > /mchost/v-1-17/live/eula.txt"
sudo chown -R mchost /mchost/
```
*Please note the server Jar will change over time and you will want to go to Mojan's website to grab the newest Jar.*

## Running The Server

```bash
screen
su mchost
java -Xms4G -Xmx4G -XX:+UseG1GC -XX:+UnlockExperimentalVMOptions -XX:MaxGCPauseMillis=100 -XX:+DisableExplicitGC -XX:TargetSurvivorRatio=90 -XX:G1NewSizePercent=50 -XX:G1MaxNewSizePercent=80 -XX:G1MixedGCLiveThresholdPercent=50 -XX:+AlwaysPreTouch -jar server.jar
```

```
The Lower Bound: -Xms4G
The Upper Bound: -Xmx4G
```

These values can be changed up to around 10GB if you need to go over 10GB.  This rarely needs to be done on smaller servers unless you have complex data packs, a large world file, or a loss of players (around 100+).  If you need these values to be higher please change the G1 Max and New Size Percent to the following:

```bash
-XX:G1MaxNewSizePercent=60
-XX:G1NewSizePercent=35
```

## Optimization

### Sᴇʀᴠᴇʀ.Pʀᴏᴘᴇʀᴛɪᴇs
`network-compression-threshold: -1`
`view-distance:4`


## Startup

```bash
sudo nano /etc/systemd/system/minecraft17@.service`
```

```
[Unit]
Description=Minecraft Server: %i
After=network.target

[Service]
WorkingDirectory=/mchost/1-17/current/%i

User=minecraft
Group=minecraft

Restart=always

ExecStart=/usr/bin/screen -DmS mc-%i /usr/bin/java -Xmx2G -jar minecraft_server.jar nogui

ExecStop=/usr/bin/screen -p 0 -S mc-%i -X eval 'stuff "say SERVER SHUTTING DOWN IN 5 SECONDS. SAVING ALL MAPS..."5'
ExecStop=/bin/sleep 5
ExecStop=/usr/bin/screen -p 0 -S mc-%i -X eval 'stuff "save-all"5'
ExecStop=/usr/bin/screen -p 0 -S mc-%i -X eval 'stuff "stop"5'

[Install]
WantedBy=multi-user.target
```

`ExecStart=/usr/bin/screen -DmS mc-%i /usr/bin/java -Xmx2G -jar minecraft_server.jar nogui`

`ExecStart=/usr/bin/screen -DmS mc-%i /usr/bin/java -Xmx4G -jar minecraft_server.jar nogui`

## Starting Minecraft Server

`sudo systemctl start minecraft17@survival`
`sudo systemctl status minecraft17@survival`
`sudo systemctl enable minecraft17@survival`
`nmap -p 25565 localhost`

## Further Reading

[YouHaveTrouble's MC Server Optimization](https://github.com/YouHaveTrouble/minecraft-optimization)
[Spigot Server Optimization](https://www.spigotmc.org/threads/guide-server-optimization%E2%9A%A1.283181/?__cf_chl_jschl_tk__=d882805489003f065a99dcd85ed601f21024776c-1623945314-0-ARichCRBAkP6pRCWxZFLlip3a3XQcAWMwbNl-M54GKsEqTiWKuCVGh4gfM3oXTte1vcwIU-I0QhKQla-fRe4E6urB4JweVMEr21RnCaLKw5ffq2tvcntsEQVUiUAnak2yDdxTAEREts1VWfjY43-mTtoSZ5dmKAlxvcUpoPJ7EbR8S0VMX8fWhodhHwe1tWtGgpjAo_4EzfAf3REBgMjbgUGAl7ss3ihyJgsgUM9OP-KlH7DdAi2JLiH2ll7cupUr0HM6gNFmBmzcuPkrif6SWKKs-oU6XZh-_oTbU6wqKl0qA_IcgG2cR1VZwB5lb3RBI3o26mm5vNBEttywNiSTCeUurFPtB6gEIuz8rJHA7LitAcgD9yWXCrPFAsX7414lCESGJG2KSuRce7CxEHfkTRzmzMdxXFYoLjfRdgo1DsLIOBaw4FQukYBlVOa2FFYDqhpR1-5RDfuHtzZlkRtACo)
[Java Flags for MC](https://forums.spongepowered.org/t/optimized-startup-flags-for-consistent-garbage-collection/13239)