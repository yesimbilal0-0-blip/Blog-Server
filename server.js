const express = require("express");
const dotenv = require("dotenv").config();

const connection = require("./config/dbConnection");
const User = require("./models/userModel");
const Blog = require("./models/blogModel");
//const errorHandler = require("./middleware/errorHandler");

const app = express();

const port = process.env.PORT || 5000;

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }

    app.use(express.json());
    app.use("/blog", require("./routes/blogRoutes"));
    app.use("/user", require("./routes/userRoutes"));

    //app.use(errorHandler);


    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});