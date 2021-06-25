const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const videoMeetingSchema = new Schema({
  title: {
    required: true,
    type: String,
  },
  fromTeacher: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: Date,
  },
});

const VideoMeeting = new mongoose.model("VideoMeeting", videoMeetingSchema);
module.exports = VideoMeeting;
