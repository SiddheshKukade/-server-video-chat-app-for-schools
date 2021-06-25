const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const studyMaterialSchema = new Schema({
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
  createdAt :{
    type: Date , 
    required: true,
      },
   updatedAt : {
    type: Date , 
    required: true,
      },
 
});

const StudyMaterial = new mongoose.model("StudyMaterial", studyMaterialSchema);
module.exports = StudyMaterial;