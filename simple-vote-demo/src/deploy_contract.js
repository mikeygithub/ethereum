//编译合约
Web3 = require('web3')
solc = require('solc')
fs = require('fs');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log("Accounts:"+web3.eth.accounts);
code = fs.readFileSync('/home/mikey/DATA/DevTools/ETH_DATA/simple-vote-demo/src/Voting.sol','utf8').toString()
compiledCode = solc.compile(code,1)
//部署合约
abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface)
console.log("abi:"+JSON.stringify(abiDefinition))
VotingContract = web3.eth.contract(abiDefinition)
byteCode = compiledCode.contracts[':Voting'].bytecode
deployedContract = VotingContract.new(['Alice','Bob','Cary'],{data: byteCode, from:web3.eth.accounts[0], gas: 4700000})
contractInstance = VotingContract.at(deployedContract.address)
console.log("contract address :"+deployedContract.address)
