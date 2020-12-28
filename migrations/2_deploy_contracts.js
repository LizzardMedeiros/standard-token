const CONTRACT = artifacts.require("RBT");

module.exports = function(deployer) {
  deployer.deploy(CONTRACT);
};
