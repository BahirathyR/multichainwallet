const mongoose =  require('mongoose');


const occupation = new mongoose.Schema({
    // key:String,
     Name:String,
     code:Number
})


module.exports = mongoose.model('occupation',occupation)