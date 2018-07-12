var IOTA = require('iota.lib.js');

var iota = new IOTA({ provider: 'https://nodes.devnet.iota.org:443' });

// iota.api.getNodeInfo((err, result) =>{
//     if(err){
//         console.error(err);
//     }
//     if(result){
//         console.log(result);
//     }
// })

const seed = 'ISCLDWZIGXYXGMPUAG9RQTNJTHJSKHE9T9RNBUIKWECJKUGGKTITCPXFRAOGAIFKGZSTYOYUKF9LWZFFS';
// iota.api.getNewAddress(seed, (err, address) => {
//     if(err){
//         console.error(err);
//     }else{
//         console.log(address);
//         var isAddress = iota.valid.isAddress(address);
//         console.log(isAddress);

//         var allAddress = [];
//         allAddress.push(address);
        
//         iota.api.getBalances(allAddress,100,(err, balance) =>{
//             if(err){
//                 console.error(err);
//             }else{
//                 console.log(balance);
//             }
//         })
//     }
// })

iota.api.getAccountData(seed,{start:0, end:2},(err, data) =>{
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
})

console.log(iota.version);
