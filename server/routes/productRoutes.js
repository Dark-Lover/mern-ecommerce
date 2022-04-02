const productRoute = require("express").Router();
const productsCtr = require("./../controllers/productController");

// Get All Products
productRoute.get("/products", productsCtr.getAllProducts);
productRoute.get(
  "/products/:cat",
  productsCtr.specifyCategory,
  productsCtr.getAllProducts
);

// Create Product
productRoute.post("/products", productsCtr.addProduct);

// Delete Product
productRoute.delete("/products/:id", productsCtr.deleteProduct);

// Update Product
productRoute.patch("/products/:id", productsCtr.updateProduct);

// Custom
productRoute.get(
  "/products/custom/cheapest-five",
  productsCtr.aliasCheapestFive,
  productsCtr.getAllProducts
);
module.exports = productRoute;
