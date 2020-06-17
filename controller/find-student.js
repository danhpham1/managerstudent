var studentModel = require('../models/student');
const studentSchema = require('../models/studentSchema');

module.exports.findStudent = async (req,res)=>{
    // console.log(req.body);
    studentModel.nameLayout = 'findtable';
    const studentFind = await studentSchema.findOne({"studentId":req.body.id});
    // console.log(studentFind);
    req.session.studentFind = studentFind;
    // console.log(studentModel.studentList)
    res.redirect('/');
}