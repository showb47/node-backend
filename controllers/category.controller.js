const { Category } = require("../models/category.model");

// create product
exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res
        .status(400)
        .json({ status: 400, message: "Name is required.." });
    }

    const checkCategory = await Category.findOne({ name: name });
    if (checkCategory)
      return res
        .status(409)
        .json({ status: 409, message: "Name already exists" });
        
    const createCategory = new Category();
    createCategory.name = name;

    createCategory.save();

    res.status(200).json({
      status: 200,
      message: "Category added successfully..",
      category: createCategory,
    });
  } catch (error) {
    console.log(error);
  }
};

// get category list
exports.getAllCategory = async (req, res) => {
  try {
    const {id} = req.query;
    if (id) {
      const category = await Category.findById(id);
      res.status(200).json({
        status: 200,
        message: "Category",
        category
      });
    } else {
      const allCategory = await Category.find();

      if (allCategory.length > 0) {
        res.status(200).json({
          status: 200,
          message: "Category list",
          allcategory: allCategory,
        });
      } else {
        res.status(200).json({
          status: 200,
          message: "Category list not found",
          allcategory: [],
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

// update category api
exports.updateCategory = async (req, res) => {
  try {
    const { name, id } = req.body;

    const newCategory = await Category.findById(id);
    newCategory.name = name;
    newCategory.save();

    res
      .status(200)
      .json({
        status: 200,
        message: "blog updated successfully..",
        newCategory: newCategory,
      });
  } catch (error) {
    console.log(error);
  }
};

// category by id
exports.getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);

    // check category
    if (category) {
      res
        .status(200)
        .json({
          status: 200,
          message: "Category found successfully..",
          category,
        });
    } else {
      res.status(404).json({ status: 404, message: "Category not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

// category delete by id
exports.deleteCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.deleteOne({ _id: id });

    // check category
    if (category) {
      res
        .status(200)
        .json({ status: 200, message: "Category delete successfully.." });
    } else {
      res.status(404).json({ status: 404, message: "Category not found" });
    }
  } catch (error) {
    console.log(error);
  }
};
