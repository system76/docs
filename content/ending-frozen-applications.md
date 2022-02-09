---
title: Ending Frozen Applications and Desktops
description: >
  Linux provides several methods to kill frozen or hung up processes and applications using GUI applications or terminal commands.
keywords:
  - frozen applications
  - frozen desktop
  - frozen terminal
  - hung up
  - not responding
  - System76

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section:
---

## Ending Frozen Processes, Applications, and Desktops

Linux offers many methods to hanging or frozen processes. The `gnome-system-monitor` provides a GUI process management application with features similar to the Windows Task Manager, while the `kill` command can end single or multiple processes from the Terminal.

>Note: This article provides several methods to end processes for a given scenario, but is not exhaustive or guaranteed to provide the most appropriate method for every scenario. Users should also keep in mind that suddenly terminating processes can result in unwanted data loss or system stability issues.

## End a Single Frozen Application or Window

### Using gnome-system-monitor (GUI)

The gnome-system-monitor comes prepackaged in Pop!_OS. This application provides a GUI interface and functionality similar to the Windows Task Manager.

1. Press <kbd>Super</kbd> + <kbd>T</kbd> to launch a Terminal session.
2. Enter `gnome-system-monitor` and hit <kbd>Enter</kbd>.
3. Locate frozen and hanging applications.

   ![gnome-system-monitor](/images/ending-frozen-applications/gnome-system-monitor)

4. Right click the application, click Stop in the dropdown menu.

### Using the kill Command (CLI)

The `kill` command can send a signal termination (SIGTERM) command to any running processes. This process requires knowing the process IDs (PID) of the application(s) to be terminated. The `pidof` command will display the PID(s) associated with any running process.

1. Press <kbd>Super</kbd> + <kbd>T</kbd> to launch a Terminal session.
2. Type pidof + process or application name and hit Enter.

   ```bash
   pidof firefox
   ```

3. Take note of the listed PID(s).
4. Type kill + PID(s) to kill all associated PID(s), then hit <kbd>Enter</kbd>.

    ```bash
    kill 20869 20862
    ```

Tip: Use the pipe <kbd>|</kbd> and `xargs` command to pipe multiple PIDs as arguments into the kill command:

  ```bash
  pidof firefox | xargs kill
  ```

## End All Running Processes

In some instances even the Terminal or entire desktop environment can hang or freeze. Users can resolve this by entering `TTY` mode to enter commands. This method will use the `kill -9 -1` command, which kills all processes as allowed by the user account.

1. Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>F5</kbd> to enter `TTY` mode.
2. Enter the user name and password for the account.
3. Type kill -9 -1 and hit <kbd>Enter</kbd>.

    ```bash
    kill -9 -1
    ```

4. The login screen will appear when the process completes. The desktop environment will load upon login.
