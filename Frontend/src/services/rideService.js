import api from '../utils/api';

export const rideService = {
  // Create a new ride
  createRide: async (rideData) => {
    const response = await api.post('/rides/create', rideData);
    return response.data;
  },

  // Get ride details
  getRide: async (rideId) => {
    const response = await api.get(`/rides/${rideId}`);
    return response.data;
  }
};

export default rideService;