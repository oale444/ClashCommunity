const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  passWord: { type: String, required: true },
  ign: String,
  rank: String,
  role: String,
  captain: Boolean,
  teamName: String,
  server: String,
  schedule: {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
