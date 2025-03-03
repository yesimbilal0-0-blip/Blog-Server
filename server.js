const express = require("express");
const dotenv = require("dotenv");

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Server Initiaized!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});