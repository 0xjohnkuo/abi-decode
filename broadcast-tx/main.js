const { ethers } = require("ethers");
const readYamlFile = require('read-yaml-file')

readYamlFile('input.yaml').then(async inputs => {
    let input = inputs["broadcast-tx"]
    let account = new ethers.Wallet(input.privateKey)
    console.log(`using address ${account.address} to sign the transaction`)

    tx = {
        data: input.data,
        to: input.to,
        gasLimit: input.gasLimit
    }
    // Signing a transaction
    await account.signTransaction(tx)

    // To connect to a custom URL:
    let url = "https://evm.cronos.org";
    let customHttpProvider = new ethers.providers.JsonRpcProvider(url);

    // The connect method returns a new instance of the
    // Wallet connected to a provider
    let wallet = account.connect(customHttpProvider)

    // Sending tx
    let res = await wallet.sendTransaction(tx)
    console.log(`https://cronoscan.com/tx/${res.hash}`)
    // {
    //   accessList: [],
    //   chainId: 1337,
    //   confirmations: 0,
    //   data: '0x',
    //   from: '0x4342bf02BDe4A21Da695E8e82D3d79E85F3dFAD1',
    //   gasLimit: { BigNumber: "21000" },
    //   gasPrice: null,
    //   hash: '0x02689501b27c23268ea7e1dc5bb1c2236043b62fcc701d4e146ac381ebfa065a',
    //   maxFeePerGas: { BigNumber: "1566432088" },
    //   maxPriorityFeePerGas: { BigNumber: "1500000000" },
    //   nonce: 5,
    //   r: '0xab08278ee22ddf886f8c654cbe6ac44c10eda2a7d80c23bff70d0b818deaf94d',
    //   s: '0x3ab7c00b050209bfaf0247ef64ec8e48bb413bd49694b1832e1aefe2d8607594',
    //   to: '0x8ba1f109551bD432803012645Ac136ddd64DBA72',
    //   type: 2,
    //   v: 1,
    //   value: { BigNumber: "1000000000000000000" },
    //   wait: [Function (anonymous)]
    // }

})