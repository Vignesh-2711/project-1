const mongoose = require('mongoose')

const enrollmentSchema = {
    student_id: {type:String, required : true },
    course_id: {type:String, required : true },
    enrollment_date: {type:Date, required : true },
    status: {type:String, required : true }

}

module.exports = mongoose.model("Enrollment",enrollmentSchema)

