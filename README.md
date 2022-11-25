# ether utility

## installation

1. copy repository

`git clone https://github.com/0xjohnkuo/abi-decode`

2. install package at local

`cd abi-decode && npm install`

3. edit input.yaml, and paste in the contract abi
contract abi & inputs. 
ABI can be found at cronoscan, for example, the "Contract ABI" section of https://cronoscan.com/address/0x8d13982c702fe7c6537529986df67dabeafc4c19#code

4. start decoding

`npm run decode`

5. result example
```
function name: zapIn
input#0: _toTokenOrLp, type: address
input#1: _outputAmountMin, type: uint256
--- result ---
input#0: 0xbf62c67eA509E86F07c8c69d0286C0636C50270b
input#1: 63454539553771227830
```

6. edit input.yaml, and paste in tx data, account private key, and destination contract. e.g. ferro swap contract

7. start broadcasting tx 

`npm run broadcast`

8. result example
```
using address 0xd9f5e45D713c79049239E65FFE6AB8bE02e74719 to sign the transaction
https://cronoscan.com/tx/0x3ecc8b0c6423b9d93e7c3e7a59cae6186ef6b0d9df4d51f5800a0b9468f44e80
```

