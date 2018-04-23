const proxyInfo = [
    {
        type: "http",
        host: "proxy.host.url",
        port: 3128
    }
];

function FindProxyForURL(url, host)
{
    return proxyInfo;
}

