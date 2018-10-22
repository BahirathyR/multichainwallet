const mongoose =  require('mongoose');


const StateCodeSchema = new mongoose.Schema({

         StateCode:String,
         StateName:String,
         p400code:Number,

        }) 
    
        const StateCodeDetail= mongoose.model('StateCodeDetail',StateCodeSchema);
        module.exports = StateCodeDetail;