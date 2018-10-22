// // var mongoXlsx = require('mongo-xlsx');
// // var data = [ { name : "Peter", lastName : "Parker", isSpider : true } , 
// //              { name : "Remy",  lastName : "LeBeau", powers : ["kinetic cards"] }];
 
// // /* Generate automatic model for processing (A static model should be used) */
// // var model = null;
// // mongoXlsx.xlsx2MongoData('../uploads/aprilia1.xlsx', model, function(err, mongoData) {
// //     console.log('Mongo data:', mongoData); 
// //     console.log(err)
// //   });

// var obj={
//     "idv": 859189,
//     "eligibleNCB": "ZERO",
//     "voluntaryDeductible": "ZERO",
//     "coveragePremium": {
//     "baseCoverPremium": {
//     "thirdPartyLiabilityCover": {
//     "premium": 9534,
//     "tarifPremium": 0,
//     "selection": true,
//     "insuredAmount": 750000
//     },
//     "ownDamageCover": {
//     "premium": 13611,
//     "tarifPremium": 28207,
//     "selection": true,
//     "insuredAmount": 859189,
//     "plan": "PLAN_C"
//     },
//     "theftCover": {
//     "premium": 0,
//     "tarifPremium": 0,
//     "selection": false,
//     "insuredAmount": 0
//     },
//     "fireCover": {
//     "premium": 0,
//     "tarifPremium": 0,
//     "selection": false,
//     "insuredAmount": 0
//     }
//     },
//     "additionalCoverPremium": {
//     "paOwnerDriverCover": {
//     "premium": 2250,
//     "tarifPremium": 0,
//     "selection": true,
//     "insuredAmount": 1500000
//     },
//     "paUnnamedPersonCover": {
//     "premium": 0,
//     "tarifPremium": 0,
//     "selection": false,
//     "insuredAmount": 0
//     },
//     "otherDriverCover": {
//     "premium": 150,
//     "tarifPremium": 0,
//     "selection": true,
//     "insuredAmount": 200000
//     },
//     "legalLiabilityCover": {
//     "premium": 0,
//     "tarifPremium": 0,
//     "selection": false,
//     "insuredAmount": 0
//     }
//     },
//     "addOnCoverPremium": {
//     "partsDepreciationCover": {
//     "premium": 3866,
//     "tarifPremium": 0,
//     "selection": true,
//     "insuredAmount": 0,
//     "plan": "PLAN_C",
//     "numberOfClaimsCovered": "ONE",
//     "coPay": 0
//     },
//     "engineAndGearBoxProtectionCover": {
//     "premium": 643,
//     "tarifPremium": 0,
//     "selection": true,
//     "insuredAmount": 0
//     },
//     "consumableCover": {
//     "premium": 422,
//     "tarifPremium": 0,
//     "selection": true,
//     "insuredAmount": 0
//     },
//     "breakdownAssistanceCover": {
//     "premium": 1,
//     "tarifPremium": 0,
//     "status": "FREE_PREMIUM",
//     "selection": true,
//     "insuredAmount": 0,
//     "plan": "PLAN_C"
//     },
//     "onSpotlegalAndFinalAssistanceCover": {
//     "premium": 0,
//     "tarifPremium": 0,
//     "selection": false,
//     "insuredAmount": 0
//     },
//     "returnToInvoiceCover": {
//     "premium": 1611,
//     "tarifPremium": 0,
//     "selection": true,
//     "insuredAmount": 0,
//     "plan": "PLAN_A",
//     "coPay": 0
//     },
//     "tyreProtectCover": {
//     "premium": 177,
//     "tarifPremium": 0,
//     "selection": true,
//     "insuredAmount": 0,
//     "tyreType": "OTHERS"
//     },
//     "rimDamageCover": {
//     "premium": 497,
//     "tarifPremium": 0,
//     "selection": true,
//     "insuredAmount": 0
//     },
//     "dailyConveyanceBenefitP1Cover": {
//     "premium": 0,
//     "tarifPremium": 0,
//     "selection": false,
//     "insuredAmount": 0
//     },
//     "dailyConveyanceBenefitP2Cover": {
//     "premium": 0,
//     "tarifPremium": 0,
//     "selection": false,
//     "insuredAmount": 0
//     },
//     "fuelAdultrationCover": {
//     "premium": 0,
//     "tarifPremium": 0,
//     "selection": false,
//     "insuredAmount": 0
//     },
//     "lossOfPersonalBelongingsCover": {
//     "premium": 0,
//     "tarifPremium": 0,
//     "selection": false,
//     "insuredAmount": 0
//     },
//     "lossOfVehicleKeysCover": {
//     "premium": 0,
//     "tarifPremium": 0,
//     "selection": false,
//     "insuredAmount": 0
//     },
//     "ncbProtectionCover": {
//     "premium": 0,
//     "tarifPremium": 0,
//     "selection": false,
//     "insuredAmount": 0
//     },
//     "breakdownWarrantyCover": {
//     "premium": 0,
//     "tarifPremium": 0,
//     "selection": false,
//     "insuredAmount": 0
//     }
//     },
//     "accessoriesCoverPremium": {
//     "electricalCover": {
//     "premium": 0,
//     "tarifPremium": 0,
//     "selection": false,
//     "insuredAmount": 0
//     },
//     "nonElectricalCover": {
//     "premium": 0,
//     "tarifPremium": 0,
//     "selection": false,
//     "insuredAmount": 0
//     },
//     "cngCover": {
//     "premium": 0,
//     "tarifPremium": 0,
//     "selection": false,
//     "insuredAmount": 0
//     }
//     },
//     "discounts": {
//     "noClaimBonusDiscounts": 0,
//     "otherDiscounts": 0
//     }
//     },
//     "totalNetPremium": 32761,
//     "totalGrossPremium": 38659,
//     "serviceTax": {
//     "cgst": 0,
//     "sgst": 0,
//     "igst": 0,
//     "utgst": 0,
//     "totalTax": 5898
//     },
//     "enquiryId": "20182013052033-60270",
//     "error": {
//     "errorCode": 0,
//     "errorMessage": "Success"
//     }
//     }
//  console.log(obj.idv)
//  console.log(obj.enquiryId)
//  console.log(obj.totalGrossPremium)
//  console.log(obj.totalNetPremium)