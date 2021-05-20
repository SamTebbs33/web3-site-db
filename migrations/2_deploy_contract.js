const Website = artifacts.require("Website");

module.exports = function(deployer) {
    deployer.deploy(Website);
};
