export default function ehMaiorDeIdade(campo) {
    const _dataNascimento = new Date(campo.value);
    validaIdade(_dataNascimento);

    console.log(validaIdade(_dataNascimento));
};

function validaIdade(data) {
    const _dataAtual = new Date();
    const _dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCDate(), data.getUTCDate());

    return _dataAtual >= _dataMais18;
}
