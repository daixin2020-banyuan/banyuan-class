const services = require ('../services/student')
const _ = require ('lodash')

/* 
 *  student 页面
*/
async function student(ctx,next){

  const data = ctx.request.query

  const students = await services.getStudent(data)

  console.log(students)

  ctx.state = {
    students
  }

  await ctx.render('students',ctx.state)
}

/* 
 * 增加学生
*/
async function addStudent(ctx,next){

  const data = ctx.request.body

  //添加学生
  let result = await services.addStudent(data)

  result.students = await services.getStudent({})
  

  ctx.response.body = result
 
}


module.exports = {
  student,
  addStudent
}