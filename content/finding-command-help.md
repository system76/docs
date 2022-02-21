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

Even experienced Linux users frequently utilize knowledge resources to find proper syntax for Terminal commands, or to discover options for known commands. All Linux shells support common utilities that search for and explain commands for a given task. These commands may navigate the user to a text file or navigable structure of help files, while others simply print output into the current Terminal session.

### Why Find Help Using the Terminal?

Issues may disable user access to the desktop environment, including the web browser. In these scenarios, users can still find help that displays as output in a Terminal session. Users who still have access to a browser or second computer can find  help using the [ubuntu](https://manpages.ubuntu.com/) or [debian](https://manpages.debian.org/) manpage websites. The commands below are entered in a Terminal session. In Pop!\_OS, Terminal sessions can be started by pressing <kbd>Super</kbd> + <kbd>t</kbd>.

### --help

`--help` prints out a shortened version of the man page, usually including a brief example and all options for a command. `--help` prints output to the terminal session without navigating away from the shell prompt.

**Use case**: A user wants to quickly reference all options for a known command in the current Terminal session.

**Usage**: Type a command + `--help`, then hit <kbd>Enter</kbd>. This example uses the `cd` command. Commands must be an exact match.
```bash
cd --help
```
![--help output](/images/finding-command-help/--help-output.png)

### whatis

`whatis` provides a very short description of a command's functionality.

**Use case**: A user wants a very brief reminder of a known command's functionality printed in the current Terminal session.

**Usage**: Type `whatis` + command, then hit <kbd>Enter</kbd>. This example uses the `mkdir` command. Commands must be an exact match.
```bash
whatis mkdir
```
![whatis output](/images/finding-command-help/what-output.png)

### which

`which` provides the directory location of a command.

**Use case**: A user would like to know which installed package provides a given command.

**Usage**: Type `which` + command(s), then hit <kbd>Enter</kbd>. This example uses the ls and dpkg commands.
```bash
which ls -l dpkg -S
```
![which output](/images/finding-command-help/which-output.png)

### apropos

`apropos` performs a keyword search on command man pages. This is useful when searching for a command by its function. `apropos` prints output to the terminal session without navigating away from the shell prompt.

**Use case**: A user can't remember the specific name of a command, but knows keywords commonly used to describe the command's functions.

**Usage**: Type `apropos` + keyword, then hit <kbd>Enter</kbd>. This example searches for commands related to the `reboot` keyword.
```bash
apropos reboot
```
![apropos output](/images/finding-command-help/apropos-output.png)

### man

`man` is short for manual pages. A command's manual page is a consistently structured text file describing the command's function, usage syntax, options, and similar commands. `man` opens a manpage in the terminal session, and pressing <kbd>q</kbd> exits the manpage and returns the user to the shell prompt.

**Use case**: A user wants to see actions performed by a specific command, and available options to modify the outcome of the command.

**Usage**: Type `man` + any command into a Terminal session, then hit <kbd>Enter</kbd>. This example uses the `reboot` command.
```bash
man reboot
```
![man output](/images/finding-command-help/man-output.png)

### info

`info` pages are similar to man pages; however, their descriptions for command usage are more in-depth and include examples of output. Users can also navigate to other related info pages using hypertext links within the info page. `info` opens an info page in the Terminal session, and pressing <kbd>q</kbd> exits the manpage and returns the user to the shell prompt.

|Key | Function |
|-------|------|
|<kbd>Arrow Up</kbd>| Move up one line|
|<kbd>Arrow Down</kbd>| Move down one line|
|<kbd>Tab</kbd>|Move to next hyperlink|
|<kbd>Enter</kbd>| Select a hyperlink|
|<kbd>Page Up</kbd>| Move up one page|
|<kbd>Page Down</kbd> or <kbd>Space bar</kbd>| Move down one page|
|<kbd>n</kbd>| Move to next info page|
|<kbd>p</kbd>| Move to previous info page|
|<kbd>q</kbd>| Exit the info page|

**Use case**: A user wants to see examples of command usage, command output, and easily navigate to commands offering related or supporting functionality.

**Usage**: Type `info` + any command into a Terminal session, then hit <kbd>Enter</kbd>. This example uses the `ls` command.
```bash
info ls
```
![info output](/images/finding-command-help/info-output.png)
