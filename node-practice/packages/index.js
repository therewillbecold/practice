var moment = require('moment')

var t = new Date('2028-12-26 11:15:16');
var format = moment(t).format('YYYY-MM-DD hh:mm:ss a');

console.log(format);
