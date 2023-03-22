function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Ricardo');
console.log(variavel);

function soma(x, y) {
    return x + y;
}

const resultado = soma(2, 5);

console.log(resultado);


// variável recebendo função
const raiz = function (n) {
    return Math.sqrt(n);
};

console.log(raiz(9));

// arrow function
const raiz_q = (n) => {
    return Math.sqrt(n);
};

console.log(raiz_q(9));
