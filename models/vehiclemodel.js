const mongoose = require('mongoose');

const vehicleModel = new mongoose.Schema({
    Modelname: {
      type: String
    },
    Active: {
      type: Boolean,
      default: false
    },
    isTopModel: {
      type: Boolean,
      default: false
    },
    MakeId: {
      type: Number
    },
    ModelId: {
      type: String
    }
   
  });
  
  const Model = mongoose.model("Model", vehicleModel);

  exports.Model = Model;
  exports.vehicleModel = vehicleModel;