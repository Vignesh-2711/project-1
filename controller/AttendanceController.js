const Attendance = require('../model/attendance')
const Student = require('../model/student')
const Course = require('../model/course')

exports.getAllAttendance = async(req,res)=>{
    try{
        const Attendances = await Attendance.find()
        res.json(Attendances)
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}

exports.getSingleAttendance = async(req,res)=>{
    try{
        const attendance = await Attendance.findOne({student_id:req.params.student_id,course_id:req.params.course_id})
        if(!attendance){
            return res.status(404).json({msg:'Attendance Not Found'})
        }
        res.json(attendance)
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}

exports.postAttendance = async(req,res)=>{
    try{
        const {student_id,course_id,date,status} = req.body
        const existingAttendance = await Attendance.findOne({student_id,course_id})
        if(existingAttendance){
            return res.status(400).json({ msg: 'Attendance for this Student is already exist..' });
        }
        const newAttendance = await Attendance.create({
            student_id,course_id,date,status
        })
        res.json(newAttendance)
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
}

