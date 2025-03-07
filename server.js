const express = require("express");
const dotenv = require("dotenv").config();

const connection = require("./config/dbConnection");
const User = require("./models/userModel");
const Blog = require("./models/blogModel");
//const errorHandler = require("./middleware/errorHandler");

const app = express();

const port = process.env.PORT || 5000;


app.use(express.json());
app.use("/blog", require("./routes/blogRoutes"));
app.use("/user", require("./routes/userRoutes"));
app.use("/prompt", require("./routes/promptRoutes"));

//app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});