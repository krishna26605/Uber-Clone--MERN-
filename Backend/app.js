const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDatabase = require('./db/db.js');
const usersRoutes = require('./routes/user.routes.js');
const captainRoutes = require('./routes/captain.routes.js');
const mapsRoutes = require('./routes/maps.routes.js')
const rideRoutes = require('./routes/ride.routes.js')


connectToDatabase();
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());




app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/users', usersRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapsRoutes)
app.use('/rides', rideRoutes)
module.exports = app;