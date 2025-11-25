
/*de 1 a 10 e if para apenas os pares*/

/*for(let cont = 1; cont<=10; cont++){
    if(cont %2 === 0){
    console.log(cont);
}}
*/

let par = 0
let impar = 0
let lista;

for(let num = 1; num<=10; num++){
    lista = Number(prompt("Digite um número: "));

if(lista %2 === 0){
    par++;
}else{
    impar++;
}}
console.log(`A quantidade de números par é de ${par}.`);
console.log(`A quantidade de números impar é ${impar}`);