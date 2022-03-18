---
title: Closing Frozen Applications and Desktops
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
section: software-troubleshooting
---

## Closing Frozen Processes, Applications, and Desktops

Linux offers many methods to stop hanging or frozen processes. The System Monitor application provides a GUI with features similar to the Windows Task Manager, running xkill allows users to close programs with a mouse click, and the `kill` command can end single or multiple processes from the Terminal.

>Caution: Suddenly terminating processes can result in unwanted data loss or system stability issues.

## Close Specific Applications or Windows

### Using System Monitor (GUI)

The System Monitor application comes prepackaged in Pop!\_OS. This tool provides a GUI and functionality similar to the Windows Task Manager.

1. Press <kbd>Super</kbd> and type `system monitor`, then hit Enter.
2. Locate frozen and hanging applications.
3. Select the application and click End Process.
   ![gnome-system-monitor](/images/ending-frozen-applications/gnome-system-monitor.png)

### Using xkill (GUI)

Launching xkill allows users to click and force close applications.

1. Press <kbd>Alt</kbd> + <kbd>F2</kbd>.
2. Type `xkill` and hit Enter.
   ![launch-xkill](/images/ending-frozen-applications/launch-xkill.png)
3. The cursor will turn into a small 'x'. Left click any window to kill the process associated with that window.

### Using the kill Command (CLI)

The `kill` command provides several methods to terminate a process:

- SIGTERM (15) - Sends the "terminate" command to a PID (default)
- SIGSTOP (19) - Sends the "stop" command to pause a process
- SIGKILL (9) - Sends the "kill" command to a PID (destructive)

`kill` takes arguments in the form of a Process ID (PID). The `pidof` command will display the PID(s) associated with any running process.

1. Press <kbd>Super</kbd> + <kbd>T</kbd> to launch a terminal session.
2. Use the `pidof` command to get the PIDs of a process, and a pipe with the xargs command to input them into the kill command, which uses the default SIGTERM (15) method:
    ```bash
    pidof firefox | xargs kill
    ```
3. If the program remains unresponsive, use the SIGKILL (9) option to force the program to close:
    ```bash
    pidof firefox | xargs kill -9
    ```

## End All Running Processes

Users can bypass a frozen desktop environment by entering `TTY` mode. This method will use the `kill -9 -1` command, which kills all processes as allowed by the user account. Users can alternatively use `kill -15 -1` which sends a less destructive SIGTERM (terminate) request to running processes.

1. Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>F5</kbd> to enter `TTY` mode.
2. Enter the user name and password for the account.
3. Type the following command and hit <kbd>Enter</kbd>.
    ```bash
    sudo kill -9 -1
    ```
4. Enter the password for the user account.
5. The login screen will appear when the process completes. The desktop environment will load upon login.
