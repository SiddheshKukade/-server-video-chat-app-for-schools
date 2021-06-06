const express = require("express");
const StudyMaterialRouter = express.router();
StudyMaterialRouter.post("/studyMaterial", (req, res) => {
  //Input -> Takes all the Studt Material <Data></Data>
  //Output --> Saves them all in db and return if operation was sucessful or not.
});
StudyMaterialRouter.post("/getStudyMaterial",  (req, res)=>{
  //get school ref id and provide all the study material objects.
})
module.exports = StudyMaterialRouter;
