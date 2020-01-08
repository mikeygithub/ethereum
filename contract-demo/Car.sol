pragma solidity ^0.4.22;

contract Car {
    string brand;
    uint price;
    constructor(string initBrand, uint initPrice){
        brand=initBrand;
        price=initPrice;
    }
    function   setBrand(string  newBrand) public{
        brand = newBrand;
    }
    function setPrice(uint newPrice)  public{
        price = newPrice;
    }
}
