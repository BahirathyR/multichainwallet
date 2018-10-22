const express = require('express');
const router = express.Router();
 const StateCodeDetail= require('../models/statecode');

 //============================================================================//

 router.post ('/statecode',async(req,res)=> {
    const find = await StateCodeDetail.findOne({StateName:req.body.StateName,StateCode:req.body.StateCode});
    console.log(find)
    if(find) return res.status(400).send('State Name is already registered');

          const Data= new StateCodeDetail({
            StateCode:req.body.StateCode,
            StateName:req.body.StateName,
            p400code:req.body.p400code,
   
          })
          const result= await Data.save();
        res.send(result);
    });

    module.exports = router;