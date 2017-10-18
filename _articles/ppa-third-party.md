---
layout: article
title: Apt - Keep PPAs Enabled when Upgrading Releases
description: >
    Upgrading to a new releases disables PPAs and third party repos.  Learn how to keep your PPA or third party repo enabled during upgrades.
keywords:
  - ppa
  - disabled
  - enabled
  - upgrade
  - dist upgrade
  - release upgrade
image: http://support.system76.com/images/system76.png
hidden: false
section: articles

---

Normally, all Person Package Archives (PPAs) and third-party repositories are disabled when updating to a new release of the operating system.  This helps keep upgrades simpler and prevents PPAs that haven't been properly updated for the new release from breaking the upgrade.

There are two ways to tell update-manager to keep PPAs enabled. The `AllowThirdParty = yes` configuration option tells update-manager to keep *all* third-party software repositories (repos) enabled. While useful for some users, this option is quite dangerous for a PPA maintainer to use, since it's impossible to test all combinations of repos a user may have added.

The other option, which until now has been little documented, is to add the repo you want to keep enabled in the `[ThirdPartyMirrors]` configuration section. This is useful for PPA and third-party repo maintainers who want or need to keep it enabled through upgrades. Be careful to test your PPA/repo and packages upgrade to make sure everything transitions correctly. Turning this on when your PPA/repo doesn't properly support the new release can break the upgrade.

### Creating Your Config File

Create a file in `/etc/update-manager/release-upgrades.d/` with a `.cfg` extension. You should give it a descriptive and unique name since other packages may provide their own config files.

### Enable All PPAs/Repos on Upgrade

Users who want to keep all PPAs/repos enabled can put the following into their `.cfg` file:

> \[Sources\]  
> AllowThirdParty = yes  

### Enable One Specific PPA/Repo

To keep one specific ppa/repo enabled, create a key = value pair inside a `[ThirdPartyMirrors]` section:

> \[ThirdPartyMirrors\]  
> myppa = http://ppa.launchpad.net/myppa/stable/ubuntu/  

The key can be any string as long as it's unique within the section. The value is the url of the ppa you want to keep enabled.  You can find this url in the `.list` file for the PPA, which can be found in `/etc/apt/sources.list.d/`.
