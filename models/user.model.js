const { default: mongoose } = require("mongoose");


// create schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: Number,
});
exports.User = mongoose.model("user", userSchema);


// const blogSchema = new mongoose.Schema({
//   title: String,
//   imageUrl: String,
//   description: String,
//   postBy: String,
// });
// exports.Blog = mongoose.model("blog", blogSchema);