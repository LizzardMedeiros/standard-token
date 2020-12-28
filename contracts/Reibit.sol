// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
pragma solidity ^0.6.0;

contract RBT is ERC20, Ownable {
  constructor() public ERC20("Reibit", "RBT") {
    _mint(msg.sender, 210000000 * 10 ** uint256(decimals()));
  }
}
