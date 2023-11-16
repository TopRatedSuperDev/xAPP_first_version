const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/register', (req, res, next) => {
  const { name, email, password } = req.body;

  User.findOne({ email: email }, (err, user) => {
    if (err) return next(err);
    if (user) return res.status(200).json({ message: 'Email already registered' });

    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) return next(err);

      const currentDate = new Date();
      const vipTime = new Date(currentDate);
      vipTime.setDate(currentDate.getDate() + 3);
      const newUser = new User({
        name: name,
        email: email,
        password: hashedPassword,
        payValue: 0,
        vipTime: vipTime,
      });

      newUser.save((err) => {
        if (err) return next(err);
        res.status(200).json({ message: 'Registration successful', vipTime:currentDate });
      });
    });
  });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  const { payValue, vipTime } = req.user;
  const secretKey = 'yourSecretKey';
  const token = jwt.sign(req.body.email, secretKey);
  res.json({ token:token, payValue, vipTime });
});

router.post('/getUserInfo', (req, res, next) => {
  const { email } = req.body;

  User.findOne({ email: email })
    .then(user => {

      if (user) {
        res.json(user);
      } else {
        console.log('refresh error!');
      }
    })
    .catch(error => {
      console.error('Error refreshing user:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logout successful' });
});

router.post('/payRecord', (req, res, next) => {
  const { email, payValue } = req.body;

  const payValueNum = parseFloat(payValue);

  if(payValueNum >= 20) {
    User.findOne({ email: email })
    .then(user => {

    if (user) {
      user.payValue = parseFloat(user.payValue) + parseFloat(payValue);
        const currentDate = new Date();
        if (payValueNum < 50) {
            // const numMonths = (payValue - payValue%10) / 10;
            if (user.vipTime > currentDate) {
                user.vipTime.setMonth(user.vipTime.getMonth() + 3);
            } else {
                user.vipTime = new Date(currentDate.setMonth(currentDate.getMonth() + 3));
            }
        } else {
            // const numYears = (payValue - payValue%60) / 60;
            if (user.vipTime > currentDate) {
                user.vipTime.setFullYear(user.vipTime.getFullYear() + 1);
            } else {
                user.vipTime = new Date(currentDate.setFullYear(currentDate.getFullYear() + 1));
            }
        }

        return User.findOneAndUpdate({email:email}, { payValue: user.payValue, vipTime:user.vipTime }, {
        new: true,
        upsert: true // Make this update into an upsert
        });
    } else {
        console.log('User not found');
        res.status(404).json({ error: 'User not found' });
    }
    })
    .then(updatedUser => {
        res.json(updatedUser);
    })
    .catch(error => {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    });

}
  // User.findOne({ email: email })
  //   .then(user => {

  //     if (user) {
  //       user.payValue = user.payValue + payValue;
  //       const currentDate = new Date();
  //       if (payValue === 10) {
  //         if (user.vipTime > currentDate) {
  //           user.vipTime.setMonth(user.vipTime.getMonth() + 1);
  //         } else {
  //           user.vipTime = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
  //         }
  //       } else if (payValue === 60) {
  //         if (user.vipTime > currentDate) {
  //           user.vipTime.setFullYear(user.vipTime.getFullYear() + 1);
  //         } else {
  //           user.vipTime = new Date(currentDate.setFullYear(currentDate.getFullYear() + 1));
  //         }
  //       }

  //       return User.findOneAndUpdate({email:email}, { payValue: user.payValue, vipTime:user.vipTime }, {
  //         new: true,
  //         upsert: true // Make this update into an upsert
  //       });
  //     } else {
  //       console.log('User not found');
  //       res.status(404).json({ error: 'User not found' });
  //     }
  //   })
  //   .then(updatedUser => {
  //     res.json(updatedUser);
  //   })
  //   .catch(error => {
  //     console.error('Error updating user:', error);
  //     res.status(500).json({ error: 'Internal server error' });
  //   });
});

// router.post('/payRecord', async (req, res, next) => {
//   try {
//     const { email, payValue } = req.body;
//     const user = await User.findOne({ email: email });

//     if (user) {
//       user.payValue += payValue;

//       const currentDate = new Date();

//       if (payValue === 10) {
//         if (user.vipTime > currentDate) {
//           user.vipTime.setMonth(user.vipTime.getMonth() + 1);
//         } else {
//           const newVipTime = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
//           user.vipTime = newVipTime;
//         }
//       } else if (payValue === 60) {
//         if (user.vipTime > currentDate) {
//           user.vipTime.setFullYear(user.vipTime.getFullYear() + 1);
//         } else {
//           const newVipTime = new Date(currentDate.setFullYear(currentDate.getFullYear() + 1));
//           user.vipTime = newVipTime;
//         }
//       }

//       const updatedUser = await User.findOneAndUpdate({ email: email }, { payValue: user.payValue, vipTime: user.vipTime }, { new: true, upsert: true });
//       res.json(updatedUser);
//     } else {
//       console.log('User not found');
//       res.status(404).json({ error: 'User not found' });
//     }
//   } catch (error) {
//     console.error('Error updating user:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });




module.exports = router;