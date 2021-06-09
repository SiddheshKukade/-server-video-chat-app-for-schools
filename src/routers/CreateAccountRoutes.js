const express = require("express");
const School = require("../models/School/schoolSchema");
const CreateAccountRouter = express.Router();
const Users = require("../models/User/userSchema");
//import school
// CreateAccountRouter.post(
// '/newUserSave', (req ,res)=>{
//Input -> Takes all the new  User Properties
// Output --> Saves them all in db and return if operation was sucessful or not.
// Check whether alre
// ## USED ONLY WHILE SIGN-UPS
//signup and login
CreateAccountRouter.post("/newUserCheck", async (req, res) => {
  try {
    const result = await Users.find({ email: req.body.email });
    res.status(201).send(result);
    console.log("newUserCheck  ", req.body);
  } catch (err) {
    res.status(400).send(err);
  }
  // console.log('newUserCheck', req.body)
  // res.status(201).send({userIsAvailable : true})
});

CreateAccountRouter.post("/school", async (req, res) => {
  // first verify the ref code and then save the school Data
  try {
    const result = await School.find({ referCode: req.body.referCode });
    console.log("Searching school  ", req.body);
    if (result.referCode) {
      res.status(201).send({ alreadyExists: true });
    } else {
      res.status(201).send({ alreadyExists: false });
      const newRecord = new School(req.body);
      console.log("Storing School", req.body);
      const resSchool = await newRecord.save();
      res.status(201).send(resSchool);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});
CreateAccountRouter.post("/newUser", (req, res) => {
  const newRecord = new User(req.body);
  console.log("new User", req.body);
  const resStudent = await newRecord.save();
  res.status(201).send(resStudent);
  //store new user
});

//when a teacher is trying to login to a School
CreateAccountRouter.post("/checkTeacher", async (req, res) => {
  //Input -> Takes all the School reference code
  // Checks whether a school with that referesnce code exist in Database or Not
  // Output --> Saves them all in db and return if operation was sucessful or not.

  try {
    const result = await School.find({ referCode: req.body.refercode });
    console.log("Searching school  ", req.body);
    if (result.teacherMails) {
      result.teacherMails.map((mailSub) => {
        if (mailSub.email === req.body.teacherMail) {
          res.status(200).send({ allowed: true, schoolFound: true });
        }
      });
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = CreateAccountRouter;
