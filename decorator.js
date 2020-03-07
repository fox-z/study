// AOP装饰器

Function.prototype.before = function before(fn) {
  var _this = this;
  return function() {
    fn.apply(this, arguments);
    return _this.apply(this, arguments);
  }
}

Function.prototype.after = function after(fn) {
  var _this = this;
  return function() {
    var ret = _this.apply(this, arguments);
    after.apply(this, arguments);
    return ret;
  }
}

// 实际应用-表单验证
// 假设把验证代码封装到一个函数
// 需要根据验证结果来决定是否执行后面的逻辑，需要改造before函数
Function.prototype.before = function before(fn) {
  var _this = this;
  return function() {
    if (fn.apply(this, arguments) === false) {
      // beforeFunction返回false的情况不执行后面的代码
      return;
    }
    return _this.apply(this, arguments);
  }
}

// 提供不污染原生对象的方法

function before(fn, beforeFn) {
  return function() {
    beforeFn.apply(this, arguments);
    return fn.apply(this, arguments);
  }
}

function after(fn, afterFn) {
  return function() {
    var ret = fn.apply(this, arguments);
    afterFn.apply(this, arguments);
    return ret;
  }
}


// 总结：1.调用装饰器函数每次都返回一个匿名函数，导致原来函数上定义的静态属性缺失
//      2.多次执行装饰器函数对性能影响很大