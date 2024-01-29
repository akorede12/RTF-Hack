require('@nomicfoundation/hardhat-toolbox')
require("@nomicfoundation/hardhat-ethers")
require("dotenv").config();

const PEGASUS_URL = process.env.PEGASUS_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  defaultNetwork: 'pegasus',
  networks: {
    pegasus: {
      url: PEGASUS_URL,
      accounts: [PRIVATE_KEY]
    },
  },
  solidity: {
    version: '0.8.19',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
}
