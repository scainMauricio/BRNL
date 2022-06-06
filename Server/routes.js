const express = require("express");
var router = express.Router();
var { Product } = require("./Models/product.model");
//TODO if I have time, create controlers for the callbacks for each route

//GET ALL PRODUCTS
router.get("/products", async (req, res) => {
  try {
    let allProducts = await Product.find();
    res.status(200);
    res.send(allProducts);
  } catch (err) {
    console.log("error", err);
    res.sendStatus(400);
  }
});

//GET PRODUCT BY ID
router.get("/:productId", async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.status(200);
    res.send(product);
  } catch (err) {
    console.log("error", err);
    res.sendStatus(400);
  }
});

//GET PRODUCT BY CATEGORY

//TODO fix on Database (like Movies app) or GetAll + Filter results.

// router.get("/:categoryId", async (req, res) => {
//   try {
//     let allProducts = await Product.find();
//     res.status(200);
//     res.send(allProducts);
//   } catch (err) {
//     console.log("error", err);
//     res.sendStatus(400);
//   }
// });

//POST ONE
router.post("/products", async (req, res) => {
  try {
    const {
      name,
      address,
      city,
      telephone,
      website,
      category,
      description,
      logo,
    } = req.body;
    const result = await Product.create({
      name,
      address,
      city,
      telephone,
      website,
      category,
      description,
      logo,
    });
    res.send(result);
    res.status(201);
  } catch (err) {
    console.log("error", err);
    res.sendStatus(400);
  }
});

module.exports = router;
