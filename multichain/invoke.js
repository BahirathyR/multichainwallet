let multichain = require("multichain-node")({
    port: 2786 ,
    host: '127.0.0.1',
    user: "multichainrpc",
    pass: "AxpkFZGVD16wV9s5BZRqejQozX9fntBpDeGi9839toYh"
    
            
});


function savetransaction(params) {
   
    return new Promise((resolve) => {
        var response;

    var TransactionDetails = params.Transactiondetails.data;
    var user_ID= params.Transactiondetails.key;
    console.log("TransactionDetails",params.Transactiondetails.data)
    console.log("TransactionDetailsssss",params.Transactiondetails.key)
    console.log("TransactionDetails.length",TransactionDetails.length)
     
    var hex =""
   
   for(var i=0;i<TransactionDetails.length;i++) {
      hex += ''+Buffer.from(JSON.stringify(TransactionDetails[i]), 'utf8').toString('hex');
   }
   console.log(hex,"wow")
    
    multichain.publish({stream:"medicalInfo",key: user_ID,data: hex }, (err, res) => {
        console.log(res)
        if(err == null){
         return resolve({response:res});
        }else{
            console.log(err)
        }
    })

})
   
}
module.exports = {
    savetransaction: savetransaction
    

};