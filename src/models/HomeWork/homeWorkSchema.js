const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const homeworkSchema = new Schema({
  postedAt: {
    type: Date,
    required: true,
  },
  fromSchool: {
    type: String,
    required: true,
    trim: true,
  },
  fromTeacher: {
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
  name: {
    type: String,
    required: true,   
    unique: true,
  },
  marks: {
    type: Number,
  },

  dueDate: {
    type: Date,
  },
 });

const HomeWork = new mongoose.model("Homework", homeworkSchema);
module.exports = HomeWork;
