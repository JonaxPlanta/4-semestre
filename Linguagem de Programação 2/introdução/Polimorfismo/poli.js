// Criando uma classe base
class Animal {
  constructor(nome, cor) {
    this.nome = nome;
    this.cor = cor;
  }
  falar() {
    return `Olá, meu nome é ${this.nome}.`;
  }
}

// Criando uma classe derivada de Animal
class Cachorro extends Animal {
  constructor(nome, cor, raça) {
    super(nome, cor);
    this.raça = raça;
  }
  latir() {
    return `Au Au!`;
  }
}

// Criando uma classe derivada de Animal
class Gato extends Animal {
  constructor(nome, cor, raça) {
    super(nome, cor);
    this.raça = raça;
  }
  miar() {
    return `Miau!`;
  }
}

// Criando um array de animais
const animais = [
  new Cachorro("Rex", "Marrom", "Pastor Alemão"),
  new Gato("Mia", "Preto", "Siamês"), 
]

//Percorrendo o array e imprimindo o nome e a cor de cada animal
for (const animal of animais) {
  console.log(`O animal "${animal.nome}" é ${animal.cor}.`);
}

// Chamando o método "falar()" em cada animal
for (const animal of animais) {
  console.log(animal.falar());
}

// Chamando o método "latir()" no cachorro
const cachorro = animais[0];
console.log(cachorro.latir());

// Chamando o método "miar()" no gato
const gato = animais[1];
console.log(gato.miar());