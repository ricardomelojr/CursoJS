let umaString = "Um \"texto\"";
console.log(umaString);
//           01234567 
umaString = "Um texto";


console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('texto'));

console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/x/));
console.log(umaString.replace('Um', 'Outra'));

umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.length);
console.log(umaString.slice(30));
console.log(umaString.substring(umaString.length - 5));
console.log(umaString.split(' '));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
