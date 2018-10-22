const express = require('express');
const router = express.Router();
const {Manufacture} = require('../models/manufacture');

router.post('/addmanufactures', async(req, res) => {
    const findmake = await Manufacture.findOne({manufacturename:req.body.makename});
    if(findmake) return res.status(400).send('Manufacture already Registered');
    const manufacture = new Manufacture({
        manufacturename : req.body.makename,
        // active : req.body.active,
        // isTopmodel : req.body.topmodel
    })
    const result = await  manufacture.save();
    res.send(result);
}); 


router.post('/test', async(req, res) => {
    let test = req.body.test;
    console.log("",test);
});

router.post('/manufactures', async(req, res) => {
    let make = await Manufacture.find()
     .populate("-_id")
     .select("ManufactureName");
     console.log(make);
     res.send(make);
});

module.exports = router;