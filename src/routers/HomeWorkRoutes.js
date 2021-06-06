const express = require("express");
const HomeWorkRouter = express.router();
HomeWorkRouter.post("/homeWork", (req, res) => {
  //takes homework task
  //saves it in database
  // SIDDHESH Bhupendra Kuakde
});

HomeWorkRouter.post("/getHomeWork", (req , res)=>{
  //takes school Id  and send homwwork posts
})
module.exports = HomeWorkRouter;
