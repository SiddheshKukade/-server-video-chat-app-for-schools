const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const schoolSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  principalMail: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  teacherMails: {
    type: Array,
    required: true,
  },
  standards: {
    type: Array,
    required: true,
  },
  subjects: {
    type: Array,
    required: true,
  },
});

const School = new mongoose.model("School", schoolSchema);
module.exports = School;
