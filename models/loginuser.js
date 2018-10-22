const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
    phone: {
        type: Number,
        unique: true,
        required : true
    },
    created_at:{
        type : Date,
        default: Date.now,
        required : true
    } ,
    otp:{
        type : Number
    } ,
    count: {
        type : Number
    }
});
phoneSchema.methods.generateAuthToken = function() { 
    const token = jwt.sign({ _id: this._id, /*isAdmin: this.isAdmin*/ phone:this.phone}, "1324687qweasda1231");
    console.log('testToken',token);
    return token;
}
const Phone = mongoose.model('User', phoneSchema);








exports.Phone = Phone; 