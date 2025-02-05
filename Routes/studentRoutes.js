const studentController = require('../controller/StudentController')
const router = require('express').Router()

router.get('/api/students',studentController.getAllStudents)
router.get('/api/student/:id',studentController.getSingleStudent)
router.post('/api/student',studentController.postStudent)
router.put('/api/student',studentController.updateStudent)
router.delete('/api/student/:id',studentController.deleteStudent)


module.exports = router
