const hre = require("hardhat");
const fs = require('fs');

async function main() {

  const SnkrChain = await hre.ethers.getContractFactory("SnkrChain");
  const snkrChain = await SnkrChain.deploy();
  await snkrChain.deployed();
  console.log("SnkrChain deployed to:", snkrChain.address);

  fs.writeFileSync('./config.js', `
  export const snkrChainAddress = "${snkrChain.address}"
  `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });