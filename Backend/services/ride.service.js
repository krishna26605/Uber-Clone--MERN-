const rideModel = require('../models/ride.model');
const mapService = require('./maps.service.js');




async function getFare(pickup , Destination){
    if(!pickup || !Destination){
        throw new Error('Pickup and Destination are required');


        const baseFare= {
            auto: 30,
            car: 50,
            motorcycle: 20
        };

        const perKmRate={
            auto: 10,
            car: 15,
            motorcycle: 8
        }

        const perMinuteRate={
            auto:2,
            car: 3,
            motorcycle: 1.5
        };

        const fare = {
            auto: Math.round(baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + ((distanceTime.duration.value / 60) * perMinuteRate.auto)),
            car: Math.round(baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + ((distanceTime.duration.value / 60) * perMinuteRate.car)),
            motorcycle: Math.round(baseFare.moto + ((distanceTime.distance.value / 1000) * perKmRate.moto) + ((distanceTime.duration.value / 60) * perMinuteRate.moto))
        };

        return fare;
    }

    const distanceTime = await mapService.getDistanceTime(pickup , Destination);
}



module.exports.createRide = async ({
    user , pickup , destination , vehicleType
}) => {
    if(!user || !pickup || !destination || !vehicleType){
        throw new Error('User , Pickup , Destination and Vehicle Type are required');
    }

    const fare = await getFare(pickup , destination);

    const ride = await rideModel.create({
        user,
        pickup,
        destination,
        fare: fare[vehicleType],
    })

    return ride;

}


