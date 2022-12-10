const studentModel = require("../models/studentModel");
const {
  isValidName,
  isValidObjectId,
  isValidRequestBody,
} = require("../validators/validations");
const { findOneAndUpdate } = require("../models/userModel");

const student = async (req, res) => {
  try {
    let sData = req.body;
    let userId = req.params.userId;
    let { name, subject, marks } = sData;

    if (!isValidRequestBody(sData)) {
      return res.send({
        status: false,
        message: "Kindly send correct request",
      });
    }

    if (!isValidObjectId(userId)) {
      return res.send({
        status: false,
        message: "UserId is not correct or user does not exist",
      });
    }

    //check authentication
    // if (req.headers.userId != userId) {
    //   return res.status(400).send({
    //     status: false,
    //     message: "User is not authorised to add students",
    //   });
    // }

    let isStudentPresent = await studentModel
      .findOne({
        name: name,
        subject: subject,
      })
      .select({ updatedAt: 0, __v: 0, createdAt: 0 });

    if (isStudentPresent) {
      isStudentPresent.marks += marks;
      await isStudentPresent.save();
      return res.send({ status: true, ["student data"]: isStudentPresent });
    }
    let createStudent = await studentModel.create(sData);
    let getStudent = await studentModel
      .findOne(createStudent)
      .select({ updatedAt: 0, __v: 0, createdAt: 0 });
    return res.send({ status: true, ["student data"]: getStudent });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports.student = student;
