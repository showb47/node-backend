const { default: mongoose, Types } = require("mongoose");




// create schema
const settinSchema = new mongoose.Schema({
    name: String,
    logo: String,
    copyright: String,
    metaName:  String,
    metaDescription: String,
    metaLogo: String,
    metaKeyword: String
});
  exports.User = mongoose.model("setting", settinSchema);