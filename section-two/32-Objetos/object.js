const pessoa1 = {
    nome: 'Ricardo',
    sobrenome: 'Melo',
    idade: 24,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`a minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();

pessoa1.incrementaIdade();
pessoa1.fala();

pessoa1.incrementaIdade();
pessoa1.fala();

pessoa1.incrementaIdade();
pessoa1.fala();