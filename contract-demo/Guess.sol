pragma solidity ^0.4.12;

contract Guess{
    uint256 luckyNumber = 52;
    struct Guesses{
        address player;
        uint number;
    }
    Guesses[] public guessHistory;

    function guess(uint num) public payable{
        Guesses newGuess;
        newGuess.player = msg.sender;
        newGuess.number = num;
        guessHistory.push(newGuess);
        if(num == luckyNumber){
            msg.sender.transfer(msg.value * 2);
        }
    }
}
