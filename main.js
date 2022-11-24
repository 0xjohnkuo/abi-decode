const { ethers } = require("ethers");
const readYamlFile = require('read-yaml-file')

readYamlFile('input.yaml').then(data => {
    let found = false
    console.log(`function name: ${data.function}`)
    data.abi.forEach(val=>{
        if (val.name == data.function && val.type == "function") {
            val.inputs.forEach((input, idx) =>{
                console.log(`input#${idx}: ${input.name}, type: ${input.type}`)

            })
            found = true
            return
        }
    })
    if (!found){
        console.error(`cannot find ${data.function} in the provided abi`)
        return
    }
    console.log("--- result ---")
    const iface = new ethers.utils.Interface(data.abi)
    let result = iface.decodeFunctionData(data.function, data.input)
    // console.log(data.abi[])
    result.forEach((val, idx)=>{
        console.log(`input#${idx}: ${val}`)
    })
})
