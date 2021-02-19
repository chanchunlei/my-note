手写call:

```js
Function.prototype.mycall = function(context, ...argus) {
  if(typeof this !== "function") throw new TypeError("not function");
  context = context || window;
  context.fn = this;
  const result = context.fn(...argus);
  delete context.fn;
  return result;
}
```

手写apply：

```js
Function.prototype.myapply = function(context, arr) {
	if(typeof this !== "function") throw new TypeError("not function");
  context = context || window;
  context.fn = this;
  const result = context.fn(...arr);
  delete context.fn;
  return result;
}
```

手写bind:

```js
Function.prototype.mybind = function(context, ...argus) {
  if(typeof this !== "function") throw new TypeError("not function");
  const _this = this;
  return function F() {
    if(this instanceof F) {
      return new _this(...argus, ...arguments);
    }
    return _this.myapply(context, [...args, ...arguments]);
  }
}
```

