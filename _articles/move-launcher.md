---
layout: article
title: Ubuntu - Move the Launcher In 16.04+
description: >
    Ubuntu 16.04 LTS introduced a way to move the Unity Launcher to the bottom of your display. Learn how to do that (and how to move it back).
keywords:
    - Unity
    - Unity 7
    - Launcher
    - Bottom
    - Left
    - Moving
image: http://support.system76.com/images/system76.png
hidden: false
redirect_from:
  - /moveLauncher
  - /movelauncher
section: articles

---

Ubuntu 16.04 LTS and later includes the ability to move the Launcher at the left to the bottom edge of the screen in Unity. If you'd like to put the launcher at the bottom of the screen, then press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd> to open a terminal window, then enter in this command:

```
gsettings set com.canonical.Unity.Launcher launcher-position 'Bottom'
```

![Setting the Launcher to the bottom](/images/move-launcher/Step-1.png)

This will set the launcher to the bottom of the screen:

![Lanncher on the bottom](/images/move-launcher/Step-2.png)

To reset the position of the launcher to the left, run this command instead:

```
gsettings set com.canonical.Unity.Launcher launcher-position 'Left'
```

![Resetting the Launcher](/images/move-launcher/Step-3.png)
