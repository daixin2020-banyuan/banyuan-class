module.exports = function (router) {
  
  router.get('/foods', async function (ctx, next) {
    ctx.body = 'this a food response!'
  })
  
  router.post('/foods', async function (ctx, next) {
    ctx.body = 'this a food response!'
  })
}
  