const { ethers } = require("hardhat")

async function main() {
    const fundMeDeploy = await deployments.get("FundMe")
    fundMe = await ethers.getContractAt("FundMe", fundMeDeploy.address)

    console.log(`Got contract FundMe at ${fundMe.address}`)
    console.log("Funding contract...")
    const transactionResponse = await fundMe.fund({
        value: ethers.parseEther("0.1"),
    })
    await transactionResponse.wait()
    console.log("Funded!")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
