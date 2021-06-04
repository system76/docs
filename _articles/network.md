---
layout: article
title: Basic Networking Diagnosis
description: Instructions on how to help diagnose networking issues.
keywords:
  - Support
  - networking
  - command line
  - diagnosis
image: http://support.system76.com/images/system76.png
hidden: false
section: software-applications

---

Finding out why your system is having network issues can be a daunting task.  We'll explore some useful commands 

A quick review of the TCP/IP model
---------------------------------------------

First, let's take a moment to review the fundamentals of the TCP/IP network model.

![TCP/IP OSI model](/images/network/tcpip.png)

The layers in the TCP/IP network model, in order, include:

-   **Layer 5:** Application
-   **Layer 4:** Transport
-   **Layer 3:** Network/Internet
-   **Layer 2:** Data Link
-   **Layer 1:** Physical

We will assume that you are familiar with this model, and will proceed by discussing ways to troubleshoot issues at stack Layers 1 through 4.
Where to start troubleshooting is situation-dependent. For example, if you can SSH to a server, but the server can't connect to a MySQL database, the problem is unlikely to be the physical or data link layers on the local server. In general, it's a good idea to work your way down the stack. Start with the application, and then gradually troubleshoot each lower layer until you've isolated the problem.

With that background out of the way, let's jump to the command line and start troubleshooting.

##Layer 1: The physical layer
----------------------------------------

We often take the physical layer for granted (\"did you make sure the cable is plugged in?\"), but we can easily troubleshoot physical layer problems from the Linux command line. That is if you have console connectivity to the host, which might not be the case for some remote systems.

Let's start with the most basic question: Is our physical interface up?
The **ip link show** command tells us:

****\#*** *ip link show**

**1: lo: \<LOOPBACK,UP,LOWER\_UP\> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000**
**link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00**

**2:* *eth0: \<BROADCAST,MULTICAST,DOWN,LOWER\_UP\> mtu 1500 qdisc fq\_codel state UP mode DEFAULT group default qlen 1000**
**link/ether 80:fa:5b:6a:36:d2 brd ff:ff:ff:ff:ff:ff**

**3: wlp0s20f3: \<BROADCAST,MULTICAST,UP,LOWER\_UP\> mtu 1500 qdisc noqueue state UP mode DORMANT group default qlen 1000**
**link/ether 18:56:80:54:60:2d brd ff:ff:ff:ff:ff:ff**

**

Notice the indication of DOWN in the above output for the eth0 interface. This result means that Layer 1 isn't coming up. We might try troubleshooting by checking the cabling or the remote end of the connection (e.g., the switch) for problems.

Before you start checking cables, though, it's a good idea to make sure that the interface isn't just disabled. Running a command to bring the interface up can rule this problem out:

****\#*** *ip link* *set* *eth0 up**

**

The output of **ip link show** can be difficult to parse at a quick glance. Luckily, the **-br** switch prints this output in a much more readable table format:

****\#*** *ip -br link show**

**lo UNKNOWN 00:00:00:00:00:00 \<LOOPBACK,UP,LOWER\_UP\>**

**eth0 UP 52:54:00:82:d6:6e \<BROADCAST,MULTICAST,UP,LOWER\_UP\>**

It looks like **ip link set eth0 up** did the trick, and eth0 is back in business.

These commands are great for troubleshooting obvious physical issues, but what about more insidious issues? Interfaces can negotiate at the incorrect speed, or collisions and physical layer problems can cause packet loss or corruption that results in costly retransmissions.

##How do we start troubleshooting those issues?

We can use the **-s** flag with the **ip** command to print additional statistics about an interface. The output below shows a mostly clean interface, with only a few dropped receive packets and no other signs of physical layer issues:

\# ip -s link show

1: lo: \<LOOPBACK,UP,LOWER\_UP\> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
RX: bytes packets errors dropped overrun mcast
59936876 240745 0 0 0 0
TX: bytes packets errors dropped carrier collsns
59936876 240745 0 0 0 0

2: enp57s0f1: \<BROADCAST,MULTICAST,UP,LOWER\_UP\> mtu 1500 qdisc fq\_codel state UP mode DEFAULT group default qlen 1000
link/ether 80:fa:5b:6a:36:d2 brd ff:ff:ff:ff:ff:ff
RX: bytes packets errors dropped overrun mcast
1112252684 1034902 0 31 0 83303
TX: bytes packets errors dropped carrier collsns
104281528 449635 0 0 0 0

3: wlp0s20f3: \<BROADCAST,MULTICAST,UP,LOWER\_UP\> mtu 1500 qdisc noqueue state UP mode DORMANT group default qlen 1000
link/ether 18:56:80:54:60:2d brd ff:ff:ff:ff:ff:ff
RX: bytes packets errors dropped overrun mcast
966902 4513 0 2 0 0
TX: bytes packets errors dropped carrier collsns
636200 4239 0 0 0 0

##Layer 2: The data link layer
-----------------------------------------

The data link layer is responsible for **local** network connectivity; essentially, the communication of frames between hosts on the same Layer 2 domain (commonly called a local area network).
The most relevant Layer 2 protocol for most sysadmins is the [Address Resolution Protocol (ARP)](https://en.wikipedia.org/wiki/Address_Resolution_Protocol), which maps Layer 3 IP addresses to Layer 2 Ethernet MAC addresses. When a host tries to contact another host on its local network (such as the default gateway), it likely has the other host's IP address, but it doesn't know the other host's MAC address. ARP solves this issue and figures out the MAC address for us.

A common problem you might encounter is an ARP entry that won't populate, particularly for your host's default gateway. If your localhost can't successfully resolve its gateway's Layer 2 MAC address, then it won't be able to send any traffic to remote networks. This problem might be caused by having the wrong IP address configured for the gateway, or it may be another issue, such as a misconfigured switch port.

We can check the entries in our ARP table with the **ip neighbor** command:

****\#*** *ip neighbor show**

**10.0.0.1 dev enp57s0f1 lladdr ae:db:48:6a:78:35 REACHABLE**
**10.0.0.87 dev enp57s0f1 lladdr c4:1c:ff:5b:82:e7 REACHABLE**
**10.0.0.1 dev wlp0s20f3 lladdr ae:db:48:6a:78:35 REACHABLE**
**fe80::acdb:48ff:fe6a:7835 dev enp57s0f1 lladdr ae:db:48:6a:78:35 router REACHABLE**

Note that the gateway's MAC address is populated. If there was a problem with ARP, then we would see a resolution failure:

****\#*** *ip neighbor show**

**10.0.0.6* *dev eth0 FAILED**

**

Another common use of the **ip neighbor** command involves manipulating the ARP table. Imagine that your networking team just replaced the upstream router (which is your server's default gateway). The MAC address may have changed as well since MAC addresses are hardware addresses that are assigned at the factory.

##Layer 3: The network/internet layer
------------------------------------------------

Layer 3 involves working with IP addresses, which should be familiar to any sysadmin. IP addressing provides hosts with a way to reach other hosts that are outside of their local network (though we often use them on local networks as well). One of the first steps to troubleshooting is checking a machine's local IP address, which can be done with the **ip address** command, again making use of the **-br** flag to simplify the output:

****\#*** *ip -br address show**

**lo UNKNOWN 127.0.0.1/8 ::1/128**
**enp57s0f1 UP 10.0.0.88/24 2601:280:c201:62e0::d739/128 2601:280:c201:62e0:faf5:8f8e:6231:f74d/64 2601:280:c201:62e0:911a:b5f0:fd3b:bff4/64 fe80::2800:8af9:35f1:d04a/64**
**wlp0s20f3 UP 10.0.0.161/24 2601:280:c201:62e0::b250/128 2601:280:c201:62e0:ad8d:4de2:cdd9:6386/64 2601:280:c201:62e0:173:f8b7:1973:5e25/64 fe80::b9d0:8c20:e248:7bf5/64**

**

We can see that our enp57s0f1 interface has an IPv4 address of 10.0.0.88. If we didn't have an IP address, then we'd want to troubleshoot that issue. The lack of an IP address can be caused by a local misconfiguration, such as an incorrect network interface config file, or it can be caused by problems with DHCP.

The most common frontline tool that most sysadmins use to troubleshoot Layer 3 is the **ping** utility. Ping sends an ICMP Echo Request packet to a remote host, and it expects an ICMP Echo Reply in return. If you're having connectivity issues to a remote host, **ping** is a common utility to begin your troubleshooting. Executing a simple ping from the command line sends ICMP echoes to the remote host indefinitely; you'll need to CTRL+C to end the ping or pass the **-c \<num pings\>** flag, like so:

****\#*** *ping www.system76.com**

**PING www.system76.com(2600:9000:2177:800:7:bfae:340:93a1 (2600:9000:2177:800:7:bfae:340:93a1)) 56 data bytes**

**64 bytes from 2600:9000:2177:800:7:bfae:340:93a1 (2600:9000:2177:800:7:bfae:340:93a1): icmp\_seq=1 ttl=52 time=10.5 ms**

**64 bytes from 2600:9000:2177:800:7:bfae:340:93a1 (2600:9000:2177:800:7:bfae:340:93a1): icmp\_seq=2 ttl=52 time=8.12 ms**

**64 bytes from 2600:9000:2177:800:7:bfae:340:93a1 (2600:9000:2177:800:7:bfae:340:93a1): icmp\_seq=3 ttl=52 time=7.91 ms**

**\^C**

**\-\-- www.system76.com ping statistics \-\--**

**3 packets transmitted, 3 received, 0% packet loss, time 2002ms**

**rtt min/avg/max/mdev = 7.911/8.830/10.456/1.152 ms**

**

Notice that each ping includes the amount of time it took to receive a response. While **ping** can be an easy way to tell if a host is alive and responding, it is by no means definitive. Many network operators block ICMP packets as a security precaution, although many others disagree with this practice. Another common gotcha is relying on the time field as an accurate indicator of network latency. ICMP packets can be rate limited by intermediate network gear, and they shouldn't be relied upon to provide true representations of application latency.

The next tool in the Layer 3 troubleshooting tool belt is the **mtr** command. This command doesn't come preinstalled so with Ubuntu nor Pop so we'll need to install it with the command **sudo apt install mtr-tiny**.

Mtr is short for "My Traceroute" and by default will show an autoupdated output. To quit mtr simply hit the 'q' key.

Mtr takes advantage of the Time to Live (TTL) field in IP packets to determine the path that traffic takes to its destination. Mtr will send out one packet at a time, beginning with a TTL of one. Since the packet expires in transit, the upstream router sends back an ICMP Time-to-Live Exceeded packet. Mtr then increments the TTL to determine the next hop.  Unlike the original traceroute command, mtr is more user interactive. To make mtr act more like traceroute we can use the -r option.

The resulting output is a list of intermediate routers that a packet traversed on its way to the destination:

****\#*** *mtr* *-r -c 1* *www.system76.com**

**Start: 2021-06-04T15:18:53-0600**

**HOST: system76-pc Loss% Snt Last Avg Best Wrst StDev**

**1.\|\-- \_gateway 0.0% 1 1.4 1.4 1.4 1.4 0.0**

**2.\|\-- cm-1-acr03.aurora.co.denv 0.0% 1 9.8 9.8 9.8 9.8 0.0**
**3.\|\-- 96.110.195.233 0.0% 1 10.8 10.8 10.8 10.8 0.0**
**4.\|\-- ae-2-rur101.aurora.co.den 0.0% 1 10.4 10.4 10.4 10.4 0.0**
**5.\|\-- ae-24-ar01.denver.co.denv 0.0% 1 9.3 9.3 9.3 9.3 0.0**
**6.\|\-- 24.124.155.225 0.0% 1 10.8 10.8 10.8 10.8 0.0**
**7.\|\-- be-36041-cs04.1601milehig 0.0% 1 10.3 10.3 10.3 10.3 0.0**
**8.\|\-- be-1412-cr12.1601milehigh 0.0% 1 11.3 11.3 11.3 11.3 0.0**
**9.\|\-- be-301-cr02.dallas.tx.ibo 0.0% 1 25.3 25.3 25.3 25.3 0.0**
**10.\|\-- be-12495-pe03.1950stemmon 0.0% 1 25.9 25.9 25.9 25.9 0.0**
**11.\|\-- 50.248.118.202 0.0% 1 24.7 24.7 24.7 24.7 0.0**
**21.\|\-- ??? 100.0 1 0.0 0.0 0.0 0.0 0.0**
**22.\|\-- 52.95.1.221 0.0% 1 49.2 49.2 49.2 49.2 0.0**
**23.\|\-- 52.95.1.164 0.0% 1 50.7 50.7 50.7 50.7 0.0**
**24.\|\-- ??? 100.0 1 0.0 0.0 0.0 0.0 0.0**
**

Mtr seems like a great tool, but it's important to understand its limitations. As with ICMP, intermediate routers may filter the packets that **mtr** relies on, such as the ICMP Time-to-Live Exceeded message.  But more importantly, the path that traffic takes to and from a destination is not necessarily symmetric, and it's not always the same.  Mtr can mislead you into thinking that your traffic takes a nice, linear path to and from its destination. However, this situation is rarely the case. Traffic may follow a different return path, and paths can change dynamically for many reasons. While **mtr** may provide accurate path representations in small corporate networks, it often isn't accurate when trying to trace across large networks or the internet.

Another common issue that you'll likely run into is a lack of an upstream gateway for a particular route or a lack of a default route.  When an IP packet is sent to a different network, it must be sent to a gateway for further processing. The gateway should know how to route the packet to its final destination. The list of gateways for different routes is stored in a **routing table**, which can be inspected and manipulated using **ip route** commands.

We can print the routing table using the **ip route show** command:

****\#*** *ip route show**

**default via 10.0.0.1 dev enp57s0f1 proto dhcp metric 100**
**default via 10.0.0.1 dev wlp0s20f3 proto dhcp metric 600**
**10.0.0.0/24 dev enp57s0f1 proto kernel scope link src 10.0.0.88 metric 100**
**10.0.0.0/24 dev wlp0s20f3 proto kernel scope link src 10.0.0.161 metric 600**
**169.254.0.0/16 dev enp57s0f1 scope link metric 1000**

**

On this system there is both WiFi (wlp0s20f3) and Ethernet (enp57s0f1) network interfaces. The metric number tells the system which interface to use first; the lower number will be used first then the next lower etc.

Simple topologies often just have a default gateway configured, represented by the \"default\" entry at the top of the table. A missing or incorrect default gateway is a common issue.

If our topology is more complex and we require different routes for different networks, we can check the route for a specific prefix:

****\#*** *ip route show 10.0.0.0/24**

**10.0.0.0/24 dev enp57s0f1 proto kernel scope link src 10.0.0.88 metric 100**
**10.0.0.0/24 dev wlp0s20f3 proto kernel scope link src 10.0.0.161 metric 600**

**

In the example above, we are sending all traffic destined to the 10.0.0.0/24 network to a different gateway (10.0.0.88).

While not a Layer 3 protocol, it's worth mentioning DNS while we're talking about IP addressing. Among other things, the Domain Name System (DNS) translates IP addresses into human-readable names, such as **www.system76.com**. DNS problems are extremely common, and they are sometimes opaque to troubleshoot. Plenty of books and online guides have been written on DNS, but we'll focus on the basics here.

A telltale sign of DNS trouble is the ability to connect to a remote host by IP address but not its hostname. Performing a quick **host** on the hostname can tell us quite a bit (**host** is part of the **bind9-host** package on Ubuntu / Pop!\_OS Linux based systems):

****\#*** *host* *www.system76.com**

**www.system76.com has address 143.204.26.70**
**www.system76.com has address 143.204.26.20**
**www.system76.com has address 143.204.26.22**
**www.system76.com has address 143.204.26.56**
**www.system76.com has IPv6 address 2600:9000:2198:c400:7:bfae:340:93a1**
**www.system76.com has IPv6 address 2600:9000:2198:a000:7:bfae:340:93a1**
**www.system76.com has IPv6 address 2600:9000:2198:800:7:bfae:340:93a1**
**www.system76.com has IPv6 address 2600:9000:2198:5600:7:bfae:340:93a1**
**www.system76.com has IPv6 address 2600:9000:2198:3a00:7:bfae:340:93a1**
**www.system76.com has IPv6 address 2600:9000:2198:a400:7:bfae:340:93a1**
**www.system76.com has IPv6 address 2600:9000:2198:8400:7:bfae:340:93a1**
**www.system76.com has IPv6 address 2600:9000:2198:7c00:7:bfae:340:93a1**

**

The output above shows the resulting IPv4 addresses as well as IPv6.

##Layer 4: The transport layer
-----------------------------------------

The transport layer consists of the TCP and UDP protocols, with TCP being a connection-oriented protocol and UDP being connectionless.  Applications listen on **sockets**, which consist of an IP address and a port. Traffic destined to an IP address on a specific port will be directed to the listening application by the kernel. A full discussion of these protocols is beyond the scope of this article, so we'll focus on how to troubleshoot connectivity issues at these layers.

The first thing that you may want to do is see what ports are listening on the localhost. The result can be useful if you can't connect to a particular service on the machine, such as a web or SSH server. Another common issue occurs when a daemon or service won't start because of something else listening on a port. The **ss** command is invaluable for performing these types of actions:

****\#*** *ss -tunlp4**

**Netid State Recv-Q Send-Q Local Address:Port Peer Address:Port**

**udp UNCONN 0 0 \*:68 \*:\* users:((\"dhclient\",pid=3167,fd=6))**

**udp UNCONN 0 0 127.0.0.1:323 \*:\*
users:((\"chronyd\",pid=2821,fd=1))**

**tcp LISTEN 0 128 \*:22 \*:\* users:((\"sshd\",pid=3366,fd=3))**

**tcp LISTEN 0 100 127.0.0.1:25 \*:\*
users:((\"master\",pid=3600,fd=13))**

Let's break down these flags:

-   **-t** - Show TCP ports.
-   **-u** - Show UDP ports.
-   **-n** - Do not try to resolve hostnames.
-   **-l** - Show only listening ports.
-   **-p** - Show the processes that are using a particular socket.
-   **-4** - Show only IPv4 sockets.

Taking a look at the output, we can see several listening services. The **sshd** application is listening on port 22 on all IP addresses, denoted by the **\*:22** output.

The **ss** command is a powerful tool, and a review of its brief man page can help you locate flags and options to find whatever you're looking for.

Maybe the application isn't listening, and we need to employ the previous troubleshooting steps using **ss** on the remote host---if we have access. Another possibility is a host or intermediate firewall that is filtering the traffic. We may need to work with the network team to verify Layer 4 connectivity across the path.

Telnet works fine for TCP, but what about UDP? The **netcat** tool provides a simple way to check a remote UDP port:

****\#*** *nc 192.168.122.1 -u 80**

**test**

**Ncat: Connection refused.**

**

The **netcat** utility can be used for many other things, including testing TCP connectivity. Note that **netcat** may not be installed on your system, and it's often considered a security risk to leave lying around. You may want to consider uninstalling it when you're done troubleshooting.

The examples above discussed common, simple utilities. However, a much more powerful tool is **nmap**. Entire books have been devoted to **nmap** functionality, so we won't cover it in this beginner's article, but you should know some of the things that it's capable of doing:

-   TCP and UDP port scanning remote machines.
-   OS fingerprinting.
-   Determining if remote ports are closed or simply filtered.

\
