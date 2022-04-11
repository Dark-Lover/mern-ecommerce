const Product = require("./../model/productModel");
const apiFeatures = require("./../utils/Product");
const catchAsync = require("./../utils/catchAsync");
// Custom middleware

exports.aliasCheapestFive = async (req, res, next) => {
  console.log("cheapest Five Products");
  console.log(req.query);
  // req.query.fields = "title,price";
  // req.query.price = { lte: 60 };
  req.query = { page: 1, limit: 5, sort: "price" };
  next();
};

exports.specifyCategory = async (req, res, next) => {
  let { cat } = req.params;
  console.log("Origin Cat: ", cat);

  switch (cat) {
    case "men":
      cat = "men's clothing";
      break;
    case "women":
      cat = "women's clothing";
      break;
    case "electronics":
      cat = "electronics";
      break;
    case "jewelery":
      cat = "jewelery";
      break;
    default:
      cat = "men's clothing";
      break;
  }
  console.log("New Cat: ", cat);
  req.query = { category: cat };
  next();
};

// Get All products
exports.getAllProducts = catchAsync(async (req, res, next) => {
  //! Using APIFeatures
  console.log("##### Inside Get all Products #####");
  console.log(req.query);
  const features = new apiFeatures(Product.find(), req.query)
    .filter()
    .sort()
    .fields()
    .paginate();
  const data = await features.query;
  res.status(200).json({
    status: "Success",
    count: data.length,
    products: data,
  });
});

// Add Product
exports.addProduct = catchAsync(async (req, res, next) => {
  const data = req.body;
  await Product.create(data);
  res.status(201).json({
    status: "Add Success",
    product: data,
  });
});

// Delete Product
exports.deleteProduct = catchAsync(async (req, res, next) => {
  console.log(`We are Deleting: ${req.params.id}`);
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.status(201).json({
    status: "Delete Success",
  });
});

// Update Product
exports.updateProduct = catchAsync(async (req, res, next) => {
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
});
