const { ethers, getNamedAccounts, network } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")
const { assert } = require("chai")

developmentChains.includes(network.name)
    ? describe.skip
    : describe("FundMe", async function () {
          let fundMe
          const sendValue = ethers.parseEther("1") // 1 ETH

          beforeEach(async function () {
              const fundMeDeploy = await deployments.get("FundMe")
              fundMe = await ethers.getContractAt(
                  "FundMe",
                  fundMeDeploy.address
              )
          })

          it("allows people to fund and withdraw", async function () {
              await fundMe.fund({ value: sendValue })
              await fundMe.withdraw()
              const endingBalance = fundMe.provider.getBalance(fundMe.target)
              assert.equal(endingBalance.toString(), "0")
          })
      })
