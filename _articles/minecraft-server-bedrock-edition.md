---
layout: article
title: Install Minecraft Server (Bedrock Edition)
description: 
  So you want some of that hard bedrock? Well, you can't mine it but I promise, it's gonna be soft on your machine!
keywords:
  - Minecraft
  - Mojang
  - Games
  - Microsoft
  - Video Games
  - XBOX
  - Pocket Edition
  - PE
  - Windows
  - C++
hidden: false
section: community

---

Hello again! It's another beautiful morning in Minecraft! This is how to get Creeper Awww manned in Bedrock Edition on your own server.
While you can't run bedrock edition on your machine, you'll want to set up your own server if you want to avoid getting scammed by Minecraft Realms or similar hosting companies.
C++ isn't as resource intensive as Java, so you can run this on a high level on a Jackel 1 Server, a Thelio Mini, or for <50 players, a System76 Mini.
I've gotten good results off a Raspberry Pi 4.
  
### Debian and Ubuntu

Just get the script
```bash
wget https://raw.githubusercontent.com/TheRemote/MinecraftBedrockServer/master/SetupMinecraft.sh
chmod +x SetupMinecraft.sh
./SetupMinecraft.sh 
```

The script will setup the Minecraft sever and ask you some questions on how to configure it. I’ll explain here what they mean.

“Start Minecraft server at startup automatically (y/n)?” – This will set the Minecraft service to start automatically when your server boots. This is a great option to set up a Minecraft server that is always available.

“Automatically restart and backup server at 4am daily (y/n)?” – This will add a cron job to the server that reboots the server every day at 4am. This is great because every time the server restarts it backs up the server and updates to the latest version. See the “Scheduled Daily Reboots” section below for information on how to customize the time or remove the reboot.

That is it for the setup script. The server will finish configuring and start!

## First Run

First Run
The server will start up and start displaying output to the console.

```
[2019-03-30 20:25:12 INFO] Starting Server
[2019-03-30 20:25:12 INFO] Version 1.10.0.7
[2019-03-30 20:25:12 INFO] Level Name: Bedrock level
[2019-03-30 20:25:12 INFO] Game mode: 0 Survival
[2019-03-30 20:25:12 INFO] Difficulty: 1 EASY
[2019-03-30 20:25:20 INFO] IPv4 supported, port: 19132
[2019-03-30 20:25:20 INFO] IPv6 supported, port: 19133
[2019-03-30 20:25:23 INFO] Server started.
```

Once you see the “Server started” line you will be able to connect from the client.

To add the server to the client open Minecraft and click “Play”. Then at the top of the screen select the “Servers” tab and click “Add Server”.

This will ask you for a Server Name and Server IP Address. For the name you can put anything and for the server IP address put the address of your Linux server. Leave the port as the default 19132. For more information on how to let people from outside your network on go to the “Port Forwarding” section below.

Now choose the server you just added in the list and connect!

## Start, Stop and Restart Server
The server can be started, stopped and restarted two different ways. You can use the provided scripts in the Minecraft folder or you can use systemctl. Here are the commands:
```
cd ~/minecraftbe
./start.sh
./stop.sh
./restart.sh
```

-OR-
```
sudo systemctl start minecraftbe
sudo systemctl stop minecraftbe
sudo systemctl restart minecraftbe
```
Automatic Backups
The server backs up each time it starts. This helps you recover easily if something goes wrong. This system works best if you configured the server to restart daily since it means you will have a backup every day.

To access these backups type:

cd ~/minecraftbe/backups
ls
When a backup is made the filename will be the date and time the backup was taken. If you need to restore a backup it’s very easy. Substitute the timestamp in my example to the backup you want to roll back to. Type:
```
cd ~/minecraftbe
./stop.sh
rm -rf worlds
tar -xf backups/2019.08.15.10.06.30.tar.gz
./start.sh
```

Your world has now been restored! It’s a good idea to download these backups off the server periodically just in case the server’s storage fails.

## Scheduled Daily Reboots
The daily reboots are scheduled using cron. It’s very easy to customize the time your server restarts.

To change the time that the server restarts type: crontab -e

This will open a window that will ask you to select a text editor (I find nano to be the easiest) and will show the cronjobs scheduled on the server. The Minecraft one will look like the following:

0 4 * * * /home/ubuntu/minecraftbe/restart.sh

There are 5 fields here. The default restart time is set to reboot at 0 minutes of the 4th hour of the day (4 AM). The other 3 fields are left as * to represent every day of every month. Make any desired changes here and press Ctrl+X to exit nano and update the cronjob.

To remove the daily reboot simply delete the line and save.

## Reconfigure / Update Scripts
The scripts can always be reconfigured and updated by downloading the latest SetupMinecraft.sh and running the installer again. It will update all of the scripts in the Minecraft directory and reinstall the startup service for you.

Running SetupMinecraft.sh again will also give you a chance to reconfigure options such as the memory dedicated to the server, daily reboots, starting the server on boot, etc.

This will not overwrite your world or any other data so it is safe to run!

## Port Forwarding
If everyone on your server is on the same LAN or WiFi network as you then you don’t need to do this. If you want people to connect from outside your local network then you need to set up port forwarding on your router.

The process for this is different for every router so the best thing to do is just look at your router and find the model # and put that in google with port forwarding for easy instructions on how to do it for your specific router.

You want to forward port 19132. The type of connection is both TCP and UDP. On some routers you need to do both a TCP entry and then a second entry as UDP.

Once you do this people will be able to connect to your Minecraft server through your public IP address. This is different than your local IP which is usually a 192.x.x.x or 10.x.x.x. If you don’t know what that is just go to google and type “what’s my ip” and Google will kindly tell you!

## Wired vs. Wireless
Going with an ethernet (wired) connection is going to be faster and more reliable. There’s so much wireless traffic and other interference in the air that running your server on WiFi is not recommended.

Even if it is working great 99% of the time it can ruin your experience very quickly if the WiFi drops for a couple of seconds and you get blown up by a creeper!

All that being said, the server works fine on wireless. The script will work fine as is with a wireless connection.

## Conclusion
The Minecraft Bedrock Edition dedicated server runs much better than previous third party servers in the past that were missing critical features. The performance is very good even on low end hardware. It has never been easier to set up a Minecraft Bedrock server.

If you have any feedback or suggestions let me know in the comment section. A lot of the changes and developments in this script and guide are directly from readers.

Have fun!

---

This article was contributed by [kylerchin](https://github.com/kylerchin).
