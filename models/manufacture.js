const mongoose =  require('mongoose');
const {vehicleModel,Model} = require('./vehiclemodel');

const Manufacture = mongoose.model("Manufacture", new mongoose.Schema({
    manufacturename: {
      type: String
    },
    active: {
      type: Boolean,
      default: false
    },
    istopModel: {
      type: Boolean,
      default: false
    },
    makeId: {
      type: Number
    },
    models: [vehicleModel]
  }));

exports.Manufacture = Manufacture;