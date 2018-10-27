const mongoose =  require('mongoose');

const MANUFACTURENAMESSCHEMA = new mongoose.Schema({

       MANUFACTURE: String,
      
       
    }) 
    
    const manufactureNames= mongoose.model('manufactureNames',MANUFACTURENAMESSCHEMA);
    module.exports = manufactureNames;