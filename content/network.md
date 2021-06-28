---
title: Networking Diagnosis (TCP/IP Stack)
description: Instructions on how to help diagnose networking issues.
keywords:
  - Support
  - networking
  - command line
  - diagnosis

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: network-troubleshooting
---

# Networking Diagnosis (TCP/IP Stack)

When your internet goes down at home most people would call up their internet provider and go through a list of things to check before (usually) admitting that the problem is on their end.

This article will try to help you out by showing various commands to diagnosis typical network issues.

Pinpointing what specifically is causing network issues can be a tricky task.  Let's go over some useful commands that can help track down network problems.
For this article we will be working with TCP/IP networking commonly used with communication over the internet.


#### A quick review of the TCP/IP model

Communication on the internet is done over TCP/IP which is short for Transmission Control Protocol / Internet Protocol.  The IP portion is the internet address or domain name telling the application what computer or server to connect to.  The TCP portion handeles the actual connecting and error control.
First, let's take a moment to review the fundamentals of the TCP/IP network model.

In order, the layers in the TCP/IP network model include:

-   **Layer 5:** Application
-   **Layer 4:** Transport
-   **Layer 3:** Network/Internet
-   **Layer 2:** Data Link
-   **Layer 1:** Physical

Knowing where to start troubleshooting network issues can differ based on the scenario. For example, let's say you can ssh to a remote server, but that server can't connect to a MySQL database, the problem is unlikely to be the physical or data link layers on the local server.

In most cases it's a good idea to start at the top most layer (the application layer), and then troubleshoot each other layer until we have narrowed down the issue.

This article is organized into sections each focusing on one of these layers except for the Application layer because that could mean having to debug source code.

Now that we have a very brief understanding, let's jump to the command line and get working on diagnosing network issues.

## Layer 4: The transport layer

The transport layer consists of the TCP and UDP protocols, with TCP being a connection-oriented protocol and UDP being connectionless.  What that means is with TCP you get error correction but with UDP you basically just hope your data arrrived ok.

Applications listen on **sockets**, which are made up of an IP address and a port number. Network traffic heading to an IP address on a specific port will be directed to the application that is listening by the Linux kernel.

The first thing that you may want to do is see what ports are listening on the localhost. This output can be useful if you can't connect to a particular service on the computer, such as a web or ssh server.
Another common issue occurs when a daemon or service won't start because of something else already listening on that port.

The **ss** command is great for doing these kind of operations.

The **ss** command is a powerful tool, and a review of its man page (**man ss**) can help you locate flags and options to find whatever you're looking for.

Let's break down some of these options:

-   **-t** - Show TCP ports.
-   **-u** - Show UDP ports.
-   **-n** - Do not try to resolve hostnames.
-   **-l** - Show only listening ports.
-   **-p** - Show the processes that are using a particular socket.
-   **-4** - Show only IPv4 sockets.


 SS Command:

```bash
ss -tunlp4
```

Output:

```
Netid   State    Recv-Q   Send-Q     Local Address:Port       Peer Address:Port   Process
udp     UNCONN   0        0                0.0.0.0:60803           0.0.0.0:*
udp     UNCONN   0        0          127.0.0.53%lo:53              0.0.0.0:*
udp     UNCONN   0        0                0.0.0.0:111             0.0.0.0:*
udp     UNCONN   0        0                0.0.0.0:631             0.0.0.0:*
udp     UNCONN   0        0            224.0.0.251:5353            0.0.0.0:*       users:(("chrome",pid=5599,fd=267))
udp     UNCONN   0        0                0.0.0.0:5353            0.0.0.0:*
tcp     LISTEN   0        1024           127.0.0.1:42787           0.0.0.0:*       users:(("python3",pid=7522,fd=7))
tcp     LISTEN   0        50               0.0.0.0:139             0.0.0.0:*
tcp     LISTEN   0        4096             0.0.0.0:111             0.0.0.0:*
tcp     LISTEN   0        4096       127.0.0.53%lo:53              0.0.0.0:*
tcp     LISTEN   0        128              0.0.0.0:22              0.0.0.0:*
tcp     LISTEN   0        5              127.0.0.1:631             0.0.0.0:*
tcp     LISTEN   0        50               0.0.0.0:445             0.0.0.0:*
```


Looking at the output, we can see several listening services. The **sshd** application is listening on port 22 on all IP addresses, as the text **0.0.0.0:22** shows.

Here's another scenario, let's say the application isn't listening for some reason, and we need to use the previous troubleshooting steps (again using **ss**) on the remote host; that is if we have access.
Another possibility is a host or firewall that is filtering network traffic. We may need to work with the networking team to verify Layer 4 connectivity across the path.

For UDP we will want to use the **netcat** tool.  This tool gives a simple way to check a remote UDP port.

NOTE: the **netcat** utility can be used for many other things, including testing TCP connectivity. Note that **netcat** may not be installed on your system, and it's often considered a security risk to leave lying around. You may want to consider uninstalling it when you're done troubleshooting.

Netcat Command:

```bash
nc 192.168.122.1 -u 80
```

Output:

```
test

Ncat: Connection refused.
```



The examples above discussed common, simple utilities. However, a much more powerful tool is **nmap**. Entire books have been devoted to **nmap** functionality, so we won't cover it in this article, but you should know some of the things that it's capable of doing:

-   TCP and UDP port scanning remote machines.
-   OS fingerprinting.
-   Determining if remote ports are closed or simply filtered.

There are more advanced programs such as **tcpdump** and **wireshark** but go far beyond the scope of this article.

## Layer 3: The network/internet layer

Layer 3 involves working with IP addresses. IP addresses are like the street address of your computer on a TCP/IP network. Instead of specifying an address, DNS servers are used so you can say "Dave's house" instead of the actual street address.

On the internet it works like this:

Users can go to "https://google.com" instead of "https://###.###.##.##:####"


#### **IP Command**

In this 3rd layer, one of the first steps to troubleshooting is checking a computer's IP address, which can be done with the command **ip address**, again making use of the **-br** flag to simplify the output:

IP Command:

```bash
ip -br address show
```

Output:

```
lo UNKNOWN 127.0.0.1/8 ::1/128
enp57s0f1 UP 10.0.0.88/24 2601:280:c201:62e0::d739/128 2601:280:c201:62e0:faf5:8f8e:6231:f74d/64 2601:280:c201:62e0:911a:b5f0:fd3b:bff4/64 fe80::2800:8af9:35f1:d04a/64
wlp0s20f3 UP 192.168.0.110/24 2601:280:c201:62e0::b250/128 2601:280:c201:62e0:ad8d:4de2:cdd9:6386/64 2601:280:c201:62e0:173:f8b7:1973:5e25/64 fe80::b9d0:8c20:e248:7bf5/64
```

We can see that our enp57s0f1 (ethernet) interface has an IPv4 address of 10.0.0.88. If we didn't have an IP address (or if we had an invalid, self-assigned IP address), then we'd want to troubleshoot that issue.

The lack of an IP address can be caused by a local misconfiguration, such as an incorrect network interface config file, or it can be caused by problems with the DHCP server. The wlp0s20f3 interface (Wi-Fi) has a different IP address on the local network.

#### **Ping**

The most common tool used to troubleshoot Layer 3 is the **ping** utility. Ping sends an ICMP Echo Request packet to a remote host, and it expects an ICMP Echo Reply in return. ICMP stands for Internet Control Message Protocol and only lives in Layer 3.
If you're having connectivity issues to a remote computer, **ping** is a common utility to begin your troubleshooting. Executing a simple ping from the command line sends ICMP echoes to the remote host indefinitely; you'll need to <kbd>CTRL</kbd> + <kbd>C</kbd> to end the ping or pass the `-c #` flag, like so:

Ping Command:

```bash
ping -c 4 www.system76.com
```

Output:

```
PING www.system76.com(2600:9000:2177:4800:7:bfae:340:93a1 (2600:9000:2177:4800:7:bfae:340:93a1)) 56 data bytes
64 bytes from 2600:9000:2177:4800:7:bfae:340:93a1 (2600:9000:2177:4800:7:bfae:340:93a1): icmp_seq=1 ttl=52 time=14.7 ms
64 bytes from 2600:9000:2177:4800:7:bfae:340:93a1 (2600:9000:2177:4800:7:bfae:340:93a1): icmp_seq=2 ttl=52 time=11.8 ms
64 bytes from 2600:9000:2177:4800:7:bfae:340:93a1 (2600:9000:2177:4800:7:bfae:340:93a1): icmp_seq=3 ttl=52 time=16.4 ms
64 bytes from 2600:9000:2177:4800:7:bfae:340:93a1 (2600:9000:2177:4800:7:bfae:340:93a1): icmp_seq=4 ttl=52 time=14.9 ms

--- www.system76.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3005ms
rtt min/avg/max/mdev = 11.833/14.465/16.401/1.653 ms

```

Notice that each ping includes the amount of time it took to a response back.

> **NOTE:** many network components (such as routers) block ICMP packets as a security precaution. Another common pitfall is relying on the time field as an proof of network latency however ICMP packets can be rate limited by network components between you and the destination, and they shouldn't be relied upon to provide accurate application latency values.

#### **My Traceroute (MTR)**

The next tool in the Layer 3 troubleshooting tool belt is the **mtr** command. This command doesn't come preinstalled so with Ubuntu nor Pop so we'll need to install it with the command **sudo apt install mtr-tiny**.

Mtr is short for "My Traceroute" and by default will show an autoupdated output. To quit mtr simply hit the 'q' key.

Mtr takes advantage of the Time to Live (TTL) field in IP packets to determine the path that traffic takes to its destination. Mtr will send out one packet at a time, beginning with a TTL of one. Since the packet expires in transit, the upstream router sends back an ICMP Time-to-Live Exceeded packet. Mtr then increments the TTL to determine the next hop.  Unlike the original traceroute command, mtr is more user interactive. To make mtr act more like traceroute we can use the -r option.

The resulting output is a list of intermediate routers that a packet traversed on its way to the destination:

MTR Command:

```bash
mtr -r -c 1 www.system76.com
```

Output:
```
Start: 2021-06-04T15:18:53-0600

HOST: system76-pc                 Loss%   Snt   Last   Avg  Best  Wrst StDev
  1.|-- 10.17.89.1                 0.0%     1    8.6   8.6   8.6   8.6   0.0
  2.|-- 209.212.58.89              0.0%     1    3.4   3.4   3.4   3.4   0.0
  3.|-- 209.212.63.169             0.0%     1    2.9   2.9   2.9   2.9   0.0
  4.|-- 209.212.49.26              0.0%     1    8.0   8.0   8.0   8.0   0.0
  5.|-- 206.51.46.87               0.0%     1    3.8   3.8   3.8   3.8   0.0
  6.|-- 52.93.74.88                0.0%     1    5.9   5.9   5.9   5.9   0.0
  7.|-- 52.93.74.229               0.0%     1   15.7  15.7  15.7  15.7   0.0
 ...

```

> **NOTE:** It's important to understand MTR's limitations. As with ICMP, routers or other network devices may filter the packets that **mtr** relies on, such as the ICMP Time-to-Live Exceeded message.  More importantly, the path that traffic takes to and from a destination can change and no two traces can be the same.  Mtr can mislead you into thinking that your traffic takes a nice straight path to and from its destination, but this is not always the case. Traffic may follow a different return path, and paths can change dynamically for many reasons (such as a backhoe cutting through a major internet cable). While **mtr** may provide accurate path representations in small networks, it often isn't accurate when trying to trace across large networks or the internet.

Another common issue that you'll likely run into is a lack of a gateway for a particular route or a lack of a default route.  When an IP packet is sent to a different network, it must be sent to a gateway for further processing. The gateway should know how to route the packet to its final destination. The list of gateways for different routes is stored in a **routing table**, which can be inspected and manipulated using **ip route** commands. Routers are the most common gateway devices.

#### **IP Route Show**

We can print the routing table using the **ip route show** command:

IP Route Show Command:

```bash
ip route show
```

Output:

```
default via 10.0.0.1 dev enp57s0f1 proto dhcp metric 100
default via 10.0.0.1 dev wlp0s20f3 proto dhcp metric 600
10.0.0.0/24 dev enp57s0f1 proto kernel scope link src 10.0.0.88 metric 100
192.168.0.0/24 dev wlp0s20f3 proto kernel scope link src 192.168.0.1 metric 600
169.254.0.0/16 dev enp57s0f1 scope link metric 1000
```

On this system there is both WiFi (wlp0s20f3) and Ethernet (enp57s0f1) network interfaces. The metric number tells the system which interface to use first; the lower number will be used first then the next lower etc.

Simple networks often just have a default gateway configured, represented by the \"default\" entry at the top of the table. A missing or incorrect default gateway is a common issue.

If our network is more complex then we will require different routes for different networks.  We can check the route for a specific prefix with the `ip route show [address]` command:

IP Route (with IP Address) Command:

```bash
ip route show 10.0.0.0/24
```

Output:

```
10.0.0.0/24 dev enp57s0f1 proto kernel scope link src 10.0.0.88 metric 100
192.168.0.0/24 dev wlp0s20f3 proto kernel scope link src 10.0.0.161 metric 600
```

In the example above, we are sending all traffic destined to the 10.0.0.0/24 network to a different gateway (10.0.0.88).

### DNS

> **NOTE:** While not a Layer 3 protocol, it's worth mentioning DNS while we're talking about IP addressing. Among other things, the Domain Name System (DNS) translates IP addresses into human-readable names, such as **www.system76.com**. DNS problems are extremely common, and they are sometimes opaque to troubleshoot. Plenty of books and online guides have been written on DNS, but we'll focus on the basics here.

A telltale sign of DNS trouble is the ability to connect to a remote host by IP address but not its hostname. Performing a quick `host` on the hostname can tell us quite a bit (`host` is part of the `bind9-host` package on Ubuntu / Pop!\_OS Linux based systems):

Host Command:
```bash
host www.system76.com
```

Output:
```
www.system76.com has address 143.204.26.70
www.system76.com has address 143.204.26.20
www.system76.com has address 143.204.26.22
www.system76.com has address 143.204.26.56
www.system76.com has IPv6 address 2600:9000:2198:c400:7:bfae:340:93a1
www.system76.com has IPv6 address 2600:9000:2198:a000:7:bfae:340:93a1
www.system76.com has IPv6 address 2600:9000:2198:800:7:bfae:340:93a1
www.system76.com has IPv6 address 2600:9000:2198:5600:7:bfae:340:93a1
www.system76.com has IPv6 address 2600:9000:2198:3a00:7:bfae:340:93a1
www.system76.com has IPv6 address 2600:9000:2198:a400:7:bfae:340:93a1
www.system76.com has IPv6 address 2600:9000:2198:8400:7:bfae:340:93a1
www.system76.com has IPv6 address 2600:9000:2198:7c00:7:bfae:340:93a1
```

The output above shows the resulting IPv4 addresses as well as IPv6.

## Layer 2: The data link layer

The data link layer is responsible for **local** network connectivity; the communication of frames between hosts on the same Layer 2 (commonly called a local area network, or LAN).
The most relevant Layer 2 protocol for most sysadmins is the [Address Resolution Protocol (ARP)](https://en.wikipedia.org/wiki/Address_Resolution_Protocol), which maps Layer 3 IP addresses to Layer 2 Ethernet MAC addresses. When a host tries to contact another host on its local network (such as the default gateway, e.g. the router), it will more than likely have the other host's IP address, but it doesn't know the other host's MAC address. ARP resolves this issue and figures out the MAC address for us.

A common problem you might encounter is an ARP entry that won't populate, particularly for your host's default gateway. If your localhost can't successfully resolve its gateway's Layer 2 MAC address, then it won't be able to send any traffic to remote networks. This problem might be caused by having the wrong IP address configured for the gateway, or it may be another issue, such as a mis-configured switch port.

We can check the entries in our ARP table with the **ip neighbor** command:

IP Neighbor Command:

```bash
ip neighbor show
```

Output:
```
10.0.0.1 dev enp57s0f1 lladdr ae:db:48:6a:78:35 REACHABLE
10.0.0.87 dev enp57s0f1 lladdr c4:1c:ff:5b:82:e7 REACHABLE
192.168.0.110 dev wlp0s20f3 lladdr ae:db:48:6a:78:35 REACHABLE
fe80::acdb:48ff:fe6a:7835 dev enp57s0f1 lladdr ae:db:48:6a:78:35 router REACHABLE
```

> **NOTE:** that the gateway's MAC address is populated. If there was a problem with ARP, then we would see a resolution failure:
>```bash
>ip neighbor show
>```
>Output:
>```
>10.0.0.87 dev enp57s0f1 FAILED
>```
> This output indicates there is a resolution issue with ARP. This could happen for a variety of reasons. For example, let's say that your networking team just replaced the gateway router (which is your server's default gateway). The MAC address may have changed as well since MAC addresses are hardware addresses that are assigned at the factory.

## Layer 1: The physical layer

We often take the physical layer for granted (\"is the Ethernet cable plugged in?\"), but we can easily troubleshoot physical layer problems from the Linux command line.

### IP Link

Let's start with the most asked question: Is our physical interface up? For this we will be using the **ip** command.

The `ip link show` command tells us:

IP Link Command:

```bash
ip link show
```

Output:

```
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00

2: enp57s0f1: <BROADCAST,MULTICAST,DOWN,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
link/ether 80:fa:5b:6a:36:d2 brd ff:ff:ff:ff:ff:ff

3: wlp0s20f3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP mode DORMANT group default qlen 1000
link/ether 18:56:80:54:60:2d brd ff:ff:ff:ff:ff:ff
```

Notice the indication of DOWN in the above output for the enp57s0f1 interface. This result means that Layer 1 isn't coming up. We might try troubleshooting by checking the cabling or the remote end of the connection (e.g., the switch) for problems.

Before you start checking cables, though, it's a good idea to make sure that the interface isn't just disabled. Running a command to bring the interface up can rule this problem out:

```bash
ip link set enp57s0f1 up
```

The output of `ip link show` can be difficult to parse at a quick glance. Luckily, the `-br` switch prints this output in a much more readable table format:

Command:

```bash
ip -br link show
```

Output:

```
lo UNKNOWN 00:00:00:00:00:00 <LOOPBACK,UP,LOWER_UP>

enp57s0f1 UP 52:54:00:82:d6:6e <BROADCAST,MULTICAST,UP,LOWER_UP>
```

It looks like `ip link set enp57s0f1 up` did the trick, and the Ethernet interface enp57s0f1 is up and running again.

These commands are great for troubleshooting obvious physical problems, but what about more disasterous issues? Interfaces can be misconfigured for the incorrect speed, or collisions (besides those inherent with Ethernet) and physical layer problems can cause packet loss or corruption that results in retransmissions.

We can use the `-s` flag with the `ip` command to print additional statistics about an interface. The output below shows an interface, with only a few dropped receive packets and no other signs of physical layer issues:

Command:

```bash
ip -s link show
```

Output:

```

1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
RX: bytes packets errors dropped overrun mcast
59936876 240745 0 0 0 0
TX: bytes packets errors dropped carrier collsns
59936876 240745 0 0 0 0

2: enp57s0f1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
link/ether 80:fa:5b:6a:36:d2 brd ff:ff:ff:ff:ff:ff
RX: bytes packets errors dropped overrun mcast
1112252684 1034902 0 31 0 83303
TX: bytes packets errors dropped carrier collsns
104281528 449635 0 0 0 0

3: wlp0s20f3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP mode DORMANT group default qlen 1000
link/ether 18:56:80:54:60:2d brd ff:ff:ff:ff:ff:ff
RX: bytes packets errors dropped overrun mcast
966902 4513 0 2 0 0
TX: bytes packets errors dropped carrier collsns
636200 4239 0 0 0 0
```
# Conclusion

<!-- add "and Further Reading" at a later date -->

These tools should help get things back up and running but are not the only tools.  As stated earlier, other programs are available for troubleshooting networking issues. For example,  `wireshark` is another great tool for finding problems with your network but is beyond the scope of this article.
