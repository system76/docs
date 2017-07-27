---
layout: article
title: Install and Play Minetest
description: >
   Minetest, an open source infinite-world block sandbox game with survival and crafting.
keywords:
  - Games
  - minetest
image: http://support.system76.com/images/system76.png
hidden: false
section: community
---

Did you get sick of Minecraft? Microsoft controlling it and ripping apart our beloved game? Well fear no more!  Minetest is a game similar to Minecraft but is truly infinite voxel game, but is written in C++ for speed, easy cross-compatiblity with other platforms, and seamless modding and addition of new game types, mods, texture packs, and much more, all licensed under the LGPL.

### Installation

To install on Ubuntu / PopOS, simply do:

```
sudo apt-get install build-essential libirrlicht-dev cmake libbz2-dev libpng-dev libjpeg-dev libxxf86vm-dev libgl1-mesa-dev libsqlite3-dev libogg-dev libvorbis-dev libopenal-dev libcurl4-gnutls-dev libfreetype6-dev zlib1g-dev libgmp-dev libjsoncpp-dev
```

We will use git to keep our game up to date:

```
sudo apt-get install git
```

Download source (this is the URL to the latest of source repository, which might not work at all times) using git:

```
git clone --depth 1 https://github.com/minetest/minetest.git
cd minetest
```

Download minetest_game (otherwise only the "Minimal development test" game is available) using git:

```
git clone --depth 1 https://github.com/minetest/minetest_game.git games/minetest_game
```

Next, we will compile the code:

```
cmake . -DRUN_IN_PLACE=TRUE
make
```

Run it:

```
./bin/minetest
```

### Adding Texture Packs, Mods, and Subgames

[www.minetest.net/customize](http://www.minetest.net/customize/)

The game only comes with a default subgame. To play single player with more features, add a subgame or mod!  To add textures, `cd textures` and do a git clone of a texture pack or put one in!  

### Connecting to servers

To connect to a server, choose one from the list, then choose a username and password on the right side of the screen.  The server will then connect.  The next time you use the server, simply put in the same username and password!  Custom mods are automatically loaded, so no fuss is needed.

### Resources

Check out Minetest at [minetest.net](https://minetest.net)

Or at the github [@Minetest](https://github.com/minetest)

Become a contributor! Change the future of gaming!

---

This article was contributed by [kylerschin](https://github.com/kylerschin).
