function compose(middlewares) {
  return async function(ctx){// 传入上下文
    return dispatch(0);
    function dispatch(i){
      let fn = middlewares[i];
      if(!fn){
        return Promise.resolve();
      }
      return Promise.resolve(
        fn(ctx,function next(){
            return dispatch(i+1)
        })
      )
    }
  }
}