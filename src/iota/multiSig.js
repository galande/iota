const iota = require('./iota');

let multisig = {
    getAddress: (digestArr) => {
        var addressInstance = iota.multisig.address(digestArr);
        var address = addressInstance.finalize();
        return address;
    },
    getDigest: (seed, index, security) => {
        var digest = iota.multisig.getDigest(seed,index,security);
        return digest;
    },
    initiateTransfer : (input,remainderAddress,multisigTransfer) =>{
        return new Promise(function(resolve,reject){
          iota.multisig.initiateTransfer(input,remainderAddress,multisigTransfer,function(e,initiatedBundle){
              if(e){
                  reject(e);
              }else{
                  resolve(initiatedBundle);
              } 
          })
        }) 
    },
    getPrivateKey : (seed, index,security) =>{
        return iota.multisig.getKey(seed,index,security);
    },
    addSignature : (bundle, multisigAddress, privateKey)=>{
        return new Promise(function(resolve,reject){
            iota.multisig.addSignature(bundle,multisigAddress,privateKey,(function(error,signedBundle){
                if(error){
                    reject(error);
                }else{
                    resolve(signedBundle);
                }
            }))
        })  
    },
    sendTrytes : (trytes, depth,minWeightMagnitude) =>{
        return new Promise(function(resolve, reject){
            iota.api.sendTrytes(trytes,depth,minWeightMagnitude,function(error,result){
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            })
        })
    },
    getBalance : (addressArray) =>{
        return new Promise(function(resolve,reject){
            iota.api.getBalances(addressArray,100,(error,balance)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(balance);
                }
            })
        })
    }
}

module.exports = multisig;