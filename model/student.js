const mongoose = require('mongoose')

const studentSchema = {
    student_id: {type : String, required:true},     
    first_name: {type : String, required:true},
    last_name: {type : String, required:true},
    date_of_birth: {type : Date, required:true},
   gender: {type : String, required:true}, 
    email: {type : String, required:true},
    phone_number: {type : String , required:true},
    aadhar_number: {type : String, required:true}, 
    emis_number:{type : String , required:true}, 
    address: {
        street:{type : String , required:true},
        city:{type : String , required:true},
        state:{type : String, required:true},
        zip_code:{type : String, required:true},
        country: {type : String, required:true}    
            },
    date_of_joining:{type : Date , required:true},
    status:{type : String, required:true}    

}
 
module.exports = mongoose.model("Student",studentSchema )