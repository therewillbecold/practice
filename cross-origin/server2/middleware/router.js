import Router from 'koa-router'

let router = new Router();



router.all('/*', async (ctx, next) => {
    ctx.type = 'application/json; charset=utf-8'
    ctx.body = {
        status: 0,
        data: {},
        message: ''
    }
    await next()
})

router.all('/liaoliao', async (ctx, next) => {
    ctx.body = {
        status: 0,
        data: "我是了了",
        message: ''
    }
})

router.all('/api/music', (ctx, next) => {
    ctx.body = {
        status: 0,
        data: [1, 23,4,5,6],
        message: '我是server2'
    }
})


router.get('/api/books', async (ctx) => {
    ctx.body = 'var data = [1,2,3,4,5]; console.log(7777777777)'
})

router.get('/api/jsonp', async (ctx) => {
    console.log(ctx.query);
    const {callbackName} = ctx.query
    let data = {
        status: 0,
        data: [1, 23,4,5,6],
        message: '我是jsonp返回的数据'
    }

    ctx.body = `${callbackName}(${JSON.stringify(data)})`
})


export default router.routes()