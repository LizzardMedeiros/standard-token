// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
pragma solidity ^0.6.0;

contract LZT is ERC20, Ownable {
  constructor() public ERC20("Lizzard Token", "LZT") {
    _mint(msg.sender, 1000000000 * 10 ** uint256(decimals()));
  }
}
