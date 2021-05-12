const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const studyMaterialSchema = new Schema({
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
  name: {
    type: String,
    unique: true,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  standard: {
    type: Number,
    required: true,
  },
});

const StudyMaterial = new mongoose.model("StudyMaterial", studyMaterialSchema);
module.exports = StudyMaterial;
