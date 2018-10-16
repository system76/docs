---
layout: article
title: Install OpenSpades
description: 
  Use Snap or build OpenSpades from source to enjoy a voxel-based first person shooter.
keywords:
  - FPS
  - First Person Shooter
  - Games
  - OpenSpades
  - Multiplayer
hidden: false
section: community
---

Do you love Minecraft and First Person Shooters? Then you'll love [OpenSpades](https://openspades.yvt.jp/). OpenSpades is a cross-platform MMOG which is compatible with Ace of Spades 0.75. It is released under a GPLv3 license.

### Installation

To install on Ubuntu/Pop OS using snaps:

`sudo snap install openspades`

To build and install from source (terminal):

1. Install the necessary dependencies:

`sudo apt-get install pkg-config libglew-dev libcurl3-openssl-dev libsdl2-dev libsdl2-image-dev libalut-dev xdg-utils libfreetype6-dev libopus-dev libopusfile-dev libjpeg-dev libxinerama-dev libxft-dev git cmake imagemagick`

Enter your password when prompted.

When asked whether you want to install the applications, type `y` and hit the `<ENTER>` key.

2. Clone the GitHub repiository:

`git clone https://github.com/yvt/openspades`

`cd openspades`

`mkdir openspades.mk`

`cd openspades.mk`

3. Build OpenSpades:

`cmake .. -DCMAKE_BUILD_TYPE=RelWithDebInfo`

`make`

4. Copy the **Resources** folder into **bin**:

`cp -r ./Resources ./bin/

5. Install OpenSpades:

`sudo make install`

6. Launch OpenSpades:

Type `openspades` in the terminal. OR Find OpenSpades in the applications list of your GUI.

Configure the settings to your liking and click **Start**.

Select a player name and click **OK** or choose **Decide later**.

Select a server and click **Connect**.

Select a team then select a weapon.

Enjoy.

### Resources

For more detailed information about building OpenSpades read the [Building](https://github.com/yvt/openspades/wiki/Building) page on the OpenSpades wiki.

---

This article was contributed by [0verk1ll](https://github.com/0verk1ll) and based off of the [Building](https://github.com/yvt/openspades/wiki/Building) page on the OpenSpades wiki.
