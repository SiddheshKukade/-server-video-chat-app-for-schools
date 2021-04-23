const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const participantSchema = new Schema({
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  dob: {
    type: Date,
    required: true,
    trim: true,
    unique: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  score: {
    type: Number,
    trim: true,
  },
  event: {
    type: String,
    default: "100m",
  },
});
// creating a new collection
const MensRanking = new mongoose.model("MensRanking", participantSchema);
// model methods returns a class
module.exports = MensRanking;
