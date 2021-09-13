const { ethers } = require("hardhat");

async function main(){
    NFT = await ethers.getContractFactory('AlphaWolfCards');
    nft = await NFT.deploy();
    await nft.deployed();
    console.log('nft deploy to: ', nft.address); 
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })