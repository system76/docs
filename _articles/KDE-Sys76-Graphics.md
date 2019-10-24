---
layout: article
title: GUI Scripts for KDE Desktops
description: >
  This article is to provide a script and how to for those using ubuntu based os with KDE Plasma (Kubunt, Pop with Plasma, Neon etc) on System76 machines. 
image: 
keywords:
  - Graphics
  - Power
  - KDE
  - System76
hidden: false
section: 
---
This is for those that like to use KDE Plasma desktop session on their System76 machine and desire to have a GUI option for switching graphics cards between Nvidia and Intel.
To utilzie copy the text below into a text editor and save as a script file. Make the file executable.  
It is best to put an application launch shortcut to start this script.  Note it will have to be run as root.

      #!/bin/bash
      #CG is for current graphics
      #ngc is the new graphics card that will be used.

      cg=$(system76-power graphics)  #this assinges the current graphics card to the variable.

      #This section verifies which graphics card is in use and sets the correct hilight for radiobox.
      case "$cg" in

          intel)
              ngc=$(kdialog --radiolist "Your current grpahics card is hilighted.  Choose your Graphics Card:" 1 "Intel" on 2 "Nvidia" off --title "View and change graphics card" ;);
              ;;


          nvidia)
              ngc=$(kdialog --radiolist "Your current grpahics card is hilighted.  Choose which graphics card to use." 1 "Intel" off 2 "Nvidia" on  --title "View and change graphics card" ;);
              ;;

      esac;
      #the next section analyizes the user input.

      case "$?" in  #this case statement dtermines if opts were selected or if cancel was selected
          0) 
          case "$ngc" in # This case statement determins if you selected Intel or Nvidia

              1) # use Intel going forward
                  case "$cg" in #This case statement checks if  already using Intel and if so provides a message. If not runs the switch to Intel graphics card.

                      intel) 
                          kdialog --msgbox "you alreaddy are using the Intel card.  No change needed" ;

                          ;;

                      nvidia)
                          system76-power graphics intel ;
                          kdialog --msgbox "Grpahics card changed to Intel.  Reboot the PC to complete the graphics change" ; 
                          ;;
                  esac;
                  ;;
              2) #use Nvidia going forward
                  case "$cg" in # This case statement checks if already using Nvidia and if so provdies a message. If not runs the swtich to nvidia graphics card.

                      intel)
                          system76-power graphics nvidia ;
                          kdialog --msgbox "Grpahics card changed to Nvidia.  Reboot the PC to complete the graphics change" ;
                          ;;

                      nvidia)
                          kdialog --msgbox "you alreaddy are using the Nvidia card.  No change needed" ;
                          ;;
                  esac;
                  ;;
              *)
                  kdialog --error "ERROR";
                  ;;
          esac;
          ;;

          1) 
              kdialog --sorry "You chose cancel" ;
              ;;
          esac;
          ;;

          *)
              kdialog --error "ERROR";
              ;;
          esac
          ;;
      esac;


When you run this script a GUI screen is dispalyed asking you to select between Intel and NVIDIA graphics. 
Image to be added on next edit.

Once the selection is made a mesage stating chagne is completed is displayed.  Once this message is displayed reboot the machine for the changes to take affect.
Image to be added on next edit.

Messages shwing you canceled out of the initial screen or if you clcik ok to chagne to your current graphics card a message is dispalyed saying no changes necessary. 
Image to be added on next edit.


