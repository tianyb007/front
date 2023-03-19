### HTTP学习网站
HTTP的前世今生
https://coolshell.cn/articles/19840.html

TCP那点事
https://coolshell.cn/articles/11564.html

TCP那点事2
https://coolshell.cn/articles/11609.html
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



HTTP/1.1应该分成两个时代，一个是2014年前，一个是2014年后，因为2014年HTTP/1.1有了一组RFC（7230 /7231/7232/7233/7234/7235），这组RFC又叫“HTTP/2 预览版”。其中影响HTTP发展的是两个大的需求：

一个需要是加大了HTTP的安全性，这样就可以让HTTP应用得广泛，比如，使用TLS协议。
另一个是让HTTP可以支持更多的应用，在HTTP/1.1 下，HTTP已经支持四种网络协议：
    传统的短链接。
    可重用TCP的的长链接模型。
    服务端push的模型。
    WebSocket模型。



### HTTP/2

虽然 HTTP/1.1 已经开始变成应用层通讯协议的一等公民了，但是还是有性能问题，虽然HTTP/1.1 可以重用TCP链接，但是请求还是一个一个串行发的，需要保证其顺序。然而，大量的网页请求中都是些资源类的东西，这些东西占了整个HTTP请求中最多的传输数据量。所以，理论上来说，如果能够并行这些请求，那就会增加更大的网络吞吐和性能。


另外，HTTP/1.1传输数据时，是以文本的方式，借助耗CPU的zip压缩的方式减少网络带宽，但是耗了前端和后端的CPU。这也是为什么很多RPC协议诟病HTTP的一个原因，就是数据传输的成本比较大。


其实，在2010年时，Google 就在搞一个实验型的协议，这个协议叫SPDY，这个协议成为了HTTP/2的基础（也可以说成HTTP/2就是SPDY的复刻）。HTTP/2基本上解决了之前的这些性能问题，其和HTTP/1.1最主要的不同是：

HTTP/2是一个二进制协议，增加了数据传输的效率。

HTTP/2是可以在一个TCP链接中并发请求多个HTTP请求，移除了HTTP/1.1中的串行请求。

HTTP/2会压缩头，如果你同时发出多个请求，他们的头是一样的或是相似的，那么，协议会帮你消除重复的部分。这就是所谓的HPACK算法（参看RFC 7541 附录A）

HTTP/2允许服务端在客户端放cache，又叫服务端push，也就是说，你没有请求的东西，我服务端可以先送给你放在你的本地缓存中。比如，你请求X，我服务端知道X依赖于Y，虽然你没有的请求Y，但我把把Y跟着X的请求一起返回客户端。

HTTP/2 是2015年推出的，其发布后，Google 宣布移除对SPDY的支持，拥抱标准的 HTTP/2。过了一年后，就有8.7%的网站开启了HTTP/2，截止至2019年10月1日， 在全世界范围内已经有41%的网站开启了HTTP/2。


### HTTP3
HTTP/2主要的问题是：若干个HTTP的请求在复用一个TCP的连接，底层的TCP协议是不知道上层有多少个HTTP的请求的，所以，一旦发生丢包，造成的问题就是所有的HTTP请求都必需等待这个丢了的包被重传回来，哪怕丢的那个包不是我这个HTTP请求的。因为TCP底层是没有这个知识了。

这个问题又叫Head-of-Line Blocking问题，这也是一个比较经典的流量调度的问题。这个问题最早主要的发生的交换机上。下图来自Wikipedia。

https://coolshell.cn/wp-content/uploads/2019/10/HOL_blocking.png








































































