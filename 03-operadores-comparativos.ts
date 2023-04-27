const idadeAluno = 100;

// ==   : ele valida indiferente do tipo
// ===  : ele valida considerando o tipo de dado
if (idadeAluno === 17) {
  console.log('(0) Sim é igual 17.');
}

// != : não compara o tipo de dado
// !== : compara o tipo de dado
if (idadeAluno !== 17) {
  console.log('(1) Sim é diferente.');
}

// Exemplo: 18, 19, 20 ....
if (idadeAluno > 17) {
  console.log('(2) Aluno é maior de idade');
}

// Exemplo: 18, 19, 20...
if (idadeAluno >= 18) {
  console.log('(3) Aluno é maior de idade');
}

// Exemplo: 17, 16, 15, 14 .... -1, -2
if (idadeAluno < 18) {
  console.log('(4) Aluno é menor de idade');
}

// Exemplo: 17, 16, 15, 14 .... -1
if (idadeAluno <= 17) {
  console.log('(5) Aluno é menor de idade');
}

// if é a palavra chave para escrever uma condição em javascript/typescript
// dentro dos parenteses () são escritas as condições
// e o resultado positivo é dado dentro das chaves {}
