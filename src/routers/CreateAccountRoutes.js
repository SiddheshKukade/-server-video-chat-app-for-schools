const express = require("express");
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
    console.log("record added  ", req.body);
  } catch (err) {
    res.status(400).send(err);
  }
  // console.log('newUserCheck', req.body)
  // res.status(201).send({userIsAvailable : true})
});

CreateAccountRouter.post('/school', (req , res )=>{
	//first verify the ref code and then save the school Data
//   try {
// const result = await School.find({ email: req.body.email });
//     res.status(201).send(result);
//     console.log("record added  ", req.body);
//   } catch (err) {
//     res.status(400).send(err);
//   }
})
CreateAccountRouter.post("/newUser" ,  (req, res)=>{
	//store new user
})
CreateAccountRouter.post("checkSchoolRef",  (req, res)=>{
	//check ref good or not
})

module.exports = CreateAccountRouter;
