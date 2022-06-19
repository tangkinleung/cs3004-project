var SnkrChain = artifacts.require("./SnkrChain.sol");

module.exports = function(deployer) {
  deployer.deploy(SnkrChain);
};