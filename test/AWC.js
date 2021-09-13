const { assert } = require('chai');
const { ethers } = require('hardhat');

describe('Alpha Wolf Card', () => {
    let NFT, nft, owner, address1, address2;
    const arr = ['aaa', 'bbb', 'ccc'];
    beforeEach(async()=>{
        NFT = await ethers.getContractFactory('AlphaWolfCard');
        nft = await NFT.deploy(arr);
        [owner, address1, address2, _] = await ethers.getSigners();
    });

    describe('deployment',  () => {
        it('deploy successfully', async () => {
            const address = await nft.address;
            assert.notEqual(address, '');
            assert.notEqual(address, 0x0);
        });
    });

    describe('minting',  () => {
        it('minted successfully', async () => {
            await nft.mint(address1.address);
            let tokenUri = await nft.tokenURI(0);
            let totalSupply = await nft.getTotalSupply();
            assert.equal(tokenUri, 'aaa');
            assert.equal(totalSupply, 1);  

            await nft.mint(address2.address);
            tokenUri = await nft.tokenURI(1);
            totalSupply = await nft.getTotalSupply();
            assert.equal(tokenUri, 'bbb');
            assert.equal(totalSupply, 2);
        });
    });
});