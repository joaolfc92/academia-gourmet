// Exemplos utilizando operador lógico AND ( && )
const salarioAluno = 1000;

if (salarioAluno < 2000) {
  console.log('O aluno ganha menos de R$ 2.000,00');
}

if (salarioAluno >= 2000 && salarioAluno < 3000) {
  console.log(
    'O aluno ganha mais ou igual a R$ 2.000,00 e menos de R$ 3.000,00'
  );
}

if ((salarioAluno >= 3000 && salarioAluno < 5000) || salarioAluno === 1000) {
  console.log(
    'O aluno ganha mais ou igual a R$ 3.000,00 e menos de R$ 5.000,00'
  );
}

// Curso do aluno no Instituto Gourmet
const cursoAluno = 'Cozinheiro Profissional';
const cursoValor = 5200;

if (
  (cursoAluno === 'Confeiteiro Profissional' ||
    cursoAluno === 'Confeiteira Profissional' ||
    cursoAluno === 'Cake Designer' ||
    cursoAluno === 'Faça e venda' ||
    cursoAluno === 'Doceiro Profissional') &&
  cursoValor >= 4000
) {
  console.log('É um curso que envolve confeitaria');
}

const brasilGanhouOntem = true;

if (!brasilGanhouOntem) {
  console.log('Brasil perdeu ontem!');
}

if (brasilGanhouOntem) {
  console.log('Brasil ganhou ontem!');
}
