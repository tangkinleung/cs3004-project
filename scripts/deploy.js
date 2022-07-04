const hre = require("hardhat");
const fs = require('fs');

async function main() {
  // const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  // const nftMarketplace = await NFTMarketplace.deploy();
  // await nftMarketplace.deployed();
  // console.log("nftMarketplace deployed to:", nftMarketplace.address);

  // fs.writeFileSync('./config.js', `
  // export const marketplaceAddress = "${nftMarketplace.address}"
  // `)

  const SnkrChain = await hre.ethers.getContractFactory("SnkrChain");
  const snkrChain = await SnkrChain.deploy();
  await snkrChain.deployed();
  console.log("nftMarketplace deployed to:", snkrChain.address);

  fs.writeFileSync('./config.js', `
  export const marketplaceAddress = "${snkrChain.address}"
  `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });