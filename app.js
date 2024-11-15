alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 4;
console.log(numeroSecreto);
let chute;
let tentativas = 1;


while (chute != numeroSecreto){
    chute =prompt('Escolha um numero entre 1 e 10');
    if (numeroSecreto == chute){
        alert(`Isso ai! você acertou o numero secreto (${numeroSecreto}) com ${tentativas} tentativas`);
    } else{
        if(chute > numeroSecreto){
            alert(`o numero secreto é menor que ${chute}`);
        }
        else{
            alert(`o numero secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}