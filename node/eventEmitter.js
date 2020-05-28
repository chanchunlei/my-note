/*

//引入events模块
var events = require("events");
//创建emitter对象
var emitter = new events.EventEmitter();
//为connection事件注册一个监视器
emitter.on("connection", function() {
    console.log("已链接");
});
//2秒后调用监控
setTimeout(function() {
    emitter.emit("connection");
},2000);
*/
//emitter.addListener(eventName, listener) 是 emitter.on(eventName, listener) 的别名。


/*
// 引入 events 模块
var events = require("events");
// 创建 emitter 对象
var emitter = new events.EventEmitter();
// 定义一个回调函数
var callback1 = function (arg1, arg2) {
    console.log("hello world", arg1, arg2);
};
var callback2 = function (arg3, arg4) {
    console.log("hello stranger", arg3, arg4);
};
// 为 connection 事件注册监听器
emitter.on("connection", callback1);
emitter.on("connection", callback2);
// 调用监听器
emitter.emit("connection", "愿善良的人", "都能被温柔以待");
*/


/*
// 引入 events 模块
var events = require("events");
// 创建 emitter 对象
var emitter = new events.EventEmitter();
// 为 connection 事件注册一个监听器
var n = 0;

//只能监控一次
emitter.once("connection", function () {
    ++n;
    console.log("调用第" + n + "次");
});
// 调用监听器
emitter.emit("connection");
emitter.emit("connection");
emitter.emit("connection");
emitter.emit("connection");
*/


/*
//使用 emitter.removeListener(eventName, listener) 移除监听器。
// 引入 events 模块
var events = require("events");
// 创建 emitter 对象
var emitter = new events.EventEmitter();
// 定义一个回调函数
var callback = function () {
    console.log("syl");
};
// 为 connection 事件注册一个监听器
emitter.on("connection", callback);
// 为 connection 事件移除监听器
emitter.removeListener("connection", callback);
// 调用监听器
emitter.emit("connection");
//emitter.off(eventName, listener) 是 emitter.removeListener() 的别名。

// 使用 emitter.setMaxListeners(n) 设置同一事件的监听器最大绑定数。
// 默认情况下，如果为特定事件添加了超过 10 个监听器，则 EventEmitter 会打印一个警告，这有助于我们发现内存泄露。
// 显然实际编码中并不是所有的事件都要限制 10 个监听器。
// emitter.setMaxListeners() 方法可以为指定的 EventEmitter 实例修改限制。
// 当值设为 Infinity（或 0）表示不限制监听器的数量。
*/


/*
// 引入 events 模块
var events = require("events");
// 创建 emitter 对象
var emitter = new events.EventEmitter();
// 定义回调函数
var callback1 = function () {
    console.log("我是1");
};
var callback2 = function () {
    console.log("我是2");
};
// 为 connection 事件注册监听器
emitter.on("connection", callback1);
emitter.on("connection", callback2);
// 查看 connection 事件绑定的监听器个数
var num = emitter.listenerCount("connection");
console.log(num);
*/


// 引入 events 模块
var events = require("events");
// 创建 emitter 对象
var emitter = new events.EventEmitter();
// 设置监听器
emitter.on("error", (err) => {
    console.error("错误信息");
});
emitter.emit("error");





