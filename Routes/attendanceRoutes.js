const attendanceController = require('../controller/AttendanceController')
const router = require('express').Router()

router.get('/api/attendances',attendanceController.getAllAttendance)
router.get('/api/attendance/:student_id/:course_id',attendanceController.getSingleAttendance)
router.post('/api/attendance',attendanceController.postAttendance)

module.exports = router