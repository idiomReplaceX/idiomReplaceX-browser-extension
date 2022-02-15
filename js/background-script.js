browser.browserAction.onClicked.addListener((tab) => {
  // disable the active tab
  browser.browserAction.disable(tab.id);
  // requires the "tabs" or "activeTab" permission, or host permissions for the URL
  console.log(tab.url);

    function load_attach_script() {
        let executing = browser.tabs.executeScript(
            tab.id,
            {
                file: 'js/attach-idiomReplaceX.js',
                allFrames: false
            }
        );
        console.log("attach-idiomReplaceX.js injected");
        executing.then(
            function () {
                // onExecuted
                console.log("attach-idiomReplaceX.js loaded");
            },
            function (error) {
                // onError
                console.log("attach-idiomReplaceX.js ERROR:" + error);
            }
        );
    }

    load_attach_script();
});