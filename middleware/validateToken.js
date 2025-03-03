const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if(!token) {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
});

module.exports = validateToken;