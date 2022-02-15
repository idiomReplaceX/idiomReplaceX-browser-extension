# The Idiom Replace X browser addon

## Development

### Links

* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
* https://extensionworkshop.com/documentation/develop/debugging/
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts

### Useful Firefox tools

#### Installing add ons

In Firefox: Open the `about:debugging` page, 
click the "This Firefox" option, 
click the "Load Temporary Add-on" button, 
then select any file in your extension's directory.

### debugging: 

Also via the page `about:debugging`

### run

~~~
./node_modules/web-ext/bin/web-ext run --url <the start url to open>
~~~

### code check

~~~
./node_modules/web-ext/bin/web-ext lint 
~~~

### pack the extension

~~~
./node_modules/web-ext/bin/web-ext build     
~~~

### Self-Signing the extension

https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/
see "Signing your extension for self-distribution" in https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/#Signing_your_extension_for_distribution