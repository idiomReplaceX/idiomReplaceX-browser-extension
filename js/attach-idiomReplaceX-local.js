function attachActivateScript() {
    return function () {
        let activateScript = document.createElement('script');
        activateScript.type = 'text/javascript';
        activateScript.async = true;
        activateScript.src = 'js/client/activate.js';
        document.getElementsByTagName('head')[0].appendChild(activateScript);
    };
}

function attachClientScript() {
    let clientScript = document.createElement('script');
    clientScript.type = 'text/javascript';
    clientScript.async = true;
    clientScript.onload = attachActivateScript()
    clientScript.src = '/client/idiomReplaceX.js';
    document.getElementsByTagName('head')[0].appendChild(clientScript);
}

attachClientScript();