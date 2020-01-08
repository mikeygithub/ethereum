pragma solidity ^0.4.12;

contract Modifier{}

contract Purchase {
    constructor()public{
        seller=msg.sender;
    }
    address public seller;
    modifier onlySeller(){
        require(msg.sender!=seller,"Only seller can sell ");
        _;
    }
    function fun() public onlySeller returns (uint256) {
        return 200;
    }
}
