export default function ehMaiorDeIdade(campo) {
    const _dataNascimento = new Date(campo.value);
    
    if(!validaIdade(_dataNascimento)){
        campo.setCustomValidity('O usuário não é maior de idade')
    }
};

function validaIdade(data) {
    const _dataAtual = new Date();
    const _dataMais18 = new Date(data.getFullYear() + 18, data.getMonth(), data.getDate());

    return _dataAtual >= _dataMais18;
}
