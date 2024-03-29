// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const FlashLoan = await hre.ethers.getContractFactory("FlashLoan");

  //https://docs.aave.com/developers/deployed-contracts/v3-testnet-addresses
  const flashLoan = await FlashLoan.deploy(
    "0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A"
  );
  try {
    const response = await flashLoan.deployed();
    console.log("Flash loan contract deployed: ", flashLoan.address);
  } catch (error) {
    console.log("error: ", error);
  }

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
