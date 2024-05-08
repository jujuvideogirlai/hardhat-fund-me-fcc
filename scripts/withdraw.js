const { ethers, getNamedAccounts } = require("hardhat")

async function main() {
    const fundMeDeploy = await deployments.get("FundMe")
    fundMe = await ethers.getContractAt("FundMe", fundMeDeploy.address)

    console.log(`Got contract FundMe at ${fundMe.target}`)
    console.log("Withdrawing from contract...")
    const transactionResponse = await fundMe.withdraw()
    await transactionResponse.wait()
    console.log("Got it back!")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
