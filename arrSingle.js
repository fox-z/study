// 统计数组中单项出现的次数
function arrSingle(arr) {
  var obj = {};
  arr.forEach(function(item){
    obj[item] =  (obj[item] || 0) + 1;
  });
  return obj;
}
var singleArr = [1,2,2,2,2,3,3,3,4,5,5];
var o = arrSingle(singleArr);

console.log(o);

var singleNewArr = singleArr.reduce((pre, curItem) => {
  pre[curItem] = (pre[curItem] || 0) + 1;
  return  pre
}, {});
console.log(singleNewArr)


// 实现一个简易的filter

Array.prototype.Filter = function(cb) {
  var arr = [];
  for(var i = 0; i < this.length; i++) {
    var item = this[i];
    var bool = cb(item, i);
    if (bool) {
      arr.push(item);
    }
  }
  return arr;
}

// 实现一个简易的map

Array.prototype.Map = function(cb) {
  var arr = [];
  for(var i = 0; i < this.length; i++) {
    var item = this[i];
    var bool = cb(item, i);
    arr.push(bool);
  }
  return arr;
}

// 冒泡排序

Array.prototype.Sort = function() {
  var len = this.length;
  for(var i = 0; i < len - 1; i++){
    for(var j = 0; j < len - 1 - i; j++) {
      if (this[j] > this[j+1]) {
        var temp = this[j];
        this[j] = this[j+1];
        this[j+1] = temp;
      }
    }
  }
}

// Array.prototype.Sort = function(cb) {
//   var arr = this;
//   var len = arr.length;
//   for(var i = 0; i < len - 1; i++){
//     for(var j = 0; j < len - 1 - i; j++) {
//       var rbd = cb(arr[j], arr[j+1]);
//       if (rbd > 0) {
//         // 升序
//         var temp = arr[j+1];
//         arr[j+1] = arr[j+1];
//         arr[j] = temp;
//       } else {
//         // 降序
//         var temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//       }
//     }
//   }
// }

// 数组去重

function noRepeat(arr) {
  var newArr = [];
  var o = {};
  for(var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (!o[item]) {
      o[item] = true;
      newArr.push(item);
    }
  }
  return newArr;
}

var arr = [1,1,23,4,56];
var newarr = arr.reduce((som, cur) => {
  if (!som.includes(cur)) {
    console.log('进入了')
    return som.concat(cur); // 返回一个数组
  } else {
    return som;
  }
},[]);
console.log(newarr);
