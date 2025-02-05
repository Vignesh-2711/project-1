const mongoose = require('mongoose')

const attendanceSchema = {
    student_id: {type:String, required : true },
    course_id: {type:String, required : true },
    date: {type:Date, required : true },
    status: {type:String, required : true }

}

module.exports = mongoose.model("Attendance",attendanceSchema)