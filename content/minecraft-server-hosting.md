---
layout: article
title: Minecraft Server (Install & Host)
description: 
  So you want some of that blocky goodness? Well, get Java and some graphics cards and let's go!
keywords:
  - Minecraft
  - Mojang
  - Games
hidden: false
section: software
tableOfContents: true
---

Minecraft 1.17 was released on June 8, 2021. In this article, we will be going over how to set up a Minecraft server on your Pop!_OS or Ubuntu install. System76 and Mojang recommend having an 8GB minimum of system RAM but 16GB is preferred. Any hard drive over 128GB will work for a basic Minecraft server, a drive of 1TB to 2TB is recommended for having backups.  This article will use mostly Terminal commands, if you want a refresher on the terminal you can see our article [here](https://support.system76.com/articles/terminal-basics).

## Updating and Installing Software Needed

To install the Minecraft server, we will need to install Java (listed as `default-jdk`), `wget`, `screen`, and `nmap`.

- `default-jdk` is the language in which Minecraft runs - we are also marking the Java version as "held" so no future updates are applied (some java updates can break the server).

- `wget` will allow us to download the Minecraft Server from Mojang.  Downloading the Minecraft Server Jar, we put the file in the directory directly, instead of using a web browser.

- `screen` will allow us to run commands on the server in an isolated environment - think of it as a virtual terminal instance you can connect to and disconnect from.

- `nmap` is a network scanner that we will use for testing and network configuration.

Open a `Terminal` with <kbd>SUPER</kbd>+<kbd>T</kbd> (Pop!\_OS) or <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd> (Ubuntu) run the following commands:

```bash
sudo apt clean  
sudo apt update -m  
sudo dpkg --configure -a  
sudo apt install -f  
sudo apt full-upgrade -y
sudo apt install wget screen default-jdk nmap -y
sudo apt-mark hold default-jdk
```

> ***NOTE:** not all these commands will produce output.*

## Make The Minecraft Group & User & Minecraft Directory

The Minecraft server will make a lot of files for the world, settings, plugins, and other resources. The following commands make the directories for the servers. We will want to make a group and a user for the server to operate in and use. We will need to then make a directory file to live in and make sure that the new server user has ownership of the directory.

```bash
sudo addgroup mchost
sudo useradd -M -s /usr/bin/false
sudo mkdir /mchost/v-1-17/
sudo mkdir /mchost/v-1-17/live
sudo mkdir /mchost/v-1-17/backups
sudo chown -Rv mchost /mchost/~
```

## Installing Minecraft Server

### Installing Mojang's Minecraft Server Jar

We will want to download the server jar and create a working directory for server.

```bash
sudo wget -O /mchost/v-1-17/live/minecraft_server.jar WEBSITE-URL
sudo bash -c "echo eula=true > /mchost/v-1-17/live/eula.txt"
sudo chown -R mchost /mchost/
```

> **NOTE:** the server Jar will change over time and you will want to go to Mojang's website to grab the newest Jar.

### Installing PaperMC's Minecraft Server Jar

Paper is a jar that extends and improves the Bukkit and Spigot APIs meaning if you want to install plugins you can. PaperMC also offers more control options for your server.

[PaperMC](https://papermc.io)
[PaperMC's GitHub](https://github.com/PaperMC/Paper)

```bash
sudo wget -O /mchost/v-1-17/live/minecraft_server.jar WEBSITE-URL 
sudo bash -c "echo eula=true > /mchost/v-1-17/live/eula.txt"
sudo chown -R mchost /mchost/
```

> **NOTE:** the server Jar will change over time and you will want to go to Paper's Website to grab the newest Jar.

## Running The Server

To run the server we will need to open a virtual terminal window using screen and switch users to be your mchost user.

```bash
screen
su mchost
cd /mchost/v-1-17/live/
java -Xms4G -Xmx4G -XX:+UseG1GC -XX:+UnlockExperimentalVMOptions -XX:MaxGCPauseMillis=100 -XX:+DisableExplicitGC -XX:TargetSurvivorRatio=90 -XX:G1NewSizePercent=50 -XX:G1MaxNewSizePercent=80 -XX:G1MixedGCLiveThresholdPercent=50 -XX:+AlwaysPreTouch -jar server.jar
```

### How Much RAM To Use

```
The Lower Bound: -Xms4G
The Upper Bound: -Xmx4G
```

These values can be changed up to around 10GB if you need to go over 10GB. This rarely needs to be done on smaller servers unless you have complex data packs, a large world file, or a lot of players (around 100+). If you need these values to be higher please change the G1 Max and New Size Percent to the following:

```bash
-XX:G1MaxNewSizePercent=60
-XX:G1NewSizePercent=35
```

## Optimization

### Server Properties

In the server.properties files you can change the compression threshold and the default view distance. I would recommend keeping it at 4 for lower end hardware hosting the server and 10 for higher end.

`network-compression-threshold: -1`
`view-distance:4`

### PaperMC Changes

After Paper runs for the first time you will see a file called `paper.yml`, this a config file. Editing it will change how Paper runs the server. We will note what the changes do and what they may affect. This section mostly comes from the work of [Celebrimbor](https://www.spigotmc.org/members/celebrimbor.48474/) with some changes and updates for some of the settings.

#### `max-auto-save-chunks-per-tick`

"Max Auto Chunks Per Tick" refers to how fast the incremental chunk saving is during the "world save" task. Do not go lower than 6 for the value, it may result in unsaved or corrupted chunks.

Default: `24`
Optimized: `6` to `12`

#### `optimize-explosions`

Paper's algorithm for explosions has no effect on game-play, but is not as impactful on the server. These performance improvements are not as impactful as others on this list.

Default: `false`
Optimized: `true`

#### `mob-spawner-tick-rate`

Mob spawners, like the ones that spawn in classic dungeons, are often used as a source for mob grinders. This value changes the delay of the spawners' spawning.  Changing this to 2 slightly improves server performance, but this is a good number to be aware of if users take advantage of the spawners.

Default: `1`
Optimized: `2`

#### `disable-chest-cat-detection`

We get it, Mojang loves having the Minecraft cats be like IRL cats with them getting in our way. Every tick, all chests in Minecraft check to see if a cat is sitting on top of them, this rarely is used in game-play.  Turning it off results in minor performance improvements.

Default: `false`
Optimized: `true`

#### `container-update-tick-rate`

This value changes how often inventories are refreshed when opened, any value above 4 will result in visual bugs.

Default: `1`
Optimized: `3`

#### `max-entity-collisions`

Mob farms and player traps cause collisions. The `max-entity-collisions` value will affect how often and how much entities collide.  This has a moderate effect on performance.

Default: `8`
Optimized: `2`

#### `grass-spread-tick-rate`

Typically, this should remain at the defaults for the server. After Silk Touch becomes more common and the economy grows, it can be adjusted. It can be frustrating to wait 4 times longer for the grass to spread. However, this can have a moderate effect on performance, so some administrators may want to adjust it.

Default: `1`
Optimized: `4`

#### `despawn-ranges`

This sets how far a player has to be from a mob for them to despawn. The `soft` value is the distance (in blocks) from the player where mobs are removed.  The `hard` value is the value that mobs are removed instantly.  Setting these to be slightly lower will reduce the spawn load of the computer.

Default: `soft: 32, hard: 128`
Optimized: `soft: 28, hard: 96`

#### `hopper.disable-move-event`

Hoppers are great for item transport but they can cause lag; this optimization will greatly reduce the `InventoryMoveItemEvent`s that occurs on hoppers.

Default: `false`
Optimized: `true`
Impact: Heavy

> ***NOTE:** Plugins that listen for `InventoryMoveItemEvent` will break, or, cause the server to crash.

#### `non-player-arrow-despawn-rate`

Skeleton fired arrows are not retrievable, making this a cosmetic change. By default arrows will never despawn. Three seconds, or 60 ticks, is a good time-frame for users to still be able to tell where the arrow came from when being ambushed.

Default: `-1`
Optimized: `60`

#### `creative-arrow-despawn-rate`

This value changes how long non-retrievable arrows stay around. Infinity bows, and bows used in creative mode, are the only ones affected by this.

Default: `-1`
Optimized: `60`

#### `prevent-moving-into-unloaded-chunks`

When lag hits your server, or a user is pushing the boundaries of rendered chunks, a player can cause issues. This will prevent them from moving into a chunk that is unloaded, and will teleport them instead to a nearby safe location. This setting has a moderate effect on performance.

Default: `false`
Optimized: `true`

> **NOTE:** If you are using a world without a world border or pre-generation then this setting is critical.

#### `use-faster-eigencraft-redstone`

Eigencraft Redstone is a Redstone adjustment tool that takes out a lot of the redundant logic and greatly impacts the effect. It can boost Redstone performance by 1000% and does not break about 95%-99% of vanilla devices.

Default: `false`
Optimized: `true`

> ***NOTE**: If you are using a different Redstone algorithm do not change this setting, it will break or crash Minecraft.

#### `armor-stands-tick`

Some entities require ticking since they are interactive. For example, un-ticked armor stands will not get pushed by water. If you plan to use a contraption that uses ticking, leave this option set to true. This has minor-to-major performance improvements.

Default: `true`
Optimized: `false`

> ***Note:** Paper offers item frame ticking instead of doing them all at once to prevent lag spikes. This helps people with map rooms, or people who use frames as wallpapers or custom paintings.

#### `per-player-mob-spawns`

Changing this will switch the spawning behavior from Bukkit's random algorithm to single-player spawning behavior. This will prevent things like massive farms from affecting the whole server's spawn rate.

Default: `false`
Optimized: `true`

#### `alt-item-despawn-rate`

This enables items to have different despawn rates. Common items do not need to be around as long as uncommon ones.

Default: `false`
Optimized: `true`

Example of despawning cobblestone and netherrack in 15 seconds:
Code (Text):

```
      enabled: true
      items:
        COBBLESTONE: 300
        NETHERRACK: 300
```

#### `no-tick-view-distance`

This should be set to your view distance.  If the view distance is below 4 you should set it to 5 to improve the game-play experience.

Default: `-1`
Optimized: # > view-distance setting

#### `anti-xray.enabled`

This will cause some performance loss, but Paper has a solid and efficient anti-x-ray cheat system. This will prevent players from using x-ray mods or cheats.

Default: `false`
Optimized: `true`

## Startup

The server should be a service that starts with the system and can log events. This is not mandatory, but allows users to make sure the server is running via service commands.

First, make the service file.

```bash
sudo nano /etc/systemd/system/minecraft17@.service`
```

Below are the needed contents for the service file. You will want to also copy over your server startup file.

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

```
ExecStart=/usr/bin/screen -DmS mc-%i /usr/bin/java -Xmx2G -jar minecraft_server.jar nogui`
```

```
ExecStart=/usr/bin/screen -DmS mc-%i /usr/bin/java -Xmx4G -jar minecraft_server.jar nogui
```

## Starting Minecraft Server

```
sudo systemctl start minecraft17@survival
sudo systemctl status minecraft17@survival
sudo systemctl enable minecraft17@survival
nmap -p 25565 localhost`
```

## Port Forwarding

> **Note**: Opening ports to the internet makes you more susceptible to networking attacks or vulnerabilities and may not be allowed by your Internet Service Provider (ISP).

To make your Minecraft server available outside of your LAN, you will need to forward the port to your router. Each brand, system, and ISP will have a different configuration. We recommend you reach out to your ISP for assistance with this. The address you will give your users is your public IP.

## Further Reading And Sources

[YouHaveTrouble's MC Server Optimization](https://github.com/YouHaveTrouble/minecraft-optimization)

[Spigot Server Optimization](https://www.spigotmc.org/threads/guide-server-optimization%E2%9A%A1.283181/?__cf_chl_jschl_tk__=d882805489003f065a99dcd85ed601f21024776c-1623945314-0-ARichCRBAkP6pRCWxZFLlip3a3XQcAWMwbNl-M54GKsEqTiWKuCVGh4gfM3oXTte1vcwIU-I0QhKQla-fRe4E6urB4JweVMEr21RnCaLKw5ffq2tvcntsEQVUiUAnak2yDdxTAEREts1VWfjY43-mTtoSZ5dmKAlxvcUpoPJ7EbR8S0VMX8fWhodhHwe1tWtGgpjAo_4EzfAf3REBgMjbgUGAl7ss3ihyJgsgUM9OP-KlH7DdAi2JLiH2ll7cupUr0HM6gNFmBmzcuPkrif6SWKKs-oU6XZh-_oTbU6wqKl0qA_IcgG2cR1VZwB5lb3RBI3o26mm5vNBEttywNiSTCeUurFPtB6gEIuz8rJHA7LitAcgD9yWXCrPFAsX7414lCESGJG2KSuRce7CxEHfkTRzmzMdxXFYoLjfRdgo1DsLIOBaw4FQukYBlVOa2FFYDqhpR1-5RDfuHtzZlkRtACo)

[Java Flags for MC](https://forums.spongepowered.org/t/optimized-startup-flags-for-consistent-garbage-collection/13239)

[Backup Article](https://github.com/nicolaschan/minecraft-backup)
