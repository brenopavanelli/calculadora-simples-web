function inserirNumero(numero) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML += numero;
}

function limparResultado() {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
}

function deletarUltimoNumero() {
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = resultado.innerHTML.slice(0, -1);
}

function calcularResultado() {
    const resultado = document.querySelector('.resultado');
    document.querySelector('.resultado').innerHTML = eval(resultado.innerHTML);
}
