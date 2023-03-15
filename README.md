# url-deep-linker
A Chrome extension which understands the content on the clipboard, automatically weaves a deep linked URL and navigates to it on the newly opened tab. 

Install on your Chrome browser: https://chrome.google.com/webstore/detail/url-deep-linker/bobgnhnpdhkdhaffdkkpaaojbobbhfla?utm_source=chrome-ntp-icon

Examples:

* **Deep linked URLs:** If the content on the clipboard matches a defined pattern set (RegEx or an item on the config array), then opening a new tab will automatically navigate to the desired page.
``` http://www.myintranetsite/allapp/ { ** places clipboard content here ** } /details ```

![Demo 1](https://raw.githubusercontent.com/takrishna/auto-open-deep-link-url/master/images/demo/3_demo.gif)

* **Service now "Change Number":** If a "Service Now Change number" is on the clipboard, then opening a new tab will automatically navigate to the "Service Now Change Request" page. Similarly one can configure Service now (SNOW) incidents, requests etc.

![Demo 2](https://raw.githubusercontent.com/takrishna/auto-open-deep-link-url/master/images/demo/3_demo.gif)

* **BMC Helix ITSM (Remedy) "Incident":** If a "Helix Incident Number" (Remedy Incident) is on the clipboard, then opening a new tab will automatically navigate to the "Helix Incident" page. Similarly one can configure Remedy Changes, requests etc.

![Demo 2](https://raw.githubusercontent.com/takrishna/auto-open-deep-link-url/master/images/demo/3_demo.gif)

* **Automatically open URLs:** If a URL is on the clipboard, then opening a new tab will automatically navigate to the copied URL 

![Demo 3](https://raw.githubusercontent.com/takrishna/auto-open-deep-link-url/master/images/demo/3_demo.gif)
