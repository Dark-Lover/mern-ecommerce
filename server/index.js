const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});
const app = require("./app");

const db = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PSW);
const PORT = process.env.PORT || 8000;
mongoose
  .connect(db, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database successfully connected 😄");
    app.listen(PORT, () => {
      console.log("Listening to Server at Port: ", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
