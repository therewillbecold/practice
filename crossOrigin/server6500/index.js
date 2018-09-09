import Koa from 'koa'
import Router from 'koa-router'
import fs from 'fs'
import path from 'path'
const port = 6500;
const app = new Koa();
const router = new Router();

function readFile(fileDir) {
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(__dirname, fileDir), { encoding: 'utf-8' }, (err, data) => {
            if (err) reject(err);
            resolve(data)
        });
    })
}


// router.get('/vegetables', async (ctx, next) => {
//     console.log('get/vegetables');
//     ctx.status = 200;
//     ctx.body = {
//         data: ['Get', 'lettuce', 'radish', 'cabbage', 'pumpkin']
//     }
// })

// router.post('/vegetables', async (ctx, next) => {
//     ctx.status = 200;
//     ctx.body = {
//         data: ['Post', 'lettuce', 'radish', 'cabbage', 'pumpkin']
//     }
// })



router.get('/*', async (ctx, next) => {
    console.log('?*');
    ctx.status = 200;
    let fileContent = ''
    try {
        fileContent = await readFile('./static' + ctx.path)
        ctx.body = fileContent
    } catch (err) {
        await next()
    }
})




// middleware
app.use(async function (ctx, next) {
    if (ctx.path == '/hello') {
        ctx.body = '你好'
    }
    await next()
})




app.use(async function (ctx, next) {
    if (ctx.path == '/doyouneedsex') {
        ctx.body = 'No, I dont'
    }
    await next()
})



app.use(async function (ctx, next) {
    if (ctx.path == '/please' && ctx.method.toLowerCase() == 'get') {
        ctx.body = 'I cant'
    }
    await next()
})



app.use(async function (ctx, next) {

    if (ctx.path == '/2.html' && ctx.method.toLowerCase() == 'get') {
        let fileContent = ''
        try {
            fileContent = await readFile('./static' + ctx.path)
            console.log(fileContent);
            ctx.body = fileContent
        } catch (err) {
            await next()
        }
    }
})




router.get('/jsonp', async (ctx) => {
    console.log(ctx.query);
    const { callbackName } = ctx.query
    let data = {
        status: 0,
        data: [1, 2, 3, 4, 5, 6],
        message: '我是jsonp返回的数据'
    }

    ctx.body = `${callbackName}(${JSON.stringify(data)})`
})



app.use(router.routes())
app.listen(port, res => { console.log('服务启动,监听' + port); })