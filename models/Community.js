const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
  communityName: String,
  location: String,
  continent: String,
  communityManager: Array,
  communitySize: Number,
  url: String
});

const Community = mongoose.model("Community", communitySchema);

module.exports = Community;
