const mongoose = require('mongoose');


const MasterDetails = mongoose.model('masterdetail',new mongoose.Schema({
    MANUFACTURE_NAME :{
      type : String
    },
    MODEL :{
      type :String
    },
    VARIENT : {
      type :String
    },
    BARATHI_AXA_MODEL :{
      type :String
    },
    BARATHI_AXA_VARIENT : {
      type :String
    },
    ROYAL_SUNDARAM_MODEL : {
      type : String
    },
    ROYAL_SUNDARAM_CODE :{
      type:String
    }
  }));
exports.MasterDetails = MasterDetails;