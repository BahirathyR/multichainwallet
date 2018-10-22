const express = require('express');
const router = express.Router();
 const MasterVehicle= require('../models/master');
 //==========================Storing vechicle master details into mongo===========================//
router.post ('/Master',async(req,res)=> {
    const find = await MasterVehicle.findOne({VARIANT:req.body.VARIANT,MODEL:req.body.MODEL});
    console.log(find)
    if(find) return res.status(400).send('vechicle Name is already registered');

          const Data= new MasterVehicle({
    
                MANUFACTURE: req.body.MANUFACTURE,
       MODEL: req.body.MODEL,
       VARIANT: req.body.VARIANT,
       BHARATHI_AXA_MANUFACTURE: req.body.BHARATHI_AXA_MANUFACTURE,
       BARATHI_AXA_MODEL: req.body.BARATHI_AXA_MODEL,
       BARATHI_AXA_VARIENT: req.body.BARATHI_AXA_VARIENT,
       BARATHI_AXA_EXSHOWROOMPRICE: req.body.BARATHI_EXSHOWROOMPRICE,
       ROYAL_SUNDARAM_MANUFACTURE: req.body.ROYAL_SUNDARAM_MANUFACTURE,
       ROYAL_SUNDARAM_MODEL: req.body.ROYAL_SUNDARAM_MODEL,
       ROYAL_SUNDARAM_CODE: req.body.ROYAL_SUNDARAM_CODE,
       isTopModel:req.body.isTopModel,
       Active:req.body.Active
       
    
          })
    
        const result= await Data.save();
        res.send(result);
    });
   //===================Fetching model from mongodb================================================================================// 


router.post ('/mongomodel',async(req,res)=> {
  
 var result = await MasterVehicle.find( {MANUFACTURE:req.body.MANUFACTURE},{ _id:0, _v:0, ROYAL_SUNDARAM_CODE:0, ROYAL_SUNDARAM_MODEL:0,ROYAL_MANU:0,BHARATHI_MANU:0,BARATHI_AXA_MODEL:0,CODE:0,BARATHI_AXA_VARIENT:0,BARATHI_EXSHOWROOMPRICE:0,MANUFACTURE:0})
        

var obj = {};
console.log(result.length,"no of manufaactures")

for ( var i=0, len=result.length; i < len; i++ )
    obj[result[i]['MODEL']] = result[i];

result = new Array();
for ( var key in obj )
   result.push(obj[key]);
   console.log(result,"model")

         res.send(result);
});
//=======================Fetching variant from mongo db=========================================================================================================================================================================================================================================================//

router.post ('/mongovariant',async(req,res)=> {
  
    var result = await MasterVehicle.find( {MODEL:req.body.MODEL},{ _id:0, _v:0, ROYAL_SUNDARAM_CODE:0, ROYAL_SUNDARAM_MODEL:0,ROYAL_MANU:0,BHARATHI_MANU:0,BARATHI_AXA_MODEL:0,BARATHI_AXA_VARIENT:0,BARATHI_EXSHOWROOMPRICE:0,MANUFACTURE:0,MODEL:0})
           
   console.log(result)
            res.send(result);
   });

  // =======================Fetching all values from mongodb===========================================================================//
  router.post ('/mongomastervalues',async(req,res)=> {
  
    var result = await MasterVehicle.find( {MODEL:req.body.MODEL,MANUFACTURE:req.body.MANUFACTURE,CODE:req.body.CODE},{ _id:0, _v:0, CODE:0,MANUFACTURE:0,MODEL:0})
           
   console.log(result)
            res.send(result);
   });

   //=======================Inserting new values to mongo db=====================================================//
   router.get('/insert',async(req,res) => {
   

                      await MasterVehicle.update({
                        // MANUFACTURE: "DUCATI",
                        // BARATHI_AXA_MODEL:"DIAVEL"
                     


                       
                    }, {
                        $set: {
                         //  BARATHI_AXA_EXSHOWROOMPRICE:2555076

            
                         //  ROYAL_SUNDARAM_MANUFACTURE:"Ducati",
                           isTopModel:false,
                           Active:false
            
                        }
                    }, {
                        multi:true,
                    })
                    res.send("updated successfully")

    });

    //=================================================================================//

    router.get('/update',async(req,res) => {
        
await MasterVehicle.update({

   MANUFACTURE:"PIAGGIO"
   
                       
}, {
    $rename: {

        " BARATHI_AXA_VARIENT":" BARATHI_AXA_VARIANT",
        
       

    }
}, {
    multi:true,
})       
res.send("successfully updated")
    });

    //==================================================================================//

    
    
  



    module.exports = router;
    