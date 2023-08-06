const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productsRoute = require("./routes/product");
const ordersRoute=require("./routes/order");
const paymentsRoute=require("./routes/payments")
const cors=require("cors");
const CryptoJS = require("crypto-js");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connected successfully"))
  .catch((err) => console.log(err));
app.use(express.json());
app.use(express.static('public'));
app.use(cors({
  origin:"http://localhost:5173"
}))
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productsRoute);
app.use("/api/orders",ordersRoute);
app.use("/api/payments",paymentsRoute);
app.listen(process.env.PORT || 5000, () => {
  console.log("backend running");
});
