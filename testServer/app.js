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
  ctx.state = {
    title: 'Koa2'
  }
  await ctx.render('index', ctx.state)
})




//=======================
//新get请求
router.get('/add', async (ctx, next) => {
  ctx.state = {
    title: 'Koa2'
  }
  const {a,b} = ctx.request.query
  let obj = {

    "sum": Number(a) + Number(b)
  }
  ctx.response.body = obj;
})
//=======================
router.post('/isPrime', async (ctx, next) => {
  const {a} = Number(ctx.request.body);
  a = Number(a);
  const flag = isPrime(Number(number));
  let data={};
  if(flag){
    data.isPrime=true;
  }else{
    data.isPrime=false;
    number++;
    while(!isPrime(number)){
      number++;
    }
    data.number=number;
  }
  ctx.response.body=data;
  
})
function isPrime(n){
  for(var i=2;i<n;i++){
    if(n%i !== 0){
      return true
    }
    else{
      return false
    }
  }

}



routes(router)
app.on('error', function(err, ctx) {
  console.log(err)
  logger.error('server error', err, ctx)
})


module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})
