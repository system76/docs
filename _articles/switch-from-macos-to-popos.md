---
layout: article
title: Switching to Pop!\_OS From Apple
description: >
  If you are coming from Apple's operating system using Pop!\_OS for the first time, we can help make the transition smoother.
keywords:
  - System76
  - Apple
  - OS X
  - macOS
  - switch
  - PopOS
  - Pop!\_OS
image: http://support.system76.com/images/system76.png
hidden: false
section: getting-started

---

# **Switching from macOS to Pop!\_OS**
- Document Version: 1.0.0
- Date: (9-3-2020)
- Author: Nathaniel Warburton
- Contributing Editor(s): Emma Marshall, Nathan Dyer, Nick Neal

#### [Table of Contents](#Contents)
- [Navigation](#navigation)
  -  [Finding Programs and Files](#finding-programs-and-files)
    - [Application Shortcuts](#application-shortcuts)
    - [View Installed applications](#view-installed-applications)
    - [Install/Manage Software](#manage-software)
    - [A note about the Applications folder:](#application-folders)
  - [Workspaces and Window Management](#workspaces-window-management)
    - [Pop!\_Shell](#pop-shell)
  - [File Management](#file-management)
  - [Light Mode vs. Dark Mode](#light-mode-vs-dark-mode)
- [Software](#software)
  - [Web Browsing & Password Management](#web-browsing-and-password-management)
  - [Office Work](#office-work)
  - [Calls and Video Chat](#calls-and-video-chat)
  - [Take Selfies](#take-selfies)
  - [Manage Photos](#manage-photos)
  - [Email](#email)
  - [Watching Videos](#watching-videos)
  - [Listening to Music](#listening-to-music)
  - [Video Editing](#video-editing)
  - [Sound Recording](#sound-recording)
  - [Development](#development)
  - [Gaming](#gaming)
  - [Cloud Storage](#cloud-storage)
- [System Management](#system-management)
  - [Kill Programs](#kill-programs)
  - [Networking](#networking)
  - [Disk Encryption](#disk-encryption)
  - [System Backups](#system-backups)

Pop!\_OS offers corresponding workflows and applications to those available in macOS. Users will find UI elements where they expect them to be as well as some additional features.

#[Navigation](#navigation)

## [Finding Programs and Files](#finding-programs-and-files)

**macOS**
- Spotlight Search

![search](/images/pop-os-mac-screenshots/search.png)

On macOS, Spotlight Search can be launched by clicking the magnifying glass in the upper right-hand corner of the screen, or by pressing CMD+SPACE.
In Pop!\_OS, clicking on the "Activities" menu in the upper left-hand corner of the screen opens the Activities Overview. Overview has a search bar situated in the top-center of the screen which will search file names and applications.

**Pop!\_OS**
- Activities Overview

![activities-overview](/images/pop-os-screenshots/activities-pop-os.png)

The Activities Overview screen can also be launched by pressing the SUPER key. Once Overview is launched, users can begin typing to search their computer.

[Return to Table of Contents](#Contents)


## [Application Shortcuts](#application-shortcuts)

**macOS**
  - Dock

**Pop!\_OS**
  - Dock

In both macOS and Pop!\_OS, a tray of application shortcuts is provided for convenience.

In both OSes this is referred to as the "Dock." Icons show additional indicators when an app is open (a dot next to the icon) and favorite applications can be saved to the Dock for easy access.

The Dock is located on the Left side of the screen, vertically, in Pop!\_OS.
macOS' default is to place the Dock at the bottom of the screen.

The Dock can be moved in both OSes. macOS has this feature in System Preferences; Pop!\_OS accomplishes this change with a GNOME extension.

For more information on GNOME extensions, refer to the following support articles:
[Customize Pop!\_OS](https://support.system76.com/articles/customize-gnome/)
[Dock Customization](https://support.system76.com/articles/dash-to-dock/)

[Return to Table of Contents](#Contents)


## [View Installed applications](#view-installed-applications)

**macOS**
  - Launchpad


Both macOS and Pop!\_OS have a method for showing installed applications in an icon grid.

In macOS this feature is called Launchpad and is represented by the rocket-ship icon.

**Pop!\_OS**
  - Show Applications

![launchpad-show-applications](/images/pop-os-mac-screenshots/launchpad-show-applications.png)


In Pop!\_OS, the apps overview can be shown by clicking on the icon resembling a grid of dots in the lower-left of the screen at the bottom of the dock. This is the "Show Applications" icon.

  [Return to Table of Contents](#Contents)


## [Install/Manage Software](#manage-software)

**macOS**
  - App Store
  - .dmg Files



  In macOS applications are installed from two (2) main sources. The Apple App Store, and directly from developer websites.

  Applications downloaded and installed from the internet make use of .dmg files or .pkg files which run installer programs and guide users in moving Applications to the Applications folder.

**Pop!_OS**
  - Pop!\_Shop
  - .deb Files
  - flatpaks


![appstore-popshop](/images/pop-os-mac-screenshots/appstore-popshop.png)


In Pop!\_OS. The Pop!\_Shop functions as an app store. The Pop!\_Shop highlights popular applications and lets users install them with a click and password authentication.

Debian/Ubuntu based distributions like Pop!\_OS can install applications from .deb files. These files function like .dmg files on macOS; opening a downloaded .deb file launches the installer program "Eddy" and puts the installed application in the correct folder.

Since 20.04, The Pop!\_Shop has offered the ability to install flatpak versions of apps instead of, or alongside .deb files. Flatpaks are self-contained (or containerized) versions of apps that hold everything that program needs in one package. This allows users to run multiple versions of an application, and for the application to be sand-boxed from the main OS.

[Return to Table of Contents](#Contents)


### [A note about the Applications folder:](#application-folders)

  One key difference between macOS and Pop!\_OS is how and where applications are installed. in macOS, with a few exceptions, all installed applications go into a dedicated folder located under the /Applications folder. Applications are self-contained items and can be moved or deleted by acting on the file for the application itself.

  In Pop!\_OS, and other Ubuntu-based distributions, there are certain parts of applications that are referenced by other applications and are installed separately. These smaller applications and parts of applications are called libraries or dependencies. Due to this structure of software installation, and depending on how a program is installed, it may be stored in one of a few locations.

  ~/.local/share/applications

  /usr/share/applications

  /usr/bin

  /opt/

The placement of applications in Pop!\_OS is handled transparently by the operating system. Users don't need to memorize these locations or, in most cases, modify them in any way. They are provided here for reference purposes.

[Return to Table of Contents](#Contents)


## [Workspaces and Window Management](#workspaces-window-management)

Both macOS and Pop!\_OS use workspaces to organize open application windows

![workspaces-overivew-activities-overview](/images/pop-os-mac-screenshots/workspaces-activites-overview.png)

macOS uses multi-touch gestures, or CTRL+[up arrow] or [down arrow], to launch "Mission Control" and CTRL+[left arrow] or [right arrow] are used to navigate between workspaces.

In Pop!\_OS users press the SUPER key to enter "Overview" and show all workspaces. They can also use CTRL+SUPER+[up arrow] or [down arrow] to navigate between workspaces.


[Return to Table of Contents](#Contents)


### [Pop!\_Shell](#pop-shell)

Starting in version 20.04, Pop!\_OS now includes a tiling window-manager as a GNOME extension. The window manager is called pop-shell, and allows for window organization and keyboard navigation among windows and applications.

More info about Pop!\_Shell here:

[Pop!\_OS 20.04 Release Notes](https://support.system76.com/articles/Pop!_OS-20.04-LTS-Release-Notes/)

[Pop-Shell Keyboard Shortcuts](https://support.system76.com/articles/pop-keyboard-shortcuts/)


[Return to Table of Contents](#Contents)


## [File Management](#file-management)

The file-systems layouts in macOS and Pop!\_OS both feature location shortcuts on the left side, tabbed browsing, list vs. icon views, and various sorting options.

**Apple**
     - Finder


 In macOS, Finder displays files and directories (folders), and is represented by the two-tone, blue face icon in the dock.


**Pop!\_OS**
     - Files


 In Pop!\_OS, the Files application serves the same purpose. It is represented by a gray icon that looks like a tabbed folder from a filing cabinet.

![files-finder](/images/pop-os-mac-screenshots/files-edited.png)

 [Return to Table of Contents](#Contents)


## [Light Mode vs. Dark Mode](#light-mode-vs-dark-mode)

As of macOS 10.14 (Mojave), users have the option of using a default "dark mode" for the look and feel of their OS.

Pop!\_OS has had a dark mode since 19.10. There were dark mode options available previously, but the official "Dark Mode" of Pop!\_OS was added in Pop!\_OS 19.10.

Dark Mode can be enabled by visiting

Settings>Appearance>Appearance(Tab)>Dark (Radio button)

![appearance-settings](/images/pop-os-screenshots/appearance-settings.png)

[Return to Table of Contents](#Contents)

# [Software](#software)

## [Web Browsing & Password Management](#web-browsing-and-password-management)

**macOS**
  - Safari (Default)

**Pop\_OS**
  - Firefox (Default)

  The default web browser in macOS is Safari. Pop!\_OS features the Firefox browser.

  Both Safari and Firefox offer privacy features like "do not track" requests, other blockers, and customizeable search-engine defaults.

  Users accustomed to using Apple Pay or iCloud Keychain for payments and password management will require workflow adjustments, as these are Apple proprietary   services.

  There are cross-platform password managers available, which offer the option to save and auto-fill payment methods.

  Most modern browsers offer the ability to create an account that will save and sync user logins.

Examples include:

- [Bitwarden](https://bitwarden.com/)
- [1Password](https://1password.com/) (Terminal app or Browser Extension)
- [LastPass](https://www.lastpass.com/)

![bitwarden](/images/pop-os-screenshots/bitwarden.png)

**Other Browser Options**
  - [Chrome](https://www.google.com/chrome/)
  - [Chromium](https://www.chromium.org/) (available in the Pop!\_Shop)
  - [Brave](https://brave.com/)

For users accustomed to Chrome, Chrome is available for Linux, as well as Chrome-based alternative options like Chromium and Brave.

[Return to Table of Contents](#Contents)


## [Office Work](#office-work)
**macOS**
  - Pages/Numbers/Keynote (iWork)


The software suite formerly known as "iWork" contains Apple's equivalent to Microsoft Office. It contains Pages (word processing), Numbers (spreadsheets) and Keynote (presentations). These apps are all capable of reading and saving files in outside formats like those used in Microsoft Office, but by default, they save files in formats specific to the iWorks suite: .pages, .numbers, and .keynote respectively.


**Pop!\_OS**
  - [Writer/Calc/Impress (LibreOffice)](https://www.libreoffice.org/)

![libreoffice-icons](/images/pop-os-screenshots/libreoffice-icons.png)

![libreoffice-windows-open](/images/pop-os-screenshots/libreoffice-windows-open.png)

  Pop!\_OS comes with the open-source office suite LibreOffice installed by default. LibreOffice can open Microsoft Office files, and export to Office formats (.docx, etc.). LibreOffice cannot open iWork formatted projects. For example, documents ending in .pages will need saved in a different format before LibreOffice will open them. LibreOffice saves documents in the .odt format by default.

**Other**
- [iCloud.com](https://www.icloud.com/)

If exporting iWork files is not an option, users can also visit iCloud.com in a web browser and use the web-based versions of Pages, Numbers, and Keynote. However, an Apple ID is required (free).

- [Office365 Online](https://www.office.com/)

Microsoft offers in-browser versions of the Microsoft Office suite as part of Office365. Those with subscriptions can access Word, Excel, Powerpoint, Teams, Outlook and others. In most cases, there's no need to install Windows to access Microsoft Office apps.

[Return to Table of Contents](#Contents)

## [Calls and Video Chat](#calls-and-video-chat)

Pop!\_OS does not offer a default messaging app. The preference is that users choose their own and install only what they need/want.
However, many popular 3rd-party applications have Linux versions available.

Recommendations provided here are suggestions for open-source alternatives.

**macOS**
     - FaceTime/iMessage


For video and instant messaging, macOS provides FaceTime and iMessage. Both of these applications are Apple exclusive, and require an Apple ID to use most of the features.

**Pop!\_OS**
Chat
  - [Element](https://element.io/) (Formerly Riot.im)
  - [Mattermost](https://mattermost.com/) (also available in the Pop!\_Shop)
  - [Slack](https://slack.com/) (also available in the Pop!\_Shop)

Element (formerly Riot.im) is an open-source instant messaging client which makes use of the matrix network. The client offers end-to-end encryption, multiple chat rooms and communities, and can be used on the decentralized matrix network or self-hosted. It offers integrations with other applications and platforms like IRC, Slack, and Jitsi.

Linux versions of Slack and its open-source alternative Mattermost are available in Pop!\_Shop.

![element](/images/pop-os-screenshots/element.png)

Video/Calls
  - [Jitsi](https://jitsi.org/) (browser-based)
  - [Discord](https://discord.com/new) (also available in the Pop!\_Shop)
  - [Skype](https://www.skype.com/en/) (also available in the Pop!\_Shop)
  - [Zoom](https://zoom.us/) (also available in the Pop!\_Shop)

![jitsi](/images/pop-os-screenshots/jitsi.png)



Jitsi is a multi-user video chat program which runs in a browser. It allows password protected rooms, phone-dial-in and IM-ing alongside video-chat. All calls are encrypted by default using HTTPS, with additional end-to-end encryption options also offered. The System76 team makes daily use of the Jitsi platform.

Linux clients are available for popular apps like Discord, Skype and Zoom.

## [Take Selfies](#take-selfies)

**macOS**
- Photobooth (default)



**Pop!\_OS**
- [Cheese](https://wiki.gnome.org/Apps/Cheese) (available in the Pop!\_Shop)

There is a program available in the Pop!\_Shop called "Cheese." Cheese allows users to take webcam selfies, and apply image filters.

![cheese](/images/pop-os-screenshots/cheese.png)

[Return to Table of Contents](#Contents)

## [Manage Photos](#manage-photos)

**macOS**
- Photos (default)


**Pop!\_OS**
- [Shotwell](https://wiki.gnome.org/Apps/Shotwell) (available in the Pop!\_Shop)

Pop!\_OS comes with a photo viewing application called Image Viewer which previews pictures that are opened from the Files application, similar to the Apple application "Preview."

There are several applications available in the Pop!\_Shop for more in-depth photo management. Shotwell is highlighted below.
Shotwell organizes photos by albums and event dates, and allows for importing, viewing, and sorting photographs.

![shotwell](/images/pop-os-screenshots/shotwell.png)

[Return to Table of Contents](#Contents)

## [Email](#email)

**macOS**
  - Apple Mail (default)


**Pop!\_OS**
  - [Geary](https://wiki.gnome.org/Apps/Geary) (default)
  - [Thunderbird](https://www.thunderbird.net/en-US/) (available in the Pop!\_Shop)

Pop!\_OS offers the GNOME "Geary" email client by default. Geary makes use of a column view, and supports adding a variety of email accounts.

![geary](/images/pop-os-screenshots/geary.png)


For users more accustomed to Microsoft Outlook, there's an alternative, open-source program by Mozilla called Thunderbird which supports calendar integration and similar organization features to Outlook.


![thunderbird](/images/pop-os-screenshots/thunderbird.png)

**NOTE:** Regardless of platform or client, many email accounts (e.g. Google) have implemented a security policy where a single-use password must be created for each email app users want to sync with their account. These passwords have to be created from the email provider's account website.

**Other Options**
  - [Outlook Web](https://outlook.live.com/owa/)
  - Webmail (in General)

Microsoft also offers a web-based version of Outlook mail which can be accessed from a web browser.

In addition, most modern Email Service Providers (ESPs) have an online version of their inbox which can be accessed by signing into the ESP account in a browser.

[Return to Table of Contents](#Contents)

## [Watching Videos](#watching-videos)

**macOS**
  - Quicktime



**Pop!\_OS**
  - [GNOME Videos](https://wiki.gnome.org/Apps/Videos) (default)
  - [VLC](https://www.videolan.org/vlc/index.html) (available in the Pop!\_Shop)

![gnome-video](/images/pop-os-screenshots/gnome-videos.png)

The Pop!\_OS default video player is GNOME Videos. It can play local media or fetch videos from RSS feeds.

Due to copyright reasons, not all video formats are supported out of the box, but many codecs can be installed as needed. Linux defaults to not including non-free software, and users can opt-in if they need additional software support.

Additional codecs can be added with the following commands:

    sudo add-apt-repository multiverse
    sudo apt install ubuntu-restricted-extras

We also have a help article for installing codecs [here](https://support.system76.com/articles/codecs/)

Another popular alternative is VLC Media Player. This software is available in the Pop!\_Shop, and offers many customizable features.

[Return to Table of Contents](#Contents)

## [Listening to Music](#listening-to-music)

**macOS**
  - Apple Music (formerly iTunes)


**Pop!_OS**
  - [Lollypop](https://wiki.gnome.org/Apps/Lollypop) (available in the Pop!\_Shop)
  - [Spotify](https://www.spotify.com/us/) (available in the Pop!\_Shop)

There are many music player apps available for Linux. One polished and versatile example is Lollypop. Lollypop has a similar layout to iTunes and can play music stored local to the computer or stream internet radio channels.

![Lollypop](/images/pop-os-screenshots/lollypop.png)

There is also a Linux client for the popular streaming service Spotify, available in the Pop!\_Shop.

![Spotify](/images/pop-os-screenshots/spotify.png)

[Return to Table of Contents](#Contents)

## [Video Editing](#video-editing)

**macOS**
- iMovie
- Final Cut

**Pop!_OS**
- [Lightworks](https://www.lwks.com/)
- [DaVinci Resolve/DaVinci Resolve Studio](https://www.blackmagicdesign.com/products/davinciresolve/)
- [Kden Live](https://kdenlive.org/en/)  (also available in the Pop!\Shop)

Pop!\_OS supports two (2) professional video editing suites. Lightworks and DaVinci Resolve. We have help articles on how to install both, which are listed below:

[Lightworks](https://support.system76.com/articles/install-lightworks/)

[DaVinci Resolve](https://support.system76.com/articles/install-davinci-resolve/)

There is also an open-source video editing program called Kden Live which offers a comparable interface and feature-set to iMovie, and is available in the Pop!\_Shop.

![kden-live](/images/pop-os-screenshots/kden-live.png)

[Return to Table of Contents](#Contents)

## [Sound Recording](#sound-recording)

**macOS**
  - Garageband
  - Logic Pro


**Pop!\_OS**
  - [LMMS](https://lmms.io/) (also available in the Pop!\_Shop)
  - [Audacity](https://www.audacityteam.org/) (also available in the Pop!\_Shop)
  - [Ardour](https://ardour.org/) (also available in the Pop!\_Shop)

There are several applications that can be used for music editing and sound recording.

![LMMS](/images/pop-os-screenshots/lmms.png)

LMMS (Let's Make Music Software) is an open-source music mixer which can record and loop inputs from midi-keyboards.

![audacity](/images/pop-os-screenshots/audacity.png)

Audacity can be used for recording and editing voice tracks for things like podcasts and memos.

![ardour](/images/pop-os-screenshots/ardour.png)

Ardour is for more advanced audo engineering. It contains a multi-channel track and midi mixing program.

LMMS, Ardour and Audacity are all available in the Pop!\_Shop.

[Return to Table of Contents](#Contents)

## [Development](#development)

**macOS**
  - Xcode (avaiable in the App Store)


**Pop!\_OS**
  - Text Editer (default)
  - [Atom](https://atom.io/) (available in the Pop!\_Shop)
  - [Microsoft VSCode](https://code.visualstudio.com/) (available in the Pop!\_Shop)

Pop!\_OS does not have a proprietary coding language, but supports a variety of languages and tools for development. The built in program Text Editor supports markdown formatting, and other text editor modelines.

Common development tools like Atom and Microsoft Visual Studio Code are also available in the Pop!\_Shop.

![text-editor](/images/pop-os-screenshots/text-editor.png)

![atom](/images/pop-os-screenshots/atom.png)

![vscode](/images/pop-os-screenshots/vs-studio.png)

[Return to Table of Contents](#Contents)

## [Gaming](#gaming)

**macOS**
     - App Store/Arcade
     - Steam


**Pop!_OS**
  - Pop!\_Shop
  - [Steam](https://store.steampowered.com/)
  - [Lutris](https://lutris.net/) (also available in the Pop!\_Shop)

There are many ways to game on Linux.

Developers offer a variety of game titles through the Pop!\_Shop, and there are large numbers of Linux native games available through Steam.

Valve, the company behind Steam, now actively contributes improvements to the WINE project and have forked their own version of it, called Proton, for even greater compatibility for Windows games on Linux.

Lutris is a community created, open-source program which helps users organize their games library and offers turnkey installer scripts for a variety of popular games, emulators and compatibility software.

With these ongoing improvements, there are many more games available on Linux than on macOS.

The website [ProtonDB (Proton Database)](https://www.protondb.com/) is an unofficial repository of user-tested games with notes about how well they work on Linux.

![popshop-games](/images/pop-os-screenshots/popshop-games.png)

![steam](/images/pop-os-screenshots/steam.png)

![lutris](/images/pop-os-screenshots/lutris.png)

[Return to Table of Contents](#Contents)

## [Cloud Storage](#cloud-storage)

**macOS**
- iCloud


**Pop!_OS**

- [iCloud.com](https://www.icloud.com/) (browser access)

There are several cloud options that can be used for backups and file syncing on Linux. Additionally, many of iCloud's files and programs can be accessed through a web browser on Pop!\_OS.

**Additional Options**

  - [Nextcloud](https://nextcloud.com/) (desktop and web clients, also available in the Pop!\_Shop)
  - [SpiderOak](https://spideroak.com/) (desktop and web client)
  - [Dropbox](https://www.dropbox.com) (desktop and web client, also avilable in the Pop!\_Shop)
  - [Google Drive](https://drive.google.com/) (Files integration and web client)

[Return to Table of Contents](#Contents)

# [System Management](#system-management)

## [Kill Programs](#kill-programs)

**macOS**
  - Force Quit (default)
  - Activity Monitor (default)

On macOS there are two main ways to kill unresponsive programs. The force-quit menu and the Activity Monitor application.

![force-quit-activity-monitor](/images/macOS-Screenshots/force-quit-activity-monitor.png)

Force-quit is launched by clicking on the Apple menu in the upper-left-hand corner of the screen, or by pressing Opt+Cmd+Esc, selecting the application, and then "force-quit."

Users can also get an overview of running processes and stop or kill them from the Activity Monitor.

It is also possible to kill processes in the Terminal if process ID is known.

**Pop!\_OS**
  - System Monitor (default)
  - Terminal (default)

![system-monitor-terminal](/images/pop-os-screenshots/system-monitor-terminal.png)

Pop!\_OS also has options for killing misbehaving processes. System Monitor (equivalent to Activity Monitor), displays running processes and allows users to stop or kill them.

While Pop!\_OS does not have a force-quit menu, when applications freeze, the OS will show a pop-up window asking if users want to wait on the program or force-quit it.

The same Terminal commands available in macOS can also be used in Pop!\_OS.

Running the command:

    top

will show a similar output to what's displayed in the System Monitor.

Once the offending process' Process ID (PID) is known (either from System Monitor or the Terminal) the process can be killed with the terminal command:

    sudo kill -pid ####

[Return to Table of Contents](#Contents)

## [Networking](#networking)

**macOS**
- System Preferences

**Pop!\_OS**
- Settings

![network-setting-pop-mac](/images/pop-os-mac-screenshots/network-settings-pop-mac.png)


macOS and Pop!\_OS manage network menus and settings almost identically. Both have a drop-down menu in the upper right corner of the screen to quickly connect to an available network.

Both have dedicated areas in System Preferences (macOS) and Settings (Pop!\_OS) to edit saved connections, IP settings, and to configure things like proxy settings or Virtual Private Networks (VPNs).

[Return to Table of Contents](#Contents)

## [Disk Encryption](#disk-encryption)


**macOS**
- Filevault

**Pop!\_OS**

- LUKS (during Install)

![encryption-pop](/images/install-pop/5_encrypt_notice-cropped.png)

On Pop!\_OS, encryption is offered during initial setup, or a reinstall. The OS partition is encrypted using the LUKS disk layout. This tool adds a decryption screen so that every time the computer boots, it requires a decryption password before moving to the login screen. With an encrypted drive, if hardware is stolen, the only way to remove the encryption is to erase the disk.

**NOTE:** Because of the way encryption is implemented on Pop!\_OS, and the delicate work involved in encrypting or decrypting the drive, encryption is only offered during intial set up. If users choose not to use encryption, and want to add it later, it will require a full erase and reinstall. Create backups accordingly.

[Return to Table of Contents](#Contents)

## [System Backups](#system-backups)

**macOS**
- Time Machine


**Pop!\_OS**
- [Timeshift](https://github.com/teejee2008/timeshift) (available in the Pop!\_Shop)
- [Déjà Dup Backups](https://wiki.gnome.org/Apps/DejaDup) (available in the Pop!\_Shop)

![pop-backups](/images/pop-os-screenshots/pop-backups.png)

In the interest of user-choice, Pop!\_OS does not have a built in backup utility, but several applications are available to choose from in the Pop!\_Shop. The two (2) featured here are Timeshift (pictured left) and Déjà Dup Backups (pictured right).

Timeshift is designed to capture snapshots and restore points of the system at a given time and is only compatible with backing up a Linux system to another Linux formatted drive.
The snapshot feature is comparable to snapshots offered by virtual machine managers.

Déjà Dup Backups is closer in functionality to Time Machine. It offers local hardware backups, or backups to network locations. Folders and files can be added to the backup list manually, and it backs up the Home folder by default. Automatic backups can also be run on a schedule.

To read more about methods of backing up your system visit our help article: [Backup Files](https://support.system76.com/articles/backup-files/)

[Return to Table of Contents](#Contents)

<!-- # [What if I have an iPhone?](#iphone)

For more details about how to manage files and backups between iPhone and Pop!\_OS, visit our help article: [Use an iPhone with Pop!\_OS](https://support.system76.com/articles/use-iphone-with-linux) -->
