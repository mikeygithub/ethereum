pragma solidity ^0.4.22;

contract CoinDemo {
    mapping(address=>uint) public balances;
    constructor(uint initalSupply) public{
        balances[msg.sender] = initalSupply;
    }
    function send(address receiver,uint amount) public returns(bool success){
        require(balances[msg.sender] >= amount);
        require(balances[receiver]+amount>=balances[receiver]);
        balances[msg.sender]-=amount;
        balances[receiver]+=amount;
        return true;
    }
}
