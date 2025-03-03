const asyncHandler = require('express-async-handler');

//Get Blogs
const getBlogs = asyncHandler( async (req, res) => {
    res.status(200).json({
        message: "Get all blogs",
    })
})

//Update Blog
const updateBlog = asyncHandler( async (req, res) => {
    res.status(201).json({
        message: `Update blog with id ${req.params.id}`,
    })
})

//Delete Blog
const deleteBlog = asyncHandler( async (req, res) => { 
    res.status(200).json({
        message: `Delete blog with id ${req.params.id}`,
    })
})

//Post Blog
const postBlog = asyncHandler( async (req, res) => {
    res.status(201).json({
        message: "Post a blog",
    })
})

module.exports = {
    getBlogs,
    updateBlog,
    deleteBlog,
    postBlog
}