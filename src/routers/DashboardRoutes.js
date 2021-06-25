const express = require("express");
const DashboardRouter = express.Router();
const Users = require("../models/User/userSchema");
DashboardRouter.get("/userDash", async(req, res) => {
  const mails  = req.body.teachersMailsOnly;
  const names = []
  const subjects = []
  try{
    const schoolres  =await School.find({referCode : schoolRefCode})
    subjects.push(schoolres)
  }catch (err) {
    res.status(400).send(err);
  }
  mails.map(mail=>{
    try {
      Users.find({email : mail}).then(res=> names.push(res.name))
    // names.push(res.name);

    }
    catch(err){console.log(err)}
  })
  res.status(200).send({names , subjects});
  //takes the users email' 
  //provide everything for him
  // School Name
  // Standard
  // Teachers
  //  Study MAterial data
  //  VideoMeeting Data
  //
    try {
    const result = await School.find({ referCode: req.body.stateSchoolRef});
    console.log("Searching school  ", req.body);
    res.send(result)
  } catch (err) {
    res.status(400).send(err);
  }
});
module.exports = DashboardRouter;
