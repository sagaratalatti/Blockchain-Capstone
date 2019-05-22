// migrating the appropriate contracts
const SquareVerifier = artifacts.require("../contracts/Verifier.sol");
const SolnSquareVerifier = artifacts.require("../contracts/SolnSquareVerifier.sol");

module.exports = function(deployer) {
  deployer.deploy(SquareVerifier).then( () => {
    return deployer.deploy(SolnSquareVerifier, SquareVerifier.address);
  });
};
