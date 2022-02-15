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

  function activate_idiomreplaxeX() {
    let executing = browser.tabs.executeScript(
      tab.id,
      {
        file: 'js/activate-idiomReplaceX.js',
        allFrames: false
      }
    );
    console.log("activate-idiomReplaceX.js injected");
    executing.then(
      function () {
        // onExecuted
        console.log("activate-idiomReplaceX.js loaded");
      },
      function (error) {
        // onError
        console.log("activate-idiomReplaceX.js ERROR:" + error);
      }
    );
  }

  function load_idiomreplaxeX_script() {
    let executing = browser.tabs.executeScript(
      tab.id,
      {
        file: 'js/idiomReplaceX.js',
        allFrames: false
      }
    );
    console.log("idiomReplaceX injected");
    executing.then(
      function () {
        // onExecuted
        console.log("idiomReplaceX loaded");
        activate_idiomreplaxeX();
      },
      function (error) {
        // onError
        console.log("idiomReplaceX ERROR:" + error);
      }
    );
  }

    load_attach_script();
});