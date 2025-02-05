const Student = require('../model/student')

exports.getAllStudents = async(req,res)=>{
    try{
        const students = await Student.find()
        res.json(students) 
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.getSingleStudent = async(req,res)=>{
    try{
        const student = await Student.findOne({student_id: req.params.id})
        if(!student){
            return res.status(404).json({msg: 'Student Not found'})
        }
        res.json(student)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.postStudent = async(req,res)=>{
    try{
        const student = await Student.findOne({student_id: req.body.student_id})
        if(!student){
            const addedstudent = await Student.create(req.body)
            res.json(addedstudent)
        }
        else{
            res.json({msg: 'Student already exist'})
        }
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}

exports.updateStudent = async(req,res)=>{
    try{
        const student = req.body
        const fetchedStudent = await Student.findOne({student_id: student.student_id})
        if(fetchedStudent){
            await Student.updateOne(student)
            res.json(await Student.findOne({student_id: student.student_id}))
        }
        else{
            res.json({msg:'Student does not exist'})
        }
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}

exports.deleteStudent = async(req,res)=>{
    try{
        const student = await Student.findOne({student_id:req.params.id})
        if(student){
            await Student.deleteOne({student_id:student.student_id})
            res.json(student)
        }
        else{
            res.json({msg:'Student does not exist'})
        }
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}