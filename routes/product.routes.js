const express = require("express")
const { createProduct, allProduct, updateProduct, singleProductById, deleteProduct } = require("../controllers/product.controller")
const router = express.Router()



router.post("/product/createproduct",createProduct)
router.get("/product/allproduct",allProduct)
router.put("/product/updateproduct" , updateProduct)
router.get("/product/productbyid/:id" , singleProductById)
router.delete("/product/deleteproduct/:id" , deleteProduct)


module.exports = router