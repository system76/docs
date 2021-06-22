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

Minecraft 1.17 dropped on June 8, 2021. In this article, we will be going over how to set up a Minecraft server on your Pop!_OS or Ubuntu install. System76 or Mojang recommends having a 8GB minimum but 16GB is preferred. Any hard drive over 128GB will work for a basic minecraft server, a drive of 1TB to 2TB is recommended for having backups.  This article will use mostly Terminal commands, if you want a refresher on the terminal you can see our article [here](https://support.system76.com/articles/terminal-basics).

## Updating and Installing Software Needed

To install the Minecraft server we will need to install Java (listed as default-jdk), wget, screen, and nmap. Java is what Minecraft runs in - we are also marking it as held so no future updates are applied (some java updates can break the server). wget will allow us to download the Minecrafter Server from a URL hosted by Mojang.  Downloading the Minecraft Server Jar we put the file in the directory directly instead of using a web browser. Screen will allow us to run commands and the server in an environment we do not need to have open or be connected to - think of it as a virtual terminal instance you can connect and disconnect from. nmap is a network scanner that we will use for testing and network configuration.

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

> ***NOTE:** not all these commands will produce output.*

## Make The Mincraft Group & User & Minecraft Direcory
The Minecraft server will make a lot of files for the world, settings, plugins, and other resources.  The following commands make the directories for the servers.  We will want to make a group and a user for the server to operate in and use.  We will need to then make a directory file to live in and make sure that the new server user has ownership of the directory.

```bash
sudo addgroup mchost
sudo useradd -M -s /usr/bin/false
sudo mkdir /mchost/v-1-17/
sudo mkdir /mchost/v-1-17/live
sudo mkdir /mchost/v-1-17/backups
sudo chown -Rv mchost /mchost/~
```
## Installing Minecaft Server

### Installing Mojan's Minecraft Server Jar

```bash
sudo wget -O /mchost/v-1-17/live/minecraft_server.jar https://launcher.mojang.com/v1/objects/0a269b5f2c5b93b1712d0f5dc43b6182b9ab254e/server.jar
sudo bash -c "echo eula=true > /mchost/v-1-17/live/eula.txt"
sudo chown -R mchost /mchost/
```
> ***NOTE:** the server Jar will change over time and you will want to go to Mojan's website to grab the newest Jar.*

### Installing PaperMC's Minecraft Server Jar
[PaperMC](https://papermc.io) 
[PaperMC's GitHub](https://github.com/PaperMC/Paper)

```bash
sudo wget -O /mchost/v-1-17/live/minecraft_server.jar https://papermc.io/api/v2/projects/paper/versions/1.17/builds/39/downloads/paper-1.17-39.jar 
sudo bash -c "echo eula=true > /mchost/v-1-17/live/eula.txt"
sudo chown -R mchost /mchost/
```

> ***NOTE:** the server Jar will change over time and you will want to go to Paper's Website to grab the newest Jar.*

## Running The Server

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

These values can be changed up to around 10GB if you need to go over 10GB.  This rarely needs to be done on smaller servers unless you have complex data packs, a large world file, or a lots of players (around 100+).  If you need these values to be higher please change the G1 Max and New Size Percent to the following:

```bash
-XX:G1MaxNewSizePercent=60
-XX:G1NewSizePercent=35
```

## Optimization

### Sᴇʀᴠᴇʀ.Pʀᴏᴘᴇʀᴛɪᴇs
`network-compression-threshold: -1`
`view-distance:4`

### PaperMC Changes 
After Paper runs for the first time you will see a file called `paper.yml`, this a config file.  Editing it will changes how Paper runs the server.  We will note what the changes do and what they may affect.  This section mostly comes from the work of [Celebrimbor](https://www.spigotmc.org/members/celebrimbor.48474/) with some changes and updates for some of the settings.

#### `max-auto-save-chunks-per-tick`
Max Auto Chunks Per Tick is how fast the incremental chunk saving is during the world save the task.  Do not go lower than 6 for the value, it may result in unsaved or corrupted chunks.

Default: `24`
Optimized: `6` to `12`

#### `optimize-explosions`
Paper has its algorithm for explosions that has no effect on gameplay but is not as impactful on the server.  Performance improvements are not as impactful as others on this list.

Default: `false`
Optimized: `true`

#### `mob-spawner-tick-rate`
Mob spawners like the ones that spawn in classic dungeons are often used as a source for mob grinders.  This value changes the delay of the spawner's spawning.  Changing this to 2 minorly improves server performance, but this is a good number to be aware of if users take advantage of the spawners. 

Default: `1`
Optimized: `2`

#### `disable-chest-cat-detection`
We get it, Mojang loves having the Minecraft cat be like your IRL cats with them getting in our way.  Every tick all chests in Minecraft check to see if a cat is sitting on top of them, this rarely is used in gameplay.  Turning it off results in minor performance improvements.

Default: `false`
Optimized: `true`

#### `container-update-tick-rate`
This value changes how often inventories are refreshed when opened, any value above 4 will result in visual bugs.

Default: `1`
Optimized: `3`

#### `max-entity-collisions`
Mob farms and player traps cause collitions, this value will effect how often and how much entities collide.  This has a moderate effect on performance. 

Default: `8`
Optimized: `2`

#### `grass-spread-tick-rate`
Typically I keep this default for the server till Silk Touch becomes more common and the economy grows, as it can be frustrating to wait 4 times longers for the grass to spread.  This can have a moderate effect on perforance.

Default: `1`
Optimized: `4`

#### `despawn-ranges`
This sets how far a player has to be from a mob for them to despawn.  The `soft` value is the distance in blocks from the player where they are removed.  The `hard` value is the value that mobs are removed instantly.  Setting these to be slightly lower will reduce the spawn of the computer.

Default: `soft: 32, hard: 128`
Optimized: `soft: 28, hard: 96`

#### `hopper.disable-move-event`
Hoppers are great for item transport but they can cause lag and this otimisation will grealy redusing the `InventoryMoveItemEvent`s that occure on hoppers.

Default: `false`
Optimized: `true`
Impact: Heavy

> ***NOTE:** Plugins that listen for `InventoryMoveItemEvent` will break or cause them to crash the server.

#### `non-player-arrow-despawn-rate`
Skeleton fired arrows are not retrievable making this a cosmetic change, by default they will never despawn.  Three seconds, or 60 ticks, is a good amount to still be able to tell where the arrow came from when being ambushed.

Default: `-1`
Optimized: `60`

#### `creative-arrow-despawn-rate`
This value changes how long none retrivibale arrows stay around.  Infinity bows and bows used in creative mode are the only ones effected by this. 

Default: `-1`
Optimized: `60`

#### `prevent-moving-into-unloaded-chunks`
When lag hits your server or a user is pushing the boundries of rendered chunks, a player can cause issues.  This will prevent them from moving into a chunk that is unloaded and will teleport them instead to a nearby location that is safe.  This settings has a moderate effect on performance.

Default: `false`
Optimized: `true`

> ***NOTE:** If you are using a world without a world boarder or pre-generation then this setting is critical.

#### `use-faster-eigencraft-redstone`
Eigencraft Redstone is a redstone implitation that takes out a lot of the reduentent logic from 

Default: `false`
Optimized: `true`
Impact: Heavy

➫ This setting reduces redundant redstone updates by as much as 95% without breaking vanilla devices. Empirical testing shows a speedup by as much as 10x!

Note: If you use a plugin to change redstone algorithms, consider replacing them with this option as plugins tend to break redstone behavior.

armor-stands-tick
Def: true
Opt: false
Impact: Minor

➫ Some items are viewed as entities (require ticking) since they interact with the world. Unticked armor stands will not get pushed by water (do you care?)

Note: Paper also offsets item frame ticking instead of ticking all frames at once. This is not configurable, just enjoy the TPS savings with no gameplay impact.

per-player-mob-spawns
Def: false
Opt: true
Impact: Minor

➫ This implements singleplayer spawning behavior instead of Bukkit's random algorithms. This prevents the actions of others (i.e. Massive farms) from impacting the server's spawn rates.

Note: If you lowered spawn-limits in Bukkit and notice shortages of animals and monsters, consider bumping those back up until you find a happy place.

alt-item-despawn-rate
Def: false
Opt: true
Impact: Medium

➫ Remove certain item drops faster (or slower) than the item-despawn-rate set in Spigot. This lets you avoid ticking massive piles of garbage.

Example of despawning cobblestone and netherrack in 15 seconds:
Code (Text):
      enabled: true
      items:
        COBBLESTONE: 300
        NETHERRACK: 300
Note: Use the Spigot material list when adding items.

no-tick-view-distance
Def: -1
Opt: # > view-distance setting
Impact: N/A

➫ This is the distance at which chunks are loaded, but will still not be ticked outside your view-distance.

Note: If you had to set your view-distance really low (like 3 or 4), you might set this at 5 or 6 to improve your gameplay experience.

anti-xray.enabled
Def: false
Opt: true
Impact: N/A

➫ While this setting will actually cost TPS, Paper's anti-xray is the most efficient in existence! Engine 1 might be less heavy (mainly for clients), but mode 2 is by far more effective.

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