const mongoose =  require('mongoose');

const VehicleSchema = new mongoose.Schema({

       MANUFACTURE: String,
       MODEL: String,
       VARIANT: String,
       BHARATHI_AXA_MANUFACTURE: String,
       BARATHI_AXA_MODEL: String,
       BARATHI_AXA_VARIENT: String,
       BARATHI_AXA_EXSHOWROOMPRICE: String,
       ROYAL_SUNDARAM_MANUFACTURE: String,
       ROYAL_SUNDARAM_MODEL: String,
       ROYAL_SUNDARAM_CODE: String,
       isTopModel:String,
       Active:String
       
    }) 
    
    const MasterVehicle= mongoose.model('Vehicledata',VehicleSchema);
    module.exports = MasterVehicle;