import alunos from './dados/alunos.json';

// Crie uma variável, que será responsável por
// armazenar a quantidade de alunos de SP
let quantidadeDeAlunosDeSp = 0;
let quantidadeDeAlunosDaCidadeSantoAndre = 0;

// Crie uma variável, que será responsável por
// armazenar a quantidade de mulheres (indiferente do estado)
let quantidadeMulheres = 0;

// Crie uma variável, que será responsável por
// armazenar a quantidade de homens (indiferente do estado)
let quantidadeHomens = 0;

// Variavel que armazena todas cidades de alunos
let cidades = [];

// Esse código será responsável por fazer uma iteração por todos alunos do banco de dados
alunos.forEach((aluno) => {
  // Verifique se é de SP, se sim, incremente a variável adequada
  if (aluno.state === 'SP') {
    // Todo mundo que chegar aqui dentro, é do estado de SP
    quantidadeDeAlunosDeSp++;

    if (aluno.city === 'Santo André') {
      quantidadeDeAlunosDaCidadeSantoAndre++;
    }
  }

  // Verifique se é uma mulher, se sim, incremente a variável adequada)
  if (aluno.gender === 'Feminino') {
    quantidadeMulheres++;
  } else {
    // Caso não seja uma mulher, incremente a variável adequada (homens)
    quantidadeHomens++;
  }

  // Adiciono dentro do array cidades, a cidade de cada um dos alunos
  cidades.push(aluno.city);
});

console.log(`Quantidade de alunos do estado de SP: ${quantidadeDeAlunosDeSp}`);
console.log(
  `Quantidade de alunos de Santo André: ${quantidadeDeAlunosDaCidadeSantoAndre}`
);

console.log(`Quantidade de mulheres: ${quantidadeMulheres}`);
console.log(`Quantidade de homens: ${quantidadeHomens}`);

console.log(cidades);

// Crie uma função para calcular o percentual de dois valores

// Use a função interior para calcular percentual de homens e mulheres, e o console.log para dar output no resultado.
