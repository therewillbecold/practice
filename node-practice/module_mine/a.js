console.log('我是A');

var B = require('./b.js');
var C = require('./c.js');

console.log('B模块导出的是:', B);
console.log('执行B', B.Bfn());
console.log('执行C',C());


