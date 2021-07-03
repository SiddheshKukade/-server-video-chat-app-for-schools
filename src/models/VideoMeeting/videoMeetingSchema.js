const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const videoMeetingSchema = new Schema({
  title: String,
  fromTeacher:  String,
  subject: String ,
  fromSchoolRef: String

});

const VideoMeeting = new mongoose.model("VideoMeeting", videoMeetingSchema);
module.exports = VideoMeeting;
