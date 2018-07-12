const iota = require('./iota');

var addressArray = [];

iota.api.getBalances(addressArray,100,(err,balance)=>{
    if (err) {
        console.error(err);
        return;
    }
    console.log(balance);
})