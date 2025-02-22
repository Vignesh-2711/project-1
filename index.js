    const express = require('express')
    const app = express()
    const mongoose = require('mongoose');
    const Student = require('./model/student');
    const studentrouter = require('./Routes/studentRoutes')
    const courserouter = require('./Routes/courseRoutes');
    const enrollmentrouter = require('./Routes/enrollmentRoutes');
    const attendancerouter = require('./Routes/attendanceRoutes')
    const auth = require('basic-auth')
    
    app.use(express.json())

    app.listen(5000,()=>{
        console.log('server running on 5000');
        
    })

    app.get('/',(req,res)=>{
        res.send('server started..')
    })

    

    mongoose.connect('mongodb+srv://vigneshrao:Vignesh@mycluster.0p0cv.mongodb.net/studentsDB?retryWrites=true&w=majority&appName=myCluster')
        .then(()=>{console.log('DB connected..');
        })
        .catch((err)=>{console.log(err);
        })

    
    const basicAuth = (req,res,next) =>{
        const user = auth(req)
        if(user && user.name === 'admin' && user.pass === 'password123'){
            next()
        }
        else{
            res.status(401).json({message: 'Unauthorized'})
        }
    }

    
    app.get('/',basicAuth,(req,res)=>{
        res.json({message: 'You are authenticated..'})
    })
    

    app.use(basicAuth);
    app.use("",studentrouter)
    app.use("",courserouter)
    app.use("",enrollmentrouter)
    app.use("",attendancerouter)
