const express = require('express');
const router = express.Router();
var bcSdk = require('../multichain/invoke');


router.post('/hospitaldata', async(req,res)=>{
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
    bcSdk.savetransaction({
        Transactiondetails:transactiondetails   
         })
         
         res.status(200).send(userdata,"userdata")
        //},
      
    
   // }).catch((err)=>{
       // console.log("Something happened at entering userdata",err);
   // })

});
module.exports = router;