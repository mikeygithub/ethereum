pragma solidity ^0.4.22;
contract Voting {
    mapping (bytes32 => uint8) public votesReceived;
    bytes32[] public candidateList;
    constructor(bytes32[] candidateNames) public {
        candidateList = candidateNames;
    }
    //查询获取的投票数目
    function totalVotesFor(bytes32 candidate) view public
    returns (uint8) {
        require(validCandidate(candidate));
        return votesReceived[candidate];
    }
    //投票
    function voteForCandidate(bytes32 candidate) public {
        require(validCandidate(candidate));
        votesReceived[candidate] += 1;
    }
    //验证是否已经投票
    function validCandidate(bytes32 candidate) view public
    returns (bool) {
        for(uint i = 0; i < candidateList.length; i++) {
            if (candidateList[i] == candidate) {
                return true;}
        }
        return false;
    }
}
