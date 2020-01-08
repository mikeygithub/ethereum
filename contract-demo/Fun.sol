pragma solidity ^0.4.12;
contract demo1{
    uint256 a;
    function fun1() internal{}
}
contract demo2 is demo1{
    function fun2() public{
        fun1();
    }
}
