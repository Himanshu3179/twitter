const User = require('../models/userModel');
const jwt = require('jsonwebtoken');


const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Extract the token
    if (token) {
        try {
            const { _id } = jwt.verify(token, process.env.SECRET);
            // req.user = await User.findOne({ _id })
            // find user with password undefined

            req.user = await User.findById(_id).select('-password');

        } catch (error) {
            console.error('Error decoding token:', error);
        }
    }
    next();
}

module.exports = verifyToken;