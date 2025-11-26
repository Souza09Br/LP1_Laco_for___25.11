let numero = Number(prompt("Digite um número: "));
let soma = 0;

for(let i = 2; i <= numero; i++){
    if(i %2 ===0){
        soma = soma + i;
    }
}
console.log(`A soma dos números pares de  até ${numero} é: ${soma}`);


