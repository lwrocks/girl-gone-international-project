const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
  communityName: String,
  city: String,
  cityImage: String,
  continent: String,
  coordinates: Array,
  communityManager: Array,
  communitySize: Number,
  url: String
});

const Community = mongoose.model("Community", communitySchema);

module.exports = Community;
