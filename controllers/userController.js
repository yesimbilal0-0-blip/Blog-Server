const asyncHandler = require('express-async-handler');

//Register User
const registerUser = asyncHandler( async (req, res) => {
    res.status(201).json({
        message: "Register User",
    })
});

//Login User
const loginUser = asyncHandler( async (req, res) => {
    res.status(201).json({
        message: "Login User",
    })
});

module.exports = { registerUser, loginUser };