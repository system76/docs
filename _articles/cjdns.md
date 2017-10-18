---
layout: article
title: Install cjdns
description: 
  Connect to the meshnet! Cjdns uses an ipv6 allocated space public key encrypted routing system to protect privacy.
keywords:
  - NSA
  - Privacy
  - CJDNS
  - meshnet
  - hyperboria
  - encryption
  - github
hidden: false
section: community

---

### Install

Install Dependencies

```  
sudo apt-get install nodejs git build-essential python2.7
```  

Next, clone the repo and build!

```
git clone https://github.com/cjdelisle/cjdns.git
cd cjdns
./do
```

Now, check `bash ./cjdroute`  
Make sure you got the swag.  

```
LANG=C cat /dev/net/tun
```

If it says: `cat: /dev/net/tun: File descriptor in bad state` Good!  
If it says: `cat: /dev/net/tun: No such file or directory`, create it using:  

```
sudo mkdir -p /dev/net &&
sudo mknod /dev/net/tun c 10 200 &&
sudo chmod 0666 /dev/net/tun
```

After a little wait, the build should finish successfully. Now we want to configure cjdns to run as a daemon, so let’s create a link to the binary, generate a configuration file, and copy over the service file.

```
ln -s /opt/cjdns/cjdroute /usr/bin
(umask 077 && ./cjdroute --genconf > /etc/cjdroute.conf)
cp contrib/systemd/cjdns.service /etc/systemd/system/
```

Now that we have that, we can configure it in nano /etc/cjdroute.conf and enable it for automatic start on boot.

```
systemctl enable cjdns
systemctl start cjdns
```

You will connect automatically with WiFi, but you can peer over the Internet too!  See more at the Whitepaper and the README!

[github.com/hyperboria/docs](https://github.com/hyperboria/docs)  
[CJDNS Whitepaper](https://github.com/cjdelisle/cjdns/blob/master/doc/Whitepaper.md)  
[CJDNS GITHUB](https://github.com/cjdelisle/cjdns/)  

---

This article was contributed by [kylerschin](https://github.com/kylerschin).
