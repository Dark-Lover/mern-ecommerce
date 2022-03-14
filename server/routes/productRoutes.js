const Product = require("./../model/productModel");
const productRoute = require("express").Router();

// Get All Products
productRoute.get("/products", async (req, res) => {
  try {
    // Filtering
    const queryObj = { ...req.query };
    // console.log(req.query);
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((field) => delete queryObj[field]);
    const queryString = JSON.stringify(queryObj).replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );
    let newQueryObj = JSON.parse(queryString);

    // Execute Query
    let myFields = { ...req.query };
    // const selected = myFields.fields.split(",").join(" ");
    const selected = myFields.fields.replace(",", " ");
    // console.log("myselection", selected);
    const data = await Product.find(newQueryObj).select(selected);
    // .select(selected)
    res.status(200).json({
      status: "Success",
      count: data.length,
      products: data,
    });
  } catch (err) {
    res.status(400).json({
      status: "Success",
      errorLog: err,
    });
  }
});
// Create Product
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
// Delete Product
productRoute.delete("/products/:id", async (req, res) => {
  try {
    console.log(`We are Deleting: ${req.params.id}`);
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(201).json({
      status: "Delete Success",
    });
  } catch (err) {
    res.status(400).json({
      status: "Delete Fail",
      errorLog: err.message,
    });
  }
});

// Update Product
productRoute.patch("/products/:id", async (req, res) => {
  try {
    console.log(`We are Updating: ${req.params.id}`);
    const { id } = req.params;
    const newData = req.body;
    const updatedProduct = await Product.findOneAndUpdate(id, newData, {
      new: true,
    });
    res.status(201).json({
      status: "Update Success",
      updatedProduct,
    });
  } catch (err) {
    res.status(400).json({
      status: "Update Fail",
      errorLog: err.message,
    });
  }
});

module.exports = productRoute;
