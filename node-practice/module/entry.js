console.log('我是入口文件的第一行代码');

var A = require('./a.js')
var B = require('./b.js')
require('./c.js')

console.log('我是入口文件', A.name, B);

const dns = require('dns');

dns.lookup('baidu.com', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});

var M = require('./m')
console.log(M)

var ML = require('./m.liaoliao')
console.log(ML)