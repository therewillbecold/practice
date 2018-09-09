import Koa from "koa";
import logger from 'koa-logger'
import json from 'koa-json'
import bodyParser from 'koa-body-parser'
import staticServer from 'koa-static'
import Router from 'koa-router'
import path from 'path'
const app = new Koa()
const port = 3500
const router = new Router()

router.get('/api/music', async (ctx, next) => {
    ctx.body = {
        status: 0,
        data: [111, 222, 333, 444, 555],
        message: 'success'
    }
    await next()
})

router.get('/api/music', async (ctx) => {
    ctx.body.message = '5678'
})



app.use(logger())
app.use(json())
app.use(bodyParser())
app.use(router.routes())
/*静态资源*/
app.use(staticServer(path.resolve(__dirname, './static')))
app.listen(port, res => console.log('服务启动, 监听' + port));