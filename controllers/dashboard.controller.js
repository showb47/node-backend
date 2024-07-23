const { Admin } = require("../models/admin.model");
const { Category } = require("../models/category.model");
const { Product } = require("../models/product.model");
const { User } = require("../models/user.model");


// all dashboard
exports.dashboard = async (req, res) => {
  const admins = await Admin.countDocuments();
  const categories = await Category.countDocuments();
  const products = await Product.countDocuments();
  const users = await User.countDocuments();
  const productlist = await Product.find().limit(10).sort({ createdAt: -1 });

  const data = {
    admins,
    categories,
    products,
    users,
    productlist
  }

  res
    .status(200)
    .json({
      status: 200,
      message: "Admins get successfully..",
      data: data
    });
};
