const asyncHandler = require('express-async-handler');
const Blog = require('../models/blogModel');

//Get all Blogs
const getBlogs = asyncHandler( async (req, res) => {
    const blogs = await Blog.findAll();
    res.status(200).json({
        blogs
    })
})

//Get a single Blog by ID
const getBlog = asyncHandler( async (req, res) => {
    const blog = await Blog.findOne({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json({
        blog
    })
})

//Post Blog
const postBlog = asyncHandler( async (req, res) => {
    const { title, description, tags } = req.body;
    const blog = await Blog.create({
        title,
        description,
        tags
    });
    res.status(201).json({
        blog
    })
})

//Update Blog
const updateBlog = asyncHandler( async (req, res) => {
    const { title, description, tags } = req.body;
    const blog = await Blog.update({
        title,
        description,
        tags
    }, {
        where: {
            id: req.params.id
        }
    });
    res.status(201).json({
        message: `Update blog with id ${req.params.id}`,
    })
})

//Delete Blog
const deleteBlog = asyncHandler( async (req, res) => {
    const blog = await Blog.destroy({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json({
        message: `Delete blog with id ${req.params.id}`,
    })
})

module.exports = {
    getBlogs,
    updateBlog,
    deleteBlog,
    postBlog,
    getBlog
}