const userModel =require('../models/user.model.js');
const userService = require('../services/user.service.js');
const {validationResult} = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model.js');



module.exports.registerUser = async (req, res , next) => {

    console.log("✅ Raw req.body:", req.body);
    
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("❌ Validation errors:", errors.array()); 
        return res.status(400).json({errors: errors.array() });
    }

    const {fullname, email, password} = req.body;

    const isUserAlreadyExists = await userModel.findOne({email});
    if (isUserAlreadyExists) {
        return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    })

    const token = user.generateAuthToken();
    res.status(201).json({token , user})
}

module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;

    const user = await userModel.findOne({email}).select('+password');

    if(!user){
        return res.status(401).json({message: 'Invalid email or password...!'});
    }

    const isMatch = await user.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({message: 'Invalid email or password...!'});
    }


    const token = user.generateAuthToken();
    
    res.cookie('token', token);

    res.status(200).json({token, user});
}

module.exports.getUserProfile = async (req , res , next) => {
    res.status(200).json(req.user);
}

module.exports.logoutUser = async (req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    await blacklistTokenModel.create({ token });

    res.status(200).json({message: 'User logged out successfully...!'});
}