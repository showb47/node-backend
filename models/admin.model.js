const { default: mongoose } = require("mongoose");


// create schema
const adminSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: Number,
});
exports.Admin = mongoose.model("admin", adminSchema);
