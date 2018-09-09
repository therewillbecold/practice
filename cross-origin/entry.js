
require('babel-register');

// 启动后台服务
require('./server2/index.js')

// 启动静态资源服务
require('./server1/index.js')
