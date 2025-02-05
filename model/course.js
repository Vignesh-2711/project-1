const mongoose = require('mongoose')

const courseSchema = {
  course_id: {type : String, required : true}, 
  department: {type : String, required : true}, 
  degree: {type : String, required : true} 
}


module.exports = mongoose.model("Course",courseSchema)
