/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-ethers");
require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-etherscan");
const ALCHEMY_API_KEY = 'ysfjUHEvROcfGhz1cIzv1V8y4hP9h_8Q'
const PRIVATE_KEY = 'e542f566af36c25e2a32fd4d1838aa5ccad1f410873f2f73b1ac9ca726a300ea';
const ETHERSCAN_API_KEY = 'PZUMQUSEHH6VWG3UMYKS392C7KCIDXZRTH';
module.exports = {
  solidity: "0.8.0",
  networks:{
    rinkeby:{
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      gas: 5000000,
      chainId: 4,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
};
