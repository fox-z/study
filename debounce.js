
/**
 * 防抖函数
 */


function debounce(fn, delay) {
  var interval = null;
  return function() {
    if (interval !== null) {
      clearTimeout(interval);
    }
    interval = setTimeout(fn, delay)
  }
}


/**
 * 节流和防抖一起使用
 * 保证初次和最后一次都有执行
 */


function debounceAndTrottle(fn, delay) {
  var interval = null;
  var preTime = 0;
  return function() {
    var now = Date.now();
    var remainder = delay - ( now - preTime );
    if (remainder <= 0) {
      fn.apply(this, arguments);
      preTime = Date.now();
    } else {
      clearTimeout(interval);
      interval = setTimeout(fn, remainder)
    }
  }
}