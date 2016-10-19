---
layout: article
title: Linux Terminal Basics
description: >
  Linux offers users a lot of flexibility. There's always more than one way to complete a task, and the terminal is one of them.

keywords:
  - Linux
  - Ubuntu
  - Ubuntu Beginner
  - Linux Terminal
  - System76
  - Technical Support
hidden: false
faq: true # If it shows in the "Frequently Answered Questions" section
---

The **Terminal** is a tool for issuing text-based commands to your Ubuntu Operating System. When you type a command, you're basically telling your computer to do something very specific. The quickest way to install, remove or update applications is through the Terminal. A Terminal is sometimes referred to as the Shell, Command Line, or Command Prompt.
To open a terminal, press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd>

You can also tap your **Ubuntu key** to search your computer and type the word 'terminal.'

A box like the one below will appear.

![Ubuntu Terminal](/images//ubuntu-terminal/terminalmain.png)

When you run a command with **sudo** in front of it, you'll be prompted for your password. When typing your password, you won't see anything. Just enter your password and then press <kbd>Enter</kbd>. If it's entered incorrectly, the terminal will let you know and give you another chance to enter your password.

#### Frequently Used Commands:

To update your packages and applications, type the command below and press <kbd>Enter</kbd>. This command will tell your system to search for potential updates and advise if there are any available, but this command does not install them.

`sudo apt update`

To download and apply any updates to your System76 computer, type the following command and press <kbd>enter</kbd>.

`sudo apt upgrade`

The "man" command is short for manual. You can type the "man" command in front of any command that you want more information about. For example;

`man sudo`

### Add an Application

`sudo apt install [insert application name here]`

*Omit the brackets when entering the command.*

### Example:

`sudo apt install google-chrome-stable`

### Remove a package or application

`sudo apt purge google-chrome-stable`

`sudo apt autoremove`

`sudo apt update`
