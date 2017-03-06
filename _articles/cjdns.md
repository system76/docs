---
layout: article
title: Install CJDNS
description: >
  INstalling CJDNS, a Encrypted Wireless Ipv6 meshnet using public keycryptography for address allocation and a distributed hash table for routing.
image: https://system76.com/images/foo.jpg
keywords:
  - Meshnet
  - hyperboria
  - encryption
  - privacy
  - cjdns
  - cjdelisle
  ---
  See more at the Whitepaper and the README!
      
      [https://github.com/hyperboria/docs](https://github.com/hyperboria/docs)
      [https://github.com/cjdelisle/cjdns/blob/master/doc/Whitepaper.md](CJDNS Whitepaper)
      [https://github.com/cjdelisle/cjdns/](CJDNS GITHUB)
      
  ## Install
  ### ubuntu
  
-  Install Dependencies for Ubuntu
  
      sudo apt-get install nodejs git build-essential python2.7
      
 -  Next, Clone the repo and build!
   
        git clone https://github.com/cjdelisle/cjdns.git cjdns\
        ./do
        
-  Now, check  bash``` ./cjdroute```
  
-  Make sure you got the swag.
  
        LANG=C cat /dev/net/tun

If it says: `cat: /dev/net/tun: File descriptor in bad state` Good!

If it says: `cat: /dev/net/tun: No such file or directory`, create it using:

    sudo mkdir -p /dev/net &&
    sudo mknod /dev/net/tun c 10 200 &&
    sudo chmod 0666 /dev/net/tun
      
      After a little wait, the build should finish successfully. Now we want to configure cjdns to run as a daemon, so let’s create a link to the binary, generate a configuration file, and copy over the service file.

        ln -s /opt/cjdns/cjdroute /usr/bin
        (umask 077 && ./cjdroute --genconf > /etc/cjdroute.conf)
        cp contrib/systemd/cjdns.service /etc/systemd/system/
        
        Now that we have that, we can configure it in nano /etc/cjdroute.conf and enable it for automatic start on boot.

               systemctl enable cjdns
        systemctl start cjdns
      
      You will connect automatically with wifi, but you can peer over the internet too!
      See more at the Whitepaper and the README!
      
      [https://github.com/hyperboria/docs](https://github.com/hyperboria/docs)
      [https://github.com/cjdelisle/cjdns/blob/master/doc/Whitepaper.md](CJDNS Whitepaper)
      [https://github.com/cjdelisle/cjdns/](CJDNS GITHUB)
      
      
 ### Arch:

You can install cjdns by running

    pacman -S cjdns

If you need to build from source, everything you need can be installed like this

    pacman -S nodejs git base-devel

Alternatively, you may like to install via AUR from the package, `cjdns-git`.
After Installation, The configuration file is located at `/etc/cjdroute.conf`.
To start the service `cjdns.service`, do:

        systemctl start cjdns

To stop it:

       systemctl stop cjdns

 
See more at the Whitepaper and the README!
      
      [https://github.com/hyperboria/docs](https://github.com/hyperboria/docs)
      [https://github.com/cjdelisle/cjdns/blob/master/doc/Whitepaper.md](CJDNS Whitepaper)
      [https://github.com/cjdelisle/cjdns/](CJDNS GITHUB)
