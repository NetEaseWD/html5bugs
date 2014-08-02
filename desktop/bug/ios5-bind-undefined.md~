# ios5下不支持bind函数
* issue: [https://github.com/NetEaseWD/html5bugs/issues/5](https://github.com/NetEaseWD/html5bugs/issues/5)


## 描述
ios5下safari 和 webview不支持bind函数

## 解决方案

手动添加一个shim

```javascript
if(!Function.prototype.bind){
var slice = [].slice;
Function.prototype.bind = function(){
    var fn = this;
    var preArgs = slice.call( arguments, 1 );
    return function(){
      var args = preArgs.concat( slice.call( arguments ) );
      return fn.apply( context, args );
    }
}
}



```



