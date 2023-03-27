/*
Primitivos (imutáveis) - String, number, boolean, undefined, null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Valores passados por referência
*/

let a = [1, 2, 3];
let b = a;
let c = [...a]; // cópia

console.log(a, b);

a.push(4)
console.log(a, b);

b.pop();
console.log(a, b);

a.pop();
console.log(a, b, c);



