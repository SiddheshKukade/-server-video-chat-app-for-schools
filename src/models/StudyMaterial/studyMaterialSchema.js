const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const studyMaterialSchema = new Schema({
  fromSchoolRef: String,
  fromTeacherMail: String,
  name: String,
  fileName: String,
  subject: String,
});

const StudyMaterial = new mongoose.model("StudyMaterial", studyMaterialSchema);
module.exports = StudyMaterial;