const PessoasNaSala = artifacts.require("PessoasNaSala");

module.exports = function(deployer) {
  deployer.deploy(PessoasNaSala);
};
