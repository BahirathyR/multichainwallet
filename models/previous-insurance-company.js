const mongoose =  require('mongoose');


const companyName = new mongoose.Schema({
    // key:String,
     Name:Object 
})
//const previous_insurance_name= mongoose.model('previous_insurance_name',companyName);

module.exports = mongoose.model('previous_insurance_name',companyName)