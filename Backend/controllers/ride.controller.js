    const rideService = require('../services/ride.service');
    const {validationResult} = require('express-validator');
    const mapService = require('../services/maps.service');
    const rideModel = require('../models/ride.model');
    const authMiddleware = require('../middlewares/auth.middleware');
    
    module.exports.createRide = async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {userId , pickup , destination , vehicleType} = req.body;

        try {
            const ride = await rideService.createRide({user :req.user._id  , pickup , destination , vehicleType});

            return res.status(201).json(ride);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }