const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");


// Connection to DB
dotenv.config();
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Database Connection Success!!!"))
.catch((err) => {
    console.log(err);
});
// 

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);


app.listen(process.env.PORT || 1000, () => {
  console.log("Backend server is running on port 1000");
});