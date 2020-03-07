
/*
* 考虑到圆形结构，对给定对象进行深度复制。
* 此函数用于缓存所有嵌套对象及其副本。
* 如果检测到循环结构，请使用缓存副本以避免无限循环。
*/
function find(list, fn) {
  return list.filter(fn)[0]
}

function deepCopy(obj, cache) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, c => c.original === obj)
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy
  })

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy
}

// 简易版

function deepCopyTwo(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj; // 巧妙之处 function也能正常克隆
  }
  const cp = Array.isArray(obj) ? [] : {};

  Object.keys(obj).forEach(function(key) {
    cp[key] = deepCopyTwo(obj[key]);
  })

  return cp
}

// 常见克隆方式 
// JSON.parse(JSON.stringify())

/**
 * 弊端
 * 1.对于undefined属性不能正常克隆
 * 2.对于函数属性不能正常克隆
 */


// 浅层克隆

// Object.assign({}, target)

/**
 * 弊端
 * 未能切断 value为对象的情况与原来克隆对象之间的引用关系
 */

// var obj1 = { a: 0 , b: { c: 0}}; 
// var obj2 = Object.assign({}, obj1);

// obj2.b.c = 3; // 原对象会发生更改
// console.log(JSON.stringify(obj1)); // { a: 0, b: { c: 3}}
// console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 3}}