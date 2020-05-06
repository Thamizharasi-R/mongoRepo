const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    StudentName: {type: String},
    Studentid: {type: String},
    Studentcourse:{type:String}
    
})

module.exports=mongoose.model('Student',studentSchema)