var studentModel = require('../models/student');
const studentSchema = require('../models/studentSchema');

module.exports.processPOST = async (req,res)=>{
    if( req.params.name == 'add'){
        //set name layout
        studentModel.nameLayout = 'table';

        //push student 
        const student = new studentSchema({
            studentId:req.body.idStudent,
            name:req.body.name,
            dob:req.body.dob,
            address:req.body.address,
            email:req.body.email
        });
        await student.save();
        res.redirect('/');
    }else{
        
        studentModel.nameLayout = 'table';  
        // console.log();
        
        // console.log(studentModel.studentList[parseInt(req.body.indexUpdate)]);
        studentSchema.findByIdAndUpdate(req.session.student._id,{$set:{
                studentId:req.body.idStudent,
                name:req.body.name,
                dob:req.body.dob,
                address:req.body.address,
                email:req.body.email
        }},{new:true},function(err){
            if(err){
                console.log('update faild');
            }else{
                console.log('update success');
            }
        });
        
        res.redirect('/');
    }
}

module.exports.processGET = async (req,res)=>{
        studentModel.nameLayout = 'update';
        // console.log(studentModel.nameLayout);
        // studentModel.student = studentModel.studentList[req.params.index];
        // console.log(studentModel.student);   
        const studentUpdate = await studentSchema.findById(req.params.id);
        req.session.student = studentUpdate;
        console.log(req.session.student);
        res.redirect('/');
}