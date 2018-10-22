const express = require('express');
const router = express.Router();
const {Manufacture} = require('../models/manufacture');

router.post('/addmodels', async(req, res) => {
  let model = await Manufacture.findOne({manufacturename : req.body.makename});
  let modeldetails = {
    ModelName : req.body.modelname,
    Active : req.body.active,
    isTopModel : req.body.istopmodel,
    
  }
  model.models.push(modeldetails);
  model = await model.save();
  res.send(model);
});

router.post('/models', async(req, res) => {
    let name = req.body.ManufactureName;
  
    const manufacture = await Manufacture.find({ ManufactureName: name })
      .populate("models -_id")
      .select("models -_id");
    console.log(manufacture[0].models[0]);
    res.send(manufacture[0].models);
});



module.exports = router;