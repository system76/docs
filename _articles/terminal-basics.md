---
layout: article
title: Learn Linux Terminal Basics
description: >
  Linux offers users a lot of flexibility. There's always more than one way to complete a task, and using the terminal is one of them.

keywords:
  - Linux
  - Ubuntu
  - Ubuntu Beginner
  - Linux Terminal
  - System76
  - Technical Support
hidden: false
section: faq

---

The **terminal** is an interactive, text-based interface for your Ubuntu Operating System. When you type a command, you're basically telling your computer to do something very specific. Many commands will print information to the screen. Some will ask for input. Others may just return you to a prompt.

The quickest way to install, remove or update applications is through the terminal. The terminal is also referred to as the **shell, command line, prompt, or command prompt.**

To open a terminal, press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd>

You can also tap your **Ubuntu key** to search your computer and type the word 'terminal.'

A box like the one below will appear.

![Ubuntu Terminal](/images//ubuntu-terminal/terminalmain.png)

### Navigating the terminal

It might not look like much, and at first glance there might not appear to be much information, but the terminal is one of the most powerful tools at your disposal. **First,** what do we have here?

![Ubuntu Terminal Overview](/images//ubuntu-terminal/overview.png)

**Current user:** The username of the person currently logged in to this terminal.
**Current host:** The hostname of the system currently in use by the terminal. Unless you've connected to a remote machine via SSH, this will be the same name as your computer.
**Current directory:** The current 'folder' that this terminal resides in. Commands entered and files modified are scoped to this folder, unless providing an absolute path to another file or folder, or if the command is available in the user's $PATH. Basically, the terminal can only 'see' into this folder. A tilde (~) indicates the user's home directory (/home/emma) for example.
**Prompt:** Anything entered after this symbol is interpreted as a command.
**Cursor:** A visual indicator of the user's current position in the terminal.

As you 'move' throughout your computer, the prompt will change in response. In many cases, you won't need to move around to just run a command.

To **list all files and folders** in the current directory, type **ls**. To **change directories** (folders), type **cd [directory name]**. At any time, you can press the Tab key twice to have the terminal 'guess' the completion for your entry.

![Moving around](/images//ubuntu-terminal/moving-around.png)

### Running commands with escalated privileges

In most cases, the terminal prevents you from damaing your system by requiring authentication or escalated priveleges to run certain commands. For example, to check for updates you will need to prepend the command **apt update** with **sudo**. Below is an example of the same command, run once without sudo and once with sudo. 

![Using sudo](/images//ubuntu-terminal/sudo.png)

When you run a command with **sudo** in front of it, you'll be prompted for your password. When typing your password, you won't see anything. Just enter your password and then press <kbd>Enter</kbd>. If it's entered incorrectly, the terminal will let you know and give you another chance to enter your password.

#### Frequently Used Commands:

To update your packages and applications, type the command below and press <kbd>Enter</kbd>. This command will tell your system to search for potential updates and advise if there are any available, but this command does not install them.

`sudo apt update`

To download and apply any updates to your System76 computer, type the following command and press <kbd>enter</kbd>.

`sudo apt upgrade`

The "man" command is short for manual. You can type the "man" command in front of any command that you want more information about. For example;

`man sudo`

### Install an application by name

`sudo apt install [insert application name here]`

*Omit the brackets when entering the command.*

### Example:

`sudo apt install google-chrome-stable`

### Remove a package or application

`sudo apt purge google-chrome-stable`

`sudo apt autoremove`

`sudo apt update`
