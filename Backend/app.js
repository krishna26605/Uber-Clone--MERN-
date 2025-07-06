const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDatabase = require('./db/db.js');
const usersRouter = require('./routes/user.routes.js');

connectToDatabase();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());




app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/users', usersRouter);

module.exports = app;