const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  role: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
  fathername: {
    type: String,
    trim: true,
  },
  dob: {
    type: Date,
  },
  standard: {
    type: Number,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  phoneNo: {
    type: Number,
    trim: true,
  },
  googleLogin: {
    required:true,
    type: Boolean,
  },
  createdAt: {
type: Date,
    },
  updatedAt : {
type: Date,
required: true,
  }
});
// creating a new collection
const Users = new mongoose.model("Users", userSchema);
// model methods returns a class
module.exports = Users;
