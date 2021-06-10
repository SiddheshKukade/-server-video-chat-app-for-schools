const express = require("express");
const HomeWorkRouter = express.router();
HomeWorkRouter.post("/homeWork", (req, res) => {
  //takes homework task
  //saves it in database
  // SIDDHESH Bhupendra Kuakde
});

HomeWorkRouter.post("/getHomeWork", (req , res)=>{
  try{
const result  = = await HomeWork.find({fromSchool : req.body.fromSchool})
res.status(200).send({homeWorkPosts : result});
  }catch(err){
    res.status(400).send(err)
  }
  //takes school Id  and send homwwork posts
})
module.exports = HomeWorkRouter;
