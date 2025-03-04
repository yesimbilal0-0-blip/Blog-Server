const express = require("express");
const router = express.Router();
const {getBlogs, updateBlog, deleteBlog, postBlog, getBlog} = require("../controllers/blogController");
const { validateToken } = require("../middleware/tokenHandler");

router.route("/").get(validateToken, getBlogs).post(validateToken, postBlog);;

router.route("/:id").get(validateToken, getBlog).put(updateBlog).delete(validateToken, deleteBlog);

module.exports = router;