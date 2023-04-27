const faturamento = 79899;
const consultores = 3;

// Soma
const faturamentoComercial = 5000;
const faturamentoParcelas = 90290.99;

const faturamentoGeral = faturamentoComercial + faturamentoParcelas;
console.log(`Faturamento geral é: ${faturamentoGeral}`);

// Usar o operador '+' para concatenar textos
const nomeAluno = 'William';
const sobrenomeAluno = 'Castro';
const nomeCompletoDoAluno = nomeAluno + ' ' + sobrenomeAluno;

console.log(nomeCompletoDoAluno);

// Divisão
const metaConsultor = faturamento / consultores;

console.log(`Meta individual dos consultores é: ${metaConsultor}`);

// Incremento
// Pode ser feito de maneira ágil utilizando o helper: variavel++
let precoMatricula = 150;
precoMatricula = precoMatricula + 1.05;
precoMatricula++; // sempre é 1 (número inteiro)
console.log(precoMatricula);

// Decremento
// Pode ser feito de maneira ágil utilizando o helper: variavel--
let valorParcela = 400;
valorParcela = valorParcela - 50; // subtrai 50
valorParcela--; // decrementar 1 (número inteiro)

console.log(valorParcela);
