const express = require("express");
const LoginRouter = express.router();

// ## USED ONLY WHILE SIGN-UPS
//signup and login
LoginRouter.get("/checkUserMail", (req, res) => {
  // input -> user email
  //Output Check wthether the exisits in the db or not
  // provide all users with only email check on backend
});
//sign-up
LoginRouter.post("/users", (req, res) => {
  //Input -> Takes all the User Properties
  // Output --> Saves them all in db and return if operation was sucessful or not.
  // Check whether already an user exists with same name
});
// after pricipal accoutt has created a new School
LoginRouter.post("/school", (req, res) => {
  //Input -> Takes all the School Properties
  // Makes a new School Collection
  // Also  Check whether a school with that referesnce code exists Already in Database or Not
  // Output --> Saves them all in db and return if operation was sucessful or not.
});

//when a teacher is trying to login to a School
LoginRouter.get("/checkSchoolRef", (req, res) => {
  //Input -> Takes all the School reference code
  // Checks whether a school with that referesnce code exist in Database or Not
  // Output --> Saves them all in db and return if operation was sucessful or not.
});

module.exports = LoginRouter;
