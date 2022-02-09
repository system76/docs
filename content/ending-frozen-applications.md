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
section:
---

## Closing Frozen Processes, Applications, and Desktops

Linux offers many methods to stop hanging or frozen processes. The System Monitor provides a GUI process management application with features similar to the Windows Task Manager, while the `kill` command can end single or multiple processes from the Terminal.

>Caution: Suddenly terminating processes can result in unwanted data loss or system stability issues.

## Close Specific Applications or Windows

### Using System Monitor (GUI)

The System Monitor comes prepackaged in Pop!\_OS. This application provides a GUI interface and functionality similar to the Windows Task Manager.

1. Press <kbd>Super</kbd> + <kbd>T</kbd> to launch a Terminal session.
2. Enter `gnome-system-monitor` and hit <kbd>Enter</kbd>.
3. Locate frozen and hanging applications.
   ![gnome-system-monitor](/images/ending-frozen-applications/gnome-system-monitor)
4. Right click the application and click Stop in the dropdown menu.

### Using the kill Command (CLI)

The `kill` command provides several methods to terminate a process:

- SIGTERM (15) - Sends the "end" command to a PID, this is the default method used if not number is specified
- SIGSTOP (19) - Sends the "stop" command to pause a process, processes are resumed with the SIGCONT (18)
- SIGKILL (9) - Sends the "kill" command to a PID, this is the most destructive method, programs cannot ignore or block this command

`kill` takes arguments in the form of a Process ID (PID). The `pidof` command will display the PID(s) associated with any running process.

1. Press <kbd>Super</kbd> and type "system monitor", hit enter to launch the program.
2. Type `pidof` + process or application name and hit <kbd>Enter</kbd>.

   ```bash
   pidof firefox
   ```
   
3. Take note of the listed PID(s).
4. Type kill + PID(s) to kill all associated PID(s), then hit <kbd>Enter</kbd>. This command uses the default SIGTERM (15) method. Multiple PIDs can be passed to `kill` by piping in PIDs using the `pidof` and `xargs` command:

    ```bash
    pidof firefox | xargs kill
    ```
  
5. If the program remains unresponsive, use the SIGKILL (9) commend to force the program to close: 

    ```bash
    pidof firefox | xargs kill -9
    ```

## End All Running Processes

Users can bypass a frozen desktop environment by entering `TTY` mode. This method will use the `kill -9 -1` command, which kills all processes as allowed by the user account. Users can alternatively use `kill -15 -1` which sends a less destructive SIGTERM (end) request to running processes. 

1. Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>F5</kbd> to enter `TTY` mode.
2. Enter the user name and password for the account.
3. Type the following command and hit <kbd>Enter</kbd>.

    ```bash
    sudo kill -15 -1
    ```
 
   >Note: Users can alternatively use `sudo kill -9 -1` which sends a more destructive SIGTERM (end) request to running processes. 
4. The login screen will appear when the process completes. The desktop environment will load upon login.
