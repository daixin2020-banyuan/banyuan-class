const student = require('./student')
const user = require('./users')

module.exports =  (router)=>{

  student(router)

  user(router)
}
