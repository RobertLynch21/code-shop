require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const passport = require('passport');
const users = require('./routes/users');

const cors = require('cors');

const app = express();


const uri = "mongodb+srv://ravenmight:Lockdown@22@devconnector.fehikbl.mongodb.net/?retryWrites=true&w=majority";

// Middleware
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api/users', users); 

// Passport configuration
require('./config/passport')(passport);

// Database connection
const encodedPassword = encodeURIComponent("Lockdown@22");

mongoose
  .connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log(`Error connecting to MongoDB: ${error}`));


// Routes
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
