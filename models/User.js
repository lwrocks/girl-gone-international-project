const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  accessCode: {
    type: String,
    required: true
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
