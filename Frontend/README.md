# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Frontend-Backend Integration

### Setup Instructions

1. **Environment Variables**
   - Copy `.env.example` to `.env` in the Backend folder
   - Set your MongoDB connection string, JWT secret, and Google Maps API key
   - The frontend is configured to connect to `http://localhost:4000`

2. **Start the Backend**
   ```bash
   cd Backend
   npm install
   npm start
   ```

3. **Start the Frontend**
   ```bash
   cd Frontend
   npm install
   npm run dev
   ```

### API Integration

The frontend now includes:
- Centralized API configuration with axios interceptors
- Service layers for users, captains, rides, and maps
- Proper error handling and loading states
- Token-based authentication
- CORS configuration for cross-origin requests

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
