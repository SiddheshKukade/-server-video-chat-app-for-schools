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
  console.log("Checking new User");
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
      // res.status(201).send({ alreadyExists: false });
      let content = req.body;
      const newRecord = new School(content);
      console.log("Storing School", content);
      const resSchool = await newRecord.save();
      res.status(201).send(resSchool);
      console.log("saved Sucessfuly");
    }
  } catch (err) {
    res.status(400).send(err);
    console.log("error occured while uploading");
  }
});

CreateAccountRouter.post("/newUser", async (req, res) => {
  console.log("====================================");
  console.log("Trying to save");
  console.log("====================================");
  try {
    const result = await School.find({ referCode: req.body.referCode });
    console.log("Searching school   ", req.body);
    if (result[0].referCode) {
      res.status(201).send({ alreadyExists: true });
    } else {
      const newRecord = new Users(req.body);
      console.log("new User", req.body);
      const resStudent = await newRecord.save();
      res.status(201).send(resStudent);
    }
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});
CreateAccountRouter.post("/newUserStudent", async (req, res) => {
  console.log("====================================");
  console.log("New Student Request Arrived");
  try {
    const result = await School.find({ referCode: req.body.referCode });
    console.log("Searching school   ", req.body);
    if (result[0]?.referCode) {
      console.log("School Found ", result[0]);
      const newRecord = new Users(req.body);
      console.log("new User", req.body);
      const resStudent = await newRecord.save();
      res.status(201).send(resStudent);
    } else {
      console.log("Wrong refercode");
      res.status(201).send({ alreadyExists: true });
    }
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
  console.log("====================================");
});
//when a teacher is trying to login to a School
CreateAccountRouter.post("/checkTeacher", async (req, res) => {
  //Input -> Takes all the School reference code
  // Checks whether a school with that referesnce code exist in Database or Not
  // Output --> Saves them all in db and return if operation was sucessful or not.

  try {
    const result = await School.find({ referCode: req.body.refercode });
    console.log("Searching school CheckTeacher  ", req.body);
    if (result[0]?.teacherMails) {
      result.map((schoolRes) =>
        schoolRes.teacherMails.map((mailSub) => {
          if (mailSub.email === req.body.teacherMail) {
            res.status(200).send({ allowed: true, schoolFound: true });
            console.log("Found Schools", schoolRes);
          } else {
            console.log("email not allowrd");
            console.log("email Provided was ", req.body.teacherMail);
            console.log("Mail Needeed : ", mailSub.email);
          }
        })
      );
    } else {
      console.log("No School Found");
      console.log("====================================");
      res.status(200).send({ allowed: false, schoolFound: true });
    }
    // console.log(result);
    // console.log(result[0].teacherMails);
    // console.log(result[0].teacherMails.map((t) => t.email));
  } catch (err) {
    res.status(400).send(err);
    console.log("error occured while uploading a school ", err);
  }
});

module.exports = CreateAccountRouter;
