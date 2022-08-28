# Fix an ADFS Login Issue

If you get the below image:
![](./assets/ADFSsamlError.png) 

::: tip Try this first: 
[How to request GitHub access](../ch03/0-Request-GitHub-access.md)
:::
If the above doesn't solve the issue, try the following: 

## Via Google Chrome:
* Open a chrome browser
* Go to **“Settings”**
* In the search (at the top), type **“content”**
* Click on **“Content settings”**
* Click on **“Cookies”**
* Click on **“See all cookies and site data”**
* In the search cookies field (at the top right), type **“corp.sts”**
* Click the trash can to the right of the **“corp.sts”** entry/entries to remove all items.

## Via Mozilla Firefox:
* Open firefox
* Go to **“Options”** on settings menu (three lines at the top right)
* Click **“Privacy & Security”** (on the left menu)
* Under **“History”** section
  * Make sure **“Never remember history”** is selected
  * Click **“Clear All History”**
    * Time range to clear = Everything
* Under **“Cached web content”**
  * Click **“Clear Now”**
* Under **“Site data”**
  * Click **“Clear All Data”**