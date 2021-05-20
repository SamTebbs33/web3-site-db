// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Website {

    mapping (address => string) websites;

    function setWebsite(string calldata website) public {
        websites[msg.sender] = website;
    }

    function getWebsite(address addr) view public returns (string memory) {
        return websites[addr];
    }

}
