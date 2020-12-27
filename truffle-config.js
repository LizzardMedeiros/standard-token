const HDWalletProvider = require('truffle-hdwallet-provider');
require('dotenv/config');

const GAS_LIMIT = 4000000;
const GAS_PRICE = 40000000000;

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "5777", // Match any network id
      gasPrice: GAS_PRICE,
      gas: GAS_LIMIT
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
        );
      },
      network_id: '3',
      gas: GAS_LIMIT,
    },
    mainnet: {
      provider: function() {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
        );
      },
      network_id: '1',
      gasPrice: GAS_PRICE,
      gas: GAS_LIMIT
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.ES_API_KEY,
  },
  compilers: {
    solc: {
      version: "^0.6.0",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
};
