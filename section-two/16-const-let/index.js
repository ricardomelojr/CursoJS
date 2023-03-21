/*
    Luiz Otávio Miranda tem 30 anos, pesa 84kg tem 1.8 de altura e seu IMC é de 25.9259.
    Ricardo Melo Jr nasceu em 1989.
*/

const nome  = 'Ricardo';
const sobrenome = 'Melo Jr';
const idade = 34;
const peso = 100;
const altura = 1.78;
let imc; /* peso / (altura * altura) */
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2023 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso,'kg');console.log(`tem, ${altura}, de altura e seu IMC é de, ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);


