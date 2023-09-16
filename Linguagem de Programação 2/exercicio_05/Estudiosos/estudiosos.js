class Ciencia {
  constructor(nome, areaDeEstudo) {
    this.nome = nome;
    this.areaDeEstudo = areaDeEstudo;
  }
  apresentar() {
    return `A matéria ${this.nome} deriva da área de ${this.areaDeEstudo}.`;
  }
}

class Matematica extends Ciencia {
  constructor(nome, estudioso, estudoFamoso, formula) {
    super(nome)
    this.estudioso = estudioso;
    this.estudoFamoso = estudoFamoso;
    this.formula = formula;
  }
  calcular() {
    return `O estudioso ${this.estudioso} da área de ${this.nome} é conhecido por seu conhecido estudo: "${this.estudoFamoso}" que diz que: "${this.formula}".`
  }
}

class Fisica extends Ciencia {
  constructor(nome, estudioso, estudoFamoso, teoria) {
    super(nome)
    this.estudioso = estudioso;
    this.estudoFamoso = estudoFamoso;
    this.teoria = teoria;
  }
  teorizar() {
    return `O estudioso ${this.estudioso} da área de ${this.nome} é conhecido por seu conhecido estudo: "${this.estudoFamoso}" que diz que: "${this.teoria}".`
  }
}

class Filosofia extends Ciencia {
  constructor(nome, estudioso, estudoFamoso, pensamento) {
    super(nome);
    this.estudioso = estudioso;
    this.estudoFamoso = estudoFamoso;
    this.pensamento = pensamento;
  }
  pensar() {
    return `O estudioso ${this.estudioso} da área de ${this.nome} é conhecido por seu conhecido estudo: "${this.estudoFamoso}" que diz que: "${this.pensamento}".`
  }
}

const estudiosos = [
  new Matematica("Matemática", "Pitágoras", "Teorema de Pitágoras", "Em um triângulo retângulo, a soma do quadrado dos catetos resulta no quadrado da hipotenusa."),
  new Fisica("Física", "Isaac Newton", "Lei da Gravitação Universal", "Se dois corpos possuem massa, estes estarão submetidos a uma força da atração mútual que é proporcional às massas e inversamente proporcional ao quadrado da distância entre os centros de seus centros de gravidades."),
  new Filosofia("Filosofia", "Platão", "Método Dialético", "A verdade pode ser alcançada por meio de discussões filosóficas.")
]

for (const estudioso of estudiosos) {
  console.log(`O estudioso ${estudioso.estudioso} estuda ${estudioso.nome}.`);
}

var pitagoras = estudiosos[0];
console.log(pitagoras.calcular());

var newton = estudiosos[1];
console.log(newton.teorizar());

var platao = estudiosos[2];
console.log(platao.pensar());

