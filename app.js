alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 4;
console.log(numeroSecreto);
let chute = prompt('Escolha um numero entre 1 e 10');


if (numeroSecreto == chute){
    console.log(`Isso ai! você acertou o numero secreto (${numeroSecreto})`);
} else{
    alert ('Você errou :(');
}