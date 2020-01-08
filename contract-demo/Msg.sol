pragma solidity ^0.4.16;

contract Msg{
    function getaddress() public view returns (address) {
        return msg.sender;
    }
    function getmsg() public view returns (this){
        return this;
    }
}
