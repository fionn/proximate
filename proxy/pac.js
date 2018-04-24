const httpsProxyConfig = {
   mode: "fixed_servers",
   rules: {
       singleProxy: {
           scheme: "https",
           host: "proxy.host.url",
           port: 3128
       }
   }
};

const socksProxyConfig = {
   mode: "fixed_servers",
   rules: {
       singleProxy: {
           scheme: "socks5",
           host: "proxy.host.url",
           port: 1080
       }
   }
};

const settings = {
   value: socksProxyConfig,
   scope: "regular"
};

chrome.proxy.settings.set(settings, function() {});

