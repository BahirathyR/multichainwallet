const mongoose = require('mongoose');


const vehicleVariant = new mongoose.Schema({
    Active: {
      type: Boolean
    },
    CubicCapacity: {
      type: Number
    },
    SeatingCapacity: {
      type: Number
    },
    VariantId: {
      type: Number
    },
    VariantName: {
      type: String
    },
    VehiclePropertyCollection: {
      FuelType: {
        type: String
      }
    }
  });
  
  const Variant = mongoose.model("modelvariant", vehicleVariant);

  const VariantsModel = mongoose.model('variant',new mongoose.Schema({
    ModelName: {
      type: String
    },
    variants : [vehicleVariant]
  }));
  
exports.Variant = Variant;
exports.VariantsModel =VariantsModel;
exports.vehicleVariant = vehicleVariant;