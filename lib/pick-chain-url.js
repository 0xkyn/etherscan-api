const MAIN_API_URL = 'https://api.etherscan.io';
const OTHER_API_URL_MAP = {
  ropsten: 'https://api-ropsten.etherscan.io',
  kovan: 'https://api-kovan.etherscan.io',
  rinkeby: 'https://api-rinkeby.etherscan.io',
  goerli: 'https://api-goerli.etherscan.io',
  sepolia: 'https://api-sepolia.etherscan.io',
  homestead: 'https://api.etherscan.io',
  arbitrum: 'https://api.arbiscan.io',
  arbitrum_rinkeby: 'https://api-testnet.arbiscan.io',
  avalanche:'https://api.snowtrace.io',
  avalanche_fuji: 'https://api-testnet.snowtrace.io',
};

/**
 * gets  the correct urls of the backend 
 * @param {string} chainOrUrl
 * @returns Url of backend
 */
function pickChainUrl(chainOrUrl) {
    if (!chainOrUrl) {
        return MAIN_API_URL;
    }

    if (!OTHER_API_URL_MAP[chainOrUrl]) {
        return chainOrUrl;
    }

    return OTHER_API_URL_MAP[chainOrUrl];
}


module.exports = pickChainUrl;
