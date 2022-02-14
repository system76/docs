---
title: Find Command Help Using the Terminal
description: >
  Using apropos, whatis, info, man, and --help to find appropriate commands and command usage information.
keywords:
  - Linux
  - Beginner
  - Linux Terminal
  - Command Help
  - System76
  - Technical Support

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: about-your-os
tableOfContents: true
---

## Find Command Help in the Linux Terminal

Even the most experienced Linux users have difficulty remembering proper syntax for Terminal commands and command options. All Linux shells support common utilities that search for and explain commands for a given task. These commands may navigate the user to a text file or navigable structure of help files, while others simply print output into the current Terminal session.

The commands below are entered in a Terminal session. In Pop!\_OS, Terminal sessions can be started by pressing <kbd>Super</kbd> + <kbd>t</kbd>.

### help

The `help` command displays all built-in commands supported by the current shell.

**Use case**: A user wants to print basic commands supported by their shell into the current Terminal session.

**Usage**: Type `help` into a Terminal session, then hit Enter.
```bash
help
```
![help output](/images/finding-command-help/help-output.png)

### man

`man` is short for manual pages. A command's manual page is a consistently structured text file describing the command's function, usage syntax, options, and similar commands. `man` opens a manpage in the terminal session, pressing <kbd>q</kbd> exits the manpage and returns the user to the shell prompt.

**Use case**: A user wants to see actions performed by a specific command, and available options to modify the outcome of the command.

**Usage**: Type `man` + any command into a Terminal session, then hit Enter. This example uses the `reboot` command.
```bash
man reboot
```
![man output](/images/finding-command-help/man-output.png)

### info

`info` pages are similar to man pages, however their descriptions for command usage are more in-depth and include examples of output. Users can also navigate to other related info pages using hypertext links within the info page. `info` opens an info page in the Terminal session, pressing <kbd>q</kbd> exits the manpage and returns the user to the shell prompt.

**Use case**: A user wants to see examples of command usage, command output, and easily navigate to commands offering related or supporting functionality.

**Usage**: Type `info` + any command into a Terminal session, then hit Enter. This example uses the `ls` command.
```bash
info ls
```
![info output](/images/finding-command-help/info-output.png)

### apropos

`apropos` performs a keyword search on command man pages. This is useful when searching for a command by its function. `apropos` prints output to the terminal session without navigating away from the shell prompt.

**Use case**: A user can't remember the specific name of a command, but knows keywords commonly used to describe the command's functions.

**Usage**: Type `apropos` + keyword. This example searches for commands related to the `delete` keyword.
```bash
apropos delete
```
![apropos output](/images/finding-command-help/apropos-output.png)

### --help

`--help` prints out a shortened version of the man page, usually including a brief example and all options for a command. `--help` prints output to the terminal session without navigating away from the shell prompt.

**Use case**: A user wants to quickly reference all options for a known command in the current Terminal session.

**Usage**: Type a command + `--help`. This example uses the `cd` command. Commands must be an exact match.
```bash
cd --help
```
![--help output](/images/finding-command-help/--help-output.png)

### whatis

`whatis` provides a very short description of a command's functionality.

**Use case**: A user wants a very brief reminder of a known command's functionality printed in the current Terminal session.

**Usage**: Type `whatis` + command. This example uses the `mkdir` command. Commands must be an exact match.
```bash
whatis mkdir
```
![whatis output](/images/finding-command-help/what-output.png)
