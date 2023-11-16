const express = require('express');
const router = express.Router();
const User = require('../models/User');
var coinbase = require('coinbase-commerce-node');
var Client = coinbase.Client;
var resources = coinbase.resources;
var Webhook = coinbase.Webhook;

Client.init("45c775e4-a73a-4000-82a7-cb7356eb2219");    // coinbase API key

router.post('/checkout', async (req, res) => {
  const {email, amount, currency} = req.body;
  try {
    const charge = await resources.Charge.create({
        name: "xAPP",
        description: "xAPP Bitcoin Payment",
        local_price: {
            amount: amount,
            currency: currency,
        },
        pricing_type: "fixed_price",
        metadata: {
            amount: amount,
            currency: currency,
            user_email: email
        },
    });
    res.status(200).json({ charge: charge });
} catch (error) {
    res.status(500).json({
        error:error,
    });
}
});

router.post('/webhooks', async (req, res) => {
    // try {
        const event = req.body.event;
    
        // if((event.type === "charge:confirmed") || (event.type === "charge:resolved")) {
        if(event.type === "charge:confirmed") {
            const payValue = event.data.metadata.amount;
            const currency = event.data.metadata.currency;
            const email = event.data.metadata.user_email;
            
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
                    // res.status(404).json({ error: 'User not found' });
                }
                })
                .then(updatedUser => {
                    res.status(200).send('Webhook request processed successfully');
                })
                .catch(error => {
                    console.error('Error updating user:', error);
                    // res.status(500).json({ error: 'Internal server error' });
                });
    
            }
        // }
        // res.sendStatus(200);
    } 
    // catch (error) {
    //     // res.sendStatus(500).json({
    //     //     error:error,
    //     // });
    //     console.log("Event Error!");
    // }
});


module.exports = router;