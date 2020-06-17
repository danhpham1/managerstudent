var studentModel = require('../models/student');

module.exports.sortStudent = (req,res)=>{
    // studentModel.studentList.sort(function(a,b){
    //     let nameA = a.name.split(' ');
    //     let nameB = b.name.split(' ');

    //     if(nameA[nameA.length - 1] < nameB[nameB.length - 1]) return -1;
    //     if(nameA[nameA.length - 1] > nameB[nameB.length - 1]) return 1;
    //     return 0;

    // })
    // console.log(studentModel.studentList);
    studentModel.sort = true;

    res.redirect('/');
}