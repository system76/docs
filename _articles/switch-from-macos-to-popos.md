---
layout: article
title: Switching to Pop!\_OS From Apple
description: >
  If you are coming from Apple's operating system and just using Pop!\_OS for the first time, we can help make the transition a little smoother.
keywords:
  - System76
  - Apple
  - OS X
  - macOS
  - switch
  - PopOS
  - Pop!\_OS
image: http://support.system76.com/images/system76.png
hidden: true
section: getting-started

---

# Switching from macOS to Pop!\_OS

It can be difficult to change work habits or the Desktop Environment you are used to. macOS users, accustomed to a refined and consistent work-flow may be hesitant to switch from macOS to Linux. Fortunately, Pop!\_OS offers many convenient and similar workflows and applications to those available in macOS. Users will find many things where they expect them to be, as well as few pleasant surprises.

## Finding Programs and Files

**macOS**
- Spotlight Search

![spotlight-search](/images/macOS-Screenshots/spolight-search.png)

On macOS, Spotlight Search can be launched by clicking the magnifying glass in the upper right-hand corner of the screen, or by pressing CMD+SPACE.

**Pop!\_OS**
- Activities Overview

![activities-overview](/images/pop-os-screenshots/activities-pop-os.png)

![activities-search](/images/pop-os-screenshots/activities-search-pop-os.png)



In Pop!\_OS, clicking on the "Activities" menu in the upper left-hand corner of the screen opens the Activities Overview. Overview has a search bar situated in the top-center of the screen which will search file names and applications. The Activities Overview screen can also be launched by pressing the SUPER key. Once Overview is launched users can simply begin typing to search their computer.

## Application Shortcuts

**macOS**
  - Dock

![mac-os-dock](/images/macOS-Screenshots/dock.png)

![dock-icon-close](/images/macOS-Screenshots/iwork-dock-icons.png)

**Pop!\_OS**
  - Dock

![dock-pop-os](/images/pop-os-screenshots/dock-pop-os.png)

In both macOS and Pop!\_OS, a tray of application shortcuts is provided for convenience. In both OSes this is referred to as the "Dock." Icons show additional indicators when an app is open (a dot next to the icon) and favorite applications can be saved to the Dock for easy-access. The Dock is located on the Left side of the screen, vertically, in Pop!\_OS. macOS' default is to place the Dock at the bottom of the screen. The Dock can be moved in both OSes. macOS has this feature in System Preferences; Pop!\_OS accomplishes this change with a GNOME extension.

## View Installed applications

**macOS**
  - Launchpad

![launchpad](/images/macOS-Screenshots/launchpad.png)

![launchpad open](/images/macOS-Screenshots/launchpad-open.png)

Both macOS and Pop!\_OS have a quick method for showing you your installed applications in an icon grid. In macOS this feature is called Launchpad and is represented by the rocket-ship icon.

**Pop!\_OS**
  - Show Applications

![show-applications](/images/pop-os-screenshots/show-applications.png)

  In Pop!\_OS, you can show this same overview by clicking on the icon resembling a grid of dots in the lower-left of the screen at the bottom of the dock. This is the "Show Applications" icon.

## Install/Manage Software

**macOS**
  - App Store
  - .dmg Files

![macos-appstore](/images/macOS-Screenshots/appstore.png)

![opening-dmg](/images/macOS-Screenshots/opening-dmg.png)

![application-install-window](/images/macOS-Screenshots/application-install-window.png)

  In macOS you can install applications from two (2) main sources. The Apple App Store, and directly from developer websites. Applications downloaded and installed from the internet make use of .dmg files or .pkg files which run installer programs and guide you in moving your Applications to the Applications folder.

**Pop!_OS**
  - Pop!\_Shop
  - .deb Files
  - flatpaks

![pop-shop](/images/pop-os-screenshots/pop-shop.png)

![eddy](/images/pop-os-screenshots/eddy.png)

![flatpak](/images/pop-os-screenshots/flatpak-example.png)

Applications are managed similarly in Pop!\_OS. The Pop!\_Shop functions as an app store. The Pop!\_Shop highlights popular applications and lets you install them with just a click and your password.

Debian/Ubuntu based distributions like Pop!\_OS can also install applications from .deb files. These files function like .dmg files on macOS; opening a downloaded .deb file launches the installer program "Eddy" and puts the installed application in the correct folder.

Since 20.04, The Pop!\_Shop has also offered the ability to install flatpak versions of apps instead of, or alongside .deb files. Flatpaks are self-contained (or containerized) versions of apps that hold everything that program needs in one package. This allows you to run multiple versions of an application, and for the application to be reasonably separated from the rest of the OS.


### A note about the Applications folder:

  One key difference between macOS and Pop!\_OS is how and where applications are installed. in macOS, with a few exceptions, all installed applications go into a dedicated folder located under /path/to/applications folder. Applications are self-contained items and can be moved or deleted by acting on the file for the application itself.

  In Pop!\_OS, and other Ubuntu-based distributions, there are certain parts of applications that are used by enough other applications that they are installed separately and referenced as needed. These smaller applications and parts of applications are called libraries or dependencies. Due to this structure of software installation, and depending on how a program is installed, it may be stored in one of a few locations.

  ~/.local/share/applications

  /usr/share/applications

  /usr/bin

  /opt/

<!--SAY MORE ABOUT THESE-->


## Workspaces and Window Management

Both macOS and Pop!\_OS use work-spaces to organize open applications' windows

![workspaces-overview](/images/macOS-Screenshots/workspaces-overview.png)

![workspaces](/images/macOS-Screenshots/workspaces.png)

In macOS you use multi-touch gestures, or hold down CTRL+up arrow or down arrow, to launch "Mission Control" and CTRL+left arrow or right arrow use to navigate work-spaces.

In Pop!\_OS you press the SUPER key to enter "overview" and show all "work-spaces." You can also use CTRL+SUPER+up arrow or down arrow to navigate work-spaces.

![workspaces-pop](/images/pop-os-screenshots/workspaces-pop-os.png)

### Pop!\_Shell

Starting in version 20.04, Pop!\_OS now includes a tiling window-manager as a GNOME extension. The window manager is called Pop!\_Shell, and allows for even easier window organization and keyboard navigation among windows and applications. You can read more about Pop!\_Shell here: [LINK]

## File Management

The file-systems in macOS and Pop!\_OS are laid out in a very similar fashion.

**Apple**
     Finder

![finder](/images/macOS-Screenshots/finder.png)

 In macOS the application which displays files and directories (folders) is called Finder, and is represented by the two-tone, blue face icon in the dock.

**Pop!\_OS**
     Files

![files](/images/pop-os-screenshots/files.png)

 In Pop!\_OS, the Files application serves the same purpose. It is represented by a gray and teal icon that looks like a tabbed folder from a filing cabinet.


## Light Mode vs. Dark Mode

As of macOS 10.14 (Mojave) users have the option of using a default "dark mode"
for the look and feel of their OS.

Pop!\_OS has had a dark mode since 19.10. There were dark mode options available before 19.10,
but the official "Dark Mode" of Pop!\_OS was added in Pop!\_OS 19.10.

Dark Mode can be enabled by visiting

Settings>Appearance>Appearance(Tab)


## Web Browsing & Password Management

**macOS**
  - Safari (Default)

**Pop\_OS**
  - Firefox (Default)

  The web browsing experience will be very similar on either macOS or Firefox. Both browsers offer privacy features like "do not track" requests, other blockers, and customize-able search-engine defaults. If you are accustomed to using Apple Pay or iCloud Keychain for your payments and password management, your workflow will require some changes as these are Apple proprietary services.

  However there are several reliable, cross-platform password managers available, and they also offer the option to save and auto-fill payment methods. Most modern browsers also offer the ability to create an account that will save and sync you logins.

Examples include:

- Bitwarden
- 1Password (Terminal app or Browser Extension)
- LastPass

![bitwarden](/images/pop-os-screenshots/bitwarden.png)

**Other Browser Options**
  - Chrome
  - Chromium
  - Brave

If you're used to using Chrome, don't worry! There are Chrome versions available for Linux too, as well as Chrome-based alternative options like Chromium and Brave.

## Office Work
**macOS**
  - Pages/Numbers/Keynote (iWork)

![dock-icon-close](/images/macOS-Screenshots/iwork-dock-icons.png)

![iwork](/images/macOS-Screenshots/pages-numbers-keynote-windows.png)

The software suite formerly known as "iWork" contains Apple's answers to Microsoft Office. It contains Pages (word processing), Numbers (spreadsheets) and Keynote (presentations). These apps are all capable of reading and saving files in outside formats like those used in Microsoft Office, but by default, they save files in formats specific to the iWorks suite: .pages, .numbers, .keynote respectively.

[CHECK ON THESE FORMATS]

**Pop!\_OS**
  - Writer/Calc/Impress (LibreOffice)

![libreoffice-icons](/images/pop-os-screenshots/libreoffice-icons.png)

![libreoffice-windows-open](/images/pop-os-screenshots/libreoffice-windows-open.png)

  Pop!\_OS comes with the open-source office suite LibreOffice by default. LibreOffice can open Microsoft Office files, and export to Office formats (.docx, etc.). LibreOffice cannot open iWork formatted projects. For example, documents ending in .pages will need saved in a different format before LibreOffice will open them. LibreOffice saves documents in the .odt format by default.

**Other**
iCloud.com
If exporting your iWork files is not an option, you can also visit iCloud.com in Firefox and use the web-based versions of Pages Numbers and Keynote. However an Apple ID is required (free).

Office365 Online
Microsoft now also offers in-browser versions of the Microsoft Office suite as part of Office365. Those with subscriptions can access Word, Excel, Powerpoint, Teams, Outlook and more. In most cases, there's no need to install Windows.

## Calls and Video Chats

**macOS**
     - FaceTime/iMessage

![Facetime-iMessage](/images/macOS-Screenshots/facetime-imessage.png)

For video and and instant messaging, macOS provides FaceTime and iMessage. Both of these applications are Apple exclusive, and require an Apple ID to use most of the features.

**Pop!\_OS**
Chat
  - Element (Formerly Riot.im)
  - Mattermost
  - Slack

Element (formerly Riot.im) is an open-source instant messaging client which makes use of the matrix network. The client offers end-to-end encryption, multiple chat rooms and communities, and be used on the decentralized matrix network or self-hosted. It also offers many integrations with other applications and platforms like IRC, Slack, and Jitsi.

There are also Linux versions available of the open-source Slack alternative Mattermost, and Slack itself.

![element](/images/pop-os-screenshots/element.png)

Video/Calls
  - Jitsi
  - Discord
  - Skype
  - Zoom

![jitsi](/images/pop-os-screenshots/jitsi.png)

Pop!\_OS does not offer a default messaging app as we prefer users choose whichever ones they would like to use and install only what they need/want. However, many popular 3rd-party applications have Linux versions available, as well as some cool lesser-known solutions.

Jitsi is a multi-user video chat program which runs in a browser. Similar in functionality to Zoom, it allows password protected rooms, phone-dial-in and IM-ing alongside video-chat. All calls are encrypted by default using HTTPS. The System76 team makes daily use of this platform.

There are also Linux clients for popular apps like Discord, Skype and Zoom.

## Take Selfies

**macOS**
- Photobooth

macOS has an included application called Photobooth which allows you and your friends to take webcam photos and videos from your computer's webcam. It also offers the ability to apply various filters to the images and videos.

![photobooth](/images/macOS-Screenshots/photobooth.png)

**Pop!\_OS**
- Cheese

While not included by default, there is a very similar program available in the Pop!\_Shop called "Cheese." Cheese also allows you to take webcam selfies, and apply fun filters.

![cheese](/images/pop-os-screenshots/cheese.png)

## Email

**macOS**
  - Apple Mail (default)

macOS offers a built in mail application called Apple Mail which allows you to add a variety of email accounts and presents them in a clean, organized column view.

![apple-mail](/images/macOS-Screenshots/apple-mail.png)

**Pop!\_OS**
  - Geary (default)
  - Thunderbird

Pop!\_OS offers a similar email client by default. Geary is a GNOME email client with a very similar layout to Apple Mail making use of a column view as well. It too, has the option to add a variety of email accounts.

![geary](/images/pop-os-screenshots/geary.png)


For those users more accustomed to the customize-able and feature-packed interface of Microsoft Outlook, there's an excellent, open-source program by Mozilla called Thunderbird.


![thunderbird](/images/pop-os-screenshots/thunderbird.png)

**NOTE:** Regardless of platform or client, many email accounts (e.g. Google) have implemented a security policy where a single-use password has to be created for each email app you want to sync with your account. These passwords have to created from your email provider's account website.

**Other Options**
  - Outlook Web
  - Webmail (in General)

Microsoft also offers a web-based version of Outlook mail which can be accessed from a web browser.

In addition, most modern Email Service Providers (ESPs) have an online version of their inbox which can be accessed by signing into your ESP account in a browser.

## Watching Videos

**macOS**
  - Quicktime

![quicktime](/images/macOS-Screenshots/quicktime.png)

Apple's proprietary Quicktime platform also has a built in video player that is packed with macOS. It offers a standard video player that can present video content in a variety of formats.

**Pop!\_OS**
  - GNOME Videos
  - VLC

![gnome-video](/images/pop-os-screenshots/gnome-videos.png)

GNOME Videos offers a very similar video player to Quicktime. It can play local media or fetch videos from RSS feeds. Due to copyright reasons not all video formats are supported out of the box, but many codecs can be installed as needed. Linux defaults to not including non-free software, and users can opt-in if they need additional software support.

You can read more about video codecs here: [LINK]

Another popular alternative is VLC Media Player. This software is available in the Pop!\_Shop, and offers many customizable features.

## Listing to Music

**macOS**
  - Apple Music (formerly iTunes)

![apple-music](/images/macOS-Screenshots/apple-music.png)

In recent releases, Apple has merged the functionality of their iTunes program with their music streaming platform Apple Music. The app is now known simply as "Music" or "Apple Music." The program can play your local iTunes library or stream music from the streaming service.

**Pop!_OS**
  - Clementine
  - Spotify

There are many music player apps available for Linux. One of the older/more popular one's is Clementine. Clementine has a similar layout to iTunes and can also play music stored locally on your computer or stream internet radio channels.

![clementine](/images/pop-os-screenshots/clementine.png)

There is also a Linux client for the popular streaming service Spotify, available in the Pop!\_Shop.

## Video Editing

**macOS**
- iMovie
- Final Cut

Apple offers two main solutions for video editing. They have a free program called iMovie which is available to all Apple hardware customers. They also offer a professional grade (paid) editing client called Final Cut.

![imovie](/images/macOS-Screenshots/imovie.png)

**Pop!_OS**
- Lightworks
- DaVinci Resolve/DaVinci Resolve Studio
- Kden Live

Pop!\_OS supports two popular, professional video editing suites. Lightworks and DaVinci Resolve. We have help articles on how to install both which are listed below;

Lightworks
DaVinci Resolve

There is also a popular open-source video editing program called Kden Live which offers a similar interface and feature-set to iMovie, and is available in the Pop!\_Shop.

![kden-live](/images/pop-os-screenshots/kden-live.png)

## Sound Recording

**macOS**
  - Garageband
  - Logic Pro

macOS offers a free music composition and editing program called Garageband. It allows for multi-track/voice editing and synthesized instruments.

![garageband](/images/macOS-Screenshots/garageband.png)

**Pop!\_OS**
  - LMMS
  - Audacity
  - Ardour

Linux does not have a direct, 1:1 equivalent to Garageband, however there are several useful applications that can be used for similar purposes.

![LMMS](/images/pop-os-screenshots/lmms.png)

The closest match would likely be LMMS (Let's Make Music Software). It's an open-source music mixer which can record and loop inputs from midi-keyboards.

![audacity](/images/pop-os-screenshots/audacity.png)

Audacity is another popular application, mainly used for recording and editing voice tracks for things like podcasts and memos. It is a tried and true recording solution.

![ardour](/images/pop-os-screenshots/ardour.png)

Similar to LMMS, but more targeted to audio engineering professionals rather than hobbyists, is Ardour. A multi-channel track and midi mixing program.

LMMS, Ardour and Audacity are all available in the Pop!\_Shop.

## Gaming

**macOS**
     - App Store/Arcade
     - Steam

![appstore-arcade](/images/macOS-Screenshots/arcade.png)

**Pop!_OS**
     - Pop!\_Shop
     - Steam/Lutris

![popshop-games](/images/pop-os-screenshots/popshop-games.png)

![steam](/images/pop-os-screenshots/steam.png)

![lutris](/images/pop-os-screenshots/lutris.png)


## Cloud Storage

**macOS**
- iCloud

Apple offers cloud storage and software services through their iCloud platform. They sync desktop files, documents, and offer web versions of Pages, Numbers, Keynote, Notes, etc.

**Pop!_OS**

  -iCloud.com (browser access)

While there's no direct equivalent offered by System76, there are several cloud options that can be used for alternative backups and file syncing. Additionally, many of iCloud's files and programs can be accessed through a web browser on Pop!\_OS.

**Additional Options**

  - Nextcloud (desktop and web clients)
  - SpiderOak (desktop and web client)
  - Dropbox (desktop and web client)
  - Google Drive (Files integration and web client)

# System Management

## Kill Programs

**macOS**
  - Force Quit
  - Activity Monitor

On macOS there are two main ways to kill unresponsive programs. The force-quit menu and the Activity Monitor application.

![force-quit-activity-monitor](/images/macOS-Screenshots/force-quit-activity-monitor.png)

Force-quit is launched by clicking on the Apple menu in the upper-lefthand corner of the screen, or by pressing Opt+Cmd+Esc, selecting the application, and then "force-quit."

You can also get an overview of running processes and stop or kill them from the Activity Monitor.

You can also kill processes in the Terminal if you know the process ID.

**Pop!\_OS**
  - System Monitor
  - Terminal

![system-monitor-terminal](/images/pop-os-screenshots/system-monitor-terminal.png)

Pop!\_OS has very similar options for killing misbehaving processes. There is an almost identical utility built into the OS called System Monitor, which displays running processes and allows you to stop or kill them.

While Pop!\_OS does not a force-quit menu, the same Terminal commands available in macOS.

Running the command:

    top

will show you a similar output to what's displayed in the System Monitor.

Once you know the offending processes Process ID (PID), you can issue a command like this:

    sudo kill -pid ####



## Networking

**macOS**

![newtork-preferences](/images/macOS-Screenshots/network-preferences2.png)

**Pop!\_OS**

![network-settings-pop](/images/pop-os-screenshots/wifi-settings-pop.png)

macOS and Pop!\_OS manage network menus and settings almost identically. Both have a drop-down menu in the upper right corner of the screen to quickly connect to an available network.

Both have dedicated areas in System Preferences (macOS) and Settings (Pop!\_OS) to edit saved connections, IP settings and configure things like proxy settings or VPNs.

## Disk Encryption


**macOS**
- Filevault

![filevault](/images/macOS-Screenshots/filevault.png)

On macOS, the hard drive can be encrypted using a utility called FileVault. It can be configured during setup of the OS, or later in settings. Encrypting or decrypting the drive can be a lengthy process as the OS has to methodically add or remove encryption hashing for all the files. However, one benefit of FileVault is that encryption can be added or removed at any point.

- LUKS (during Install)

![encryption-pop](/images/install-pop/5_encrypt_notice.png)

On Pop!\_OS, encryption is offered during initial setup, or a reinstall. The OS partition is encrypted using the LUKS disk layout. This tool adds a decryption screen so that every time the computer first boots, it requires a decryption password before moving to the login screen. With an encrypted drive, if your hardware is ever stolen, the only way to remove the encryption is to erase the disk.

**NOTE:** Because of the way encryption is implemented on Pop!\_OS, and the type of delicate work involved in encrypting or decrypting the drive, encryption is only offered when the OS is being first set up. If you choose not to use encryption, and want to add it later, it will require a full erase and reinstall. So create backups accordingly.

## System Backups

**macOS**
- Time Machine

![time-machine](/images/macOS-Screenshots/time-machine.png)

macOS features a program called Time Machine which can be set to perform periodic backups to an external drive, or in some cases to a networked drive. The utility supports restoring the system to a specific point in time and keeps track of changes to the backed up files.

**Pop!\_OS**
- Timeshift
- Déjà Dup Backups

![pop-backups](/images/pop-os-screenshots/pop-backups.png)

Pop!\_OS does not have a built in backup utility, but several good one's are available to choose from in the Pop!\_OS Shop. The two featured here are Timeshift (pictured left) and Déjà Dup Backups (pictured right).

Timeshift is designed to capture snapshots and restore points of your system at a given time and is only compatible with backing up your Linux system to another linux formatted drive. It's very similar to the snapshot feature offered by virtual machine managers.

Déjà Dup Backups is closer in functionality to Time Machine. It offers local hardware backups, or backups to network locations. Folders and files can be added to the backup list manually, and it backs up the Home folder by default. It can also be setup to perform backups automatically on a schedule.

# What if I have an iPhone?

## Backups (macOS)

Full system iPhone backups are traditionally done in one of two ways.
- Local backups (formerly iTunes, now Finder)
Local backups of your iPhone can be created by connecting it to you Apple laptop or desktop computer and using iTunes (for older macOS versions) or Finder (for newer releases) to create a local snapshot of your iPhone data. These backups can be encrypted or unencrypted.

- iCloud backups
It is also possible to set your iPhone to backup and sync changes to your iCloud account. These are not full-system backups, but do contain most of the data needed to get your iPhone restored to a particular state in time. To read more about what is backed up in iCloud backups visit: [LINK]

## Files/Photos (macOS)
It's also possible to sync your iPhone like a digital camera through the Apple Photos app, and a special directory on the iPhone called Files is available to be accessed like any other flash drive or external hard drive.


## Backups (Pop!\_OS)

- Local backups
Pop!\_OS does not have a built in feature to make a local snapshot backup of your iPhone.
- iCloud backups.
Since your iPhone connects directly to iCloud over WiFi, iCloud backups will continue as normal, and can be managed from either your iPhone or your iCloud account on icloud.com.

## Files/Photos (Pop!\_OS)
Like in macOS, you can also access image files, and files stored in the Files folder on your iPhone through the Pop!\_OS Files application. Files can be copied back and forth to the iPhone like any other flash drive or external drive.
