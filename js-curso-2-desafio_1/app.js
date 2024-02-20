let titulo = document.querySelector("h1");

titulo.innerHTML = "Hora do Desafio.";

function pressionarConsole() {

    console.log("Olá mundo!");
}

function exibirAmor() {

    alert("Eu amo JS.");
}

function perguntarCidade() {

    let cidade = prompt("Insira o nome de uma cidade do Brasil.");
    alert(`Estive em ${cidade} e lembrei de você.`);
}

function perguntarNumeros() {

    let quantidade = 1;
    let soma = 1;
    while(quantidade <= 2){

        let numero = parseInt(prompt("Insira um número."));
        soma = soma + numero;
        quantidade++
    }

    alert(`O resultado da soma entre esses dois números é ${soma}`);
}

let linguagensDeProgramacao = ['Phyton', 'Java', 'JavaScript'];
let ultimoElemento = linguagensDeProgramacao[linguagensDeProgramacao.lenght - 1];
console.log(ultimoElemento);