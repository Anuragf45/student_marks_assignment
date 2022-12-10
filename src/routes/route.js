const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/userController");
const { student } = require("../controllers/studentController");

router.post("/register", register);
router.post("/login", login);

router.post("/student/:userId", student);

module.exports = router;
