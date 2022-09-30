let idiom_active = false;

/*
 * Set Script active or inactive when user clicks on icon
 */
browser.browserAction.onClicked.addListener((tabId, changeInfo, tab) => {
    if (!idiom_active) {
        idiom_active = true;
        //console.log("idiom aktiviert");
        restart(tabId.id);
    } else {
        idiom_active = false;
        //console.log("idiom deaktiviert");
        let gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
        gettingActiveTab.then((tabs) => {
            browser.tabs.update({url: tabs[0].url});
        });
    }
});


/*
 Restart for the currently active tab, whenever the user navigates.
 */
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (!changeInfo.url) {
        return;
    }
    let gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then((tabs) => {
        if (tabId == tabs[0].id) {
            restart(tabId);
        }
    });
});

/*
 Restart for the currently active tab, whenever background.js is run.
 */
let gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
gettingActiveTab.then((tabs) => {
    restart(tabs[0].id);
});

/*
 Inject the Script when idiom is active
 */
function restart(tabId) {
    if (idiom_active) {
        let gettingTab = browser.tabs.get(tabId);
        gettingTab.then((tab) => {
            let executing = browser.tabs.executeScript(
                    tab.id,
                    {
                        file: 'js/attach-idiomReplaceX.js',
                        allFrames: false
                    }
            );
            executing.then(
                    function () {
                        // onExecuted
                        //console.log("attach-idiomReplaceX.js loaded");
                    },
                    function (error) {
                        // onError
                        console.log("attach-idiomReplaceX.js ERROR:" + error);
                    }
            );
        });
    } else {
        // console.log("do nothing ..");
    }
}