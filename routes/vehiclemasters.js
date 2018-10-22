const express = require('express');
const router = express.Router();
const { } = require('../models/vehiclemaster');

router.post('/api/master/',async(req,res)=>{
    let master = await MasterDetails.find({MANUFACTURE_NAME : "KTM", MODEL :"690",VARIENT : "690 CC (654 CC)"})
    .select('BARATHI_AXA_MODEL BARATHI_AXA_VARIENT BARATHI_EXSHOWROOMPRICE ROYAL_SUNDARAM_MODEL ROYAL_SUNDARAM_CODE');
    console.log(master);
    res.send(master);
});
module.exports = router;   