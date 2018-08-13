const express = require('express')
const app = express()
const routers = require('./routers.js')
const port = 3000;


// 设置模板引擎的渲染的模板的根路径
app.set('views', './views')
// 设置使用的模板引擎
app.set('view engine', 'ejs')

// app.use 使用一些中间件, middleware
// 建立一个静态资源服务
app.use(express.static('./static'))
app.use(function (req, res, next) {
    console.log('中间件1');
    // next可以让请求继续向后传递.
    next()
})

console.log(111);

console.log(2222);

app.use(function (req, res, next) {
    console.log('我是中间件2');
    next()
})

app.use(function (req, res, next) {
    console.log('我是中间件3');
    next()
})


// 设置路由
routers(app);


// 启动服务
app.listen(port, function (){
    console.log('服务已启动, 监听' +  port + '!')
} )