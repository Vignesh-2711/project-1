const Course = require('../model/course')

exports.getAllCourses = async(req,res)=>{
    try{
        const courses = await Course.find()
        res.json(courses) 
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}

exports.getSingleCourse = async(req,res)=>{
    try{
        const course = await Course.findOne({course_id:req.params.id})
        if(!course){
            return res.status(404).json({msg:'Course Not Found'})
        }
        res.json(course)
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}

exports.postCourse = async(req,res)=>{
    try{
        const {course_id,department,degree} = req.body
        const existingCourse = await Course.findOne({course_id:req.body.course_id})
        if(existingCourse){
            return res.status(400).json({ msg: 'course already exist..' });
        }
        const addedcourse = await Course.create({course_id,department,degree})
        res.json(addedcourse)
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}



exports.updateCourse = async (req, res) => {
    try {
        const course = req.body;
        const fetchedCourse = await Course.findOne({ course_id: course.course_id });
        
        if (fetchedCourse) {
            await Course.updateOne({ course_id: course.course_id }, { $set: course });
            res.json(await Course.findOne({ course_id: course.course_id }));
        } else {
            res.json({ msg: 'Course does not exist' });
        }
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

exports.deleteCourse = async(req,res)=>{
    try{
        const course = await Course.findOne({course_id:req.params.id})
        if(course){
            await Course.deleteOne({course_id:course.course_id})
            res.json(course)
        }
        else{
            res.json({msg:'Course does not exist'})
        }
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}
