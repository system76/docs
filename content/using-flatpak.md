---
title: Using Flatpak from the Command Line (Pop!_OS)
description: >
  Using Flatpak from the Command Line
keywords:
  - Pop!_OS
  - Pop!_OS 18.04
  - Pop!_OS 19.10
  - Pop!_OS 20.04
  - Pop!_OS 20.10
  - Pop!_OS 21.04
  - Pop!_OS 21.10
  - Pop!_OS 22.04
  - Flatpak
  - System76

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: pop
tableOfContents: true
---

## Why the command line?

It's very easy to find and install Flatpak software from within the <u>Pop!_Shop</u>, but there are advantages to working within the terminal. Using the command line can show additional information and give you more control.

Full documentation about Flatpak commands is available [here.](https://docs.flatpak.org/en/latest/using-flatpak.html)

## Upating Flatpak packages

The most common reason to use the command line with Flatpak is to run updates. This shows some additional information that's not present in the <u>Pop!_Shop</u>, and if any problems occur, it's easier to tell what's going wrong. The command is very simple:

```bash
flatpak update
```

All terminal commands for Flatpak will look like this, starting with the command `flatpak` followed by a verb and possibly additional data or parameters.

## Listing and running Flatpak software

To view your currently installed Flatpak software:

```bash
flatpak list
```

To run a Flatpak application from the command line:

```bash
flatpak run [Application ID]
```

To look at information about an installed package:

```bash
flatpak info [Application ID]
```

For example, to find out what command to use to run [Slack](https://slack.com/) (if already installed from Flatpak), you can run the following:

```bash
flatpak list --columns=name,application | grep -i slack
```

The output will look something like this:

```
Slack com.slack.Slack
```

We can look at the package details by running this command:

```bash
flatpak info com.slack.Slack
```

And we can use this command to run Slack from the command line:

```bash
flatpak run com.slack.Slack
```

## Finding, installing and uninstalling Flatpak software

To search for a Flatpak package using the currently available sources:

```bash
flatpak search [Name]
```

To install a Flatpak package:

```bash
flatpak install [Application ID]
```

For example, if we're looking for the Flatpak version of the media player [_mpv_](https://mpv.io/), we can find the Application ID by running:

```bash
flatpak search mpv
```

And then install it with:

```bash
flatpak install io.mpv.Mpv
```

You can try to install the app directly by just combining these two seteps, for example:

```bash
flatpak install mpv
```

and the Flatpak system will try to figure out what you're looking for and present you with options.

Uninstalling a Flatpak package works similarly:

```bash
flatpak uninstall [Application ID]
```

There is also the option to delete your user data for a Flatpak application by using the `--delete-data` parameter. This can be useful when trying to fix a broken application and you want to start completely over. For example, this will uninstall _mpv_ and also delete your configuration files:

```bash
flatpak uninstall io.mpv.Mpv --delete-data
```

## Flatpak sources

To list the currently configured Flatpak sources, which the system will search when looking for software:

```bash
flatpak remotes
```

To add a new Flatpak source (with Flathub as the example):

```bash
flatpak remote-add --user --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```

To delete an existing Flathub source:

```bash
flatpak remote-delete --user flathub
```
