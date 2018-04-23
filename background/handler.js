const proxyScript = "proxy/pac.js";

function errorListener(error)
{
    console.error(`Proxy error: ${error.message}`);
}

function handleMessage(message, sender)
{
    if (sender.url =  browser.extension.getURL(proxyScriptURL))
        console.log(message);
}

browser.proxy.register(proxyScript);
browser.proxy.onProxyError.addListener(errorListener);
browser.runtime.onMessage.addListener(handleMessage);

