const fs = require("fs");
const express = require("express");
const HomeWork = require("../models/HomeWork/homeWorkSchema");
const HomeWorkRouter = express.Router();
const multer = require("multer");
const HomeWorkSubmits = require("../models/HomeWork/homeWorkSubmitSchema")
HomeWorkRouter.post("/addHomeWork",async (req, res) => {
  //takes homework task
  try {
    const newRecord = new HomeWork(req.body);
    console.log("New Console", req.body);
    const result = await newRecord.save();


    const newRecordHs = new HomeWorkSubmits({
      hwCode : req.body.hwCode,
      emailWhoSubmitted : []
    })
    console.log("Created HomeWorkSubmissions ")
   await newRecordHs.save()
    res.status(201).send(result);

  } catch (err) {
    res.status(404).send(err);
  }
try {
    const filePath = `./uploads/${req.body.fromSchoolRef}/${req.body.title.replace(/\s/g, '')}`

  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath)
  }
} catch (err) {
  console.error(err)
}
  //saves it in database
  // SIDDHESH Bhupendra Kuakde
});

HomeWorkRouter.post("/getHomeWork",async (req, res) => {
  try {
    const result = await HomeWork.find({ fromSchool: req.body.fromSchool });
    res.status(200).send({ homeWorkPosts: result });

  } catch (err) {
    res.status(400).send(err);
  }
  //takes school Id  and send homwwork posts
});

// HomeWorkRouter.post("/addHomeWorkStudent", async (req, res)=>{
//   //  if (req.files) {
//   //   let file = req.files.fileUp;
//   //   let filename = req.files.fileUp.name;
//   //   console.log(req.files);
//   //   file.mv("./uploads/" + filename, (err) => {
//   //     if (err) {
//   //       console.log(err);
//   //       console.log("error occured while uploading a file");
//   //     } else {
//   //       console.log("File has been uploaded sucessfully. ");
//   //     }
//   //   });
//   // }
//  let file = req.body.file
//  let filename = req.body.file.name
//  let schoolRefCode = req.body.schoolRefCode
//  let title = req.body.title
//    file.mv(`./uploads/${schoolRefCode}/${title.replace(/\s/g, '')}` + filename, (err) => {

//       if (err) {
//         console.log(err);
//         console.log("error occured while uploading a file");
//       } else {
//         console.log("File has been uploaded sucessfully. ");
//       }
//     });
// })
const fileStorageEngine = multer.diskStorage({
  destination : (req,file,cb)=>{
    cb(null ,"./uploads/hw") 
  },
  filename : (req,file, cb)=>{
    cb(null , Date.now()+"--"+file.originalname)
  }
})
const upload = multer({storage : fileStorageEngine})

HomeWorkRouter.post("/addHomeWorkStudent" , upload.single("image"), async(req, res)=> {
      const tempObject = {
        name : req.body.name ,
        email : req.body.email ,
        file : req.file.filename ,
        hwCode : req.body.hwCode
      }
      const newRecord  = new  HomeWorkSubmits(tempObject)
      const res2 = await newRecord.save();
      res.status(200).send(res2)

})

HomeWorkRouter.post("/getHomeWorkSubmissions",async (req , res)=>{
  try {
    const result = await HomeWorkSubmits.find({hwCode : req.body.hwCode});
    res.send(result);
    console.log("Students  HomeWorkSubmits",result);
  } catch (err) {
    res.status(404).send(err);
  }
})

HomeWorkRouter.post("/")
module.exports = HomeWorkRouter;
