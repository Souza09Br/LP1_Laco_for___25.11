NumberMaquina = 5;
for(i=1; i<=7; i++){
    let num = Number(prompt("Você tem 7 chances para acertar o número: "));

if(num === NumberMaquina){
    console.log("Você acertou o número.");
    break;
}else if(num > NumberMaquina ){
    console.log("É um número menor do que o escolhido.");
}else{
    console.log("O número é maior.")
    }
}