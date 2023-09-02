class Frutas {
  constructor(nome, cor, formato) {
    this.nome = nome;
    this.cor = cor;
    this.formato = formato;
  }
}

// Algumas frutas
var limao = new Frutas("Limão", "Verde", "Redondo");
var uva = new Frutas("Uva", "Roxo", "Redondo");
var carambola = new Frutas("Carambola", "Amarelo", "Estrela");
var maca = new Frutas("Maçã", "Vermelho", "Redondo");

// Vetor com as frutas
var frutas = [limao, uva, carambola, maca];

// Vamos organizar em ordem alfabética
var organizarFrutas = frutas.sort(function(a, b) {
  return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
  // OU
  // if (a.nome > b. nome) {
  //   return 1
  // } else if (a.nome > b.nome) {
  //   return -1
  // } else if (a.nome == b.nome) {
  //   return 0
  // }
});
console.log(organizarFrutas);

// Vamos organizar por número de letras (esse eu fiz sozinho hein...)
var organizarLetras = frutas.sort(function(a, b) {
  return a.nome.length < b.nome.length ? -1 : a.nome.length > b.nome.length ? 1 : 0;
  // OU
  // if (a.nome.length > b. nome.length) {
  //   return 1
  // } else if (a.nome.length > b.nome.length) {
  //   return -1
  // } else if (a.nome.length == b.nome.length) {
  //   return 0
  // }
});
console.log(organizarLetras);