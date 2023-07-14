export default function ehUmCpf(campo){
    const _cpf = campo.value.replace(/\.|-/g, "");
    
    if (validaNumerosRepetidos(_cpf) || validaPrimeiroDigito(_cpf) || validaSegundoDigito(_cpf)){
        console.log('Esse cpf não existe!');
    } else {
        console.log('Esse cpf existe!')
    }
};

function validaNumerosRepetidos(cpf){
    const _numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ];

    return _numerosRepetidos.includes(cpf);
};

function validaPrimeiroDigito(cpf){
    let _soma = 0;
    let _multiplicador = 10;

    for (let i = 0; i < 9; i++){
        _soma += cpf[i] * _multiplicador;
        _multiplicador--;
    }

    _soma = (_soma * 10) % 11;

    if (_soma == 10 || _soma == 11){
        _soma = 0;
    }

    return _soma != cpf[9];
};

function validaSegundoDigito(cpf){
    let _soma = 0;
    let _multiplicador = 11;

    for (let i = 0; i < 10; i++){
        _soma += cpf[i] * _multiplicador;
        _multiplicador--;
    }

    _soma = (_soma * 10) % 11;

    if (_soma == 10 || _soma == 11){
        _soma = 0;
    }

    return _soma != cpf[10];
};
