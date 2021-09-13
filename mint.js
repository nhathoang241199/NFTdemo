import AlphaWolfCard from './artifacts/contracts/AWC.sol/AlphaWolfCard.json';
let web3 = new Web3(window.ethereum);
accounts = await web3.eth.getAccounts();
const AWCard = new web3.eth.Contract(
    AlphaWolfCard.abi,
    '0x84973db9A287B0a9d19dd7E28D9e770004511440'
);

const res = await AWCard.mint(accounts, 'https://gateway.pinata.cloud/ipfs/QmU2SPHJWgeaPexY19fr9EpTiDrHmrkHBzmyvEfyA3S5hW');

console.log('res: ', res);

