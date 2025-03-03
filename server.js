const express = require("express");
const dotenv = require("dotenv").config();
//const errorHandler = require("./middleware/errorHandler");

const app = express();

const port = process.env.PORT || 5000;

app.use("/blog", require("./routes/blogRoutes"));
app.use("/user", require("./routes/userRoutes"));

//app.use(errorHandler);
app.use(express.json());


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});