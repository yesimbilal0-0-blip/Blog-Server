const express = require("express");
const router = express.Router();
const {getBlogs, updateBlog, deleteBlog, postBlog} = require("../controllers/blogController");

router.route("/").get(getBlogs).post(postBlog);;

router.route("/:id").put(updateBlog).delete(deleteBlog);

module.exports = router;