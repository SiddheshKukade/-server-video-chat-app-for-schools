const express = require("express");
const mongoose = require("mongoose");
const  Schema  = mongoose.Schema;
const schoolSchema = new Schema({
 name:String,
 principalMail:String,
 principalName:String,
 teacherMails:Array,
 standards:Array,
 subjects:Array,
 referCode:String,
});

const School = new mongoose.model("School", schoolSchema);
module.exports = School;
  // name: {
  //   type: String,
  // },
  // principalMail: {
  //   type: String, 
  // },
  // principalName :{
  //     type: String,  
  // },
  // //array of Objects [{tmail , sub} ,{tmail2 , sub2} ,... ]
  // teacherMails: {
  //   type: Array,
  // },
  // standards: {
  //   type: Array,
  //   required: true,
  // },
  // subjects: {
  //   type: Array,
  // },
  // referCode: {
  //   type: String,
  // },