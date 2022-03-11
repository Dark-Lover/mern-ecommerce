const Product = require("./../model/productModel");
const productRoute = require("express").Router();

productRoute.get("/products", async (req, res) => {
  try {
    const data = await Product.find({});
    res.status(200).json({
      status: "Success",
      products: data,
    });
  } catch (err) {
    res.status(400).json({
      status: "Success",
      errorLog: err,
    });
  }
});

productRoute.post("/products", async (req, res) => {
  try {
    const data = req.body;
    await Product.create(data);
    res.status(201).json({
      status: "Add Success",
      product: data,
    });
  } catch (err) {
    res.status(400).json({
      status: "Add Fail",
      errorLog: err,
    });
  }
});

module.exports = productRoute;
