const express = require("express");
const HomeWork = require("../models/HomeWork/homeWorkSchema");
const School = require("../models/School/schoolSchema");
const StudyMaterial = require("../models/StudyMaterial/studyMaterialSchema");
const DashboardRouter = express.Router();
const Users = require("../models/User/userSchema");
const VideoMeeting = require("../models/VideoMeeting/videoMeetingSchema");

DashboardRouter.post("/school", async (req, res) => {
  // try {
  //   const schoolres = await School.find({ referCode: schoolRefCode });
  //   subjects.push(schoolres);
  // } catch (err) {
  //   res.status(400).send(err);
  // }
  // mails.map((mail) => {
  //   try {
  //     Users.find({ email: mail }).then((res) => names.push(res.name));
  //     // names.push(res.name);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // });
  // res.status(200).send({ names, subjects });
  //takes the users email'
  //provide everything for him
  // School Name
  // Standard
  // Teachers
  //  Study MAterial data
  //  VideoMeeting Data
  //
  try {
    console.log("Searching school  ", req.body);
    const result = await School.find({ referCode: req.body.referCode });
    console.log("THis is result", result);
    res.send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

DashboardRouter.post("/hw", async (req, res) => {
  try {
    console.log("Searching school  ", req.body);
    const result = await HomeWork.find({
      fromSchoolRef: req.body.fromSchoolRef,
      subject : req.body.subject

    });
    console.log("THis is homework", result);
    res.send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

DashboardRouter.post("/sm", async (req, res) => {
  try {
    console.log("Searching school  ", req.body);
    const result = await StudyMaterial.find({
      fromSchoolRef : req.body.referCode,
      subject : req.body.subject
    });
    console.log("THis is study Materil", result);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});
DashboardRouter.post("/vm", async (req, res) => {
  try {
    console.log("Searching VM  ", req.body);
    const result = await VideoMeeting.find({
      fromSchoolRef: req.body.referCode,


    });
    console.log("THis is Video Meetingt datra", result);
    res.send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});
DashboardRouter.post("/teacherNames", async (req, res) => {
  const mails = req.body.teachersMailsOnly;
  let names = [];
  const myPromise = new Promise((resolve, reject) => {
    try {
      names = mails.map(async (mail) => {
        try {
          await Users.find({ email: mail })
            .then((result) => {
              return result[0].name;
            })
            .catch((error) => console.log("Username E-mail Not Found ", error));
          // names.push(res.name);
        } catch (err) {
          console.log(err);
        }
      });
      resolve(names);
      console.log("names are ", names);
    } catch (err) {
      res.status(400).send(err);
      console.log(err);
    }
  });
  myPromise.then((namesOP) => {
    res.status(200).send({ names: namesOP });
  });
});
DashboardRouter.post("/teacherNameFromMail", async (req, res) => {
  try {
    const result = await Users.find({ email: req.body.email });
    console.log("teacher nam,e from mail", result[0].name);

    res.status(201).send(result[0].name);
  } catch (err) {
    res.status(404).send(err);
  }
});
module.exports = DashboardRouter;
