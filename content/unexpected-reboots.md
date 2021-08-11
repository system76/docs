# Unexpected Reboots

If your system is spontaneously rebooting, this article provides steps to isolate the cause.

> **NOTE:** There is a subtle but important difference between a reboot and a shutdown/power-off. In a reboot, parts of the system are left powered on to faciliate restarting the system. In a shutdown/power-off voltage is removed from all parts of the system except charging circuitry if the AC Adapter is connected.

### RAM Issues

The first step in the boot process is to assess the available hardware and load required resources into memory.

If your system is not POSTing (Power On Self Test), typically you'll get symptoms like the following:

1. The system powers on, but nothing loads.

2. The system gets to a splash screen/logo, but crashes shortly afterwards. 

It may may it to a login screen or desktop, but the system is unstable.

This usually indicates an issue with RAM (Random Access Memory). Despite the name, the system tends to use similar areas of RAM when booting (for example, the RAM module in Slot 1 is accessed first). The earlier in the boot process the system hits bad sectors of RAM, the sooner the system will freeze or reboot.

If the system is booting to a desktop, the first troubleshooting step is to run stress tests on the memory. If the stress test completes, it will show error messages for your RAM. If the test doesn't complete it will likely trigger the issue, and indicate that RAM is to blame.

**To Test RAM**

The application Memtester can be used to scan the RAM sticks for bad sectors. Memtester can be run from your booted OS, or from a Live Environment. This can be a Live USB, or the Recovery Partition:

1. Install Memtester

Open a `Terminal` with <kbd>SUPER</kbd>+<kbd>T</kbd> (Pop!\_OS) or <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd> (Ubuntu) run the following commands:

```bash
sudo apt update
sudo apt install memtester
```

The first command will make sure your package lists are up to date.
The second will install the application memtester.

2. Once memtester is installed, instruct it to test **most** of the RAM, leaving enough for the OS to continue running.

For example, if your system has 16GB of RAM, test 12GB or 14GB.

To start the test, run these `Terminal` commands:

```bash
sudo memtester 12GB 3 > ~/memtester.txt
```

This command will run memtester and test 12GB of RAM 3 times, then save the output to a file called "memtester.txt" in your Home folder.

> **NOTE:** Close all applications other than terminal when you run memtester. This will likely take a few hours (the application runs multiple passes over the memory) so it would be best to run it over night.



### Thermals

Modern hardware is designed to shut systems down when they reach temperatures that may be damaging to the internal components. Typically these thresholds are in the upper 80s or 90s Celsius, depending on hardware.

If your system is spontaneously shutting down, this may be caused by overheating. Systems with dedicated GPUs tend to run hot under normal circumstances, so noticing an overheating problem can be challenging from ambient temperature alone. 

The temperatures of your CPU cores and GPU card can be check through software.

**Run `lm-sensors`**

`lm-sensors` (installed by default on Pop!\_OS) is a text-based tool that runs in a `Terminal`.

1. Install `lm-sensors` (If not installed)

```bash
sudo apt update
sudo apt install lm-sensors
```

2. Get Sensor Output

```bash
sensors
```

This command will generate output like this:

```
coretemp-isa-0000
Adapter: ISA adapter
Package id 0:  +55.0°C  (high = +100.0°C, crit = +100.0°C)
Core 0:        +53.0°C  (high = +100.0°C, crit = +100.0°C)
Core 1:        +53.0°C  (high = +100.0°C, crit = +100.0°C)
Core 2:        +53.0°C  (high = +100.0°C, crit = +100.0°C)
Core 3:        +53.0°C  (high = +100.0°C, crit = +100.0°C)
Core 4:        +55.0°C  (high = +100.0°C, crit = +100.0°C)
Core 5:        +53.0°C  (high = +100.0°C, crit = +100.0°C)
Core 6:        +52.0°C  (high = +100.0°C, crit = +100.0°C)
Core 7:        +54.0°C  (high = +100.0°C, crit = +100.0°C)

system76_acpi-acpi-0
Adapter: ACPI interface
CPU fan:        0 RPM
GPU fan:        0 RPM
CPU temp:     +55.0°C  
GPU temp:     +54.0°C  

iwlwifi_1-virtual-0
Adapter: Virtual device
temp1:        +69.0°C  

pch_cometlake-virtual-0
Adapter: Virtual device
temp1:        +60.0°C  

BAT0-acpi-0
Adapter: ACPI interface
in0:          12.95 V  
curr1:         0.00 A  
```

**Psensor**

If you prefer a GUI tool which provides graphing over time. The application Psensor can be installed from the Pop!\_Shop, or through the `Terminal` with this command:

1. Install (`Terminal`):

```bash
sudo apt install psensor
```

2. Install Through Pop!\_Shop

[SCREENSHOT]

3. Run Psensor:

In a `Terminal` run:

```bash
psensor
```

Or, to launch through the OS interface, click on "Activities" in the top-left (Pop!\_OS 20.04 LTS, or Ubuntu), or "Applications" (Pop!\_OS COSMIC) and search for "Psensor"

[SCREENSHOT]

**High Temperatures**

If the system temperatures are abnormally high, the fans may need replaced, and/or the thermal compound may need reapplied to the CPU and GPU cores.

Specific instruction for working on your hardware model can be found here: [LINK]

Quotes for replacement fans and thermal paste can be generated on open support tickets. To open a support ticket, visit: [LINK]

### Power Delivery

On System76 laptops, the charging circuitry, and power circuitry are partially independent from each other. The system will power on and function normally with the battery removed. This means that a spontaneous power-off could be caused by either a problem with the AC Adapter, or the Battery.

#### **Battery**

As lithium-ion batteries age, their ability to hold a charge, and accurately report charging estimates deteriorates. 

For example, the OS may be reporting that the laptop has enough charge to stay on for another hour, but in reality the battery may fully discharge in 15 minutes. This situation can lead to spontaneous shutoffs that do not immediately appear to be battery related. 

**Battery Statistics**

Battery statistics can be retrieved using the following `Terminal` command:

```bash
upower -d
```

That will generate output like this: 

```
Device: /org/freedesktop/UPower/devices/line_power_AC
  native-path:          AC
  power supply:         yes
  updated:              Wed 11 Aug 2021 10:13:38 AM MDT (6762 seconds ago)
  has history:          no
  has statistics:       no
  line-power
    warning-level:       none
    online:              yes
    icon-name:          'ac-adapter-symbolic'

Device: /org/freedesktop/UPower/devices/battery_BAT0
  native-path:          BAT0
  vendor:               Notebook
  model:                BAT
  serial:               0001
  power supply:         yes
  updated:              Wed 11 Aug 2021 12:05:38 PM MDT (42 seconds ago)
  has history:          yes
  has statistics:       yes
  battery
    present:             yes
    rechargeable:        yes
    state:               fully-charged
    warning-level:       none
    energy:              69.54 Wh
    energy-empty:        0 Wh
    energy-full:         70.1784 Wh
    energy-full-design:  70.68 Wh
    energy-rate:         25.6956 W
    voltage:             12.953 V
    percentage:          99%
    capacity:            99.2903%
    technology:          lithium-ion
    icon-name:          'battery-full-charged-symbolic'

Device: /org/freedesktop/UPower/devices/DisplayDevice
  power supply:         yes
  updated:              Wed 11 Aug 2021 10:33:38 AM MDT (5562 seconds ago)
  has history:          no
  has statistics:       no
  battery
    present:             yes
    state:               fully-charged
    warning-level:       none
    energy:              69.54 Wh
    energy-full:         70.1784 Wh
    energy-rate:         25.6956 W
    percentage:          99%
    icon-name:          'battery-full-charged-symbolic'

Daemon:
  daemon-version:  0.99.11
  on-battery:      no
  lid-is-closed:   no
  lid-is-present:  yes
  critical-action: HybridSleep
```

Specific sections to pay attention to are `capacity`, `energy-full`, and `energy-full-design`. These indicate how well the battery is aging, and assessing it's own charging capabilities.

```
    energy-full:         70.1784 Wh
    energy-full-design:  70.68 Wh
```

`energy-full` should never be higher than `energy-full-design`. If it is, that indicates a problem with the integrated chip on the battery, and may be why charging reports are incorrect, and why, by extension, the system is shutting off unexpectedly. 

`capacity` is a good way to gauge the age and health of the battery. If capacity is 70% or lower, the battery is showing aging, and won't hold as much charge as it did when new. This number will gradually decrease over time.

#### **AC Adapter**

There are four (4) main components that can be the cause of spontaneous shut-offs related to the AC Adapter:

1. The cable from the wall outlet to the PSU/"brick".
2. The PSU/"brick" and the DC cable to the laptop.
3. DC-In Port on the laptop.
4. Charging circuitry on the mainboard.

Stress to the cabling, or short-circuits on components 1 or 2 can cause shut-offs. If the cable is moved while connected and the damaged part of the cable shifts enough, current into the laptop is interrupted. If the battery is removed, or no longer holding a charge, this can cause the system to power down.

Removing the battery, connecting the AC adapter and moving the cable components one section at a time can reveal which part of the cabling may need replaced.

If moving the plug in the DC-In port on the laptop specifically causes the issue, it's more likely that the DC-In port needs replaced or resoldered onto the board.

Both the DC-In port and issues with the mainboard charging circuitry require systems to be brought in for repairs.

### Drive Issues

### Software Causes


## Laptop Specific Troubleshooting

There are several reasons why a laptop may spontanously reboot. Typically it has to do with a thermal or power delivery issue, but it can also be caused by faults in the memory modules or errors with the drive. RAM and disk problems are more likely to cause a spontaneous reboot. Thermals or power delivery-issues are more likely to cause spontaneous shut-offs.



## Desktop Specific Troubleshooting

### RAM Issues

### Thermals

### Power Supply Unit (PSU)

### Drive Issues

### Software Causes
