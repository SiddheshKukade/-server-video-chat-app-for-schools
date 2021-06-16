const express = require("express");
const StudyMaterialRouter = express.router();
const fs = require("fs");
const StudyMaterial = require("../models/StudyMaterial/studyMaterialSchema")
StudyMaterialRouter.post("/studyMaterial", (req, res) => {
  //Input -> Takes all the Studt Material <Data></Data>
  //Output --> Saves them all in db and return if operation was sucessful or not.
});
StudyMaterialRouter.post("/getStudyMaterial",  (req, res)=>{
   try{
const result  = = await StudyMaterial.find({fromSchool : req.body.fromSchool})
res.status(200).send({studyMaterialPosts : result});
  }catch(err){
    res.status(400).send(err)
  }
  //get school ref id and provide all the study material objects.
})


StudyMaterialRouter.post("/uploadStudyMaterial" , (req ,res)=>{
  try{
    if (req.files) {
    let file = req.files.file;
    let filename = req.files.file.name;
    console.log(req.files);
    file.mv("./uploads/" + filename, (err) => {
        if (err) {
          console.log(err);
          console.log("error occured while uploading a file");
        } else {
          console.log("File has been uploaded sucessfully. ");
        }
      });
  }
  catch(err){

  }
})


module.exports = StudyMaterialRouter;
