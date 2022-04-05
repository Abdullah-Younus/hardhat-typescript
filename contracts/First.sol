pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract First {
    constructor() {}

    function getResult() public pure returns (uint256) {
        uint256 a = 1;
        uint256 b = 2;
        uint256 result = a + b;
        return result;
    }
}
