const courseController = require('../controller/CourseController')
const router = require('express').Router()

router.get('/api/courses',courseController.getAllCourses)
router.get('/api/course/:id',courseController.getSingleCourse)
router.post('/api/course',courseController.postCourse)
router.put('/api/course',courseController.updateCourse)
router.delete('/api/course/:id',courseController.deleteCourse)

module.exports = router