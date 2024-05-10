---
title: Manually Disable the ProtonVPN Permanent Kill Switch
description: >
  How to manually disable the ProtonVPN permanent kill Switch after refreshing Pop!_OS.
keywords:
  - Linux
  - Linux Terminal
  - VPN
  - System Recovery
  - Permanent kill switch
  - System76
  - Technical Support

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

ProtonVPN's kill switch will disable internet connectivity when you are not connected to a VPN server. This ensures the true IP address if your computer is never leaked to the internet. If the kill switch is set to `Permanent`, then your computer will be unable to connect to the internet, even if ProtonVPN isn't running (i.e., at system start up), the GUI application becomes inaccessible, or if ProtonVPN was improperly removed from the system.

![ProtonVPN Settings](images/fix-pvpn-killswitch/ProtonVPN-Settings.png)

![ProtonVPN Kill switch](images/fix-pvpn-killswitch/ProtonVPN-Killswitch.png)

> **NOTE:** ProtonVPN installs to the entire system; not just for a single user. If ProtonVPN is installed under another user account and has the kill switch enabled, other users will not be able to connect to the internet until ProtonVPN connects to a server.

<!-- v4 of ProtonVPN does not have a CLI version like v3 did per this support article: https://protonvpn.com/support/linux-vpn-setup/

We can enable this again (with new option(s) as needed when it is available again) .

## ProtonVPN GUI Application is Inaccessible

If the ProtonVPN GUI application suddenly becomes inaccessible, but you still have access to the system via the Terminal or TTY, you can use the `protonvpn-cli` program to disable the kill switch in the terminal (this is installed alongside the GUI application):

```bash
protonvpn-cli ks --off
```

-->

## Permanent Kill Switch Persists After System Refresh

Pop!\_OS's [Refresh Install](/articles/pop-recovery) feature is a convenient tool for recovering a broken installation while preserving some of the user's data.

Any applications installed outside of the `/home` directory will be removed, however; system configurations made by applications may persist. You may be unable to connect to the internet if you are using ProtonVPN and enabled the `Permanent Kill Switch` option.

### Manually Disabling the ProtonVPN Kill Switch

First, confirm the kill switch is still enabled using this command:

```bash
nmcli d status
```

![Permanent Killswitch Enabled](images/fix-pvpn-killswitch/confirm-with-nmcli.png)

The `CONNECTION` column may list either `pvpn-killswitch`, `pvpn-ipv6leak-protection`, or both. These can be removed with the following commands:

```bash
nmcli c delete pvpn-ipv6leak-protection 
nmcli c delete pvpn-killswitch
```

## See Also

- [Install and Use VPN in Pop!\_OS](/articles/use-vpn-software)
