import Koa from "koa";
import logger from 'koa-logger'
import json from 'koa-json'
import bodyParser from 'koa-body-parser'
import staticServer from 'koa-static'
import Router from 'koa-router'
import path from 'path'
const port = 6100
const app = new Koa()
const router = new Router()
console.log(222);
app.use(async function (ctx, next) {
    console.log(ctx.path);
    await next()
})

router.get('/music', async (ctx, next) => {
    ctx.status = 200
    ctx.body = {
        data: ['Get', 'young heart run free ', 'me before you', 'payphone']
    }
    await next()
})

router.get('/music', async (ctx, next) => {
    ctx.body.message = 'they are the best'
})


router.post('/music', async (ctx, next) => {
    ctx.body = {
        data: ['Post', 'young heart run free ', 'me before you', 'payphone']
    }
})




app.use(logger())
app.use(json())
app.use(bodyParser())
app.use(staticServer(path.resolve(__dirname, './static')))
app.use(router.routes())
/*staticServer 静态资源*/
app.listen(port, res => console.log('服务启动,监听' + port));