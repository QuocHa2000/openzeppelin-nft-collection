const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const Tree = await ethers.getContractFactory("TreeCollection");
  const tree = await Tree.deploy("Tree Collection", "TCL");

  await tree.deployed();
  console.log("Deployed contract address : ", tree.address);

  await tree.mint(
    "https://ipfs.io/ipfs/QmaiKAmd4uvp5je9Ca7dLskD2tmesQ9ucYdNPgRhx9VQhD"
  );

  console.log("Oke !");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
