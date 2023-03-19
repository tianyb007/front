### HTTP是什么

HTTP (Hypertext transfer protocol) 翻译成中文是超文本传输协议，是互联网上重要的一个协议，由欧洲核子研究委员会CERN的英国工程师 Tim Berners-Lee 发明的，同时，他也是WWW的发明人，最初的主要是用于传递通过HTML封装过的数据。

### HTTP 0.9/1.0
在1991年发布了HTTP 0.9版，在1996年发布1.0版，1997年是1.1版，1.1版也是到今天为止传输最广泛的版本

HTTP 0.9版本的协议简单到极点，请求时，不支持请求头，只支持 GET 方法，没了。
HTTP 1.0 扩展了0.9版，其中主要增加了几个变化

在请求中加入了HTTP版本号，如：GET /index.html HTTP/1.0
HTTP 开始有 header了，不管是request还是response 都有header了。
增加了HTTP Status Code 标识相关的状态码。
还有 Content-Type 可以传输其它的文件了。

但是，HTTP1.0性能上有一个很大的问题，那就是每请求一个资源都要新建一个TCP链接，而且是串行请求，所以，就算网络变快了，打开网页的速度也还是很慢。所以，HTTP 1.0 应该是一个必需要淘汰的协议了。


### HTTP/1.1
HTTP/1.1 主要解决了HTTP 1.0的网络性能的问题，以及增加了一些新的东西

可以设置 keepalive 来让HTTP重用TCP链接，重用TCP链接可以省了每次请求都要在广域网上进行的TCP的三次握手的巨大开销。这是所谓的“HTTP 长链接” 或是 “请求响应式的HTTP 持久链接”。英文叫 HTTP Persistent connection.
然后支持pipeline网络传输，只要第一个请求发出去了，不必等其回来，就可以发第二个请求出去，可以减少整体的响应时间。（注：非幂等的POST 方法或是有依赖的请求是不能被pipeline化的）
支持 Chunked Responses ，也就是说，在Response的时候，不必说明 Content-Length 这样，客户端就不能断连接，直到收到服务端的EOF标识。这种技术又叫 “服务端Push模型”，或是 “服务端Push式的HTTP 持久链接”
还增加了 cache control 机制。
协议头注增加了 Language, Encoding, Type 等等头，让客户端可以跟服务器端进行更多的协商。
还正式加入了一个很重要的头—— HOST这样的话，服务器就知道你要请求哪个网站了。因为可以有多个域名解析到同一个IP上，要区分用户是请求的哪个域名，就需要在HTTP的协议中加入域名的信息，而不是被DNS转换过的IP信息。
正式加入了 OPTIONS 方法，其主要用于 CORS – Cross Origin Resource Sharing 应用。
















