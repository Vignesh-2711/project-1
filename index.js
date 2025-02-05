const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Student = require('./model/student');
const studentrouter = require('./Routes/StudentRoutes')
const courserouter = require('./Routes/courseRoutes');
const enrollmentrouter = require('./Routes/enrollmentRoutes');
const attendancerouter = require('./Routes/attendanceRoutes')


app.listen(5000,()=>{
    console.log('server running on 5000');
    
})

app.get('/',(req,res)=>{
    res.send('server started..')
})

app.use(express.json())

mongoose.connect('mongodb+srv://vigneshrao:Vignesh@mycluster.0p0cv.mongodb.net/?retryWrites=true&w=majority&appName=myCluster')
    .then(()=>{console.log('DB connected..');
    })
    .catch((err)=>{console.log(err);
    })

app.use("",studentrouter)
app.use("",courserouter)
app.use("",enrollmentrouter)
app.use("",attendancerouter)
