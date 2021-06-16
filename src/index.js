require("dotenv").config();
const express = require("express");
require("./db/connection");
const app = express();
const upload = require("express-fileupload");
const Ranking = require("./models/participantSchema");
const router = require("./routers/router");
const HomeWork = require("./models/HomeWork/homeWorkSchema");
// const Video = require("./modles/VideoMeeting/videoMeetingSchema");
const HomeWorkSubmissions = require("./models/HomeWork/homeWorkSubmitSchema");
const StudyMaterial = require("./models/StudyMaterial/studyMaterialSchema");
const User = require("./models/User/userSchema");
const School = require("./models/School/schoolSchema");
const LoginRouter = require("./routers/LoginRoutes");
const CreateAccountRouter = require("./routers/CreateAccountRoutes")
const DashboardRouter = require("./routers/DashboardRoutes")
const StudyMaterialRouter = require("./routers/StudyMaterialRoutes")
const HomeWorkRouter  = require("./routers/HomeWorkRoutes")
const cors = require("cors")
// middlewares
app.use(express.json());
app.use(upload());
app.use(cors())
app.use(router);
app.use(CreateAccountRouter);
app.use(LoginRouter);
app.use(DashboardRouter);
app.use(HomeWorkRouter)
app.use(StudyMaterialRouter)
// setting port
const PORT = process.env.PORT || 6969;

app.listen(PORT, () => {
  console.log(`server is up and running at ${PORT}`);
});

// Creting an Object id With Mongoose
// const mongoose = require("mongoose");
// var id = mongoose.Types.ObjectId();
// console.log(id);
