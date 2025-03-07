const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const Plan = require('../models/planModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const  { signToken } = require('../middleware/tokenHandler');

//Register User
const registerUser = asyncHandler( async (req, res) => {
    const { username, password, email } = req.body;
    
    if(!username || !password || !email){
        res.status(400);
        throw new Error("Please fill all fields");
    }

    const userExists = await User.findOne({
        where: {
            username
        }
    });
    if(userExists){
        res.status(400);
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        password: hashedPassword,
        email,
        role: "user"
    });

    const plan = await Plan.create({
        userid: user.id
    });

    res.status(201).json({
        message: "User Registered",
    })
});

//Login User
const loginUser = asyncHandler( async (req, res) => {
    const { email, password } = req.body;
    
    if(!email || !password){
        res.status(400);
        throw new Error("Please fill all fields");
    }

    const user = await User.findOne({
        where: {
            email,
        }
    });
    if(user && (await bcrypt.compare(password, user.password))){    
        const token = signToken(user);
        res.status(200).json({
            message: "User Logged In",
            token
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});

module.exports = { registerUser, loginUser };