var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"))
var _from = web3.eth.accounts[0];
var _to = web3.eth.accounts[1];
// var _to = "0xa7e2037558729dc86932867445c706157ef77190";

var _value = 50000;

console.log("Account 1 :"+web3.eth.getBalance(web3.eth.accounts[0]));
console.log("Account 2 :"+web3.eth.getBalance(web3.eth.accounts[1]));

web3.personal.unlockAccount(web3.eth.accounts[0],'123456');

web3.eth.sendTransaction({
    from:_from,
    to: _to,
    value: _value
},(err,res)=>{
    if (err) {
        console.log("Error:"+err)
    }else {
        console.log("Success:"+res)
    }
})

console.log("Account 1 :"+web3.eth.getBalance(web3.eth.accounts[0]));
console.log("Account 2 :"+web3.eth.getBalance(web3.eth.accounts[1]));

// 静默启动eth,personal的api模块
// nohup geth --datadir . --networkid 1 --rpc --rpcapi "eth,personal" 2>output.log &
