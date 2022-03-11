const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const productRoute = require("./routes/productRoutes");

const type = process.env.TYPE;
console.log(process.env.PORT);
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());
if (type === "DEV") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.status(200).json("Hello, Its The API Home 🏠 😃");
});

app.use("/api/v1", productRoute);

module.exports = app;
