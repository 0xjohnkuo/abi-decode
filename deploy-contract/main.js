//load 'ethers' and 'fs'
const ethers = require('ethers');
const fs = require('fs');
const readYamlFile = require('read-yaml-file')
    
readYamlFile('input.yaml').then(async inputs => {
    let input = inputs["deploy-contract"]
    let account = new ethers.Wallet(input.privateKey)

    //Read bin and abi file to object; names of the solcjs-generated files renamed
    bytecode = fs.readFileSync(input.bin).toString();
    abi = JSON.parse(fs.readFileSync(input.abi).toString());
    
    // To connect to a custom URL:
    let url = input.rpc;
    let provider = new ethers.providers.JsonRpcProvider(url);

    // The connect method returns a new instance of the
    // Wallet connected to a provider
    account = account.connect(provider);
    
    const myContract = new ethers.ContractFactory(abi, bytecode, account);
    console.log("deploying...")
      // If your contract requires constructor args, you can specify them here
    const contract = await myContract.deploy();
    
    console.log(`address: ${contract.address}`);
    console.log(`hash: ${contract.deployTransaction.hash}`);
})