pragma solidity ^0.4.12;

contract Array {
    uint256[] public data1;
    uint256[] public data2;

    function append1() public {
        append(data1);
    }

    function append2() public {
        append(data2);
    }

    function append(uint256[] storage data) internal{
        data.push(666);
    }
}
