const mongoose = require('mongoose')
const { Schema } = mongoose

const studentsSchema = new Schema({
  name:String,
  gender:Number,
  age:Number,
  major:String,
  createdAt:{ type:Date, default: new Date() },
  updatedAt:{ type:Date, default: new Date() }
})
  
const studentsModel = mongoose.model('students', studentsSchema)

module.exports = {
  studentsModel
}