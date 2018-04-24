const httpProxyInfo = [
    {
        type: "http",
        host: "proxy.host.url",
        port: 3128
    }
];

const socksProxyInfo = [
    {
        type: "socks",
        host: "proxy.host.url",
        port: 11180,
        username: "username",
        password: "password",
        proxyDNS: true
    }
];


function FindProxyForURL(url, host)
{
    return socksProxyInfo;
}

