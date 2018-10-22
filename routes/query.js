const  readRequest = require('../multichain/query')
const  bcSdk=  require('../multichain/query')
const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");



router.post("/readAllrequest", async (req, res) => {
        
    const key = req.body.key;
    // if (!checkToken(req)) {
    //     console.log("invalid token")
    //     return res.status(401).json({
    //         message: "invalid token"
    //     })
    // }
    
           
            
           bcSdk.readAllRequest({
               key:key
           })
    
           .then((response) => {
                console.log("data in response " + JSON.stringify(res.key))
    
               return res.status(200).send(response);
            })
    
           .catch(err => {
    
               if (err.code == 401) {
    
                   return res.status(400).send("cann't fetch");
    
               } else {
                    console.log("error occurred" + err);
    
                   return res.status(500).send("internal server error");
                }
            })
        })
   

        
        
         

module.exports = router;