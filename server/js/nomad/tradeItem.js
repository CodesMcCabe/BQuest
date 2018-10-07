// var abi = require('./MarketPlace.json');
// var Web3 = require('web3');
//
// var web3Instance = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
//
// var abiJson = JSON.parse(abi);
// var contract = web3Instance.eth.contract(abiJson)
// Contract address much change upon network change
// Ropsten: '0x935c0fbC74E98f9d9013e1f47A52BC46135aF058'
// var NomadContract = contract.at('0x935c0fbC74E98f9d9013e1f47A52BC46135aF058');
//
// const tradeItem = (req, res) => {
//     Invoke nomad contract and call the tradeItem Function\
//     sign the transaction using the private key
//     NomadContract.tradeItem(1, '0x395fb1b3da785a720B478Bcc838E1647c413afB5').send({
//         from: '0xe017a8729C607f5E5354A422c660D5D716E04634'
//     });
// };
//
// module.exports = tradeItem;
