const express = require("express");
const School = require("../models/School/schoolSchema");
const LoginRouter = express.Router();

LoginRouter.get("/login", (req, res) => {
  //check if user creadentials exists in the db or not
});

//sign-up
LoginRouter.post("/users", (req, res) => {
  //Input -> Takes all the User Properties
  // Output --> Saves them all in db and return if operation was sucessful or not.
  // Check whether already an user exists with same name
});
// after pricipal accoutt has created a new School
// LoginRouter.post("/school", async (req, res) => {
//   try {
//     const newRecord = new School(req.body);
//     const result = await newRecord.save();
//     res.status(201).send(result);
//     console.log("record added  ", req.body);
//   } catch (err) {
//     res.status(400).send(err);
//   }
//Input -> Takes all the School Properties
// Makes a new School Collection
// Also  Check whether a school with that referesnce code exists Already in Database or Not
// Output --> Saves them all in db and return if operation was sucessful or not.

LoginRouter.post("/schoolInfo", (req, res) => {
  //take an Id from body and provide all info
});
module.exports = LoginRouter;
