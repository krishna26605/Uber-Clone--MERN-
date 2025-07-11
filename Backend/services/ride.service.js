const rideModel = require('../models/ride.model');
const mapService = require('./maps.service.js');
const bcypt = require('bcrypt');
const crypto = require('crypto');



function getOtp (num){
    function generateOtp(num){
        const otp = crypto.randomInt(Math.pow(10, num -1 ), Math.pow(10, num)).toString();
        return otp;
    }
    return generateOtp(num);
}



async function getFare(pickup, destination) {
    if (!pickup || !destination) {
        throw new Error('Pickup and Destination are required');
    }

    const distanceTime = await mapService.getDistanceTime(pickup, destination);

    const baseFare = {
        auto: 30,
        car: 50,
        motorcycle: 20
    };

    const perKmRate = {
        auto: 10,
        car: 15,
        motorcycle: 8
    };

    const perMinuteRate = {
        auto: 2,
        car: 3,
        motorcycle: 1.5
    };

    const fare = {
        auto: Math.round(
            baseFare.auto +
            (distanceTime.distance.value / 1000) * perKmRate.auto +
            (distanceTime.duration.value / 60) * perMinuteRate.auto
        ),
        car: Math.round(
            baseFare.car +
            (distanceTime.distance.value / 1000) * perKmRate.car +
            (distanceTime.duration.value / 60) * perMinuteRate.car
        ),
        motorcycle: Math.round(
            baseFare.motorcycle +
            (distanceTime.distance.value / 1000) * perKmRate.motorcycle +
            (distanceTime.duration.value / 60) * perMinuteRate.motorcycle
        )
    };

    return fare; // ✅ VERY IMPORTANT
}

module.exports = {
    getFare
};


module.exports.createRide = async ({
    user , pickup , destination , vehicleType
}) => {
    if(!user || !pickup || !destination || !vehicleType){
        throw new Error('User , Pickup , Destination and Vehicle Type are required');
    }

    const fare = await getFare(pickup , destination);

     if (!fare || !fare[vehicleType]) {
        throw new Error('Could not calculate fare for selected vehicle type');
    }


    const ride = await rideModel.create({
        user,
        pickup,
        destination,
        otp: getOtp(6),
        fare: fare[vehicleType],
        vehicleType
    })

    return ride;

}






