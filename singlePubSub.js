class SelfEvent {
  constructor() {
    if(!SelfEvent.instance) {
      SelfEvent.instance = this;
      this.cache = {};
    }
    return SelfEvent.instance;
  }
  listen(type, fn) {
    Array.isArray(this.cache[type]) ?
      this.cache[type].push(fn) :
      this.cache[type] = [fn];
    return this;
  }
  trigger(type) {
    let fns = this.cache[type];
    if (!fns) return;
    fns.forEach(fn => fn());
    return this;
  }
  remove(type, fn) {
    if (!Array.isArray(this.cache[type])) return;
    if (fn) {
      let index = this.cache[type].indexOf(fn);
      if (index !== -1) {
        this.cache[type].splice(index, 1)
      }
      // this.cache[type].filter(itemfn => itemfn !=== fn)
    } else {
      this.cache[type] = [];
    }

    return this;
  }
  onece(type, fn) {
    function one() {
      fn.apply(this, arguments);
      this.remove(type, one);
    }
    this.listen(type, one);
  }
}

var event = new SelfEvent();
var event2 = new SelfEvent();