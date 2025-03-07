const express = require("express");
const router = express.Router();
const { validateToken } = require("../middleware/tokenHandler");
const { prompt } = require("../controllers/promptController");

router.route("/").post(validateToken, prompt);

module.exports = router;