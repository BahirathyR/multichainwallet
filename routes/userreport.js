const express = require('express');
const router = express.Router();
var bcSdk = require('../multichain/query');


router.post('/userreport', async(req,res)=>{
    const userdata = req.body;
    if(!userdata) return res.status(400).send("Invalid request");
    
       
       let user_ID = userdata.user_ID
       
       data = new Array;
       data.push({userdata:userdata})
       console.log(data,"woow")     
       const transactiondetails = ({
        data: data,
        key:user_ID,
    });
    bcSdk.readRequest({
        user_ID:user_ID   
         })
         .then(function(response) {
            console.log("  result.query---->", response);
            return res.json({
                "status": 200,
                "readRequest": response
            });
        })
    
   // }).catch((err)=>{
       // console.log("Something happened at entering userdata",err);
   // })

});

//==========================Readallrequest========================================================//

router.get('/userreports', async(req,res)=>{
    
    bcSdk.readAllRequest({
         
         })
         .then(function(response) {
            console.log("  result.query---->", response);
            return res.json({
                "status": 200,
                "readRequest": response
            });
        })
    
   // }).catch((err)=>{
       // console.log("Something happened at entering userdata",err);
   // })

});
module.exports = router;