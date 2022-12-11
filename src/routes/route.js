const express = require("express");
const router = express.Router();

const userModel=require('../controllers/userController')
const studentController=require('../controllers/studentController')
const { student, update } = require("../controllers/studentController");
const {authentication} = require('../middlewares/auth')

router.post("/register", userModel.register);
router.post("/login", userModel.login);

router.post("/student/:userId",authentication, studentController.student);
router.put("/edit/:userId/:studentId",authentication,studentController.update)
router.get('/getStudents/:userId',studentController.viewStudent)
router.delete("/student/:userId/:studentId",authentication, studentController.deleteStudent);


module.exports = router;

