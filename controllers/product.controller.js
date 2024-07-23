const { Product } = require("../models/product.model");

exports.createProduct = async (req, res) => {
  const { name, price, description, rating, imageUrl, category } = req.body;

  if (!name || !price || !description || !rating || !imageUrl || !category) {
    return res
      .status(400)
      .json({ status: 400, message: "All field is required.." });
  }

  // check product//////
  const checkProduct = await Product.findOne({ product: name });
  if (checkProduct)
    return res
      .status(409)
      .json({ status: 409, message: "product already exists" });

  const createproduct = new Product();
  createproduct.name = name;
  createproduct.price = price;
  createproduct.description = description;
  createproduct.rating = rating;
  createproduct.imageUrl = imageUrl;
  createproduct.category = category;
  createproduct.save();

  res
    .status(200)
    .json({
      status: 200,
      message: "Product added successfully..",
      product: createproduct,
    });
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, price, description, imageUrl, rating, id } = req.body;

    const newProduct = await Product.findById(id);
    newProduct.name = name;
    newProduct.price = price;
    newProduct.description = description;
    newProduct.imageUrl = imageUrl;
    newProduct.rating = rating;
    newProduct.save();

    res.status(200).json({
      status: 200,
      message: "product updated successfully..",
      newProduct: newProduct,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.deleteOne({ _id: id });

    // check category
    if (product) {
      res
        .status(200)
        .json({ status: 200, message: "product delete successfully.." });
    } else {
      res.status(404).json({ status: 404, message: "product not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.allProduct = async (req, res) => {
  const product = await Product.find();
  if (product.length == 0) {
    return res
      .status(404)
      .json({ status: 404, message: "product not found!..", product: product });
  }
  res
    .status(200)
    .json({
      status: 200,
      message: "product get successfully..",
      product: product,
    });
};

exports.singleProductById = async (req , res) => {
  const {id} = req.params;

  const product = await Product.findById(id)
  if(id)
    res.status(200).json({status:200,message:"product found successfully",product:product})
}