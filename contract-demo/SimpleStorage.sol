pragma solidity ^0.4.22;
contract SimpleStorage {
    uint storageData;
    function set(uint x ) public{
        storageData = x;
    }
    function get() public view returns(uint) {
        return storageData;
    }
    function add(uint a, uint b) public pure returns(uint sum, uint orgina){
        return (a+b,a);
    }
}
