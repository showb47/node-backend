const { default: mongoose, Types } = require("mongoose");


// create schema
const categorySchema = new mongoose.Schema({
  name: { type: String, unique: true  }


});
exports.Category = mongoose.model("category", categorySchema);
