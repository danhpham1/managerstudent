const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentId:Number,
    name:String,
    dob:String,
    address:String,
    email:String
})

module.exports = mongoose.model('student',studentSchema);