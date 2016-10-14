---
layout: article
title: Linux Terminal for Beginners
description: >
  Using a Linux Terminal is faster and easier to update and install software. Learn simple ways to use the terminal to your advantage.

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

The **Terminal** is a tool for issuing text-based commands to your Ubuntu Operating System. When you type a command, you are basically telling your computer to do something very specific. The quickest way to install, remove or update applications is through the Terminal. A Terminal is sometimes referred to as the Shell, Command Line, or Command Prompt.
To open a terminal, press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd>

You can also tap your **Ubuntu key** to search your computer and type the word 'Terminal.'

A box like the one below will appear.

![Ubuntu Terminal](/images//ubuntu-terminal/terminalmain.png)

When you run a command with **sudo** in front of it, You'll be prompted for your password, but when you type it, it won't show the letters as you type in the terminal, but type your password anyway and press <kbd>enter</kbd>.

#### Frequently Used Commands:
*Omit the brackets when entering the command.*

This series of commands will update your package database for new versions (a list telling your Ubuntu Operating System where to look for software and updates.)

`sudo apt update`

When using the 'upgrade' option of the command 'apt' your System will download and apply any updates to your System76.

`sudo apt upgrade`

The "man" command is short for manual. You can use it like so:

`man sudo`

### Add an Application

`sudo apt install [insert application name here]`

## Example:

`sudo apt install google-chrome-stable`

### Remove a package or application

`sudo apt purge google-chrome-stable`

`sudo apt autoremove`

`sudo apt update`
