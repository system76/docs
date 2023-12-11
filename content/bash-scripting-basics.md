---
title: Bash Scripting Basics
description: >
   Creating scripts using Bash.
keywords:
  - bash
  - script

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: about-your-os
tableOfContents: true
---

We will be writing a script for [BASH (Bourne Again Shell)](https://en.wikipedia.org/wiki/Bash_(Unix_shell)). There are many different languages and tools to create scripts for your tasks. Some languages are better suited for specific tasks than others. Bash is a great starting point, as it uses the same language as your built in terminal commands that already exist in your Linux OS.

**NOTE:** This tutorial assumes you are running Pop!_OS or Ubuntu, but the script will work on any Linux/Unix OS with Bash.

## Creating a working script

There are 2 important details for writing a Bash script that make it functional. The first is called the [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)). The shebang tells your OS what scripting language is being used (in this case, we are using Bash). The shebang is usually the first line in the script.

Open your text editor of choice (I will be using <u>gedit</u>, as it comes with Pop!_OS by default). In the text editor, add the following line to as the very first line in your script:

```
#!/usr/bin/env bash
```

The line above is the shebang. There are many ways to create scripts, and the shebang will be crucial for the OS to handle your script correctly.

Let's create a directory to save your scripts. This will keep your Home directory tidy, and also keep a dedicated place for things you are working on. In my case, I have chosen to create a directory named `scripts` in my Home directory. Next, let's save our script that we are writing to this newly created `~/scripts/` directory. You can name this script whatever you like, but for the sake of this tutorial, I am going to name this script `basics.sh`. Note that I gave the file a `.sh` extension. This is not necessary for the script to work, but it will help you as a user know that this is a Bash script because it ends with `.sh`. Other scripting languages use similar naming conventions (Python scripts end with `.py`, or LUA scripts end with `.lua`).

The second crucial detail for your OS to properly run your script is to make it executable. As of right now, your script is just a regular text file. In order for your OS to run your script, we will need to make this text file executable. This can be done by navigating to our `~/scripts/` directory with our File Manager. Once you locate your script file, right click on the file to bring up with context menu and select "Properties". This will bring up the various details about the file we are looking at. Click on the tab labelled "Permissions". There will be a checkbox labelled "Allow executing file as program". Make sure to check this box. Once this is enabled, the script will be able to run.

At the moment, the script will do nothing if we decided to execute it, so let's add some commands and then test our script. Open the script and add the following line below your first `shebang` line:

```bash
echo "The script executed correctly."
```

We can now attempt to run our script. Open the terminal from your Application Launcher. I am going to assume that you have followed along and created a directory in your Home directory called `scripts` and that you have named this script `basics.sh` (if you have placed it in a separate directory or named it differently, the steps are the same, but you must substitute the file names and paths). First, we need to navigate in our terminal to our `scripts` directory. Input the following command in your terminal to change directory to `~/scripts`:

```bash
cd ~/scripts
```

You can now run your script by running the following command in your terminal:

```bash
./basics.sh
```

If it worked, your terminal should output the following line:

`The script executed correctly.`

Congratulations! You have created a working Bash script. Of course, outputting a single line does not provide much functionality, so we will be doing just that in the next section.

## Adding functionality

At this point, our script does one thing: It outputs a single line in our terminal. The script works, but it isn't very useful yet. There are many things you can do with a script, especially once you start combining several commands together. Here are some websites that can be helpful in the search for more commands:

- [Stack Overflow](https://stackoverflow.com)
- [AskUbuntu](https://askubuntu.com)

Once you find commands that you want to add to your script, you can run them in a terminal to test them and see how they work.

It may also be helpful to read the *manual pages* (often shortened to "man pages") for commands that you're using. To view a command's manual page, simply run `man command` where "command" is substituted for the command you are looking up. To exit the manual page viewer, hit the `q` key.

### Variables

Let's start with asking the user for information like their name and favorite color. In order to output this information, we will need to first ask for this input, and then after it is input, we will store the information into a `variable`. Variables can hold values, and can be changed after the variable is created, so you can adjust values later on.

In our script file, we should have 2 lines already created: the shebang and our `echo` command that outputs a line. Let's change the `echo` command to match the "theme" of our script. Open the script in your text editor and edit the 2nd line with the `echo` command to ask the user for their First Name:

```bash
echo "What is your first name?"
```

Next, we will be using the `read` command to allow the user to input text. The text they enter will be stored in a variable that we can choose the name of. In this case, we will call the variable `firstName`. You can name the variable whatever you would like, but be sure to adjust your script accordingly. In our text editor, create a new line below our first `echo` command and input the following line:

```bash
read firstName
```

If we were to run our script in our terminal, it will first output a line that asks "What is your first name?". It will then sit and wait for the user to input text. Once the user inputs text and presses Enter, the script will end. We have not given the script any commands to use this information that the user has input. Let's add some output that shows what the user has typed in their terminal. Add a new line to your script:

```bash
echo "Your first name is: $firstName"
```

Notice that in order to use our `firstName` variable, we use the `$` in front of it. This will tell our terminal that we intend to use the variable called `firstName`. If I were to run the script, it will ask for my first name. I will input the name "Garrett", and the script will then output the following line:
`Your first name is: Garrett`

Now, let's add another question to this script. This time, we will ask for the user's favorite color. We will then use the `read` command again to get user input and store it in a variable called `favoriteColor` and then finally output a sentence that shows what the user input:

```bash
echo "What is your favorite color?"
read favoriteColor
echo "Your favorite color is: $favoriteColor"
```

At this point, you should have a working script that asks the user for their name and their favorite color and then reacts to this information by outputting a sentence that reflects this information. The full script at this point should look like this:

```bash
#!/usr/bin/env bash
echo "What is your first name?"
read firstName
echo "Your first name is: $firstName"
echo "What is your favorite color?"
read favoriteColor
echo "Your favorite color is: $favoriteColor"
```

### If-Then Statements

Sometimes we want different things to happen depending on what inputs/variables are stored. For instance: if a file exists, then do *a*, but if the file does not exist, then do *b*. Or if a number is higher than *x* then do *a*, but if the number is lower than *x*, then do *b*. We can do this with an `if` statement.

For this, we will be asking the user to input a number. If the number is higher than *x* we will do *a*, but if the number is lower than *x*, we will do *b*.

Add a new line to your script. We will be making the target number 23, but you can pick any number you want. We will be putting the target number into a variable called `targetNumber`. Add the following line to your script:

```bash
targetNumber=23
```

We will now ask the user to input a number, and store that number to a variable called `guess`. Add the following lines to your script:

```bash
echo "Guess the number:"
read guess
```

We now need to create and `if` statement to compare the `targetNumber` to the user input `guess` variable. The script will output different sentences depending on whether the user is too low, too high, or if they guess correctly. Add the following lines to your script:

```bash
if [ $guess == $targetNumber ]
then
  echo "You guessed the correct number!"
elif [ $guess -lt $targetNumber ]
then
  echo "You guessed lower than the target number."
elif [ $guess -gt $targetNumber ]
then
  echo "You guessed higher than the target number."
else
  echo "Something went wrong."
fi
```

If you run the script, it will ask the user for their name and their favorite color. It will then ask the user to input a number. After the user inputs the number, depending on whether it was lower, higher or correct, the script will dynamically adapt to the user input.

## Conclusion

Bash scripting can be very useful in many different cases. I use scripting to automatically create a new work note with the current date as the title of the note document. I also have scripts to open certain applications or change my desktop theme. I have developed scripts to convert audio files to a specific format, or fill out PDF documents quickly. There is a lot to learn, so don't get discouraged or frustrated. Try to keep at it. As you make mistakes, you will learn for the next script you write. There are so many resources to help with your project. I have listed a few places to help with this below.

## Useful places to find information

Scripting can get advanced and complicated very quickly. There are numerous resources online for tips, tutorials, and forums to get help. Here are a few places to find ideas:

- [GNU Bash Manual](https://www.gnu.org/software/bash/manual/bash.html)
- [Pure BASH Bible - Dylan Araps](https://github.com/dylanaraps/pure-sh-bible)
- [Free Code Camp - Bash Scripting](https://www.freecodecamp.org/news/bash-scripting-tutorial-linux-shell-script-and-command-line-for-beginners/)
