pragma solidity >= 0.5.1;

contract PessoasNaSala{
    uint quantidadeDePessoas;
    address criadorDoContrato;

    constructor() public{
        criadorDoContrato = msg.sender;
    }

    function checkin() public {
        require(msg.sender != criadorDoContrato);
        quantidadeDePessoas = quantidadeDePessoas + 1;
    }

    function quantidade() public view returns(uint) {
        return quantidadeDePessoas;
    }
}
