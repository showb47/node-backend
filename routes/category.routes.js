const express = require("express")
const { createCategory, getAllCategory, updateCategory, getCategoryById, deleteCategoryById } = require("../controllers/category.controller")
const router = express.Router()



router.post("/category/createcategory",createCategory)
router.get("/category/allcategory",getAllCategory)
router.put("/category/updatedcategory" , updateCategory)
router.get("/category/getCategoryById/:id" , getCategoryById)
router.delete("/category/deleteCategoryById/:id" , deleteCategoryById)


module.exports = router