import alunos from './dados/alunos.json';

/** 
alunos.forEach((aluno) => {
  if (aluno.course_id === 10) {
    console.log(aluno);
  }
});
**/

//console.log(validaCursoGourmet('Chef Mix'));
//console.log(validaCursoGourmet('Cozinheiro Profissional'));

function validarSeEFeminino(genero) {
  if (genero === 'Feminino') {
    return true;
  } else {
    return false;
  }
}

function validarSeEDoRj(cidade) {
  if (cidade === 'Rio de Janeiro') {
    return true;
  }

  return false;
}

let quantidadeDeAlunosDoRj = 0;

alunos.forEach((aluno) => {
  if (validarSeEDoRj(aluno.city) && validarSeEFeminino(aluno.gender)) {
    quantidadeDeAlunosDoRj++;
  }
});

console.log(quantidadeDeAlunosDoRj);
