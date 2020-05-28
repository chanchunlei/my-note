/*
var fs = require("fs");
//异步加载文件
fs.open("./test.txt","r+", function(err, fd) {
    if(err) {
        return console.error(err);
    }
    console.log("done!");
    //异步关闭文件
    fs.close(fd, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("文件关闭成功");
    });
});
*/


// fs.read(fd, buffer, offset, length, position, callback);
/*
* 参数说明：
fd：通过 fs.open() 方法返回的文件描述符。
buffer：是数据写入的缓冲区。
offset：是缓冲区中开始写入的偏移量。一般它的值我们写为 0。
length：是一个整数，指定要读取的字节数。
position：指定从文件中开始读取的位置。如果 position 为 null，则从当前文件位置读取数据，并更新文件位置。
callback：回调函数，有三个参数 (err, bytesRead, buffer)。err 为错误信息，bytesRead 表示读取的字节数，buffer 为缓冲区对象。
*/

/*
var fs = require("fs");
fs.open("test.txt", "r+", function(err,fd) {
    if(err) {
        return console.error(err);
    }
    console.log("文件打开成功");
    console.log("准备打开文件");

    // 创建一个1024字节的缓冲区
    var buf = Buffer.alloc(1024);
    //异步读取文件
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes, buf) {
        if (err) {
            console.log(err);
        }
        console.log(bytes + "字节被读取");
        //仅输出读取的字节
        if(bytes > 0) {
            console.log(buf.slice(0,bytes).toString());
        };

        fs.close(fd, function (err) {
            if (err) {
                console.log(err);
            }
            console.log("文件关闭成功");
        });

    })


})
*/

//fs.openSync(path, flags[, mode])   同步打开文件




// 引入 fs 模块
var fs = require("fs");
// 异步打开文件
fs.open("./test.txt", "a", function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
    console.log("准备写入文件：");
    // 新写入内容为 hello world
    var buffer = Buffer.from(new String("hello world!!!"));
    // 异步写入文件
    fs.write(fd, buffer, 0, 12, 0, function (err, bytes, buffer) {
        if (err) {
            throw err;
        }
        console.log("写入成功");
        // 打印出 buffer 中存入的数据
        console.log(bytes + "字节被写入");
        console.log(buffer.slice(0, bytes).toString());
        // 异步关闭文件
        fs.close(fd, function (err) {
            if (err) {
                console.log(err);
            }
            console.log("文件关闭成功");
        });
    });
});

//fs.read 和 fs.write 需要结合 fs.open 得到文件句柄来使用




