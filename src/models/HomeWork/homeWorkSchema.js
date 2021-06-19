const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const homeworkSchema = new Schema({
  title: {
    required: true,
    type: String,
  },
  postedAt: {
    type: Date,
    required: true,
  },
  fromSchoolRef: {
    type: String,
    required: true,
    trim: true,
  },
  fromTeacherMail: {
    required: true,
    type: String,
    trim: true,
  },
  subject: {
    type: String,
    required: true,
  },
  standard: {
    type: Number,
    required: true,
  },

  marks: {
    type: Number,
  },
  emailWhoSubmitted: {
    type: Array,
    required: true,
  },

  dueDate: {
    type: Date,
  },
});

const HomeWork = new mongoose.model("Homework", homeworkSchema);
module.exports = HomeWork;
