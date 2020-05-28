var http = require("http");
var fs = require("fs");
var server = http.createServer();

server.on("request", function(req,res){
    var url = req.url;
    if (url == '/') {
        res.setHeader("Content-Type", "text/plain");
        fs.readFile("./index.html", function(err, data){
            if(err) {
                res.end("文件读取失败，请稍后再试！")
            }else {
                //data默认是二进制数据，可以通过toString()转化为能识别的字符；
                //res.end();支持两种数据类型，一种是二进制，一种是字符串
                res.writeHead(200, { "Content-Type": "text/html" })
                res.end(data);
            }
        });
    } else if (url == '/register') {
        fs.readFile("./register.html", function(err, data) {
            if(err) {
                res.end("error! please try again.")
            }else {
                //setHeader也是设置响应头，它们将与传递给 response.writeHead() 的任何响应头合并，其中 response.writeHead() 的响应头优先。
                res.setHeader("Content-Type", "text/html");
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else {
        res.end("<h1>404 NOT FOUND</h1>");
    }
});
server.listen(3000, function() {
    console.log("Server is running...");
    console.log("http://127.0.0.1:3000");
});




