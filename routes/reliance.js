const express = require('express');
const router = express.Router();
const json2xml = require("jsontoxml");
const fetch = require("node-fetch");
var js2xmlparser = require("js2xmlparser");
const request = require("request")
const parser = require('xml2json');
const jsontoxml = require('jsontoxml')

//===================================RelianceCoverageDetails=======================================//


router.post('/reliancecoveragedetails', async(req,res)=>{
    const coveragedetails = req.body;
   
    if(!coveragedetails) return res.status(400).send("Invalid request");
    const requestBody1 = jsontoxml(JSON.stringify(coveragedetails));
   
    requestBody='<PolicyDetails xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"> <CoverDetails />  <TrailerDetails />'+requestBody1+'</PolicyDetails>'
    console.log(requestBody)
       fetch("http://rzonews.reliancegeneral.co.in:91/API/Service/CoverageDetailsForMotor",{
        method: "POST",
        port:9000,
        headers: {
          Accept: "application/xml",
          'Content-Type': 'application/xml',
          //'x-access-token': token
          // 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGF0dXMiOjIwMCwibWVzc2FnZSI6IkxvZ2dlZCBpbiBzdWNjZXNzZnVsbHkiLCJ1c2VycyI6W3siX2lkIjoiNWExYmFhNTYyYzZiOTEzNzYzMmM3ZWVjIiwiZW1haWwiOiJhcnVuLmhvc3NhbWFuaUByYXBpZHF1YmUuY29tIiwicGFzc3dvcmQiOiJqWmFlNzI3SzA4S2FPbUtTZ09hR3p3dy9YVnFHci9QS0VnSU1ranJjYkpJPSIsInJhcGlkSUQiOiJCd2JNd0E2YjFIaEUxNC91TFdweVJXS3EzMytBVUJINnd6UjZtQzh0OUowPSIsInVzZXJPYmplY3QiOnsiZm5hbWUiOiJhcnVuIiwibG5hbWUiOiJob3NzYW1hbmkiLCJwaG9uZSI6IjkxODM2OTk2NDU4MiJ9LCJ1c2VydHlwZSI6IkRpcmVjdCBDbGllbnRzIiwib3RwIjoxMTAwLCJlbmNvZGVkTWFpbCI6IllYSjFiaTVvYjNOellXMWhibWxBY21Gd2FXUnhkV0psTG1OdmJRPT0iLCJjcmVhdGVkX2F0IjoiTW9uIE5vdiAyNyAyMDE3IDExOjMxOjU4IEdNVCswNTMwIChJU1QpIiwiY291bnQiOjAsIl9fdiI6MCwic3RhdHVzIjpbInBob25lIiwiZW1haWwiXX1dLCJpYXQiOjE1MTUwNTA3NDcsImV4cCI6MTUxNTExMDc0N30.xZ_K-mE7WfAszkFrGMATmm9EpCmtYgdOyydVL4HGPVk'
        },
        body : requestBody
    }).then((res)=>{
        return res.text();
        
    }).then((data)=>{
        console.log(parser.toJson(data))
       const response = parser.toJson(data);

   
    
       return res.status(200).send(response);
   
    }).catch((err)=>{
        console.log("Something happened at Coveragedetails",err);
    })
   
    
});

//=================================ReliancePremiumCalculation=======================================//


router.post('/reliancepremiumcalculation', async(req,res)=>{
    const premiumcalculation = req.body;
   
    if(!premiumcalculation) return res.status(400).send("Invalid request");
    const requestBody1 = jsontoxml(JSON.stringify(premiumcalculation));
    requestBody='<PolicyDetails xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"> <CoverDetails />  <TrailerDetails />'+requestBody1+'</PolicyDetails>'
       fetch("http://rzonews.reliancegeneral.co.in:91/API/Service/PremiumCalulationForMotor",{
        method: "POST",
        port:9000,
        headers: {
          Accept: "application/xml",
          'Content-Type': 'application/xml',
          //'x-access-token': token
          // 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGF0dXMiOjIwMCwibWVzc2FnZSI6IkxvZ2dlZCBpbiBzdWNjZXNzZnVsbHkiLCJ1c2VycyI6W3siX2lkIjoiNWExYmFhNTYyYzZiOTEzNzYzMmM3ZWVjIiwiZW1haWwiOiJhcnVuLmhvc3NhbWFuaUByYXBpZHF1YmUuY29tIiwicGFzc3dvcmQiOiJqWmFlNzI3SzA4S2FPbUtTZ09hR3p3dy9YVnFHci9QS0VnSU1ranJjYkpJPSIsInJhcGlkSUQiOiJCd2JNd0E2YjFIaEUxNC91TFdweVJXS3EzMytBVUJINnd6UjZtQzh0OUowPSIsInVzZXJPYmplY3QiOnsiZm5hbWUiOiJhcnVuIiwibG5hbWUiOiJob3NzYW1hbmkiLCJwaG9uZSI6IjkxODM2OTk2NDU4MiJ9LCJ1c2VydHlwZSI6IkRpcmVjdCBDbGllbnRzIiwib3RwIjoxMTAwLCJlbmNvZGVkTWFpbCI6IllYSjFiaTVvYjNOellXMWhibWxBY21Gd2FXUnhkV0psTG1OdmJRPT0iLCJjcmVhdGVkX2F0IjoiTW9uIE5vdiAyNyAyMDE3IDExOjMxOjU4IEdNVCswNTMwIChJU1QpIiwiY291bnQiOjAsIl9fdiI6MCwic3RhdHVzIjpbInBob25lIiwiZW1haWwiXX1dLCJpYXQiOjE1MTUwNTA3NDcsImV4cCI6MTUxNTExMDc0N30.xZ_K-mE7WfAszkFrGMATmm9EpCmtYgdOyydVL4HGPVk'
        },
        body : requestBody
    }).then((res)=>{
        return res.text();
        
    }).then((data)=>{
        console.log(parser.toJson(data))
       const response = parser.toJson(data);

   
    
       return res.status(200).send(response);
   
    }).catch((err)=>{
        console.log("Something happened at CalculatePremium",err);
    })
   
    
});

//==========================RelianceproposalCalculation=====================================================//

router.post('/relianceproposalcalculation', async(req,res)=>{
    const propsoalcalculation = req.body;
   
    if(!propsoalcalculation) return res.status(400).send("Invalid request");
    const requestBody1 = jsontoxml(JSON.stringify(propsoalcalculation));
   propsoalrequest='<PolicyDetails xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"> <CoverDetails />  <TrailerDetails />'+requestBody1+'</PolicyDetails>'
       fetch("http://rzonews.reliancegeneral.co.in:91/API/Service/ProposalCreationForMotor",{
        method: "POST",
        port:9000,
        headers: {
          Accept: "application/xml",
          'Content-Type': 'application/xml',
          //'x-access-token': token
          // 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGF0dXMiOjIwMCwibWVzc2FnZSI6IkxvZ2dlZCBpbiBzdWNjZXNzZnVsbHkiLCJ1c2VycyI6W3siX2lkIjoiNWExYmFhNTYyYzZiOTEzNzYzMmM3ZWVjIiwiZW1haWwiOiJhcnVuLmhvc3NhbWFuaUByYXBpZHF1YmUuY29tIiwicGFzc3dvcmQiOiJqWmFlNzI3SzA4S2FPbUtTZ09hR3p3dy9YVnFHci9QS0VnSU1ranJjYkpJPSIsInJhcGlkSUQiOiJCd2JNd0E2YjFIaEUxNC91TFdweVJXS3EzMytBVUJINnd6UjZtQzh0OUowPSIsInVzZXJPYmplY3QiOnsiZm5hbWUiOiJhcnVuIiwibG5hbWUiOiJob3NzYW1hbmkiLCJwaG9uZSI6IjkxODM2OTk2NDU4MiJ9LCJ1c2VydHlwZSI6IkRpcmVjdCBDbGllbnRzIiwib3RwIjoxMTAwLCJlbmNvZGVkTWFpbCI6IllYSjFiaTVvYjNOellXMWhibWxBY21Gd2FXUnhkV0psTG1OdmJRPT0iLCJjcmVhdGVkX2F0IjoiTW9uIE5vdiAyNyAyMDE3IDExOjMxOjU4IEdNVCswNTMwIChJU1QpIiwiY291bnQiOjAsIl9fdiI6MCwic3RhdHVzIjpbInBob25lIiwiZW1haWwiXX1dLCJpYXQiOjE1MTUwNTA3NDcsImV4cCI6MTUxNTExMDc0N30.xZ_K-mE7WfAszkFrGMATmm9EpCmtYgdOyydVL4HGPVk'
        },
        body : propsoalrequest
    }).then((res)=>{
        return res.text();
        
    }).then((data)=>{
        console.log(parser.toJson(data))
       const response = parser.toJson(data);

   
    
       return res.status(200).send(response);
   
    }).catch((err)=>{
        console.log("Something happened at prospoalcalculation",err);
    })
   
    
});


module.exports = router;

//=================================Code Ends Here=================================================//