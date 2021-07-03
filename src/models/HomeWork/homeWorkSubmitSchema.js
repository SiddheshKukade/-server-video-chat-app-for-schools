const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const homeWorkSubmitSchema = new Schema({
         name : String  ,
        email : String  ,
        file : String  ,
        hwCode : String
 });

const HomeWorkSubmits = new mongoose.model(
  "HomeWorkSubmits",
  homeWorkSubmitSchema
);
module.exports = HomeWorkSubmits;
