---
title: Gaming on Pop!_OS
description: >
   Want to game on your super awesome new System76 machine?  Take a look at these instructions to set your system up for gaming!
keywords:
  - gaming
  - support
  - steam
  - lutris
  - gamehub
  - proton
  - 22.04

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: media
tableOfContents: true
---

## Steam

<u>Steam</u> is a popular game client released by Valve. Steam offers games that are natively compatible with Linux, and compatibility for many non-native games can be achieved using Proton.

### Install Steam From the Pop!_Shop

Open the <u>Pop!_Shop</u> application then either search for Steam or by clicking the <u>Steam</u> icon on the Pop!_Shop home page. Now click the **Install** button.

![Pop!_Shop Steam](/images/linux-gaming/pop-shop_steam.png)

Once installed, use the Application button to search for and run <u>Steam</u>.

### Install Steam From Command Line

Open the <u>Terminal</u> application by searching for <u>Terminal</u> after pressing the Super Key <kbd><font-awesome-icon :icon="['fab', 'ubuntu']"></font-awesome-icon></kbd>/<kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd>/<kbd>SUPER</kbd>.

![Activities Overview](/images/linux-gaming/search-terminal.png)

Once the <u>Terminal</u> application is opened you can use the Command Line tool `apt` to search for it like so:

```bash
apt search steam
```

![Terminal](/images/linux-gaming/terminal-steam-search.png)

Once we find the right name for <u>Steam</u> we can install it with `apt` as well. Please type this command into the terminal and press <kbd>Enter</kbd>:

```bash
sudo apt install steam
```

**IMPORTANT NOTE:** Be very careful when using sudo with ANY Command. It can make system wide changes so be sure to read everything before entering 'Y'.

### Enable Steam Play (Proton)

Proton is a compatibility layer tool which enables support for some Windows games on Linux. It's based on the WINE project with some tweaks and additions by Valve. Use the [Protondb database](https://www.protondb.com/) to confirm if a specific game has been tested and verified working using Proton. You can enable Proton in:

Steam -> Settings -> Steam Play -> Check the box for "Enable Steam Play for supported titles AND "Enable Steam Play for all other titles" as pictured below:

![Steam Settings](/images/linux-gaming/enable-steam-play_proton.png)

### Use Protonup to Manage Custom Proton Versions

Valve's official Proton release may not provide optimal compatibility for specific games, or community contributors may discover improvements not yet implemented by Valve. If a game is not working with mainline or experimental versions of Proton, consider trying a community-contributed fork.

- **ProtonGE** is a popular fork created by Glorious Eggroll. Glorious Eggroll tests newer games in Proton, and often implements bug fixes ahead of Valve's official releases. You can view Glorious Eggroll's Github repo for ProtonGE [here](https://github.com/GloriousEggroll/proton-ge-custom).

- **Protonup** is a command-line tool that installs, manages, and updates ProtonGE. Protonup is written in Python and maintained by AUNaseef in the [Pypi project directory](https://pypi.org/project/protonup/).

- **ProtonUp-Qt** is a community-maintained GUI tool based on AUNaseef's CLI tool. The app allows downloading Proton versions for Steam, and WINE versions for Lutris. It will automatically put each of these compatibility layer versions in the correct location to be found by Steam and Lutris respectively. The ProtonUp-Qt Github repository can be found [here](https://github.com/DavidoTek/ProtonUp-Qt).

#### Install Protonup

First, to install `protonup` we'll need the Python package manager, `pip`.

```bash
sudo apt update
sudo apt install python3-pip
```

Now, let's install `protonup` via `pip`.

```bash
pip3 install protonup
```

The `protonup` command will be available after a reboot, or you can run the below command to add it to your `PATH` for immediate use.

```bash
source ~/.profile
```

#### Manage ProtonGE with Protonup

After <u>Steam</u> is installed, you can run protonup in a terminal. The command will fetch the newest ProtonGE build. This tool will also pull hotfixes. Below is an example of the tools output:

```bash
protonup
Ready to download Proton-6.10-GE-1
Size      : 370.81 MiB
Published : 2021-06-07
Continue? (Y/N): y
Downloaded 100.0% - 370.81 MiB/370.81 MiB
[INFO] Installed in: /home/aaronh/.steam/root/compatibilitytools.d/Proton-6.10-GE-1
```

You can also use `protonup` to install older versions of ProtonGE. For example, if you have a game that works better on an older release, you can install that version by first using the `protonup --releases` command to list versions. Next, specify the version to install by running `protonup -t`, followed by a specific release number:

```bash
➜  ~ protonup -t GE-Proton7-1
Ready to download Proton-GE-Proton7-1 
Size      : 407.23 MiB 
Published : 2022-02-27
Continue? (Y/N): y
Downloaded 100.0% - 407.25 MiB/407.23 MiB
[INFO] Installed in: /home/s31bz/.steam/root/compatibilitytools.d/Proton-GE-Proton7-1
```

#### Install ProtonUp-Qt

ProtonUP-Qt is available as a Flatpak in the Pop!\_Shop. Launch the Pop!\_Shop, search for "ProtonUp, and click the `Install` button.

![Pop Shop ProtonUp-Qt](/images/linux-gaming/pop-shop-protonup-qt.png)

## GameHub

<u>GameHub</u> is a game launcher that can use different compatibility layers like Wine/Proton, DOSBox and other tools. It can hook into Steam, GOG and other sources. It is written in Vala and you can read more about it [here](https://tkashkin.github.io/projects/gamehub/).

>**Note**: GameHub is not supported in Pop!\_OS versions later than 20.04. Users running Pop!\_OS 21.04 or later should consider using [Lutris](#lutris-install) as an alternative.

### Install GameHub From Command Line

Open the <u>Terminal</u> application by searching for <u>Terminal</u> after pressing the Super Key <kbd><font-awesome-icon :icon="['fab', 'ubuntu']"></font-awesome-icon></kbd>/<kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd>/<kbd>SUPER</kbd>.

![Activities Overview](/images/linux-gaming/search-terminal.png)

Once the <u>Terminal</u> application is opened you can use the Command Line tool `apt` to search for it like so:

```bash
apt search gamehub
```

![Terminal](/images/linux-gaming/terminal-gamehub-search.png)

Once we find the right name for <u>GameHub</u> we can install it with `apt` as well. Please type this command into the terminal and press <kbd>Enter</kbd>:

```bash
sudo apt install gamehub
```

### Install GameHub From the Pop!_Shop

Open the <u>Pop!_Shop</u> application then either search for GameHub, or navigate to the GameHub page by clicking the <u>GameHub</u> icon on the Pop!_Shop home page. Now click the **Install** button.

![Pop!_Shop GameHub](/images/linux-gaming/pop-shop_gamehub.png)

Once installed, use the Application button to search for and run <u>GameHub</u>.

## Lutris

<u>Lutris</u> is a game launcher, written in Python, that is very similar to <u>GameHub</u>, though it also has its own community that writes installer scripts like the [WoW installer](#find-custom-install-scripts-on-the-lutris-website).

You can read more about Lutris [here](https://lutris.net/).

### Install Lutris From Command Line

Open the <u>Terminal</u> application by searching for <u>Terminal</u> after pressing the Super Key <kbd><font-awesome-icon :icon="['fab', 'ubuntu']"></font-awesome-icon></kbd>/<kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd>/<kbd>SUPER</kbd>.

![Activities Overview](/images/linux-gaming/search-terminal.png)

Once the <u>Terminal</u> application is opened you can use the Command Line tool `apt` to search for it like so:

```bash
apt search lutris
```

![Terminal](/images/linux-gaming/terminal-lutris-search.png)

Once we find the right name for <u>Lutris</u> we can install it with `apt` as well. Please type this command into the terminal and press <kbd>Enter</kbd>:

```bash
sudo apt install lutris
```

### Install Lutris From the Pop!_Shop

Open the <u>Pop!_Shop</u> application then either search for Lutris or by clicking the <u>Lutris</u> icon on the Pop!_Shop home page. Now click the **Install** button.

![Pop!_Shop Lutris](/images/linux-gaming/pop-shop_lutris.png)

## Using Steam

Once installed, use the Application button to search for and run <u>Steam</u>.

### Proton vs. Native

![Playing a Proton Game](/images/linux-gaming/playing-proton-game.png)

![Playing a native game](/images/linux-gaming/playing-native-game.png)

From a UI standpoint, there is virtually no difference between launching a Linux Native game and a game using Proton. The first picture is of a Windows game using Proton, the second is a Linux Native game.
Once you've enabled Steam Play, they both present the usual green "Play" button.

**NOTE:** If you haven't enabled Steam Play, other options like "Stream" or a greyed-out "Download" button may be present.

If you click on the "i" button in the top-right corner of the game info pane, you can see that Proton games show the message: "Runs on this computer via Steam Play" and shows the Proton version you've selected.

![Skyrim 1](/images/linux-gaming/skyrim-info-pane.png)

![Skyrim Detail](/images/linux-gaming/steamplay-detail.png)

### Changing the Proton Version for a Specific Game

It's possible to specify a certain Proton version on per game basis. You can switch between older and newer Proton versions installed on your system by the Steam client, or select custom versions of proton like ProtonGE.

To change the Proton version:

1. Click on the "Gear" icon in the top-right corner of the game info page.

2. In the drop-down menu, select "Properties."

3. Once the properties window opens, click "Compatibility" from the left menu pane.

4. Check the box to "Force the use of a specific Steam Play compatibility tool."

5. Select the desired Proton version from the drop down menu (as pictured below).

![Compatibility Menu](/images/linux-gaming/skyrim-proton-version.png)

## Using GameHub

### Using Steam on GameHub

Once you sign into <u>Steam</u> though <u>GameHub</u> your games will be displayed. Note that games will be slightly discolored if they aren't installed. Notice, in this example, that the two, top left games are installed on this system.

![Using Steam with GameHub](/images/linux-gaming/gamehub-steam.png)

## Using Lutris

### Finding Install Scripts

Some games like World of Warcraft (WoW) have installers on Lutris' [website](https://lutris.net/games) (see screenshot below).

With <u>Lutris</u> installed you can click the **Install** button to start the installer script. A pop-up window will appear asking to use Lutris as the application to run the installer.

![Lutris Install Button](/images/linux-gaming/lutris-install-button.png)

Use <u>Lutris</u> to open the installer (shown below). From there click the **Install** button to start the installation.

![Lutris Installer](/images/linux-gaming/lutris-installer.png)

Next, click the **Continue** button to start the installation of <u>Battle.net</u>

![Lutris Installer 2](/images/linux-gaming/lutris-installer2.png)

You will need to install some WINE packages during the installation of <u>Battle.net</u>.

**IMPORTANT NOTE:** Close <u>Battle.net</u> to complete the installation then reopen it to sign into your account.

Now that <u>Battle.net</u> is installed, you can select WoW from your Games and launch Battle.net with the **Play** button.

Once <u>Battle.net</u> launches you can finish the World of Warcraft installation.

**NOTE:** If you run two installer scripts for games from the same launcher application (e.g. <u>Battle.net</u>, <u>uPlay</u>, <u>EA Origin</u>, etc.) Lutris will install multiple copies of that launcher in separate folders inside the virtual `C:\` drive. This shouldn't prevent the games from being installed, just be mindful of hard drive space, and pay attention to where Lutris is installing game files. Overwatch could end up in the same general area as World of Warcraft, or in two separate folders, each with their own <u>Battle.net</u> install. This means that clicking on Overwatch, or World of Warcraft will both launch <u>Battle.net</u> but one may show Overwatch as installed, and the other may show only WoW as installed, or vice-versa.

![Lutris Installed Game](/images/linux-gaming/lutris-wow-installed.png)

### Using .exe files

In this example we'll be using the Windows build of Firefox to show the power of both Wine/Proton and Lutris. From the Game Info screen when adding a game we'll set the Name and Runner (you can read more about Runners [here](https://lutris.net/runners/)).

![Lutris Add Game Info](/images/linux-gaming/lutris-add-game-info.png)

In the Game Options tab we'll set the path to the Executable (the .exe file extensions is short for executable) and we'll choose the `firefox setup [version].exe` file downloaded from the Firefox website (it will be in your ~/Downloads folder by default). For this example, we can leave the rest of the boxes empty in the other tabs and close this window.

![Lutris Add Game Options](/images/linux-gaming/lutris-add-game-options.png)

Now click on the Firefox item in <u>Lutris</u> and then press the **Play** button. Once the install is finished be sure to unclick the checkbox at the end of the installer. Once the installer closes, right-click on the Firefox item and hit the **Configure** button. Now change the Executable path to `~/.wine/drive_c/Program Files/Mozilla Firefox/firefox.exe` using the **Browse...** button. Otherwise, every time you launch Firefox, it will run the setup wizard again, instead of the newly installed `Firefox.exe`.

> **NOTE:** You will need to hit <kbd>Ctrl</kbd>+<kbd>H</kbd> to show the hidden `.wine` folder when setting the Executable path first.

Now save and launch Firefox again with the **Play** button. After waiting for a few seconds a <u>Firefox</u> window should open.

### Open Source Games

#### Unvanquished

<u>Unvanquished</u> is a free, open-source first-person strategy game/shooter written in C++. You can read more about Unvanquished, and how to install it on their website [here](https://unvanquished.net/).

![Unvanquished One](/images/linux-gaming/unvanquished-game_play.png)

#### Veloren

<u>Veloren</u> is a multiplayer RPG which is written in Rust. You can read more about it and about installing it on their website [here](https://veloren.net/).

![Veloren](/images/linux-gaming/veloren-game_play.png)

#### 0 A.D

<u>O A.D.</u> is a free, open-source game of ancient warfare written in C++. You can read more about it and about installing it on their website [here](https://play0ad.com/download/linux/#Ubuntu).

![0ad](/images/linux-gaming/0ad-game_play.png)

#### Battle for Wesnoth

<u>Battle for Wesnoth</u> is an open source, turn-based strategy game with a high fantasy theme. You can read more about it and about installing it on their website [here](https://wiki.wesnoth.org/WesnothBinariesLinux).

![Battle for Wesnoth](/images/linux-gaming/wesnoth-game_play.png)
