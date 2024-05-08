require("dotenv").config()
require("@nomicfoundation/hardhat-toolbox")
require("@nomicfoundation/hardhat-verify")
require("@nomicfoundation/hardhat-ethers")
require("hardhat-gas-reporter")
require("hardhat-deploy")
require("solidity-coverage")

const SEPOLIA_RPC_URL =
    process.env.SEPOLIA_RPC_URL || "https://eth-sepolia.g.alchemy.com/"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key"
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "key"

module.exports = {
    solidity: {
        compilers: [{ version: "0.8.8" }, { version: "0.6.6" }],
    },
    defaultNetwork: "hardhat",
    networks: {
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 11155111,
            blockConfirmations: 6,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            //accounts: Thanks hardhat!
            chainId: 31337,
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
    gasReporter: {
        enabled: true, // turn on/off gas reporter
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKETCAP_API_KEY,
        token: "MATIC",
    },
}
