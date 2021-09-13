const pinataApiKey = "a0f292b3a20c37129e4e";
const pinataSecretApiKey = "56923889a3807a83546b5bb9812b3c4900cf1fb9cd885ecc9d5f3f58a5844177";
let arg;
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const baseURI = 'https://gateway.pinata.cloud/ipfs/';
const pinFileToIPFS = async () => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
        let data = new FormData();
        data.append("file", fs.createReadStream(`./image/img1.png`));
        const res = await axios.post(url, data, {
            maxContentLength: "Infinity", 
            headers: {
            "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
            pinata_api_key: pinataApiKey, 
            pinata_secret_api_key: pinataSecretApiKey,
            },
        });

        console.log('res: ', res);
        
        const metaDataObj = {
            name: 'AW name',
            description: 'we are Wolfs',
            image: baseURI +  res.data.IpfsHash
        }
        const metadataRes = await axios.post(`https://api.pinata.cloud/pinning/pinJSONToIPFS`, metaDataObj, {
            maxContentLength: "Infinity", 
            headers: {
            pinata_api_key: pinataApiKey, 
            pinata_secret_api_key: pinataSecretApiKey,
            },
        });
        console.log('metadataRes: ', metadataRes);

        arg = baseURI + metadataRes.data.IpfsHash;
        // console.log(arg);
};

pinFileToIPFS();

