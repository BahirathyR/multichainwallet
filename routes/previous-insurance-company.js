const express = require('express');
const router = express.Router();
 const previous_insurance_name= require('../models/previous-insurance-company');



 router.post ('/insurancecompanynames',async(req,res)=> {
    // var key = "insurancecompanynames"
    
     const Data= new previous_insurance_name ({
       
         Name: req.body.Name,
     });
     
const result= await Data.save();
res.send(result);
    });
    
    router.get('/name', function (req, res) {
        previous_insurance_name.find(function (err, doc) {
            res.send(doc[0].Name.name);
        })
    })


    module.exports = router;