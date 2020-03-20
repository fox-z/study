function curry(fn, ...args) {
  if(args.length >= fn.length) {
    return fn.apply(null, args);
  }
  return (...args2) => curry(fn, ...args, ...args2);
}