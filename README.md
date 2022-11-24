# abi-decode

## installation

1. copy repository

`git clone https://github.com/0xjohnkuo/abi-decode`

2. install package at local

`cd abi-decode && npm install`

3. edit input.yaml, and paste in the contract abi
contract abi & inputs. 
ABI can be found at cronoscan, for example, the "Contract ABI" section of https://cronoscan.com/address/0x8d13982c702fe7c6537529986df67dabeafc4c19#code

4. start decoding

`npm start`

5. result example
```
input#0: _toTokenOrLp, type: address
input#1: _outputAmountMin, type: uint256
--- result ---
input#0: 0xbf62c67eA509E86F07c8c69d0286C0636C50270b
input#1: 63454539553771227830
```
