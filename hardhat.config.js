require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


const SEPOLIA_URL = process.env.SEPOLIA_URL;
const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
      chainId: 11155111,
      blockConfirmations: 2,
    },
  },
};
