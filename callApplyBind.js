Function.prototype._call = function (context = window, ...arg) {
  var key = 'mycall' + Date.now();
  context[key] = this; // this即为需要借用的方法,赋值给调用者的一个属性
  var res = context[key](arg);
  delete context[key];
  return res;
}

Function.prototype._apply = function (context = window, arg = []) {
  var key = 'myApply' + Date.now();
  context[key] = this;
  var res = context[key](arg);
  delete context[key];
  return res;
}

Function.prototype._bind = function (context) {
  var self = this;
  var arg = [].slice.call(arguments, 1);
  return function() {
    var arg2 = [].slice.call(arguments);
    var args = arg.concat(arg2);
    return self.apply(context, args);
  }
}