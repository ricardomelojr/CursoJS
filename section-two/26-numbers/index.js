// IEEE 754-2008
let num1 = 10;
let num2 = 2.5;

console.log(num1.toString() + num2);
console.log(num1.toString(2));
console.log(Number.isInteger(num1));

num1 = 10.57865451;
console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));

let num3 = 0.7; 
let num4 = 0.1;
let result = num3 + num4;
result = parseFloat(result.toFixed(2));


console.log(result);
