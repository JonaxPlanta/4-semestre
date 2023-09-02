class Aluno {
  constructor(nome, cpf, notaA = 0, notaB = 0) {
    this.nome = nome;
    this.cpf = cpf;
    this.a = notaA;
    this.b = notaB;
  }
}

// Alguns alunos
var jose = new Aluno("José", "096.885.346-87", 8.75, 9);
var joao = new Aluno("João", "873.674.019-08", 9.5, 10);
var maria = new Aluno("Maria", "453.847.849-54", null, 7.7);
var roberto = new Aluno("Roberto", "123.769.453-87", 5, 2.5);

// Vetor de alunos
var alunos = [jose, joao, maria, roberto];

// Vamos calcular a média deles e ver se eles passaram (note que foi usado um ternário para executar essa verificação e uma função para ficar o resultado em 2 casas decimais)
var mediaAlunos = alunos.map(alunos => ((alunos.a + alunos.b) /  2) >= 6 ? `Aluno: ${alunos.nome}; Estado: APROVADO; Média: ${((alunos.a + alunos.b) /  2).toFixed(2)}` : `Aluno: ${alunos.nome}; Estado: REPROVADO; média: ${((alunos.a + alunos.b) /  2).toFixed(2)}`);
console.log(mediaAlunos);