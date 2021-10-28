## Graphical User Interface (GUI) Usage

By default, GNOME bundles a key and password management application called `seahorse`. The GUI labels the application "Passwords and Keys" in both Pop!_OS and Ubuntu.

Click Activities/Applications in the top-left corner, and type "passwords" or "seahorse" into the search field. Click on the vault icon that appears "Passwords and Keys."



### Create PGP Key Pair

Click the `+` sign in the top-left corner of the window and select "GPG key" from the drop-down.

Enter your full name and a valid email address.

**NOTE:** Remember, the purpose of a PGP/GPG key is to identify something as legitimately signed by you, so put in information that can be reliably used to identify you.

Add a comment (optional) to help you remember what the key is for.

Choose an encryption type - In most cases, RSA is the suggested default.

Key strength can be increased or decreased using the `-` and `+` buttons. Higher bit counts are more secure than lower. The default is "2048." In this example the bits have been raised to the maximum "4096."

Setting an expiration date for the key helps strengthen security. To do this, uncheck the "Never Expires" box.

Click `Create`.

### Share Public Key

Double-click on the newly created key-pair. A window with details about the keypair will open. Click the `Details` tab.

Under "Actions," click on the `Export to file` button, and select `Export public key`.

This will export [nameofkey].asc to your Home folder.

Send that file to the person(s) with whom you would like to sign encrypted emails or files.

### Sign Received Public Key

To add and sign a public key shared from a trusted source, save the .asc file to your computer, and open "Passwords and Keys."

Click the `+` sign.

Select `Import from file

### Integrate with File Manager

**Install Files Add-On**

To quickly encrypt or decrypt files from the "Files" application (nautilus), install `seahorse-nautilus` with these Terminal commands:

```bash
sudo apt update
sudo apt install seahorse-nautilus 
```

**Encrypt File(s)**

This package adds options to the secondary-click menu when selecting files.
The option `Encrypt` will be visible. 
Select `Encrypt` and a new dialogue box will open asking you which key to use for encryption.

Once the key has been selected, the file will be duplicated, encrypted, and saved with the name scheme [filename].[originalext].pgp

**Decrypt File(s)**

To decrypt a file received, click on it, and the application "Decrypt File" will pop open a new file manager window, asking you to name/rename the file. Once the name is confirmed the file will open, and it's contents will be visible.

## Terminal (CLI) Usage



```bash
gpg -e /path/to/file
```