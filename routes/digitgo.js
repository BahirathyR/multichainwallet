const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");
var cloudinary = require('cloudinary');
var applicationId;
var bcSdk = require('../multichain/invoke');

//======================================GODIGIT QUICK QUOTE================================================================================================================================================================================================================//




    router.post('/digitgoquickquote', async(req,res) => {
        const digitgoquickquote =JSON.stringify(req.body);
        console.log(digitgoquickquote,"kkkkavi")
        fetch('https://preprod-qnb.godigit.com/motorinsurance/services/contract/premiumCalculation/quickQuote',{
        method: "POST",
        port: 9000,
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json',
                  },
        body : digitgoquickquote
                  }).then((res)=>{
        return res.text();
        
                  }).then((data)=>{
        console.log(JSON.parse(data))
        const response = JSON.parse(data);
        status=response.error.errorCode
        if(status===0){
        enquiry_id = response.enquiryId
        totalGrossPremium = response.totalGrossPremium
        totalNetPremium = response.totalNetPremium
        data = new Array;
        data.push({"Date":new Date()},{"Enquiry_id":enquiry_id},{"TotalGrossPremium":totalGrossPremium},{"TotalNetPremium":totalNetPremium})
        const transactiondetails = ({
          data: data,
          key:enquiry_id
      });
      bcSdk.savetransaction({
          Transactiondetails:transactiondetails   
           })
    
         
        return res.status(200).send("Information is saved successfully in the block chain"+"---------->"+JSON.stringify(response));
                       }
                       else{
                         return res.status(400).send(response)
                       }

                      }).catch((err)=>{
        console.log("Something happened at prospoalcalculation",err);
                      })
                      });

//========================================================GODIGIT CREATE QUOTE================================================================================================================================================================================================================//
       

    router.post('/digitgocreatequote', async(req,res) => {
        const digitgocreatequote =JSON.stringify(req.body);
        console.log(digitgocreatequote,"kkkkavi")
        fetch('https://preprod-qnb.godigit.com/motorinsurance/services/contract/quote',{
            method: "POST",
            port: 9000,
            headers: {
              Accept: "application/json",
              'Content-Type': 'application/json',
            },
            body : digitgocreatequote
            }).then((res)=>{
            return res.text();
            
            }).then((data)=>{
            console.log(JSON.parse(data))
        const response = JSON.parse(data);
        status=response.error.errorCode
        applicationId=response.applicationId;
         console.log(applicationId,"wow")
     
        
         if(status===0){
            return res.status(200).send(response);
            }
    
             }).catch((err)=>{
            console.log("Something happened at prospoalcalculation",err);
             })
             });

//==============================PAYMENTGATEWAY=====================================================================================================//
             router.post('/digitgopaymentgateway',async (req,res) => {
              const digitgopaymentgateway =JSON.stringify(req.body);
              console.log(digitgopaymentgateway)
           
              // console.log(digitgopaymentgateway,"kavi")
                fetch('https://preprod-digitpaymentgateway.godigit.com/DigitPaymentGateway/rest/insertPaymentOnline/EB/Motor',{
                method: "POST",
                port: 9000,
                headers: {
                  Accept: "application/json",
                  'Content-Type': 'application/json',
                  'Authorization':'YANTNIVR6YASG3G838UTB15RRUMPHQ5G'

                          },
                body :digitgopaymentgateway
                          }).then((res)=>{
                return res.text();
                
                          }).then((data)=>{
                console.log((data))
                
                                return res.status(200).send(data);
                                       
                              }).catch((err)=>{
                console.log("Something happened at paymentgatewayrequest",err);
                              })
                              });

//================================POLICYISSUANCE ========================================================================================//                              

                 router.post('/digitgopolicyissuance', async(req,res) => {
                                       let digitgopdfgeneration =JSON.stringify(req.body);
                     console.log(digitgopdfgeneration,"kii")
                     console.log(applicationId,"good")
                   var  url= 'https://preprod-qnb.godigit.com/motorinsurance/services/contract/quote/'+applicationId+'/issue'
                   console.log(url)
                                fetch(url,{
                                    method: "POST",
                                    port: 9000,
                                    headers: {
                                      Accept: "application/json",
                                       'Content-Type': 'application/json',
                                                                           
                                    },
                                    body : digitgopdfgeneration
                                    }).then((res)=>{
                                        
                                    return res.text();
                                    }).then((data)=>{
                                      console.log(JSON.parse(data))
                                  const response = JSON.parse(data);
                                  status=response.contractStatus.status
                                  console.log(status,"++++++++++++++++")
                                  
                                                            
                                   if(status==="COMPLETE"){
                                      enquiry_id = response.enquiryId
                                      totalGrossPremium = response.totalGrossPremium
                                      totalNetPremium = response.totalNetPremium
                                      policyNumber = response.policyNumber
                                      data = new Array;
                                      data.push({"Date":new Date()},{"Enquiry_id":enquiry_id},{"TotalGrossPremium":totalGrossPremium},{"TotalNetPremium":totalNetPremium},{"polciyNumber":policyNumber})
                                      const transactiondetails = ({
                                        data: data,
                                        key: policyNumber
                                    });
                                    bcSdk.savetransaction({
                                        Transactiondetails:transactiondetails   
                                         })
                                  
                                       
                                      return res.status(200).send("Information is saved successfully in the block chain"+"---------->"+JSON.stringify(response));
                                                     }
                                                     else{
                                                       return res.status(400).send(response)
                                                     }
                              
                                                    }).catch((err)=>{
                                      console.log("Something happened at prospoalcalculation",err);
                                                   // })
                                                    });
                                      return res.status(200).send(response);
                                      //}
                              
                                       });
                          
                                   
//=======================================PDFGENERATION==================================================================//                                                              

                           

                router.post('/digitgopdfgeneration', async(req,res) => {
                    let digitgopdfgeneration =JSON.stringify(req.body);
                   value = JSON.parse(digitgopdfgeneration)
                  const policyNumber = value.policyNumber
                    console.log(value.policyNumber,"kii")
                    fetch('https://preprod-pdfgeneration.godigit.com/PDFGeneration/rest/digit/generatePolicy',{
                        method: "POST",
                        port: 9000,
                        headers: {
                          'Content-Type': 'application/json',
                          'Authorization':'YANTNIVR6YASG3G838UTB15RRUMPHQ5G'
                        },
                        body : digitgopdfgeneration
                        }).then((res)=>{
                            
                        return res.text();
                        }).then((data)=>{
                            console.log(JSON.parse(data))
                            const response = JSON.parse(data);
                            pdf_url = response.schedulePath;
                            console.log(pdf_url,"kavitha")
                            const transactiondetails = ({
                              data: pdf_url,
                              key: policyNumber
                          });
                          bcSdk.savetransaction({
                              Transactiondetails:transactiondetails   
                               })


                                            return res.status(200).send(response);
                                                   
                                          }).catch((err)=>{
                            console.log("Something happened at pdfgeneration",err);
                                          })
                                          });
                                  


    module.exports = router; 