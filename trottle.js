/**
 * 节流函数
 */


function trottle(fn, delay) {
  var preTime = Date.now();
  return function() {
    var now = Date.now();
    if (now - preTime >= delay) {
      // fn();
      fn.apply(this, arguments);
      preTime = Date.now();
    }
  }
}