const express = require("express");
const StudyMaterialRouter = express.Router();
const fs = require("fs");
const StudyMaterial = require("../models/StudyMaterial/studyMaterialSchema");
const multer = require("multer");
const File = require("../models/File/File")
const path = require("path");

StudyMaterialRouter.post("/getStudyMaterial", async (req, res) => {
  try {
    const result = await StudyMaterial.find({
      fromSchool: req.body.fromSchool,
    });
    res.status(200).send({ studyMaterialPosts: result });
  } catch (err) {
    res.status(400).send(err);
  }
  //get school ref id and provide all the study material objects.
});
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/sm")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname)
  }
})
const upload = multer({ storage: fileStorageEngine })
StudyMaterialRouter.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file)
  res.send({ sucess: true, filename: req.file.filename })
})

StudyMaterialRouter.post("/sm", async (req, res) => {
  try {
    const newRecord = new StudyMaterial(req.body);
    console.log("saving StudyMaterial", req.body);
    const result = await newRecord.save();
    res.status(200).send({ sucess: true })
  } catch (err) {
    console.log(err)
    res.status(400).send(err);
  }
})
StudyMaterialRouter.get("/download:code", (req, res) => {
  try {
    console.log("Path to find SM : ",path.join(__dirname, '../../uploads/sm', req.params.code) );
    res.sendFile(path.join(__dirname, '../../uploads/sm', req.params.code))
  } catch (err) {
    res.send(err)
    console.log("Error Occured While Dowlnoading File on Client", err)
  }
})
module.exports = StudyMaterialRouter;
