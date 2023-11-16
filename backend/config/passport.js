const passport = require('passport');
     const LocalStrategy = require('passport-local').Strategy;
     const bcrypt = require('bcrypt');
     const User = require('../models/User');

     passport.use(
       new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
         User.findOne({ email: email }, (err, user) => {
           if (err) return done(err);
           if (!user) return done(null, false, { message: 'Incorrect email' });

           bcrypt.compare(password, user.password, (err, res) => {
             if (res) {
               return done(null, user);
             } else {
               return done(null, false, { message: 'Incorrect password' });
             }
           });
         });
       })
     );

     passport.serializeUser((user, done) => {
       done(null, user.id);
     });

     passport.deserializeUser((id, done) => {
       User.findById(id, (err, user) => {
         done(err, user);
       });
     });

    module.exports = passport;