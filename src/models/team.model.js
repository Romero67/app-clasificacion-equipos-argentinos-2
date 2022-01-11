const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
 teams: [
  {
   pos: {
    type: String,
    required: true
   },
   name: {
    type: String,
    required: true
   },
   short_name:{
    type: String,
    required: true
   },
   pj: {
    type: String,
    required: true
   },
   g: {
    type: String,
    required: true
   },
   e: {
    type: String,
    required: true
   },
   p: {
    type: String,
    required: true
   },
   gf: {
    type: String,
    required: true
   },
   gc: {
    type: String,
    required: true
   },
   dg: {
    type: String,
    required: true
   },
   pts: {
    type: String,
    required: true
   },
   url: {
    type: String,
    required: true
   }
  }
 ]
},{
 timestamps: true
});

module.exports = mongoose.model('Team', teamSchema);