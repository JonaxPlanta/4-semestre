class Animais {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }
}

// Alguns animais e seus devidos nomes e tipos
var bemTeVi = new Animais("Bem-Te-Vi", "Ave");
var queroQuero = new Animais("Quero-Quero", "Ave");
var papagaio = new Animais("Papagaio", "Ave");
var garca = new Animais("Garça", "Ave");
var cavalo = new Animais("Cavalo", "Mamífero");

// Animais tem um mamífero ('cavalo')
var animais = [bemTeVi, queroQuero, papagaio, garca, cavalo];
// Aves só tem aves
var aves = [bemTeVi, queroQuero, papagaio, garca];

// Esse aqui vai dar 'false'
var verificaAvesErrado = animais.every(animais => animais.tipo == "Ave");
console.log(verificaAvesErrado);
// Esse aqui vai dar 'true'
var verificaAvesCerto = aves.every(animais => animais.tipo == "Ave");
console.log(verificaAvesCerto);
