const express = require("express");
const router = express.Router();
const {getBlogs, updateBlog, deleteBlog, postBlog, getBlogByID, getBlogByAuthor} = require("../controllers/blogController");
const { validateToken } = require("../middleware/tokenHandler");

router.route("/").get(validateToken, getBlogs).post(validateToken, postBlog);

router.route("/:id").get(validateToken, getBlogByID).put(validateToken, updateBlog).delete(validateToken, deleteBlog);

router.route("/author/:author").get(validateToken, getBlogByAuthor);

module.exports = router;