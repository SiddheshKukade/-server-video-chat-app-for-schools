const express = require("express");
const VideoMeetingRouter = express.Router();
const VideoMeeting = require("../models/VideoMeeting/videoMeetingSchema");
VideoMeetingRouter.post("/getVideoMeeting",async (req, res) => {
  // Input -> Takes all the videoMeeting Data of a particular shoools
  //  Output --> Saves them all in db and return if operation was sucessful or not.
  try {
    const result = await VideoMeeting.find({ fromSchool: req.body.fromSchool  });
    res.status(200).send({ videoMeetingPosts: result });
  } catch (err) {
    res.status(400).send(err);
  }
});

VideoMeetingRouter.post("/video",async (req, res) => {
  try {
    const newRecord = new VideoMeeting(req.body);
    console.log(req.body);
    const result = await newRecord.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = VideoMeetingRouter;
