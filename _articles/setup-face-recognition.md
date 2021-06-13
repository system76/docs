---
layout: article
title: Setup facial recognition for authentication (howdy).
description: 
  Want to forever forget about typing in a sudo password?
keywords:
  - howdy
  - login
  - utilities
image: https://i.imgur.com/WX6ZJ3O.png
hidden: false
section: community

---

# Facial recognition for authentication (howdy).

In this article we will setup [Howdy](https://github.com/Boltgolt/howdy) - open source face authentication tool.
Please make sure your webcam works before you start installation. An article about webcam troubleshooting can be found [here](https://support.system76.com/articles/webcam/).


### Installation on Pop!_OS, Ubutnu or any other Ubuntu based distribution.
  
Firstly, we will need a terminal. You can open it by pressing <kbd>super</kbd>+<kbd>T</kbd> on your keyboard or searching for terminal app in your application menu.

Then, adding a Howdy PPA is needed so our system knows where to get the app:
```
sudo add-apt-repository ppa:boltgolt/howdy
```
You may need to enter your sudo password and press <kbd>enter</kbd>, then press it again to confirm adding it to your system.
Now that we added Howdy repository to your system we can proceed to installing howdy itself. For that you will need to execute one more terminal command:
```
sudo apt install howdy
```
It will ask for confirmation once again, just press <kbd>Y</kbd> and then <kbd>enter</kbd>. After it downloads and installs we can go on and configure the face authentication model.

### Installation on other distributions (Debian, Arch, Fedora, openSUSE).
Please refer to first party instructions [here](https://github.com/Boltgolt/howdy#installation).

### Configuring Howdy.
After it installs core of the app automatic setup will start. 

First question will be "What profile would you like to use?". Just above it there will be an explanation for profiles you can choose from. Choose one by typing <kbd>f</kbd>, <kbd>b</kbd> or <kbd>s</kbd> and hitting <kbd>enter</kbd>.
After that Howdy will download and install required dependencies for face recognition.

When everything is done you will be returned to terminal. Now it's time to add a face for login. For that, run:
```
sudo howdy add
```
You will be asked for your sudo password, type it in and press <kbd>enter</kbd>. 
After that you will be asked to label the new model. It's similar to how you're asked to label a fingerprint you're adding on your phone. Something like 'face1' or 'John's face' will suffice.

Once that's done you successfully finished setting up howdy. Try it out by locking your screen and pressing any button to open login. If everything is setup correctly - you will be logged in in no time.

## Troubleshooting.

### "Camera path is not configured correctly, please edit the 'device_path' config value." error when adding a face:

#### Finding out what webcam to use:
Open a terminal window if you don't have one already and execute:
```
ls /dev | grep "video."
```
This will show you all video inputs you have on your system.
Now, we need to test what of them work for you. 
For that, we can use `ffplay` command. Use it as such:
```
ffplay /dev/INPUT
```
Replace `INPUT` with results you had from previous command.

#### Configuring Howdy to use webcam you want:
Once you find a webcam you want to use for Howdy, type in:
```
sudo howdy config
```
That will open a configuration file for Howdy in CLI editor called Nano.
Find a device path variable there, it should look like that:
> device_path = /dev/v4l/by-path/none

Change whatever it equals to input you want, like that:
> device_path = /dev/video0

After that's done, exit and save the config file by pressing <kbd>ctrl</kbd>+<kbd>X</kbd>, <kbd>Y</kbd> and then <kbd>enter</kbd>.
After you exit the config file and get back to terminal, try adding your face to Howdy again, with:
```
sudo howdy add
```



### Howdy always says "Timeout is reached" and never identifies you.
You can try lowering certainty level of howdy. For that, we will need a terminal window. You can open it from your applications menu or by pressing <kbd>super</kbd>+<kbd>T</kbd>.
Once you get to a terminal window, type in:
```
sudo howdy config
```
and press <kbd>enter</kbd>. That will open a configuration file for Howdy in CLI editor called Nano.
Find an option called certainty level. It should look something like that:
> certainty = 2.8

To make howdy more forgiving, rise that number a bit, to 3.8, for example. Be aware, values over 5 are not reccommended. 
When that's done, exit and save the config file by pressing <kbd>ctrl</kbd>+<kbd>X</kbd>, <kbd>Y</kbd> and then <kbd>enter</kbd>.
Now Howdy is more likely to identify you in different conditions.

---

This article was contributed by [Vega](https://github.com/smth-0).
