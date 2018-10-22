const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { Phone } = require('../models/loginuser');
const SendOtp = require('sendotp');
const sendOtp = new SendOtp('223774AjX8U4ux5b3a022d');

router.post('/newlogin', async(req, res) => {
    const phoneNumber = req.body.phone;
    if(!phoneNumber){
        return res.status(400).send("Invalid Phone Number");
    } else {
        const user = await Phone.findOne({phone:phoneNumber});
        if (user) return res.status(400).send('User already registered.');
    }
    let otp = "";
    const possible = "0123456789";
    for (let i = 0; i<4; i++){
        otp += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    console.log(`OTP is : ${otp}`);
    sendOtp.send(phoneNumber, "RDYPOL", otp, function (error, data, response) {
        if(error) return res.send("OTP is not generated",response);
    });
    const phone = new Phone({
        phone :  phoneNumber,
        otp : otp
    });
    const result = await phone.save();
    const token = phone.generateAuthToken();
    res.header('x-auth-token', token).send(_.pick(result, ['phone','otp']));
});



module.exports = router;