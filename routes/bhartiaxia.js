const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");
const parser = require('xml2json');
const json2xml = require("jsontoxml");


//==============================Bharathiquickquote===================================================//

router.post('/bharathiquickquote', async(req,res) => {
    let  xmldata2=req.body;
    console.log(JSON.stringify(xmldata2),"kaaa")
    let startdatetemp=xmldata2.Body.serve.SessionDoc.Session.Quote.PolicyStartDate
    let enddatetemp=xmldata2.Body.serve.SessionDoc.Session.Quote.PolicyEndDate
   

    let emailId=xmldata2.Body.serve.SessionDoc.Session.Client.EmailID
    let MobileNo=xmldata2.Body.serve.SessionDoc.Session.Client.MobileNo 

    let financed=xmldata2.Body.serve.SessionDoc.Session.Client.FinancierDetails.IsFinanced
    let givname=xmldata2.Body.serve.SessionDoc.Session.Client.GivName
    let stateofregistration=xmldata2.Body.serve.SessionDoc.Session.Client.ClientExtraTag01
    let cityofregistration=xmldata2.Body.serve.SessionDoc.Session.Client.CityOfResidence
    let zone=xmldata2.Body.serve.SessionDoc.Session.Client.RegistrationZone

    let Make=xmldata2.Body.serve.SessionDoc.Session.Vehicle.Make
    let Model=xmldata2.Body.serve.SessionDoc.Session.Vehicle.Model
    let UserName=xmldata2.Body.serve.SessionDoc.Session.SessionData.UserName

    let password=xmldata2.Body.serve.SessionDoc.Session.SessionData.Password
    let inittime=xmldata2.Body.serve.SessionDoc.Session.SessionData.InitTime
    let ExShowroomPrice = xmldata2.Body.serve.SessionDoc.Session.Vehicle.ExShowroomPrice;
    let xmldata = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">      <Body>        <serve xmlns="http://schemas.cordys.com/gateway/Provider">            <SessionDoc><Session>	<SessionData xmlns="http://schemas.cordys.com/bagi/b2c/emotor/bpm/1.0">		<Index>1</Index>		<InitTime>'+inittime+'</InitTime>		<UserName>'+UserName+'</UserName>		<Password>'+password+'</Password>		<OrderNo>NA</OrderNo>		<QuoteNo>NA</QuoteNo>		<Route>INT</Route>		<Contract>MTR</Contract>		<Channel>signMtr</Channel>		<TransactionType>Quote</TransactionType>		<TransactionStatus>Fresh</TransactionStatus>		<ID>149208275275017943554968</ID>		<UserAgentID>2C000098</UserAgentID>		<Source>2C000098</Source>	</SessionData>	<tns:Vehicle xmlns:tns="http://schemas.cordys.com/bagi/b2c/emotor/2.0">		<tns:TypeOfBusiness>TR</tns:TypeOfBusiness>		<tns:AccessoryInsured>N</tns:AccessoryInsured>		<tns:NonElecAccessoryInsured>N</tns:NonElecAccessoryInsured>		<tns:AccessoryValue>0</tns:AccessoryValue>		<tns:BiFuelKit>			<tns:IsBiFuelKit>N</tns:IsBiFuelKit>			<tns:BiFuelKitValue>0</tns:BiFuelKitValue>			<tns:ExternallyFitted>N</tns:ExternallyFitted>		</tns:BiFuelKit>		<tns:DateOfRegistration>2014-04-01T00:00:00.000</tns:DateOfRegistration>		<tns:DateOfManufacture>2014-04-01T00:00:00.000</tns:DateOfManufacture>		<tns:RiskType>FTW</tns:RiskType>		<tns:Make>'+Make+'</tns:Make>		<tns:Model>'+Model+'</tns:Model>		<tns:FuelType>P</tns:FuelType>		<tns:Variant>X PRO DRUM DISC SELF</tns:Variant>		<tns:IDV>41208</tns:IDV>		<tns:VehicleAge>4</tns:VehicleAge>		<tns:CC>110</tns:CC>		<tns:PlaceOfRegistration>Bettiah</tns:PlaceOfRegistration>		<tns:SeatingCapacity>2</tns:SeatingCapacity>		<tns:VehicleExtraTag01 />		<tns:RegistrationNo>BR22S3564 </tns:RegistrationNo>		<tns:ExShowroomPrice>'+ExShowroomPrice+'</tns:ExShowroomPrice>		<tns:PaidDriver>False</tns:PaidDriver>	</tns:Vehicle>	<tns:Quote xmlns:tns="http://schemas.cordys.com/bagi/b2c/emotor/2.0">		<tns:LLDriver>false</tns:LLDriver>		<tns:ExistingPolicy>			<tns:Claims>0</tns:Claims>			<tns:NCB>35</tns:NCB>			<tns:PolicyType>Comprehensive</tns:PolicyType>			<tns:EndDate>2019-07-14T23:59:59.000</tns:EndDate>		</tns:ExistingPolicy>		<tns:PolicyStartDate>'+startdatetemp+'</tns:PolicyStartDate>		<tns:Deductible>0</tns:Deductible>		<tns:PAFamilySI>0</tns:PAFamilySI>		<tns:AgentNumber />		<tns:DealerId />		<tns:Premium>			<tns:Discount />		</tns:Premium>		<tns:SelectedCovers>			<tns:CarDamageSelected>True</tns:CarDamageSelected>			<tns:PAFamilyPremiumSelected>true</tns:PAFamilyPremiumSelected>			<tns:TPLiabilitySelected>True</tns:TPLiabilitySelected>			<tns:PADriverSelected>True</tns:PADriverSelected>			<tns:PAFamilyPremiumSelected>true</tns:PAFamilyPremiumSelected>		</tns:SelectedCovers>		<tns:PolicyEndDate>'+enddatetemp+'</tns:PolicyEndDate>	</tns:Quote>	<tns:Client xmlns:tns="http://schemas.cordys.com/bagi/b2c/emotor/2.0">		<tns:ClientType>Individual</tns:ClientType>		<tns:CltDOB />		<tns:FinancierDetails>			<tns:IsFinanced>'+financed+'</tns:IsFinanced>		</tns:FinancierDetails>		<tns:GivName>'+givname+' </tns:GivName>		<tns:SurName />		<tns:ClientExtraTag01>'+stateofregistration+'</tns:ClientExtraTag01>		<tns:CityOfResidence>'+cityofregistration+'</tns:CityOfResidence>		<tns:EmailID>'+emailId+'</tns:EmailID>		<tns:MobileNo>'+MobileNo+'</tns:MobileNo>		<tns:RegistrationZone>'+zone+'</tns:RegistrationZone>	</tns:Client></Session> </SessionDoc>        </serve>    </Body></Envelope>'
    if(!xmldata) return res.statusCode(400).send("Invalid request");
 fetch('https://uat.bhartiaxaonline.co.in/cordys/com.eibus.web.soap.Gateway.wcp?organization=o=B2C,cn=cordys,cn=defaultInst106,o=mydomain.com',{
        method: "POST",
        port: 9000,
        headers: {
          Accept: "application/xml",
          'Content-Type': 'application/xml',
        },
        body : xmldata
    
}).then((res)=>{
    return res.text();
    
}).then((data)=>{
    console.log(parser.toJson(data))
    const response = parser.toJson(data);
 
    
     
        return res.status(200).send(response);


   return res.status(200).send(response);

}).catch((err)=>{
    console.log("Something happened at prospoalcalculation",err);
})
});

//============================BharathiCreatequote===============================================//
router.post('/bharathicreatequote', async(req,res) => {
    let  bharathiAxaRequest=req.body;
    let  bharathiAxaRequest1 = JSON.stringify (bharathiAxaRequest);
    console.log(bharathiAxaRequest1,"kavitha")
    let value = bharathiAxaRequest.Envelope.Body.serve.SessionDoc;
    
    let OrderNo = value.Session.SessionData.OrderNo;
    console.log(OrderNo,"kkkkkkkkkkkkkkkk")
    let QuoteNo = value.Session.SessionData.QuoteNo;

    let EmailID=value.Session["tns:Client"]["tns:EmailID"]
    console.log(EmailID,"lllllllllllllllllll")
    let MobileNo=value.Session["tns:Client"]["tns:MobileNo"] 

    let Financed=value.Session["tns:Client"]["tns:FinancierDetails"]["tns:IsFinanced"]
    let GivName=value.Session["tns:Client"]["tns:GivName"]
    let stateofregistration=value.Session["tns:Client"]["tns:ClientExtraTag01"]
    let CityOfRegistration=value.Session["tns:Client"]["tns:CityOfResidence"]
    let Zone=value.Session["tns:Client"]["tns:RegistrationZone"]

    let Make=value.Session["tns:Vehicle"]["tns:Make"]
    let Model=value.Session["tns:Vehicle"]["tns:Model"]
    let UserName=value.Session.SessionData.UserName

    let Password=value.Session.SessionData.Password
    let inittime=value.Session.SessionData.InitTime
    let policyStartDate =value.Session["tns:Quote"]["tns:PolicyStartDate"]
    let PolicyEndDate =value.Session["tns:Quote"]["tns:PolicyEndDate"]
    let AccessoryInsured =value.Session["tns:Vehicle"]["tns:AccessoryInsured"]
    let DateOfManufacture = value.Session["tns:Vehicle"]["tns:DateOfManufacture"]
    let DateOfRegistration = value.Session["tns:Vehicle"]["tns:DateOfRegistration"]
    let FuelType = value.Session["tns:Vehicle"]["tns:FuelType"]
    let EngineNo = value.Session["tns:Vehicle"]["tns:EngineNo"]
    let ChasisNo = value.Session["tns:Vehicle"]["tns:ChasisNo"]
    console.log(ChasisNo,"testttttttttttttttttt")
    let EXShowroomPrice = value.Session["tns:Vehicle"]["tns:ExShowroomPrice"]
    let CarDamageSelected = value.Session["tns:Quote"]["tns:SelectedCovers"]["tns:CarDamageSelected"]
    let TPLiabilitySelected = value.Session["tns:Quote"]["tns:SelectedCovers"]["tns:TPLiabilitySelected"]
    let PADriverSelected = value.Session["tns:Quote"]["tns:SelectedCovers"]["tns:PADriverSelected"]
    let PAFamilyPremiumSelected = value.Session["tns:Quote"]["tns:SelectedCovers"]["tns:PAFamilyPremiumSelected"]
    let Occupation = value.Session["tns:Client"]["tns:Occupation"]
    
   const proposalrequest=  '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Body><serve xmlns="http://schemas.cordys.com/gateway/Provider"><SessionDoc><Session> <SessionData><Index>2</Index> <InitTime>'+ inittime+'</InitTime><UserName>'+UserName+'</UserName> <Password>'+Password+'</Password> <OrderNo>'+OrderNo+'</OrderNo> <QuoteNo>'+QuoteNo+'</QuoteNo> <Route>INT</Route> <Contract>MTR</Contract> <Channel/> <TransactionType>Quote</TransactionType><TransactionStatus>Fresh</TransactionStatus> <ID>149009837762117445997610</ID> <UserAgentID>2C000024</UserAgentID> <Source>2C000024</Source></SessionData><tns:Vehicle xmlns:tns="http://schemas.cordys.com/bagi/b2c/emotor/2.0"> <tns:TypeOfBusiness>TR</tns:TypeOfBusiness> <tns:AccessoryInsured>'+AccessoryInsured+'</tns:AccessoryInsured> <tns:AccessoryValue>0</tns:AccessoryValue> <tns:BiFuelKit> <tns:IsBiFuelKit>N</tns:IsBiFuelKit> <tns:BiFuelKitValue>0</tns:BiFuelKitValue> <tns:ExternallyFitted>0</tns:ExternallyFitted></tns:BiFuelKit> <tns:DateOfRegistration>'+DateOfRegistration+'</tns:DateOfRegistration><tns:DateOfManufacture>'+ DateOfManufacture+'</tns:DateOfManufacture><tns:RiskType>FTW</tns:RiskType> <tns:Make>'+Make+'</tns:Make> <tns:Model>'+Model+'</tns:Model><tns:FuelType>'+FuelType+'</tns:FuelType><tns:Variant>STD</tns:Variant><tns:IDV>108587</tns:IDV> <tns:VehicleAge>3</tns:VehicleAge><tns:CC>199</tns:CC><tns:PlaceOfRegistration>'+stateofregistration+'</tns:PlaceOfRegistration><tns:SeatingCapacity>2</tns:SeatingCapacity><tns:ExShowroomPrice>'+EXShowroomPrice+'</tns:ExShowroomPrice> <tns:EngineNo>'+EngineNo+'</tns:EngineNo> <tns:ChasisNo>'+ChasisNo+'</tns:ChasisNo><tns:DriveExperiance>0</tns:DriveExperiance> <tns:PaidDriver>False</tns:PaidDriver><tns:RegistrationNo>MH12KK3243</tns:RegistrationNo></tns:Vehicle><tns:Quote xmlns:tns="http://schemas.cordys.com/bagi/b2c/emotor/2.0"> <tns:ExistingPolicy> <tns:Claims>0</tns:Claims> <tns:PolicyType>Comprehensive</tns:PolicyType> <tns:EndDate>2017-03-23T00:00:00</tns:EndDate> <tns:NCB>25</tns:NCB> <tns:PolicyNo>8377y43278</tns:PolicyNo><tns:InsuranceCompany>Bajaj Allianz General Insurance Co. Ltd.</tns:InsuranceCompany></tns:ExistingPolicy><tns:PolicyStartDate>'+policyStartDate+'</tns:PolicyStartDate><tns:Deductible>0</tns:Deductible> <tns:PAFamilySI>0</tns:PAFamilySI> <tns:Premium> <tns:Discount /></tns:Premium> <tns:SelectedCovers><tns:CarDamageSelected>'+CarDamageSelected+'</tns:CarDamageSelected><tns:TPLiabilitySelected>'+TPLiabilitySelected+'</tns:TPLiabilitySelected><tns:PADriverSelected>'+PADriverSelected+'</tns:PADriverSelected><tns:PAFamilyPremiumSelected>'+PAFamilyPremiumSelected+'</tns:PAFamilyPremiumSelected> <tns:CosumableCoverSelected>false</tns:CosumableCoverSelected><tns:ZeroDepriciationSelected>False</tns:ZeroDepriciationSelected><tns:EngineGearBoxProtectionSelected>false</tns:EngineGearBoxProtectionSelected> <tns:HydrostaticLockSelected>false</tns:HydrostaticLockSelected> <tns:InvoicePriceSelected>false</tns:InvoicePriceSelected><tns:KeyReplacementSelected>false</tns:KeyReplacementSelected><tns:MedicalExpensesSelected>false</tns:MedicalExpensesSelected><tns:NoClaimBonusSameSlabSelected>false</tns:NoClaimBonusSameSlabSelected> <tns:RoadsideAssistanceSelected>false</tns:RoadsideAssistanceSelected> <tns:HospitalCashSelected>false</tns:HospitalCashSelected><tns:AmbulanceChargesSelected>False</tns:AmbulanceChargesSelected></tns:SelectedCovers><tns:PolicyEndDate>'+PolicyEndDate +'</tns:PolicyEndDate><tns:PolicyTenure>1</tns:PolicyTenure> </tns:Quote><tns:Client xmlns:tns="http://schemas.cordys.com/bagi/b2c/emotor/2.0"> <tns:ClientType>Individual</tns:ClientType><tns:FinancierDetails><tns:IsFinanced>'+Financed+'</tns:IsFinanced> </tns:FinancierDetails><tns:CltDOB>19990301</tns:CltDOB><tns:Salut>MR</tns:Salut><tns:GivName>'+GivName+'</tns:GivName> <tns:ClientExtraTag01>MAHARASHTRA</tns:ClientExtraTag01> <tns:CityOfResidence>'+CityOfRegistration+'</tns:CityOfResidence> <tns:EmailID>'+EmailID+'</tns:EmailID><tns:MobileNo>'+MobileNo+'</tns:MobileNo> <tns:SurName>Verma</tns:SurName> <tns:CltSex>M</tns:CltSex> <tns:Marryd>S</tns:Marryd><tns:Occupation>'+ Occupation+'</tns:Occupation> <tns:CltAddr01>Mohan Nagar Co-Op Society Sus</tns:CltAddr01> <tns:CltAddr02>C-603 Nea Apartment</tns:CltAddr02><tns:CltAddr03>C-603 Nea Apartment</tns:CltAddr03><tns:City>PUNE</tns:City><tns:State>Hyderabad</tns:State> <tns:PinCode>411029</tns:PinCode> <tns:Nominee> <tns:Name>test nominee</tns:Name> <tns:Age>78</tns:Age> <tns:Relationship>Father</tns:Relationship></tns:Nominee> <tns:RegistrationZone>'+Zone+'</tns:RegistrationZone></tns:Client></Session></SessionDoc>  </serve> </Body></Envelope>'

   if(!proposalrequest) return res.statusCode(400).send("Invalid request");

   try {
        let response = await fetch("https://uat.bhartiaxaonline.co.in:/cordys/com.eibus.web.soap.Gateway.wcp?organization=o=B2C,cn=cordys,cn=defaultInst106,o=mydomain.com",{
        method: "POST",
        port: 9000,
        headers: {
          Accept: "application/xml",
          'Content-Type': 'application/xml',
        },
        body : proposalrequest
    });


        response = await response.text();
        response = parser.toJson(response);
        response = JSON.parse(response);
        const chainData = JSON.stringify(response);
        res.send(response);
        console.log(chainData);
    } catch (err) {
        console.log(err);
        res.send(err.Error);
    } 
});
module.exports = router; 


