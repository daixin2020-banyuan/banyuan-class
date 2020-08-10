const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa2-cors');
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
const routes = require('./routes');
const { normalize } = require('path');

const port = process.env.PORT || config.port

// error handler
onerror(app)

// middlewares
app.use(bodyparser())
  .use(json())
  .use(logger())
  .use(cors({
    credentials: true,
  }))
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

// router.get('/', async (ctx, next) => {
//   // ctx.body = 'Hello World'
//   ctx.state = {
//     title: 'Koa2'
//   }
//   await ctx.render('index', ctx.state)
// })

// router.post('/ajax', async (ctx, next) => {
//   // ctx.body = 'Hello World'
//   const query = ctx.request.body;
//   if(query.status === 'time'){
//       await sleep(5000);

//   }
//   ctx.response.body = {status:"success"}



// })
// function sleep(time){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve();

//     },time);
//   })
// }
router.post('/form',(ctx, next) => {
  // ctx.body = 'Hello World'
  const { name } = ctx.request.body;
  const names = ['isen','lucy','mike'];
  let data={};
  if (names.indexOf(name)=== -1){
    data.include = false;
  }else{
    data.include = true;
  }
  
  ctx.response.body = data;



})
let tasks=[{
  name:'任务1',
  checked:false,
},{
  name:'任务2',
  checked:false,
},{
  name:'任务3',
  checked:true,
},{
  name:'任务4',
  checked:false,
},{
  name:'任务5',
  checked:false,
},{
  name:'任务6',
  checked:false,
},{
  name:'任务7',
  checked:false,
}]


//页面渲染
router.get('/todolist',async(ctx, next) => {
  ctx.state={
    
    tasks:tasks,
  }

  await ctx.render('todoList',ctx.state)

})


//点击任务事件
router.post('/checkTask',async(ctx,next) => {
  const { name,checked } = ctx.request.body;
    tasks.forEach((item)=>{
      if(item.name === name){
        item.checked = !item.checked
      }
    });
    console.log(tasks);
    ctx.response.body={status:'success'}
})

//添加任务
router.post('/addTask',async(ctx,next) => {
  const { inputValue } = ctx.request.body;
  tasks.push({
    name : inputValue,
    checked : false,
  })  
  // console.log(tasks);
  ctx.response.body={status:'success'}
})

//删除按钮事件
router.post('/closeEvent',(ctx,next)=>{
  const { name } = ctx.request.body;

  let i = search(tasks,name);

  tasks.splice(i,1);
  // console.log(tasks)
  ctx.response.body={status:'success'}

})

function search(tasks,name){
  let i = tasks.length;
  while(i-=1){
    console.log(tasks[i].name);
    console.log('name',name);
      if (tasks[i].name === name){
        
         console.log('in');
         return i;
      }
  }
  return false;
}



                                                                        

//=======================
//新get请求
// router.get('/add', async (ctx, next) => {
//   ctx.state = {
//     title: 'Koa2'
//   }
//   const {name,id} = ctx.request.query
//   let obj = {

//     name,
//     id,

//   }
//   console.log(1);
//   ctx.redirect('/post');
// })
//=======================
// router.post('/post', async (ctx, next) => {
//   console.log(2);
//   const {name,id} = ctx.request.body
//   let obj = {
//     type:"post",
//     name,
//     id,

//   }
//   ctx.response.body = obj;
// })
// router.post('/isPrime', async (ctx, next) => {
//   const {a} = Number(ctx.request.body);
//   a = Number(a);
//   const flag = isPrime(Number(number));
//   let data={};
//   if(flag){
//     data.isPrime=true;
//   }else{
//     data.isPrime=false;
//     number++;
//     while(!isPrime(number)){
//       number++;
//     }
//     data.number=number;
//   }
//   ctx.response.body=data;
  
// })
// function isPrime(n){
//   for(var i=2;i<n;i++){
//     if(n%i !== 0){
//       return true
//     }
//     else{
//       return false
//     }
//   }

// }



routes(router)
app.on('error', function(err, ctx) {
  console.log(err)
  logger.error('server error', err, ctx)
})


module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})
