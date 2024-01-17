const { ethers } = require("ethers");

function generateETHKey () {
    const wallet = ethers.Wallet.createRandom();
    console.log("New Private Key:", wallet.privateKey);
}

generateETHKey()