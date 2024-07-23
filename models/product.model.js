const { default: mongoose } = require("mongoose");


// create schema
const productSchema = new mongoose.Schema({
  name: String,
  price:Number,
  description:String,
  rating:Number,
  imageUrl:String,
  category: {
    type: String, default: null
  },
});
exports.Product = mongoose.model("product", productSchema);