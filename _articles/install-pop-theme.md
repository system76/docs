---
layout: article
title: Install the Pop!_theme
description: >
    How to install the Pop!_theme on other Linux distributions.
keywords:
  - Support
  - Applications
  - System76
image: http://support.system76.com/images/pop-icon.png
hidden: false
section: pop-ubuntu

---

![Pop\!\_gtk Theme](/images/install-pop-theme/pop-gtk-theme.png)

The Pop! icon theme, gtk theme, and fonts come by default in Pop\!\_OS, but if you are using another distribution and want to use the Pop\!\_theme there, you can install via the instructions below.

**On Ubuntu:**

```
sudo add-apt-repository ppa:system76/pop
sudo apt update
sudo apt install pop-theme
```

It's recommended to use the ```pop-theme``` metapackage, as this will pull in all components of the look. However, individual components can be installed separately, e.g.:

```
sudo apt install pop-gtk-theme
```

It's also recommended to restart the GNOME Shell after applying the theme.

Enter the Shell's command launcher with ```Alt+F2``` and then type ```r``` and hit enter.

## Installation from Git Source

1. If previous versions were installed/existed, remove them first.

```
sudo apt remove system76-pop-gtk-theme
sudo rm -rf /usr/share/themes/{Pop,Pop-Eta,Pop-Nokto,Pop-Nokto-Eta}
rm -rf ~/.local/share/themes/{Pop,Pop-Eta,Pop-Nokto,Pop-Nokto-Eta}
rm -rf ~/.themes/{Pop,Pop-Eta,Pop-Nokto,Pop-Nokto-Eta}
```

2. Check build-requirements: Currently Pop bundles neither pre-generated stylesheets nor PNG images, so users and/or contributors should generate proper CSS, PNGs, and gresources at build time.

```
* autoconf
* automake
* inkscape
* libgdk-pixbuf2.0-dev (gdk-pixbuf2-devel)  >= 2.32.2
* libglib2.0-dev (glib2-devel)              >= 2.48.0
* librsvg2-dev (librsvg2-devel)             >= 2.40.13
* libsass0 (libsass)                        >= 3.3.6
* libxml2-utils (libxml2)
* pkg-config (pkgconfig)
* sassc                                     >= 3.3.2
* parallel                                  (Optional, for faster builds)
```

You can install them using:

```
sudo apt install -y autoconf automake inkscape libgdk-pixbuf2.0-dev \
   libglib2.0-dev librsvg2-dev libsass0 libxml2-utils pkg-config sassc \
   parallel
```

> **Note:**
>
>   * In OpenSUSE, add 3 extra dependencies:
>
>     ```
>     gdk-pixbuf-devel        >= 2.32.2
>     gdk-pixbuf-loader-rsvg  >= 2.40.13
>     librsvg-devel           >= 2.40.13
>     ```
>
>   * Pop employs **SassC** wrapper of `libsass` to generate CSS stylesheets.
>   * Pop uses `inkscape` to generate installable PNG files.
>   * Pop uses `glib-compile-resources` to compile the gresource files for Gtk+ and Gnome-Shell.

3. Build and install system-wide:

```
make
sudo make install
```

If you need more information on installing from source or building the themes using other parameters, please see the [Pop\!\_gtk theme README](https://github.com/system76/pop-gtk-theme/blob/master/README.md).
