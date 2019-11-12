const Web3 = require('web3');
var web3;
const fs = require('fs');

const contractJson = JSON.parse(fs.readFileSync('../blockchain/build/contracts/PessoasNaSala.json', 'utf8'));

const options = {
	transactionConfirmationBlocks: 1
}

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545", null, options));

const account = '0xa644cFBBe393383defDcD3Ea1AD1E968fe4A8ee9';
const defaults = {
	defaultAccount: account,
	defaultGasPrice: '10000000000',
	defaultGas: '4712388',
	gas: '4712388',
	gasPrice: '10000000000',
	from: account
}

var contract = new web3.eth.Contract(contractJson.abi, '0xaa39aFd7297e6345cb04FFB6CFFC183Ead221E69', defaults);

exports.checkin = async (req, res) => {
	await contract.methods.checkin().send()
		.on('transactionHash', hash => {
			console.log('My transation hash is ' + hash);
		})
		.on('confirmation', (number, receipt) => {
			console.log('confirmation number ' + number + ':');
		} )
		.on('receipt', receipt => {
			console.log(receipt);
			res.status(201).json({
				transationHash: receipt.transationHash
			});
		})
		.on('error', error =>{
			res.status(500).json({
				error: error
			});
		})
}

exports.getQtd = async (req, res) => {
	let qtd = await contract.methods.getQtd().call();

	res.status(201).json({
		qtd: qtd
	});
}
