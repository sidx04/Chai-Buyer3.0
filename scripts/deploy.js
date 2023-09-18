const { ethers } = require("hardhat");

async function main() {
  const Chai = await ethers.getContractFactory("Chai"); //fetching bytecode and ABI
  const chai = await Chai.deploy(); //creating an instance of our smart contract

  console.log("Deployed contract address:", `${chai.target}`);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
