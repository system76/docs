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
section: servers
---

# Hosting A Minecraft Server

## Updating and Installing Software Needed

```bash
sudo apt clean  
sudo apt update -m  
sudo dpkg --configure -a  
sudo apt install -f  
sudo apt full-upgrade  
flatpak update  
flatpak update --appstream  
flatpak repair --user  
sudo flatpak repair --system  
flatpak update  
flatpak uninstall --unused
sudo apt install wget screen default-jdk nmap
```

## Make The Mincraft Group & User & Minecraft Direcory

```bash
mkdir /mchost/
sudo adduser --home /mchost/ --shell /bin/bash --no-create-home --ingroup  mchost mc17
Adding user `mc17' ...
Adding new user `mc17' (1002) with group `mchost' ...
Not creating home directory `/mchost/'.
New password:
Retype new password:
passwd: password updated successfully
Changing the user information for demouser
Enter the new value, or press ENTER for the default
        Full Name []: Minecraft 1.17
        Room Number []:
        Work Phone []:
        Home Phone []:
        Other []:
Is the information correct? [Y/n] y
```
## Installing Minecaft Server

```bash
sudo mkdir /mchost/1-17/current
sudo mkdir /mchost/1-17/backups
sudo wget -O /mchost/1-17/current/minecraft_server.jar https://launcher.mojang.com/v1/objects/0a269b5f2c5b93b1712d0f5dc43b6182b9ab254e/server.jar
sudo bash -c "echo eula=true > /mchost/1-7/current/eula.txt"
sudo chown -R mc17 /mchost/1-7/
```

## Optimization
<https://github.com/YouHaveTrouble/minecraft-optimization>
<https://www.spigotmc.org/threads/guide-server-optimization%E2%9A%A1.283181/?__cf_chl_jschl_tk__=d882805489003f065a99dcd85ed601f21024776c-1623945314-0-ARichCRBAkP6pRCWxZFLlip3a3XQcAWMwbNl-M54GKsEqTiWKuCVGh4gfM3oXTte1vcwIU-I0QhKQla-fRe4E6urB4JweVMEr21RnCaLKw5ffq2tvcntsEQVUiUAnak2yDdxTAEREts1VWfjY43-mTtoSZ5dmKAlxvcUpoPJ7EbR8S0VMX8fWhodhHwe1tWtGgpjAo_4EzfAf3REBgMjbgUGAl7ss3ihyJgsgUM9OP-KlH7DdAi2JLiH2ll7cupUr0HM6gNFmBmzcuPkrif6SWKKs-oU6XZh-_oTbU6wqKl0qA_IcgG2cR1VZwB5lb3RBI3o26mm5vNBEttywNiSTCeUurFPtB6gEIuz8rJHA7LitAcgD9yWXCrPFAsX7414lCESGJG2KSuRce7CxEHfkTRzmzMdxXFYoLjfRdgo1DsLIOBaw4FQukYBlVOa2FFYDqhpR1-5RDfuHtzZlkRtACo>

### Sᴇʀᴠᴇʀ.Pʀᴏᴘᴇʀᴛɪᴇs
`network-compression-threshold: -1`
`view-distance:4`


## Startup

```bash
sudo vi /etc/systemd/system/minecraft17@.service`

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