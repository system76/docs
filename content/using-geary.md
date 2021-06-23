---
title: Using Geary
description: >
  Using services like ProtonMail with Geary
keywords:
  - geary
  - protonmail

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

# Using Geary

## Gmail

1. Add the account to <u>Geary</u>

![Geary Menu Button](/images/using-email/geary-menu-button.png)

Select the Gmail option in the window below.

![](/images/using-email/geary-add-gmail1.png)

Enter your Gmail address and your password.

![](/images/using-email/geary-add-gmail2.png)

Now sign into your Gmail account again using the same Gmail address and password to add your account to <u>Geary</u>.

![](/images/using-email/geary-add-gmail3.png)

## ProtonMail

> **NOTE:** Using ProtonMail with a 3rd Party Email Client is only supported on Paid plans

1. Download the <u>ProtonMail Bridge</u> from [here](https://protonmail.com/bridge/).

![ProtonMail Bridge Step1](/images/using-email/protonmail-bridge-step1.png)

![Download ProtonMail Bridge](/images/using-email/protonmail-bridge-deb.png)

2. Install <u>Protonmail Bridge</u>

![Download ProtonMail Bridge2 Step2](/images/using-email/protonmail-bridge-download.png)

Once the `.deb` file has been opened by <u>Eddy</u> click the **Install** button to install the application. 

![Install ProtonMail Bridge](/images/using-email/protonmail-bridge-install.png)

3. Setup <u>Protonmail Bridge</u>

Once you open <u>Protonmail Bridge</u> from the Activities menu (in the top left) you will see the screen below. From here enter your username and password that you using to sign into the ProtonMail website.

![Setup ProtonMail Bridge Step1](/images/using-email/protonmail-bridge-setup1.png)

Once signed in, you can review the configuration steps for <u>Thunderbird</u> at the link in the <u>Protonmail Bridge</u>. The steps for Thunderbird will work in Geary.

![Setup ProtonMail Bridge Step2](/images/using-email/protonmail-bridge-setup2.png)

Click on the arrow to the left of your username and then click on the **Mailbox Configuration** button to open the Email Settings window. This window will have your password (which is different then your ProtonmMail password), port numbers for IMAP and SMTP, as well as the security method for both IMAP and SMTP. 

![Setup ProtonMail Bridge Step3](/images/using-email/protonmail-bridge-setup3.png)

4. Add the account to <u>Geary</u>

Once signed into <u>Protonmail Bridge</u> click the menu icon in the top left of <u>Geary</u> then click **Accounts**.

![Geary Menu Button](/images/using-email/geary-menu-button.png)

Next click the **Other email providers** button to add the ProtonMail account.

![Geary Add Account Step1](/images/using-email/geary-add-other-account.png)

Now enter the information from the **Mailbox Configuration** window and note that we are entering the hostname IP address, followed by the port number like this: `127.0.0.1:1143`. 

![Geary Add Account Step2](/images/using-email/geary-add-protonmail.png)

Once that has been entered and the **Create** button has been pressed (you may need to do that a few times for the **Connection security** dropdown to show) you will see the window below. Finally click the **Always Trust This Server** button then the **Create** button again to add the account. 

> **NOTE:** You may need to close <u>Geary</u> and reopen it a bit later before your email starts showing up in <u>Geary</u>.

![Geary Add Account Step3](/images/using-email/trust-window.png)

## Fastmail

1. Click the menu icon in the top left of <u>Geary</u> then click **Accounts**.

![Geary Menu Button](/images/using-email/geary-menu-button.png)

2. Click the **Other email providers** button to add the Fastmail account.

![Geary Add Account Step1](/images/using-email/geary-add-other-account.png)

3. Next create an App password using the Fastmail website [here](https://www.fastmail.help/hc/en-us/articles/1500000279921-IMAP-POP-and-SMTP).

> **NOTE:** Save the App password in your Password Manager as you may not be able to see it again after creating it for security. 

4. Take note of the IMAP/POP, SMTP addresses and the port numbers from the Fastmail website for the next window as well.

5. Add the new App password, IMAP/POP, SMTP address and their port numbers in the next <u>Geary</u> window.

## iCloud Mail