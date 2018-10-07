var web3Instance = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/a40a265b039d483c99260493e718f673'));
// Ropsten: https://ropsten.infura.io/v3/a40a265b039d483c99260493e718f673
// Ropsten Contract: '0x935c0fbC74E98f9d9013e1f47A52BC46135aF058'
// const provider = (typeof window.web3 !== 'undefined') ?
//     window.web3.currentProvider :
//     new Web3.providers.HttpProvider("https://kovan.infura.io/");
//
// const web3Instance = new Web3(provider)

define(['text!../abi/Nomad.json'], function(abi) {
    var abiJson = JSON.parse(abi);
    var contract = web3Instance.eth.contract(abiJson.abi)
    var NomadContract = contract.at('0x57dbc50c42ca6af378c977eb39886d57c17098af');
    return NomadContract;
});
