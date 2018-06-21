const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  Password: { type: String, required: true },
  ign: String,
  rank: String,
  role: String,
  captain: Boolean,
  teamName: String,
  schedule: Array
});

const User = mongoose.model("User", userSchema);

module.exports = User;
