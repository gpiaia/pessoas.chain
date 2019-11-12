pragma solidity ^0.5.0;

contract PessoasNaSala {
	uint qtd;
	address owner;

	constructor() public {
		owner = msg.sender;
	}

	function checkin() public {
		require(msg.sender != owner, "Owner is not allowed to checkin");
		qtd = qtd + 1;
	}

	function getQtd() public view returns(uint){
		return qtd;
	}
}
