const Enrollment = require('../model/enrollment')
const Student = require('../model/student')
const Course = require('../model/course')

exports.getAllEnrollment = async(req,res)=>{
    try{
        const enrollments = await Enrollment.find()
        res.json(enrollments) 
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}

exports.getSingleEnrollment = async(req,res)=>{
    try{
        const enrollment = await Enrollment.findOne({student_id:req.params.student_id,course_id:req.params.course_id})
        if(!enrollment){
            return res.status(404).json({msg:'Enrollment Not Found'})
        }
        res.json(enrollment)
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}

exports.postEnrollment = async (req, res) => {
    const { student_id, course_id, enrollment_date, status } = req.body;

    try {
        const existingEnrollment = await Enrollment.findOne({ student_id, course_id });
        if (existingEnrollment) {
            return res.status(400).json({ msg: 'Student is already enrolled in this course' });
        }

        const newEnrollment = await Enrollment.create({
            student_id,
            course_id,
            enrollment_date,
            status
        });

        res.json(newEnrollment);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

exports.updateEnrollment = async(req,res)=>{
    try{
        const enrollment = req.body;
        const existingEnrollment = await Enrollment.findOne({ student_id:enrollment.student_id, course_id:enrollment.course_id })
        if(!existingEnrollment){
            return res.status(404).json({ msg: 'Enrollment not found' });
        }
        const updatedEnrollment = await Enrollment.updateOne(
            { student_id:enrollment.student_id, course_id:enrollment.course_id },  
            { $set: { enrollment_date:enrollment.enrollment_date, status:enrollment.status } })
        res.json(await Enrollment.findOne({ student_id:enrollment.student_id, course_id:enrollment.course_id }))

    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }

}

exports.deleteEnrollment = async(req,res)=>{
    try{
        const enrollment = await Enrollment.findOne({
            student_id:req.params.student_id,
            course_id:req.params.course_id
        })
        if(enrollment){
            await Enrollment.deleteOne({student_id:enrollment.student_id,course_id:enrollment.course_id}) 
            res.json(enrollment)  
        }
        else{
            res.status(404).json({msg:'Course does not exist'})
        }
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}