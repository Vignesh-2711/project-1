const enrollmentController = require('../controller/EnrollmentController')
const router = require('express').Router()

router.get('/api/enrollments',enrollmentController.getAllEnrollment)
router.get('/api/enrollment/:student_id/:course_id',enrollmentController.getSingleEnrollment)
router.post('/api/enrollment',enrollmentController.postEnrollment );
router.put('/api/enrollment',enrollmentController.updateEnrollment)
router.delete('/api/enrollment/:student_id/:course_id',enrollmentController.deleteEnrollment)

module.exports = router