Web3 = require('web3');
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
// web3.eth.getBlock(1, function(err,res){
// if(!err)
//     console.log(JSON.stringify(res));
// else
// console.error(err);
// });
// console.log(web3.eth.accounts);
// console.log(web3.eth.getBalance(web3.eth.accounts[0]));
// console.log(web3.eth.getBalance(web3.eth.accounts[1]));
// console.log(web3.fromWei(12345678987654321234567,'ether'));
// console.log(web3.isAddress("0xbcaf3765a1a607231be1bbf96290412154dd6e30"))
// web3.eth.getGasPrice((err,res)=>console.log(res))
// web3.eth.getBolck(25);


// console.log(web3.eth.estimateGas({from:web3.eth.accounts[0],to:web3.eth.accounts[1],vlaue:20000000000000000000000,data:'0x123456123456789012'}));
web3.personal.unlockAccount(web3.eth.accounts[0])
console.log(web3.eth.sendTransaction({from:web3.eth.accounts[0],to:web3.eth.accounts[1],value:200000}));
