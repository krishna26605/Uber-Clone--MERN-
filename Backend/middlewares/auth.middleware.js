const userModel = require('../models/user.model.js');
const jwt = require('jsonwebtoken');
const bycrypt = require('bcrypt');





module.exports.authUser = async (req , res , next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token) {
        return res.status(401).json({message: 'Unauthorized access...!'});
    }

    const isBlacklisted = await userModel.findOne({token: token});

    if(isBlacklisted) {
        res.status(401).json({message: 'Token is blacklisted...!'});
    }

    try {
        const decoded = jwt.verify(token , process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id)

        req.user = user;
        return next();

    } catch (err) {
        return res.status(401).json({message: 'Unauthorized...!'});
    }
}