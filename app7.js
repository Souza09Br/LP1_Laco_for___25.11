const numero = Number(prompt("Digite um número: "));
let soma = 0;

for(i = 1; i <= numero; i++){
    cada = i+i;
    soma += cada;
}
console.log(soma);