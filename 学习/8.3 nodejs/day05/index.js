const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

const views = require('koa-views')
const co = require('co')
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const debug = require('debug')('koa2:server')
const path = require('path')

const config = require('./config')
const routes = require('./routes')
const { resolve } = require('path')

const port = process.env.PORT || config.port

// error handler
onerror(app)

// middlewares
app.use(bodyparser())
  .use(json())
  .use(logger())
  .use(require('koa-static')(__dirname + '/public'))
  .use(views(path.join(__dirname, '/views'), {
    options: {settings: {views: path.join(__dirname, 'views')}},
    map: {'njk': 'nunjucks'},
    extension: 'njk'
  }))
  .use(router.routes())
  .use(router.allowedMethods())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - $ms`)
})

router.get('/', async (ctx, next) => {
  // ctx.body = 'Hello World'

  const {name , password} = ctx.request.query;

  // ctx.state = {
  //   title: 'Koa2'
  // }

  ctx.response.body = {
    type:1233
  }
  // await ctx.render('index', ctx.state)
})

router.post('/post',async(ctx,next) => {

  const {name,password} = ctx.request.body;

  ctx.response.body = {
    name,
    password
  }
})

router.post('/ajax',async(ctx,next)=>{
    const query = ctx.request.body;

    if(query.status === 'time'){
        await sleep(5000);
    }
    ctx.response.body = { status:'success'}
})

function sleep(time){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            resolve();
        },time);
    })
}
// }

routes(router)
app.on('error', function(err, ctx) {
  console.log(err)
  logger.error('server error', err, ctx)
})

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})
