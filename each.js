function each(arr, callback) {
  if (!Array.isArray(arr)) return
  var i = 0;
  var len = arr.length
  for(; i < len; i++) {
    if(callback(i, arr[i]) === false) {
      break;
    }
  }
}