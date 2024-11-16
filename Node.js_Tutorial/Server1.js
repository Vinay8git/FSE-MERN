const http=require('http')
http.createServer(function(req, res)
{
    return res.end('Hello');
}).listen(8090);