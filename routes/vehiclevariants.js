const express = require('express');
const router = express.Router();
const {VariantsModel}  = require('../models/vehiclevariant');

router.post('/variants', async(req, res) => {
    let name = req.body.modelName;
    console.log(name);
    
    const variants = await VariantsModel.find({ ModelName : name })
      .populate("-_id")
      .select("variants");
      console.log(variants[0].variants);
  
      res.send(variants[0].variants);
});

module.exports = router;