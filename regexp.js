// 字符去重
'aaabbbcdfgghhjjkkk'.replace(/([A-Za-z]{1})(\1)+/g, '$1');

// 金钱隔断
'99999999'.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,');

// antd 的例子
'99999999'.replace(/\B(?=(\d{3})+(?!\d))/g, ',');