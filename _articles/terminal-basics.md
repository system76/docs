---
layout: article
title: Terminal - Learn Linux Terminal Basics
description: >
  Linux offers users a lot of flexibility. There's always more than one way to complete a task, and using the terminal is one of them.
keywords:
  - Linux
  - Beginner
  - Linux Terminal
  - System76
  - Technical Support
image: http://support.system76.com/images/system76.png
hidden: false
section: faq

---

The <u>Terminal</u> is an interactive, text-based interface for your Operating System. When you type a command, you're basically telling your computer to do something very specific. Many commands will print information to the screen. Some will ask for input, and others may just return you to a prompt.

The quickest way to install, remove or update applications is through the <u>Terminal</u>. The <u>Terminal</u> is also referred to as the shell, command line, prompt, or command prompt.

To open a <u>Terminal</u>, tap the Super Key <kbd><span class="fl-ubuntu"></span></kbd>, <kbd><span class="fl-pop-key"></span></kbd> to search your computer and type the word <u>Terminal</u>.

A box like the one below will appear:

![Terminal](/images/terminal/main.png)

### Navigating The Terminal

It might not look like much, and at first glance there might not appear to be much information, but the <u>Terminal</u> is one of the most powerful tools at your disposal. Take a look:

![Terminal Overview](/images/terminal/overview.png)

Section | Description
:------:|------------
Current User | The username of the person currently logged in to this <u>Terminal</u>.
Current Host | The hostname of the system currently in use by the <u>Terminal</u>. Unless you've connected to a remote machine via SSH, this will be the same name as your computer.
Current Directory | The current folder that this <u>Terminal</u> resides in. Commands entered and files modified are scoped to this folder, unless providing an absolute path to another file or folder, or if the command is available in the user's $PATH. Basically, the <u>Terminal</u> can only see into this folder. A tilde (~) indicates the user's home directory.
Prompt | Anything entered after this symbol is interpreted as a command.
Typed Command | Anything that is typed into the <u>Terminal</u> is shown after the prompt.
Cursor | A visual indicator of the user's current position in the <u>Terminal</u>.

As you change folders and move throughout your computer, the prompt will change in response. In many cases, you won't need to move around to run a command.

To list all files and folders in the current directory, type `ls`. To change directories (folders), type `cd [directory name]`. To go back up a directory type `cd ..`. At any time, you can press the Tab key to have the <u>Terminal</u> guess the completion for your entry, or twice to show all possibilities.

![Moving around](/images/terminal/moving-around.png)

### Running Elevated Commands

In most cases, the <u>Terminal</u> prevents you from damaging your system by requiring authentication or elevated privileges to run certain commands. For example, to check for updates you will need to prepend the command `apt update` with `sudo`. Below is an example of the same command, ran once without `sudo` and once with.

![Using sudo](/images/terminal/sudo.png)

When you run a command with `sudo` in front of it, you'll be prompted for your password. When typing your password, you won't see anything. Just enter your password and then press <kbd>Enter</kbd>. If it's entered incorrectly, the <u>Terminal</u> will let you know and give you another chance to enter your password.

## Useful Commands:

```
sudo apt update
```

This command will tell your system to search for potential updates and advise if there are any available, but this command does not install them.

```
sudo apt upgrade
```

This command will download and apply any updates to your System76 computer.

```
sudo apt full-upgrade
```

This command will upgrade your packages and installs or remove packages to resolve dependencies so everything is up-to-date.


```
sudo apt install [application]
```

This will install a particular application and its dependencies on your computer.

```
sudo apt purge [application]
```

This will remove a program and it's configuration files from your computer.

```
sudo apt policy [application]
```

This will list information about the package. Such as where it is coming from, the version and if an updated version is available.

```
man sudo
```

The `man` command is short for manual. You can type the `man` command in front of any command that you want more information about.
