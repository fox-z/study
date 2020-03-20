function New(cons) {
  return function() {
    var o = { '__proto__': cons.prototype };
    var res = cons.call(o, [].slice.call(arguments, 1));
    return res instanceof Object ? res : o;
  }
}