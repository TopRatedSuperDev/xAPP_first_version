//import the required modules
const express = require('express');

const https = require('https');
const path = require('path');
const fs = require('fs');

const passport = require('passport');
const configPassport = require('./config/passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cors = require('cors');

// Initialize the Express app and set up the middleware
const app = express();
app.use(express.json());
// app.use(express.json({
//     verify: (req, res, buf) => {
//         const url = req.originalUrl;
//         if(url.startsWith("/coinbase/webhooks")) {
//             req.rawBody = buf.toString();
//         }
//     }
// }));
app.use(express.urlencoded({ extended: true }));
app.use(
session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ 
        mongoUrl: 'mongodb://localhost:27017/mern-auth', // Replace with your MongoDB connection URL
        collectionName: 'sessions', // Optional: Specify the name of the collection to store sessions (default is 'sessions')
        ttl: 3600, // Optional: Set the TTL (time-to-live) for the session documents in seconds (default is 14 days)
    }),
})
);
app.use(configPassport.initialize());
app.use(configPassport.session());

// Enable CORS
app.use(cors());
// Route handling
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);
const coinbaseRoutes = require('./routes/coinbase');
app.use('/coinbase', coinbaseRoutes);
// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/mern-auth', {
useNewUrlParser: true,
useUnifiedTopology: true,
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.set('useFindAndModify', false);
// Start the server
const port = 5000; // or any other port you prefer
app.listen(port, () => {
console.log(`Server running on port ${port}`);
});

// const options = {
//     key: fs.readFileSync(path.resolve(__dirname, './cert/private.pem')),    // Replace with the path to your key.pem file
//     cert: fs.readFileSync(path.resolve(__dirname, './cert/certificate.pem')),  // Replace with the path to your cert.pem file
//     csr: fs.readFileSync(path.resolve(__dirname, './cert/ca_bundle.pem'))     // Replace with the path to your csr.pem file
//   };
  
//   const port = 5000; // or any other port you prefer
  
//   https.createServer(options, app).listen(port, () => {
//     console.log(`HTTPS server running on port ${port}`);
//   });