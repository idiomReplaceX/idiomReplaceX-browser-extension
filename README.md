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
./node_modules/web-ext/bin/web-ext run 
~~~

### code check

~~~
./node_modules/web-ext/bin/web-ext lint 
~~~

### pack the extension

~~~
./node_modules/web-ext/bin/web-ext build     
~~~