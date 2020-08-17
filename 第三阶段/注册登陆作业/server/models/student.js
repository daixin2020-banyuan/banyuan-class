const { studentsModel } = require('./schema/student')

/* 
 * 插入一条数据
*/
async function insertOne(data){

  const studentModel = new studentsModel(data)

  await studentModel.save()
}

/* 
 * 查找对应数据
 */
async function find(query){

  return studentsModel.find(query)
}

module.exports = {

  insertOne,
  find
}