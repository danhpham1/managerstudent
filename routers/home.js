const express = require('express');
const bodyParser = require('body-parser');

const homeController = require('../controller/home-controller');
const layoutController = require('../controller/layout-controller');
const formController = require('../controller/form-controller');
const deleteController = require('../controller/delete-student');
const sortStudentController = require('../controller/sort-student');
const findStudentController = require('../controller/find-student');


var router = express.Router();
router.use(bodyParser.urlencoded({extended:true}))


router.get('/',homeController.getIndex);

router.get('/:name',layoutController.getLayout);

router.post('/:name',formController.processPOST);



router.get('/update/:id',formController.processGET);

router.get('/delete/:id',deleteController.deleteStudent);

router.get('/sort/student',sortStudentController.sortStudent);
// router.get('/sort/student',(req,res)=>{
//     console.log('asdasd');
// })

router.post('/find/student',findStudentController.findStudent);

module.exports = router;