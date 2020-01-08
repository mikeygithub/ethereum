pragma solidity ^0.4.0;
contract Coins {
    mapping (address=>uint256)  public balances;
    function update(uint256 amount) public{
        balances[msg.sender] = amount;
    }
    function getBalnce(address addr) public view returns(uint256){
        return balances[addr];
    }
}

contract Test{
    function fun() public returns (uint) {
        Coins coins = new Coins();
        coins.update(100);
        return coins.balances(address(this));
    }
}
