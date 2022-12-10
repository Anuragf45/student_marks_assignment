const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/userController");
const { student } = require("../controllers/studentController");
const {authentication} = require('../middlewares/auth')

router.post("/register", register);
router.post("/login", login);

router.post("/student/:userId",authentication, student);

module.exports = router;
