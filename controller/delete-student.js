var studentModel = require('../models/student');
const studentSchema = require('../models/studentSchema');

module.exports.deleteStudent = async (req,res)=>{
    // studentModel.studentList.splice(req.params.index,1);
    await studentSchema.deleteOne({_id:req.params.id},function(err){
        if(err){
            console.log('delete faild');
        }else{
            console.log('delete success');
        }
    })
    studentModel.nameLayout = 'table';
    res.redirect('/');
}   