import api from '../utils/api';

export const mapService = {
  // Get coordinates for an address
  getCoordinates: async (address) => {
    const response = await api.get('/maps/get-coordinates', {
      params: { address }
    });
    return response.data;
  },

  // Get distance and time between two locations
  getDistanceTime: async (origin, destination) => {
    const response = await api.get('/maps/get-distance-time', {
      params: { origin, destination }
    });
    return response.data;
  },

  // Get autocomplete suggestions
  getSuggestions: async (input) => {
    const response = await api.get('/maps/get-suggestions', {
      params: { input }
    });
    return response.data;
  }
};

export default mapService;