let val={
    "Body": {
           "serve": {
             "SessionDoc": {
               "Session": {
                 "SessionData": {
                   "Index": "1",
                   "InitTime": "Thu, 13 Apr 2017 16:55:39 GMT",
                   "UserName": "signMtr",
                   "Password":
                     "AZg3Q1SktWKLz0Os/H0MlAxFfI75pjnpKjn9xrV9vimyyS7/5Ilil/ftcP5oHxC7IFYLVF0C3MAJcIznwrZvDA==",
                   "OrderNo": "NA",
                   "QuoteNo": "NA",
                   "Route": "INT",
                   "Contract": "MTR",
                   "Channel": "polbaz",
                   "TransactionType": "Quote",
                   "TransactionStatus": "Fresh",
                   "ID": "149208275275017943554968",
                   "UserAgentID": "2C000098",
                   "Source": "2C000098"
                 },
                 "Vehicle": {
                   "TypeOfBusiness": "TR",
                   "AccessoryInsured": "N",
                   "NonElecAccessoryInsured": "N",
                   "AccessoryValue": "0",
                   "BiFuelKit": {
                     "IsBiFuelKit": "N",
                     "BiFuelKitValue": "0",
                     "ExternallyFitted": "N"
                   },
                   "DateOfRegistration": "2014-04-01T00:00:00.000",
                   "DateOfManufacture": "2014-04-01T00:00:00.000",
                   "RiskType": "FTW",
                   "Make": "HERO MOTOR CORP",
                   "Model": "PASSION",
                   "FuelType": "P",
                   "Variant": "X PRO DRUM DISC SELF",
                   "IDV": "41208",
                   "VehicleAge": "4",
                   "CC": "110",
                   "PlaceOfRegistration": "Bettiah",
                   "SeatingCapacity": "2",
                   "VehicleExtraTag01": null,
                   "RegistrationNo": "BR22S3564",
                   "ExShowroomPrice": "52297",
                   "PaidDriver": "False"
                 },
                 "Quote": {
                   "LLDriver": "false",
                   "ExistingPolicy": {
                     "Claims": "0",
                     "NCB": "35",
                     "PolicyType": "Comprehensive",
                     "EndDate": "2018-07-26T23:59:59.000"
                   },
                   "PolicyStartDate": "2018-09-14T00:00:00.000",
                   "Deductible": "0",
                   "PAFamilySI": "0",
                   "AgentNumber": null,
                   "DealerId": null,
                   "Premium": {
                     "Discount": null
                   },
                   "SelectedCovers": {
                     "CarDamageSelected": "True",
                     "PAFamilyPremiumSelected": ["true", "true"],
                     "TPLiabilitySelected": "True",
                     "PADriverSelected": "True"
                   },
                   "PolicyEndDate": "2019-09-13T23:59:59.000"
                 },
                 "Client": {
                   "ClientType": "Individual",
                   "CltDOB": null,
                   "FinancierDetails": {
                     "IsFinanced": "0"
                   },
                   "GivName": "TW238275707201704130455394890",
                   "SurName": null,
                   "ClientExtraTag01": "BIHAR",
                   "CityOfResidence": "Bettiah",
                   "EmailID": "pb@pb.com",
                   "MobileNo": "9777777777",
                   "RegistrationZone": "B"
                 }
               }
             }
           }
         }
}

var s=val.Body.serve.SessionDoc.Session.Vehicle.ExShowroomPrice

console.log(s)
module.exports = router; 
