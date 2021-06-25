const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  role: String,
  name: String,
  email: String,
  password:String,
  fathername: String,
  standard :Number,
  address: String,
  phoneNo: Number,
  googleLogin: Boolean,
  referCode:  String,
});
// creating a new collection
const Users = new mongoose.model("Users", userSchema);
// model methods returns a class
module.exports = Users;
