import api from '../utils/api';

export const captainService = {
  // Register captain
  register: async (captainData) => {
    const response = await api.post('/captains/register', captainData);
    return response.data;
  },

  // Login captain
  login: async (credentials) => {
    const response = await api.post('/captains/login', credentials);
    return response.data;
  },

  // Get captain profile
  getProfile: async () => {
    const response = await api.get('/captains/profile');
    return response.data;
  },

  // Logout captain
  logout: async () => {
    const response = await api.get('/captains/logout');
    return response.data;
  }
};

export default captainService;