const Tether = artifacts.require('Tether');
const Reward = artifacts.require('Reward');
const DeBank = artifacts.require('DeBank');

module.exports = async function (deployer) {
    await deployer.deploy(Tether);
    await deployer.deploy(Reward);
    await deployer.deploy(DeBank);
};
