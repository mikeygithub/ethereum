pragma solidity ^0.4.12;

contract Fix {
    uint256 someVariable;
    uint256[] public data;
    function fun() public  {
        uint256[] x;
        x.push(666);
        data=x;
    }
}
