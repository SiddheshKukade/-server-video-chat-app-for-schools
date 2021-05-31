const express = require("express");
const VideoMeetingRouter = express.router();
VideoMeetingRouter.post("/videoMeeting", (req, res) => {
  // Input -> Takes all the videoMeeting Data of a particular shoools
  //  Output --> Saves them all in db and return if operation was sucessful or not.
});
module.exports = VideoMeetingRouter;
