#### 手写call、apply、bind

1. 手写call

   ```js
   Function.prototype.myCall = function(context) {
   	context = context || window;
   	context.fn = this;
   	let args = [...arguments].slice[1];
   	let result = context.fn(...args);
   	delete context.fn;
   	return result;
   }
   ```

2. 手写apply 

   ```js
   Function.prototype.myApply = function(context) {
     context = context || window;
   	context.fn = this;
     let result;
     if(arguments[1]) {
       result = context.fn(...arguments[1]);
     }else {
       result = context.fn();
     }
     delete context.fn;
     return result;
   }
   ```

   > call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
   > apply() 方法调用一个具有给定this值的函数，以及以一个数组（或类数组对象）的形式提供的参数。
   > 两者区别就是参数不同.
   > call apply的核心要点就是传入的context，给context添加fn的属性值并等于当前this；运行fn,改变this指向context。

3. 手写bind

   ```js
   Function.protoype.myBind = function(context) {
   	if(typeof this !== 'function') {
   		throw new TypeError('Error'); 
     }
     let that = this;
     let args = [...arguments].slice(1);
     return function F(){
       //因为返回一个函数，我们可以new F()需要判断能当做构造函数吗
       if(this instanceof F) {
   			return new that(...agrs,...arguments);
       }
       return that.apply(context,args.concat(...arguments))
     }
   }
   ```

   > bind返回一个函数，对于函数来说有两种方式，一种是直接调用，一种是通过new方式：
   >
   > 直接调用：选择apply的方式，但是对于参数需要注意以下情况，因为bind可以实现类似这样的代码f.bind(obg,1)(2),所以我们需要将两边的参数拼接起来，于是就有了这样的实现args.concat(...arguments);
   >
   > new方式(bind过的方法，作为实例使用)：我们先判断this，对于new的情况不会被任何方式改变this，所以对于这种情况我们需要忽略传入的指定的this;

