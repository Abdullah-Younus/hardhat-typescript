import { ContractTransaction } from "ethers";
import { ethers } from "hardhat";
import { Greeter, Greeter__factory } from '../typechain';
async function main() {
    const Greeter: Greeter__factory = await ethers.getContractFactory("Greeter");
    const greeter: Greeter = await Greeter.attach("0x724ce47AC0bAE9471c108e8DF9D83bF2Fdc87D1A");



    console.log("Greeter deployed at :", greeter.address);

    const result: ContractTransaction = await greeter.setGreeting("Hello Bootcampers");
    console.log('The Result is :', result);
}
main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});