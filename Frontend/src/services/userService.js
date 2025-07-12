import api from '../utils/api';

export const userService = {
  // Register user
  register: async (userData) => {
    const response = await api.post('/users/register', userData);
    return response.data;
  },

  // Login user
  login: async (credentials) => {
    const response = await api.post('/users/login', credentials);
    return response.data;
  },

  // Get user profile
  getProfile: async () => {
    const response = await api.get('/users/profile');
    return response.data;
  },

  // Logout user
  logout: async () => {
    const response = await api.get('/users/logout');
    return response.data;
  }
};

export default userService;