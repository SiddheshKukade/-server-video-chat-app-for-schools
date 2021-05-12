const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const videoMeetingSchema = new Schema({});

const VideoMeeting = new mongoose.model("VideoMeeting", videoMeetingSchema);
module.exports = VideoMeeting;
