var studentModel = require('../models/student'); 
const studentSchema = require('../models/studentSchema');

module.exports.getIndex = async (req,res)=>{
    // console.log(studentModel.nameLayout);
    // console.log(req.query.page);
    if(req.session.student){
        var student = req.session.student;
    }
    //get list student
    const studentList = await studentSchema.find();
    //sort
    if(studentModel.sort == true){
        studentModel.sort = true;
        console.log('sort');
        studentList.sort((a,b)=>{
            let nameA = a.name.split(' ');
            let nameB = b.name.split(' ');

            if(nameA[nameA.length - 1] < nameB[nameB.length - 1]) return -1;
            if(nameA[nameA.length - 1] > nameB[nameB.length - 1]) return 1;
            return 0;
        })
    }
    // console.log(studentModel.sort);

    // console.log(req.session);
    let page = parseInt(req.query.page) || 1;
    let perPage = 3;

    let start = (page - 1) * perPage;
    let end = page  * perPage;

    let numberPage=Math.ceil((studentList.length)/perPage);
    // console.log(numberPage);

    if(studentModel.nameLayout == 'favicon.ico'){
        studentModel.nameLayout = 'table';
        res.render('index',{name:studentModel.nameLayout,
                            studentList:studentList.slice(start,end),
                            totalPage:numberPage,
                            activePage:page,
                            updateStudent:student,
                            student:req.session.studentFind,
                            username:req.session.passport.user,
                            });
    }else{
        
        res.render('index',{name:studentModel.nameLayout,
                            studentList:studentList.slice(start,end),
                            totalPage:numberPage,
                            activePage:page,
                            updateStudent:student,
                            student:req.session.studentFind,
                            username:req.session.passport.user,
                            });
    }
}