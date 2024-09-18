---
title: Using Pop Shell on other GNOME Desktops
description: Learn how to build Pop Shell from source.
keywords:
  - GNOME
  - Github

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

#### For Ubuntu-Based Distros

In order to build Pop Shell from source, we'll first need to install the build dependencies, <u>git</u> to clone the repository, and the <u>Extensions</u> app to provide a GUI for enabling/disabling extensions and changing advanced extension settings:

```bash
sudo apt install git node-typescript make gnome-shell-extension-prefs
```

**Note:** these instructions assume an Ubuntu-based distro; other distributions (see examples below) will use different package managers, and may have different package names.

Next, we'll clone the repository and enter the directory using these commands:

```bash
git clone https://github.com/pop-os/shell.git
cd shell
```

Then, check out the appropriate branch for your version of Ubuntu. Not all Ubuntu codenames are listed; if your version isn't listed, use the closest version _before_ it in alphabetical order.

```
git checkout master_focal # For Ubuntu 20.04, 20.10, 21.04, and 21.10.
git checkout master_jammy # For Ubuntu 22.04, 22.10, and 23.04.
git checkout master_mantic # For Ubuntu 23.10.
git checkout master_noble # For Ubuntu 24.04, 24.10, and later versions.
```

Finally, we'll enter the directory for <u>Pop Shell</u> (called "shell") and build the package:

```bash
make local-install
```

---

#### For Fedora-based distros

<u>Pop Shell</u> is already packaged in the Fedora repostitories:

```bash
sudo dnf install gnome-shell-extension-pop-shell
```

#### For Arch

<u>Pop Shell</u> is packaged in the AUR, but for the keyboard shortcuts to work, you will need to build it from source like we did above.

In order to build Pop Shell from source, we'll first need to install the build dependencies and <u>git</u> to clone the repository:

```bash
sudo pacman -S git typescript make
```

Next, we'll clone the repository using this command:

```bash
git clone https://github.com/pop-os/shell.git
```

Now we'll enter the directory for <u>Pop Shell</u> (called "shell") and build the package:

```bash
cd shell
make local-install
```

To remap the launcher to <kbd>Super</kbd>+<kbd>Space</kbd>:

```bash
gsettings --schemadir ~/.local/share/gnome-shell/extensions/pop-shell@system76.com/schemas set org.gnome.shell.extensions.pop-shell activate-launcher "['<Super>space']"
```

You can remap launcher to just <kbd>Super_L</kbd> (Left Super key), but it will eat the <kbd>Super</kbd> modifier and prevent other <kbd>Super</kbd> combinations from working:

```bash
gsettings --schemadir ~/.local/share/gnome-shell/extensions/pop-shell@system76.com/schemas set org.gnome.shell.extensions.pop-shell activate-launcher "['Super_L']"
```
To disable the Super key from opening the GNOME overview:

```bash
gsettings set org.gnome.mutter overlay-key ''
```

#### For Manjaro

<u>Pop Shell</u> is available in the repository:

```bash
sudo pamac install gnome-shell-extension-pop-shell
```

To learn about <u>Pop Shell</u>'s keyboard shortcuts, you can view this [support article](/articles/pop-keyboard-shortcuts/). You can also view <u>Pop Shell</u>'s source code [here](https://github.com/pop-os/shell).
