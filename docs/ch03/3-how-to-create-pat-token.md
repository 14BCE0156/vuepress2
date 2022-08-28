# How to Create PAT Token

Please follow the steps here to set up a token: [Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).

 Please note that when you are prompted to enter your credentials when cloning a repo after creating the personal access token, you should enter your CDSID in the username field and **the value of the personal access token in the password field - do NOT enter your password in the password field.**

 If you have accidentally entered your password in the dialog, git will not present the dialog box the next time, but it will fail.  You need to clear the git password memory first.

 <ins>**To do that:**</ins>
 
 1. click windows Start menu, then type "credential", select the "Credential Manager (Control Panel)" application.

 2.  This will open a window.  Click on "Windows Credentials".  All of your cached credentials will be listed.  Find all of the github.ford.com entries in the list, click the down arrow next to it, then click "Remove" under it.  Repeat this for all of the github.ford.com entries in the list.

 3. When done, run the git command again, and you will again be presented a dialog to enter your password.  Enter your personal access token that you created following the above instructions.