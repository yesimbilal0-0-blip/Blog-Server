const express = require("express");
const router = express.Router();
const { prompt } = require("../controllers/promptController");

router.route("/").post(prompt);

module.exports = router;