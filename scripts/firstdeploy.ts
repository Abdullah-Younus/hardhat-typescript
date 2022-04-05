import { ethers } from "hardhat";
import { First__factory } from "../typechain";

async function main() {
    const First: First__factory = await ethers.getContractFactory("First");
}
main().catch((error) => {
    console.log(error);
    process.exitCode = 1;

});
