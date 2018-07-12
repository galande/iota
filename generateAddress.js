const iota = require('./iota');

const seed = 'ISCLDWZIGXYXGMPUAG9RQTNJTHJSKHE9T9RNBUIKWECJKUGGKTITCPXFRAOGAIFKGZSTYOYUKF9LWZFFS';
iota.api.getNewAddress(seed,(err,newAddress) =>{
    if(err){
        console.error(err);
        return;
    }
    console.log(newAddress);
})