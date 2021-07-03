const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const homeworkSchema = new Schema({
  title: String,
  fromSchoolRef: String,
  fromTeacherMail: String,
  subject: String,
  marks: Number,
  hwCode: String
});

const HomeWork = new mongoose.model("Homework", homeworkSchema);
module.exports = HomeWork;
