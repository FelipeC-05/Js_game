alert('Boas vindas ao jogo do número secreto');
let numeroSecreto= parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


while (chute != numeroSecreto){
    chute =prompt('Escolha um numero entre 1 e 100');
    if (numeroSecreto == chute){
        break;
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
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! você acertou o numero secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}.`)
 