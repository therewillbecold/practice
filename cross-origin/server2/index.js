import Koa from "koa";
import logger from 'koa-logger'
import json from 'koa-json'
import router from './middleware/router'
import bodyParser from 'koa-body-parser'
import cors from 'koa-cors'
const app = new Koa()
const port = 3000

app.use(async (ctx, next) => {
    console.log(1111);
    await next()
})

app.use(async (ctx, next) => {
    console.log(222);
    await next()
})

app.use(logger())
app.use(json())
app.use(bodyParser())
// app.use(cors())
app.use(router)
app.listen(port, res => console.log('服务启动, 监听' + port));