const express = require('express');
const router = express.Router();
 const occupation= require('../models/occupation');

 router.post ('/occupationnames',async(req,res)=> {

    const find = await occupation.findOne({Name:req.body.Name});
    console.log(find)
    if(find) return res.status(400).send('occupation Name is already registered');

    const Data= new occupation ({

        Name: req.body.Name,
        code: req.body.code
        });
    result = Data.save()
       res.send("saved")
//}
        })
        //  .catch(err => {

        //     res.send(err)
        
   // })
//});
//};
   // });
    module.exports = router;