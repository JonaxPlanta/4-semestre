class Alimentos {
  constructor(nome, tipo, sabor) {
    this.nome = nome;
    this.tipo = tipo;
    this.sabor = sabor;
  }
}

// Vamos criar alguns alimentos
var vinho = new Alimentos("Vinho", "Bebida", "Amargo")
var queijo = new Alimentos("Queijo", "Comida", "Azedo")
var arroz = new Alimentos("Arroz", "Comida", "Salgado")
var suco = new Alimentos("Suco", "Bebida", "Doce")
var cafe = new Alimentos("Café", "Bebida", "Amargo")

// Vamos criar um vetor de aliemtos
var alimentos = [vinho, queijo, arroz, suco, cafe];

// Agora vamos filtrar alguns elementos aqui
var comidas = alimentos.filter(alimento => alimento.tipo == "Comida");
var bebidas = alimentos.filter(alimento => alimento.tipo == "Bebida");
var alimentosAmargos = alimentos.filter(alimento => alimento.sabor == "Amargo");
console.log(comidas, bebidas, alimentosAmargos);