const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const homeWorkSubmitSchema = new Schema({
  whichHomeWork: {
    type: String,
    required: true,
  },
  emailWhoSubmitted: {
    type: Array,
    required: true,
  },
});

const HomeWorkSubmits = new mongoose.model(
  "HomeWorkSubmits",
  homeWorkSubmitSchema
);
module.exports = HomeWorkSubmits;
