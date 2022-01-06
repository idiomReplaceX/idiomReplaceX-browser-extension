console.log("BEGIN - background-script");

browser.browserAction.onClicked.addListener((tab) => {
  // disable the active tab
  browser.browserAction.disable(tab.id);
  // requires the "tabs" or "activeTab" permission, or host permissions for the URL
  // console.log(tab.url);
  let executing = browser.tabs.executeScript(
    tab.id,
    {
      file: 'js/idiomReplaceX.js',
      allFrames: false
    }
  );
  console.log("idiomReplaceX injected");
  executing.then(
    function(){
      // onExecuted
      console.log("idiomReplaceX loaded");
    },
    function(error){
      // onError
      console.log("idiomReplaceX ERROR:" + error);
  }
  );
});
console.log("END - background-script");